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
Pro namountování vue aplikace `SuperVueApp.vue`, které do props předáme nějaké data a zároveň je možné v aplikaci používat Pinii.

**Kód v html, kam se vue aplikace namountuje**
```html
<!-- index.html -->
<div data-component-name="superVueApp">
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

