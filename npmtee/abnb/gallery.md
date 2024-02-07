# Gallery
Komponenty pro galerie `@npm-tee/abnb`

## Instalace
```
npm i @npm-tee/abnb
```

## Použití
K dispozici máme tři komponenty pro galerii `AbnbGalleryInline`, `AbnbGalleryGrid` a `AbnbGalleryMobile`.

::: info
Galerie injectuje proměnnou `contentPadding`. Ze které se v případě mobilního zobrazení nastaví záporné marginy. Viz [grafický návrh](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3730-5589&mode=design&t=q2uArQjhf6UXDx8U-4) např. v popup okně

**Definice**
```ts
const parentPadding = inject<Ref<{
    left: string;
    right: string;
}> | undefined>("contentPadding", undefined);
```
:::

### Galerie pro řádkový výpis `AbnbGalleryInline`
Definice v [grafickém manuálu](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=4302-889&mode=design&t=q2uArQjhf6UXDx8U-4).

![galerie inline](./gallery-inline.png)

```vue
<script setup lang="ts">
    import { ref } from "vue";
    import {AbnbGalleryInline} from "@npm-tee/abnb";

    type Image = {
        src: string;
        alt: string;
        description?: string;
    }

    const images = ref<Array<Image>>([{
        src: "./image01.jpeg",
        alt: "",
    }])

</script>
<template>
    <AbnbGalleryInline :images="images" />
</template>
```

### Galerie pro gridový výpis `AbnbGalleryGrid`
Definice v [grafickém manuálu](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3557-3306&mode=design&t=fxKOwUeSLxvEfE6k-4).

![galerie grid](./gallery-grid.png)

```vue

<script setup lang="ts">
    import {computed, ref} from "vue";
    import {AbnbGalleryGrid} from "@npm-tee/abnb";

    type Image = {
        src: string;
        alt: string;
        description?: string;
    }

    const images = ref<Array<Image>>([{
        src: "./image01.jpeg",
        alt: "",
    }])

    const buttonText = computed(() => {
        return `Zobrazit ${images.value.length} fotek`;
    })
</script>
<template>
    <AbnbGalleryGrid :images="images" :grid-button-text="buttonText"/>
</template>
```

### Galerie pro mobilní výpis `AbnbGalleryMobile`
::: info
Všechny varianty galerií se automaticky přepnou do mobilního zobrazení, pokud jsou k tomu donuceny šířkou elementu `400px`, ve kterém se nacházejí.
:::

Definice v grafickém manuálu [desktop verze](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3729-4311&mode=design&t=fxKOwUeSLxvEfE6k-4) a [mobilní verz](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3730-4956&mode=design&t=fxKOwUeSLxvEfE6k-4) bez šipek.

| Desktop | Mobilní |
|---------|---------|
|![galerie mobile desktop](./gallery-mobile-desktop.png) |![galerie mobile](./gallery-mobile.png) |


```vue
<script setup lang="ts">
    import { ref } from "vue";
    import {AbnbGalleryMobile} from "@npm-tee/abnb";

    type Image = {
        src: string;
        alt: string;
        description?: string;
    }
    
    const images = ref<Array<Image>>([{
        src: "./image01.jpeg",
        alt: "",
        description: "Kočička s klubíčkem"
    }])
</script>
<template>
    <AbnbGalleryMobile :images="images" />
</template>
```
## Props

| Prop               | Definice                                                   | Výchozí         | Popis                                                                                                                               |
|--------------------|------------------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `images`           | `Array<{src: string; alt: string; description?: string;}>` |            | Určuje nastavení tailwind class pro **font-weight**, **line-height** a **font-size**                                                |
| `grid-button-text` | `string`                                                   | `""` | Pouze pro `AbnbGalleryGrid`, není-li definováno, nebo je prázdný řetězec, obecné tlačítko pro otevření detailu galerie se nezobrazí |

