# Best Practice
Abychom zachovali lepší čitelnost a přehlednost kódu.

## Typ pole pomocí `Array<>`
:white_check_mark: **Správně**
```ts
const pets: Array<string> = ["kočka", "pes"];
```
:x: **Špatně**
```ts
const pets: string[] = ["kočka", "pes"];
```

## Direktivy `v-for` a `v-if, v-else a v-else-if` používáme vždy v `<template>`
:white_check_mark: **Správně**
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
:x: **Špatně**
```vue
<template>
  <div v-if="props.showItem">Ahoj</div>
  <div v-for="item in props.items">{{item.name}}</div>
</template>
```

## Direktivy, pokud jde zapisujeme zkráceně `v-bind`, `v-on` a `v-slot`
:white_check_mark: **Správně**
```vue
<template>
  <Komponenta
      @click="showPopup"
      :title-color="titleColor"
  >
    <template #title>Ahoj</template>
  </Komponenta>
</template>
```
:x: **Špatně**
```vue

<template>
  <Komponenta
      v-on:click="showPopup"
      v-bind:title-color="titleColor"
  >
    <template v-slot:title>Ahoj</template>
  </Komponenta>
```

## Props komponenty zapisujeme vždy s prefixem `props.`
:white_check_mark: **Správně**
```vue
<script setup lang="ts">
  const props = defineProps<{
      titleColor?: "red" | "blue";
  }>()
  
  const styleClass = computed(() => {
      let toReturn = "";
      switch (props.titleColor) { // [!code highlight]
        case "red":
          toReturn = "red-600";
        break;
        case "blue":
          toReturn = "blue-600";
        break;
      }
      return toReturn;
  })
</script>
<template>
  <p>Barva:
    <span :class="cssClass">
      {{props.titleColor}} // [!code highlight]
    </span>
  </p>
</template>
```
:x: **Špatně**
```vue
<script setup lang="ts">
  const props = defineProps<{
      titleColor?: "red" | "blue";
  }>()
  
  const styleClass = computed(() => {
      let toReturn = "";
      switch (titleColor) { // [!code highlight]
        case "red":
          toReturn = "red-600";
        break;
        case "blue":
          toReturn = "blue-600";
        break;
      }
      return toReturn;
  })
</script>
<template>
  <p>Barva:
    <span :class="cssClass">
      {{titleColor}} // [!code highlight]
    </span>
  </p>
</template>
```

## Nepoužíváme `<component is=""></component>`
:white_check_mark: **Správně**
```vue
<script setup lang="ts">
    import ComponentA from "./ComponentA.vue";
    import ComponentB from "./ComponentB.vue";

    const props = defineProps<{
        useComponent?: "a" | "b";
    }>()
</script>
<template>
    <template v-if="props.useComponent === 'b'">
        <ComponentB></ComponentB>
    </template>
    <template v-else>
        <ComponentA></ComponentA>
    </template>
</template>
```
:x: **Špatně**

```vue

<script setup lang="ts">
    import ComponentA from "./ComponentA.vue";
    import ComponentB from "./ComponentB.vue";
    import {withDefaults} from "./vue";

    const components = {
        "a": ComponentA,
        "b": ComponentB,
    };

    const props = withDefaults(defineProps<{
        useComponent?: keyof typeof components;
    }>(), {
        useComponent: "a"
    })

    const componentToUse = computed(() => {
        return components[props.useComponent];
    })
</script>
<template>
    <component :is="componenToUse"></component>
</template>
```