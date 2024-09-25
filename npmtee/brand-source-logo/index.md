---
outline: deep
---
# Brand source logo

## Instalace
```
npm i @npm-tee/brand-source-logo
```

## K čemu je balíček?
Na základě identifikátoru dataSource vykreslí potřebné logo.

## Použití
Komponenta po načtení zavolá endpoint, který vrátí json objekt s páry dataSourceId a url obrázku. Po úspěšném provolání vrácená data uloží do session storage. Pokud jsou již data v session storage, endpoint se nevolá a data se berou ze session storage.

### Nastavení url pro endpoint
Pro nastavení enpointu, který bude komponenta provolávat slouží fce `brandSourceLogoSetSourceUrl(url: string): void`.
```js
if (import.meta.env.DEV) {
    brandSourceLogoSetSourceUrl(`${import.meta.env.VITE_AJAX_MOCK_ENDPOINT}/api/global/getdatasourceiconsetting`);
}
```

Není-li url nastavena volá se výchozí url `/api/global/getdatasourceiconsetting`

### Použití komponenty
```vue
<script setup lang="ts">
    import {BrandSourceLogo} from "@npm-tee/brand-source-logo";

</script>

<template>
    <BrandSourceLogo :brand-logo-source="1" class="w-full h-4" />    
</template>
```

### Props

| Prop                     | Definice                           | Výchozí     | Popis                                                                                                                                      |
|--------------------------|------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `brandLogoSource`       | `number`                           | `undefined` | id dataSource, pro který chceme logo. Nepovinný parametr. Pokud není uvedený, nebo se v endpoinut dané ID nenajde, tak se logo nevykreslí. |


