---
outline: deep
---

# Gallery
Komponenty pro galerie `@npm-tee/abnb`

## Instalace
```
npm i @npm-tee/abnb
```

## Styly
Je nutné importovat styly a to buď v js
```js
import "@npm-tee/abnb/style.css";
```
nebo jako styly v css
```css
@import url("@npm-tee/abnb/style.css");
```

## Použití
K dispozici máme tři komponenty pro galerii `AbnbGalleryInline`, `AbnbGalleryGrid` a `AbnbGallerySingle`.

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

### `AbnbGalleryInline` galerie pro řádkový výpis 
Definice v [grafickém manuálu](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=4302-889&mode=design&t=q2uArQjhf6UXDx8U-4).

![galerie inline](./gallery-inline.png)

```vue
<script setup lang="ts">
    import { ref } from "vue";
    import { AbnbGalleryInline, TypeGalleryMedia } from "@npm-tee/abnb";

    type TypeGalleryImageSourceName = "small" | "medium" | "large";

    type TypeGalleryImage = {
      alt: string;
      description?: string;
      source: Record<TypeGalleryImageSourceName, string>;
      type?: "image";
    };

    type TypeGalleryVideo = {
      alt: string;
      description?: string;
      source: string;
      type: "video";
    };

    type TypeGalleryMedia = Array<TypeGalleryImage | TypeGalleryVideo>;

    const media = ref<TypeGalleryMedia>([
        {
            source: {
            small: "./imageSmall.jpeg",
            medium: "./imageMedium.jpeg",
            large: "./imageLarge.jpeg"
            },
            alt: "",
            description: "Kočička s klubíčkem"
        },
            source: "https://www.youtube.com/embed/IgaysOQ0KFo?si=fmGh0C-85xlZGYHE",
            alt: "Video z prezentace 2024",
            description: ""
        }
    ])
</script>
<template>
    <AbnbGalleryInline :media="media" />
</template>
```

### `AbnbGalleryGrid` galerie pro gridový výpis 
Definice v [grafickém manuálu](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3557-3306&mode=design&t=fxKOwUeSLxvEfE6k-4).

![galerie grid](./gallery-grid.png)

```vue

<script setup lang="ts">
    import {computed, ref} from "vue";
    import { AbnbGalleryGrid, TypeGalleryMedia } from "@npm-tee/abnb";

    type TypeGalleryImageSourceName = "small" | "medium" | "large";

    type TypeGalleryImage = {
      alt: string;
      description?: string;
      source: Record<TypeGalleryImageSourceName, string>;
      type?: "image";
    };

    type TypeGalleryVideo = {
      alt: string;
      description?: string;
      source: string;
      type: "video";
    };

    type TypeGalleryMedia = Array<TypeGalleryImage | TypeGalleryVideo>;

    const media = ref<TypeGalleryMedia>([
        {
            source: {
                small: "./imageSmall.jpeg",
                medium: "./imageMedium.jpeg",
                large: "./imageLarge.jpeg"
            },
            alt: "",
            description: "Kočička s klubíčkem"
        },
            source: "https://www.youtube.com/embed/IgaysOQ0KFo?si=fmGh0C-85xlZGYHE",
            alt: "Video z prezentace 2024",
            description: ""
        }
    ])
</script>
<template>
    <AbnbGalleryGrid :media="media" :grid-button-text="buttonText"/>
</template>
```

### `AbnbGallerySingle` galerie pro výpis jedné fotky 
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
    import { AbnbGallerySingle, TypeGalleryMedia } from "@npm-tee/abnb";

    type TypeGalleryImageSourceName = "small" | "medium" | "large";

    type TypeGalleryImage = {
      alt: string;
      description?: string;
      source: Record<TypeGalleryImageSourceName, string>;
      type?: "image";
    };

    type TypeGalleryVideo = {
      alt: string;
      description?: string;
      source: string;
      type: "video";
    };

    type TypeGalleryMedia = Array<TypeGalleryImage | TypeGalleryVideo>;

    const media = ref<TypeGalleryMedia>([
        {
            source: {
                small: "./imageSmall.jpeg",
                medium: "./imageMedium.jpeg",
                large: "./imageLarge.jpeg"
            },
            alt: "",
            description: "Kočička s klubíčkem"
        },
            source: "https://www.youtube.com/embed/IgaysOQ0KFo?si=fmGh0C-85xlZGYHE",
            alt: "Video z prezentace 2024",
            description: ""
        }
    ])
</script>
<template>
    <AbnbGallerySingle :media="media" />
</template>
```
## Props

| Prop                            | Definice                                                                                                                                                                        | Výchozí | Popis                                                                                                                               |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------------------------------------------------------------------------|
| `media`                         | `Array<{source: { small: string; medium: string; large: string; }, alt: string; description?: string;} I {alt: string; description?: string; source: string; type: "video"; }>` |            | Seznam obrázku a videí, které se mají v galerii zobrazovat                                                                          |
| `grid-button-text`              | `string`                                                                                                                                                                        | `""`  | Pouze pro `AbnbGalleryGrid`, není-li definováno, nebo je prázdný řetězec, obecné tlačítko pro otevření detailu galerie se nezobrazí |
| `mobile-resolution-till-pixels` | `number`                                                                                                                                                                        | `400` | Určuje od jaké šířky v pixelech obalového se galerie přepne na mobilní zobrazení                                                    |

### Source
Kde se používají jednotlivé velikosti fotek

#### small
pouze pro zobrazení typu `AbnbGalleryInline`

#### medium
1. pro mobilní zobrazení fotogalerie
2. pro zobrazení typu `AbnbGalleryGrid`
3. pro rozkliku galerie, kde se fotky vypíšou v samotném okně v gridu pod sebou

#### large
1. pokud galerie není v mobilním zobrazení a je typu `AbnbGallerySingle`
2. při zobrazení detailu fotky (a to i pro mobilní zobrazení) viz [grafika ve figmě](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=3705-3303&mode=design&t=r98BNh2clxDBgDPF-4)
## Proměnné pro styly

::: info Seznam všech proměnných pro zkopírování
```css
--abnbGalleryDetail-maxWidth: 640px;
--abnbGalleryGrid-buttonDefaultColorText: hsla(213, 100%, 23%, 1);
--abnbGalleryGrid-buttonDefaultColorBackground: theme("colors.white");
--abnbGalleryGrid-buttonHoverColorText: theme("colors.white");
--abnbGalleryGrid-buttonHoverColorBackground: hsla(209, 100%, 42%, 1);
--abnbGalleryGrid-buttonBorderRadius: theme("borderRadius.md");
--abnbGallery-imageRadius: theme("borderRadius.lg");
--abnbGallery-counterRadius: theme("borderRadius.lg");
```
:::

### `--abnbGallery-imageRadius`
| Výchozí hodnota           | Popis                                                                   |
|---------------------------|-------------------------------------------------------------------------|
| theme("borderRadius.lg")  | Velikost zaoblení rohů gallerie, nebo obrázků v galerii                 |

![](./abnbGallery-imageRadius-inline.png)

![](./abnbGallery-imageRadius-grid.png)

### `--abnbGallery-counterRadius`
| Výchozí hodnota           | Popis                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------------|
| theme("borderRadius.lg")  | Velikost zaoblení rohů pro mobilní ukazatel zobrazeného obrázku a celkového počtu fotek |

![](./abnbGallery-counterRadius.png)

### `--abnbGalleryDetail-maxWidth`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| 640px  | Maximální šířka obsahu pro výpis fotek v celkovém přehledovém výpisu fotek |

![](./abnbGalleryDetail-maxWidth.png)

### `--abnbGalleryGrid-buttonDefaultColorText`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| hsla(213, 100%, 23%, 1)  | Barva textu pro tlačítko v `AbnbGalleryGrid` |

![](./abnbGalleryGrid-button.png)

### `--abnbGalleryGrid-buttonDefaultColorBackground`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| theme("colors.white")  | Barva pozadí pro tlačítko v `AbnbGalleryGrid` |

### `--abnbGalleryGrid-buttonHoverColorText`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| theme("colors.white")  | Barva textu pro tlačítko v `AbnbGalleryGrid` při hover stavu |

### `--abnbGalleryGrid-buttonHoverColorBackground`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| hsla(209, 100%, 42%, 1)   | Barva pozadí pro tlačítko v `AbnbGalleryGrid` při hover stavu |

### `--abnbGalleryGrid-buttonBorderRadius`
| Výchozí hodnota           | Popis                                                                      |
|---------------------------|----------------------------------------------------------------------------|
| theme("borderRadius.md")   | Velikost zaoblení rohů pro tlačítko v `AbnbGalleryGrid` |

![](./abnbGalleryGrid-buttonBorderRadius.png)
