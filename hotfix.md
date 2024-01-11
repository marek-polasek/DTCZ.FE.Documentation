# Hotfix na produkci

## Informace:
- v jiře je BUG. Chyba, která je nalezena na produkci
- v jiře by mělo být napsaný build-info
- pokud není build-info musíme se podívat na produkci, jaké je tam build-info

## Postup řešení:
- přepnu se na hotfix větev
- najdu si z jakého commitu má hotfix vycházet (reset current branch here, hard reset)
- `npm i` je třeba nainstalovat balíčky, protože můžou být jiné verze
- udělát opravu v bugu dle jira zadání
- `push force` musíme commitnout změny s příznakem force
- mergnout větev *hotfix* do *master* i *dev*

## Informovat team 
- více lidí nesmí zároveň dělat hotfix, další hotfix musí vycházet z minulého hotfixu.