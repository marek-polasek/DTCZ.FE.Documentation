---
outline: deep
---

# Instalace
```
npm i @npm-tee/form-elements
```

## Styly
Je nutné importovat styly a to buď v js
```js
import "@npm-tee/form-elements/style.css";
```
nebo jako styly v css
```css
@import url("@npm-tee/form-elements/style.css");
```

# FormButton - tlačítko

```vue
<style>
    import {FormButton} from "@npm-tee/form-elements";
</style>
<template>
    <FormButton>Tlačítko</FormButton>
</template>
```
## Slots

## Props

| Prop       | Definice                                  | Výchozí     | Popis                                                                                                                                  |
|------------|-------------------------------------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------|
| `as`       | `"button" \| "anchor" \| "div" \| "span"` | `"button"`  | Nepovinná položka určující typ html elementu tlačítka                                                                                  |
| `href`     | `string`                                  | `""`        | Nepovinná položka, která slouží jako hodnota `href` pouze pokud je `props.as` nastaven na hodnotu `anchor`                             |
| `type`     | `"button" \| "submit" \| "reset"`         | `undefined` | Nepovinná položka, která říká jakou hodnotu bude mít html atribut `type`. Vypisuje se pouze pokud je `props.as` nastaven jako `button` |
| `disabled` | `boolean`                                 | `false`     | Nastaví styly tlačítka pro neaktivní variantu. V případě `props.as === "anchor"` nevypíše do odkazu `props.href`                       |
| `loading`  | `boolean`                                 | `false`     | Pokud je `true` tak vykreslí `slot.loading` a skryje `slot.suffix`                                                                     |

::: info Seznam všech proměnných pro zkopírování
```css
--button-primary-default-background: theme(colors.blue.950);
    --button-primary-default-text: theme(colors.white);
    --button-primary-default-border: theme(colors.blue.950);
    --button-primary-hover-background: theme(colors.blue.700);
    --button-primary-hover-text: theme(colors.white);
    --button-primary-hover-border: theme(colors.blue.700);

    --button-white-default-background: theme(colors.white);
    --button-white-default-text: theme(colors.blue.950);
    --button-white-default-border: theme(colors.white);
    --button-white-hover-background: theme(colors.blue.700);
    --button-white-hover-text: theme(colors.white);
    --button-white-hover-border: theme(colors.blue.700);

    --button-disabled-default-background: theme(colors.neutral.100);
    --button-disabled-default-text: theme(colors.neutral.400);
    --button-disabled-default-border: theme(colors.neutral.100);
    --button-disabled-hover-background: theme(colors.neutral.100);
    --button-disabled-hover-text: theme(colors.neutral.400);
    --button-disabled-hover-border: theme(colors.neutral.100);

    --button-pagination-default-background: var(--button-primary-default-background);
    --button-pagination-default-text: var(--button-primary-default-text);
    --button-pagination-default-border: var(--button-primary-default-border);
    --button-pagination-hover-background: var(--button-primary-hover-background);
    --button-pagination-hover-text: var(--button-primary-hover-text);
    --button-pagination-hover-border: var(--button-primary-hover-border);

    --button-cta-default-background: theme(colors.yellow.500);
    --button-cta-default-text: theme(colors.blue.950);
    --button-cta-default-border: theme(colors.yellow.500);
    --button-cta-hover-background: theme(colors.yellow.300);
    --button-cta-hover-text: theme(colors.blue.950);
    --button-cta-hover-border: theme(colors.yellow.300);

    --button-forFilter-default-background: var(--button-primary-default-background);
    --button-forFilter-default-text: var(--button-primary-default-text);
    --button-forFilter-default-border: var(--button-primary-default-border);
    --button-forFilter-hover-background: var(--button-primary-hover-background);
    --button-forFilter-hover-text: var(--button-primary-hover-text);
    --button-forFilter-hover-border: var(--button-primary-hover-border);

    --button-newsletter-default-background: var(--button-cta-default-background);
    --button-newsletter-default-text: var(--button-cta-default-text);
    --button-newsletter-default-border: var(--button-cta-default-border);
    --button-newsletter-hover-background: var(--button-cta-hover-background);
    --button-newsletter-hover-text: var(--button-cta-hover-text);
    --button-newsletter-hover-border: var(--button-cta-hover-border);

    --button-primaryOutline-default-background: theme(colors.transparent);
    --button-primaryOutline-default-text: var(--button-primary-default-text);
    --button-primaryOutline-default-border: var(--button-primary-default-border);
    --button-primaryOutline-hover-background: theme(colors.transparent);
    --button-primaryOutline-hover-text: var(--button-primary-hover-text);
    --button-primaryOutline-hover-border: var(--button-primary-hover-border);

    --button-secondary-default-background: var(--button-cta-default-background);
    --button-secondary-default-text: var(--button-cta-default-text);
    --button-secondary-default-border: var(--button-cta-default-border);
    --button-secondary-hover-background: var(--button-cta-hover-background);
    --button-secondary-hover-text: var(--button-cta-hover-text);
    --button-secondary-hover-border: var(--button-cta-hover-border);

    --button-shadowed-default-background: theme(colors.white);
    --button-shadowed-default-text: var(--button-primary-default-text);
    --button-shadowed-default-border: theme(colors.white);
    --button-shadowed-hover-background: var(--button-primary-default-background);
    --button-shadowed-hover-text: theme(colors.white);
    --button-shadowed-hover-border: var(--button-primary-default-border);

    --button-whiteOutline-default-background: theme(colors.transparent);
    --button-whiteOutline-default-text: theme(colors.white);
    --button-whiteOutline-default-border: theme(colors.white);
    --button-whiteOutline-hover-background: theme(colors.white);
    --button-whiteOutline-hover-text: theme(colors.blue.950);
    --button-whiteOutline-hover-border: theme(colors.white);
```
:::