# Url convertor

## Instalace
```
npm i @npm-tee/url
```

## K čemu je balíček?
Balíček konvertuje queryString atributy na čitelný objekt a zpět na url.

## Použití
### Objekt z URL:
```js
const url = new UrlConvertor('https://www.fischer.cz/path/file.ext?tt=1&dd=2023-01-01&rd=2023-02-02')
const result = url.getUrlObject();
```
### výsledek:
```json
{
    transportType: [1],
    date: {
        from: '2023-01-01',
        to: '2023-02-02'
    }
}
```

## Testy
Balíček je z velké části pokrytý testy, na základě testů se dá odvodit zamýšlené chování.
Před každým commitem by se měl developper ujistit, že testy procházejí a nerozbije funkcionalitu.
```
npm run test
```
