---
outline: deep
---
# Vue app mounter
Balíček sloužící k snadnému mountování VUE aplikací (komponent) na jednotlivé html elementy.

## Instalace
```
npm i @npm-tee/vue-app-mounter
```

## Použití
Pro namountování vue aplikace `SuperVueApp.vue`, které do props předáme nějaké data a zároveň je možné v aplikaci používat Pinii. Je nutné aby v html byl element s data atributem `data-component-name` jehož název je shnodý s názvem klíče komponenty v objektu definice komponent `vueAppSettings`.

**Kód v html, kam se vue aplikace namountuje**
```html
<!-- index.html -->
<div data-component-name="superVueApp"> <!-- název klíče komponenty, která se má namountovat -->
    <!-- data v jsonu, která jdou jako props do komponenty SuperVueApp.vue -->
    <script type="application/json">
        {
            "title": "Nadpis",
            "text": "Lorem ipsum dolor sit amet"
        }
    </script>
</div>
```

**Samotná vue aplikace**
```vue
<!-- SuperVueApp.vue -->
<script lang="ts">
    const props = defineProps<{
        title: string;
        text: string;
    }>()
</script>
<template>
    <h1>{{props.title}}</h1>
    <p>{{props.text}}</p>
</template>
<style></style>
```

**Hlavní js soubor**
```ts
// index.ts
import { mountVueApps, VueAppMounterPlugins, VueAppMounterSetting } from "@npm-tee/app-vue-mounter";
import { createPinia } from "pinia";

const pinia = createPinia();
// https://github.com/vuejs/pinia/discussions/971
createApp({}).use(pinia);

const vueAppPlugins: VueAppMounterPlugins = [{
    data: pinia,
}];
const vueAppSettings: VueAppMounterSetting = {
    sync: {}, // seznam komponentami, které se budou načítat synchronně
    async: { // seznam komponent, které se budou načítat asynchronně
        superVueApp: { // stejný název komponenty, jaký se nachází v html atributu "data-component-name"
            loader: () => import("./apps/SuperVueApp.vue")
        }
    }
}

mountVueApps(vueAppSettings, vueAppPlugins);
```

## Definice
### Nastavení pro pluginy k aplikacím (Pinie ap.)
Tohle nastavení říká aplikacím jaké [VUE pluginy](https://vuejs.org/guide/reusability/plugins) je možné používat.

**Struktura**
```ts
Array<{ data: any; option?: any; }>
```
Kde v `data` se nachází plugin a v `option` je nastavení pro daný plugin.

**Příklad použití**
::: code-group
```ts [vueAppPlugins]
import i18nPlugin from './plugins/i18n'

const vueAppPlugins: VueAppMounterPlugins = [{
    data: i18nPlugin,
    option: {
        greetings: {
            hello: 'Bonjour!'
        }
    } 
}];
```
```ts [Zápis bez vue-app-mounter]
import i18nPlugin from './plugins/i18n'

app.use(i18nPlugin, {
    greetings: {
        hello: 'Bonjour!'
    }
})
```
:::

### Nastavení pro jednotlivé aplikace
Nastavení pro samotné aplikace, zda se budou mountovat synchronně, nebo asynchronně.

U každé aplikace můžeme definovat

| Klíč       | Popis                                                                                                               |
|------------|---------------------------------------------------------------------------------------------------------------------|
| `cssClass` | Řetězec s css třídami, které se přidají do atibutu `class` elementu, který má na sobě atribut `data-component-name` |
| `router`   | Metoda vracející pole s routami viz [VUE Router](https://router.vuejs.org/guide/#JavaScript)                        |

**Struktura**
```ts
import { AsyncComponentOptions, Component } from "vue";
import { Router } from "vue-router";

type BaseComponentSetting = {
    cssClass?: string;
    router?: () => Router;
}
type SyncComponentSetting = BaseComponentSetting & {
    component: Component;
}
type AsyncComponentSetting = AsyncComponentOptions & BaseComponentSetting;

type VueAppMounterSetting = {
    sync: Record<string, SyncComponentSetting>;
    async: Record<string, AsyncComponentSetting>;
}
```

#### Synchronní aplikace
Synchronní aplikace jsou vždy ve zbuilděném JS k dispozici.

| Parametr        | Popis                                       |
|-------------|---------------------------------------------|
| `component` | Samotná komponenta, která se má namountovat |

```ts
import SuperVueApp from "./apps/SuperVueApp.vue";
const vueAppSettings: VueAppMounterSetting = {
    sync: {
        superVueApp: {
            component: SuperVueApp
        }
    },
    async: {}
}

```

#### Asynchronní aplikace
Asynchronní aplikace se načítají až když jsou potřeba a jsou vždy zbuilděné do samotného js souboru.

Struktura je, kromě výchozích nepovinných parametrů `cssClass` a `router` shodaná s [VUE definicí](https://vuejs.org/guide/components/async.html#loading-and-error-states) pro asynchronní komponenty

| Parametr           | Popis                                                                                                                                                                 |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `loader`           | Funkce načítající samotnou komponentu pro aplikaci ;)                                                                                                                 |
| `loadingComponent` | Komponenta, která se zobrazí než se načte hlavní komponenta z `loader` metody                                                                                         |
| `delay`            | Zpoždění v milisekundách během inicalizace aplikace a zobrazením načítácí komponenty `loadingComponent`. Tento balíček přetěžuje hodnotu z výchozích `200`ms na `0`ms |
| `errorComponent`   | Komponenta, která se zobrazí pokud se hlavní komponentu nepodaří načíst. Nebo se nepodaří načíst v potřebném čase, který určí klíč `timeout`                          |
| `timeout`          | Čas v milisekundách, během kterého se zkouší načíst hlavní komponenta z `loader` metody                                                                               | 

```ts
const vueAppSettings: VueAppMounterSetting = {
    sync: {},
    async: {
        superVueApp: {
            loader: () => import("./apps/SuperVueApp.vue")
        }
    }
}
```

## Metody pro mountování
Pro mountování můžeme použít dvě metody

| Metoda | Popis                                                                           |
|--------|---------------------------------------------------------------------------------|
|`mountVueApps()`        | Metoda nastaví props aplikace z JSON struktury uvnitř HTML elementu             |
|`mountVueAppsMock()`        | Metoda nastaví props z mockovacího serveru, nepoužívá JSON uvnitř HTML elementu |

**Použití v projektu**, kdy pro produkci, chceme používat json, ale pro vývoj chceme data tahat z mokovacího serveru
```ts
if (import.meta.env.DEV) {
    mountVueAppsMock(vueAppSettings, entryComponentPlugins, import.meta.env.VITE_AJAX_MOCK_ENDPOINT);
} else {
    mountVueApps(vueAppSettings, entryComponentPlugins);
}
```

### mountVueApps
| Parametr         | Popis                          |
|------------------|--------------------------------|
| `vueAppSettings` | Objekt s definicí pro aplikace |
| `vueAppPlugins`  | Objekt s deinicí pro pluginy   |

### mountVueAppsMock

| Parametr         | Popis                                       |
|------------------|---------------------------------------------|
| `vueAppSettings` | Objekt s definicí pro aplikace              |
| `vueAppPlugins`  | Objekt s deinicí pro pluginy                |
| `mockUrl`        | Řetězec s url adresou k mokovacímu serveru. |

#### Url k mokovacímu serveru
Konečná url adresa pro volání mokovacího endpointu se skládá následovně

```
[HODNOTA_MOCK_URL]/_hydratationdata/[NÁZEV_KOMPONENTY]?variant=[KLÍČ_VARIANTY]
```
|                    |                                                                                                                                                                    |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [HODNOTA_MOCK_URL] | Hodnota z parametru `mockUrl` funkce `mountVueAppsMock`                                                                                                            |
| [NÁZEV_KOMPONENTY] | Hodnota z html data atributu `data-component-name` (reálně se bere klíč z definičního objektu, ale tyto hodnoty musí být shodné, jinak se komponenta nenamountuje) |
| [KLÍČ_VARIANTY]    | Hodnota z url, která se bere mezi `index-` a `.html`. Tzn. `index-[KLÍČ_VARIANTY].html` příklad níže                                                               |

**Příklad pro [KLÍČ_VARIANTY]**

Klíč varianty je možné nastavovat per komponentu, nebo globálně pomocí url.

**Nastavení v komponentě**
Pro nastavení varianty v komponentě slouží data atribut **data-mock**
```html
<div data-component-name="nazev-komponenty" data-mock="varianta2"></div>
```

**Nastavení v url**
Pro url `http://www.fischer.cz/neco/jineho/index-step2-verze-1.1.html?p=45`, bude klíč varianty `step2-verze-1.1`

**Priorita**
Pokud není varianta nastavená v komponentě, tak se použije varianta nastavená v url.