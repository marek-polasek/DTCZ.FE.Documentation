---
outline: deep
---

# Instalace
```
bun i @npm-tee/components

Nastavení globalního jazyka v projektu. Např. na Webu v storeLocale.ts.
* Není potřeba pro CustomLang funkci/komponentu

import { teeSetLanguage } from "@npm-tee/components";
teeSetLanguage(lang);
```
##

# Format date time
Návratová hodnota – dateTimeParts

- Komponenta - v-slot="{ dateTimeParts }"
- Funkce - const dateFormattedParts = teeFormatDateTime(dateTime);
&nbsp;

| Klíč                             | Typ      | Popis                                               |
| -------------------------------- | -------- | --------------------------------------------------- |
| `dateWithYear`                   | `string` | Např. `"7. 5. 2025"`                                |
| `dateWithoutYear`                | `string` | Např. `"7. 5."`                                     |
| `dateWithYearTimeWithoutSeconds` | `string` | Např. `"7. 5. 2025, 16:25"`                         |
| `weekDayNameShort`               | `string` | Např. `"st"` (záleží na jazyku, zkrácený název dne) |
| `timeWithoutSeconds`             | `string` | Např. `"16:25"`                                     |
##


# Komponenty
## TeeFormatDateTime
Komponenta, která formátuje datum na základě globálně nastaveného jazyka

```vue
<template>
  <TeeFormatDateTime :date-time="dateTime" v-slot="{ dateTimeParts }">
    {{ dateTimeParts.dateWithYear }}
  </TeeFormatDateTime>
</template>
```

**Props**

| Prop        | Definice    | Výchozí | Popis                                                     |
|-------------|-------------|---------|-----------------------------------------------------------|
| `dateTime`  | `"string`   | ---     | Datum ve formátu ISO (např. "2025-05-07T18:25:00+02:00")  |

## TeeFormatDateTimeCustomLang
Umožňuje specifikovat jazyk ručně pomocí ***props.language***

```vue
<template>
  <TeeFormatDateTimeCustomLang :date-time="dateTime" language="cs" v-slot="{ dateTimeParts }">
    {{ dateTimeParts.dateWithYear }}
  </TeeFormatDateTimeCustomLang>
</template>
```

**Props**

| Prop        | Definice    | Výchozí | Popis                                                    |
|-------------|-------------|---------|----------------------------------------------------------|
| `dateTime`  | `"string`   | ---     | Datum ve formátu ISO (např. "2025-05-07T18:25:00+02:00") |
| `language`  | `"string`   | ---     | Např. "cs", "en", "de" — použije se pro lokalizaci       |

&nbsp;

# Funkce

## teeFormatDateTime
Funkce, která formátuje datum na základě globálně nastaveného jazyka

```vue
<script>
  const dateFormattedParts = teeFormatDateTime(dateTime);
</script>

<template>
  {{ dateFormattedParts.dateWithYear }} ({{ dateFormattedParts.weekDayNameShort }} {{ dateFormattedParts.timeWithoutSeconds }})
  <!-- Výsledek - 7. 5. 2025 (st 16:25)  -->
</template>
```
&nbsp;

**Parametry**

| Parametr    | Definice    | Výchozí | Popis                                                      |
|-------------|-------------|---------|------------------------------------------------------------|
| `dateTime`  | `"string`   | ---     | Datum ve formátu ISO (např. "2025-05-07T18:25:00+02:00")   |


## teeFormatDateTimeCustomLang
Umožňuje specifikovat jazyk ručně pomocí parametru ***language***

```vue
<script>
  const dateFormattedCustomLangParts = teeFormatDateTimeCustomLang(
      () => dateTime,
      () => customLang,
  );
</script>

<template>
  {{ dateFormattedParts.dateWithYear }} ({{ dateFormattedParts.weekDayNameShort }} {{ dateFormattedParts.timeWithoutSeconds }})
  <!-- Výsledek - 7. 5. 2025 (st 16:25)  -->
</template>
```
&nbsp;

**Parametry**

| Parametr    | Definice    | Výchozí | Popis                                                       |
|-------------|-------------|---------|-------------------------------------------------------------|
| `dateTime`  | `"string`   | ---     | Datum ve formátu ISO (např. "2025-05-07T18:25:00+02:00")    |
| `language`  | `"string`   | ---     | Např. "cs", "en", "de" — použije se pro lokalizaci          |
