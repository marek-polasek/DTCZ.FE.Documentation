---
prev:
  text: 'ModalDialog (modální okno)'
  link: '/npmtee/modal-dialogs/index'
next: false
outline: deep
---
# Icons

## Instalace
```
npm i @npm-tee/components
```
## Použití
Ikonky mohou být použity jako dynamické ikonky (načte ikonku za běhu aplikace, dle názvu), nebo jako statické (ikonka se zbuildí do kódu, kde je použitá)

### Dynamická ikonka
Pro ikonky, které se mají načítat dynamicky, použijeme komponentu `DynamicIcon` kde `props.name` je název ikonky.

```vue{5,5}
<script setup>
import {TeeDynamicIcon} from "@npm-tee/components";
</script>
<template>
    <TeeDynamicIcon name="[ICON_NAME]" />
</template>
```
Seznam názvů všech dostupných ikon nám vrací proměnná `teeAllIconNames`.

```js
import {teeAllIconNames} from "@npm-tee/components";
```

### Statická ikona
Pro statické ikony použijeme přímo komponentu ikonky

```vue{5,5}
<script setup>
import {TeeIconTick} from "@npm-tee/components";
</script>
<template>
    <TeeIconTick />
</template>
```

## Seznam všech dostupných ikonek


<script setup>
import {teeIconAllIconNames, TeeDynamicIcon} from '@npm-tee/components';
</script>

<div class="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10 mt-4">
    <div v-for="name in teeIconAllIconNames.sort()" class="text-center">
        <TeeDynamicIcon :name="name" class="w-10 h-10 mx-auto" />
        <div class="mt-3">{{name}}</div>
    </div>
</div>
