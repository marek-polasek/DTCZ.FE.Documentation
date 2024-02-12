# GTM-push

## instalace
```
npm i @npm-tee/gtm-push
```

## Popis
Balíček pro odesílání událostí (GTM push)

## Použití
```ts
import { gtmPush } from "@npm-tee/gtm-push";
gtmPush.eventGiftVoucher("button_pay_click", 'value');
```

## Nové metody push
Nové metody `event[název_eventu]` se musí přidat do GTM balíčku. Ideální se se inspirovat ostatními metodami.

### Struktura nového eventu
```ts
import {event} from "../gtmPush";

type EventData = {
    interaction_type: "ordered" | "button_pay_click";
    voucher_type: string;
};

const eventName = "voucher" as const;

export function eventGiftVoucher(
    interactionType: EventData["interaction_type"],
    voucherType: EventData["voucher_type"],
): void {
    let pushData: EventData = {
        interaction_type: interactionType,
        voucher_type: voucherType
    };
    
    event<EventData>(eventName, pushData)
}
```

## Testy
Balíček je z velké části pokrytý testy. Před každým commitem by se měl developper ujistit, že testy procházejí.
```
npm run test
```