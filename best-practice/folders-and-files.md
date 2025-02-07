---
outline: deep
---

# Pojmenování souborů a struktura dat
Všechny vue aplikace jsou ve složce `applications` (aktuálně `appRootComponents`).

::: info Co je vue aplikace?
Vue aplikace je vue komponenta, která se mountuje do html stránky. Její umístění definuje backend viz [Vue app mounter](/npmtee/vue-app-mounter)
:::

## Složky
Aplikace má svou složku s názvem aplikace bez prefixu app např. `clientSection`, `anbHotelDetail` (aktuálně `appClientSection`, `appAbnbHotelDetail`)
```text
.
├─ applications
│  ├─ abnbHotelDetail
│  ├─ clientSection
│  ├─ contactUsSection
│  └─ ...
```

## Komponenta aplikace
Prefix `App`

Aplikace se skládá ze tří VUE komponent s prefixem `App` a případným suffixem podle typu [Načítání asynchronních komponent](/npmtee/vue-app-mounter/#asynchronni-aplikace)
```text
.
├─ applications
│  ├─ abnbHotelDetail
│  │  ├─ AppAbnbHotelDetail.vue
│  │  ├─ AppAbnbHotelDetailError.vue
│  │  ├─ AppAbnbHotelDetailLoading.vue
│  │  └─ ...
│  └─ ...
```

### Načítací komponenta
Suffix `Loading`

Zobrazuje se v době, kdy se načítá hlavní komponenta. Generuje se z ní taktéž html pro backend.

### Chybová komponenta
Suffix `Error`

Zobrazuje se v době, kdy z nějakého důvodu hlavní komponenta nemůže být načtena, třeba na serveru chybí daný soubor

### Hlavní komponenta 
Komponenta s hlavní logikou

## Store pro aplikaci
<table>
<tbody>
<tr>
<td>prefix souborů</td>
<td><code>store</code></td>
</tr>
<tr>
<td>složka</td>
<td><code>stores</code></td>
</tr>
</tbody>
</table>

Soubor se storem má prefix `store` a ukladáme ho do složky aplikace, ke které patří
```text{7,8}
.
├─ applications
│  ├─ abnbHotelDetail
│  │  ├─ AppAbnbHotelDetail.vue
│  │  ├─ AppAbnbHotelDetailError.vue
│  │  ├─ AppAbnbHotelDetailLoading.vue
│  │  ├─ storeAbnbHotelDetail.ts
│  │  ├─ storeAbnbHotelDetailInterestingPlaces.ts
│  │  └─ ...
│  └─ ...
```
Pokud je souborů se story nesmyslně hodně a obash složky je již nepřehledný, tak tyto soubory přesuneme do složky `stores`
```text{7}
.
├─ applications
│  ├─ abnbHotelDetail
│  │  ├─ AppAbnbHotelDetail.vue
│  │  ├─ AppAbnbHotelDetailError.vue
│  │  ├─ AppAbnbHotelDetailLoading.vue
│  │  └─ stores
│  │  │  ├─ storeAbnbHotelDetail.ts
│  │  │  ├─ storeAbnbHotelDetailInterestingPlaces.ts
│  │  │  └─ ...
│  │  └─ ...
│  └─ ...
```
## Typy pro aplikaci
Řešíme stejně jako story.

<table>
<tbody>
<tr>
<td>prefix souborů</td>
<td><code>typesFor</code></td>
</tr>
<tr>
<td>složka</td>
<td><code>types</code></td>
</tr>
</tbody>
</table>

## Ednpointy pro aplikaci
Řešíme stejně jako story.
<table>
<tbody>
<tr>
<td>prefix souborů</td>
<td><code>endpoint</code></td>
</tr>
<tr>
<td>složka</td>
<td><code>endpoints</code></td>
</tr>
</tbody>
</table>