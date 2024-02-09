---
next:
  text: 'ModalDialog (modální okno)'
  link: '/npmtee/modal-dialogs/index'
outline: deep
---

# AbnbTitle (nadpis)
Komponenta pro nadpisy, která je součástí balíčku `@npm-tee/abnb`

## Instalace
```
npm i @npm-tee/abnb
```

## Použití
```vue {2,5}
<script setup lang="ts">
    import {AbnbTitle} from "@npm-tee/abnb";
</script>
<template>
    <AbnbTitle>Krásný nadpis</AbnbTitle>
</template>
```

### Styl i element h2
```vue
<AbnbTitle>Krásný nadpis</AbnbTitle>
```

### styl i element h1
```vue
<AbnbTitle style-as="h1">Krásný nadpis</AbnbTitle>
```

### Styl h1, ale element div
```vue
<AbnbTitle style-as="h1" element="div">Krásný nadpis</AbnbTitle>
```

## Props

| Prop      | Hodnoty                                           | Výchozí                  | Popis                                                                                        |
|-----------|---------------------------------------------------|--------------------------|----------------------------------------------------------------------------------------------|
| `styleAs` | `h1`, `h2`, `h3`                                  | `h2`                     | Určuje nastavení tailwind class pro **font-weight**, **line-height** a **font-size**        |
| `element` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span` | hodnota z prop `styleAs` | Html element odpovídá nastavené hodnotě. |
## Vzhled
Vzhled je definován [grafickým manuálem](https://www.figma.com/file/mJ2TSNVSOhrJp1vHakNIgB/CK-FISCHER?type=design&node-id=4942-1123&mode=design&t=4EYe2XG5PgCGjyfB-4)

### Desktop
![Nadpisy desktop](./title-desktop.png)

### Mobil
![Nadpisy mobil](./title-mobil.png)

