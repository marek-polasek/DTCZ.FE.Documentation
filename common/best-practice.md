# Best Practice
Abychom zachovali lepší čitelnost a přehlednost kódu.

## Typ pole pomocí `Array<>`
**Správně**
```ts
const pets: Array<string> = ["kočka", "pes"];
```
**Špatně**
```ts
const pets: string[] = ["kočka", "pes"];
```

## Direktivy `v-for` a `v-if, v-else a v-else-if` používáme vždy v `<template>`
**Správně**
```vue
<template>
  <template v-if="props.showItem">
    <div>Ahoj</div>
  </template>
  
  <template v-for="item in props.items">
    <div>{{item.name}}</div>
  </template>
</template>
```
**Špatně**
```vue
<template>
  <div v-if="props.showItem">Ahoj</div>
  <div v-for="item in props.items">{{item.name}}</div>
</template>
```
