---
prev:
  text: 'ModalDialog (modální okno)'
  link: '/npmtee/modal-dialogs/index'
next: false
---

# Instalace
```
npm i @npm-tee/icons
```
## Použití
Ikonky mohou být použity jako dynamické ikonky (načte ikonku za běhu aplikace, dle názvu), nebo jako statické (ikonka se zbuildí do kódu, kde je použitá)

### Dynamická ikonka
Pro ikonky, které se mají načítat dynamicky, použijeme komponentu `DynamicIcon` kde `props.name` je název ikonky.

```vue{5,5}
<script setup>
import {DynamicIcon} from "@npm-tee/icons";
</script>
<template>
    <DynamicIcon name="[ICON_NAME]" />
</template>
```
Seznam názvů všech dostupných ikon nám vrací proměnná `allIconNames`.

```js
import {allIconNames} from "@npm-tee/icons";
```

### Statická ikona
Pro statické ikony použijeme přímo komponentu ikonky

```vue{5,5}
<script setup>
import {IconTick} from "@npm-tee/icons";
</script>
<template>
    <IconTick />
</template>
```

## Seznam všech dostupných ikonek

<script setup>
import {allIconNames, DynamicIcon} from '@npm-tee/icons';
</script>

<div class="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10 mt-4">
    <div v-for="name in allIconNames" class="text-center">
        <DynamicIcon :name="name" class="w-10 h-10 mx-auto" />
        <div class="mt-3">{{name}}</div>
    </div>
</div>
# Seznam ikonek
