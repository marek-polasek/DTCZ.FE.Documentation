# Vytvoření NPM balíčku
Nový NPMTEE balíček vytvoříme jednoduše pomocí "vytvářecího balíčku".

## Příprava

Ve složce, kde se bude skript spouštět musí být soubor `.npmrc` s títmto obsahem.

```
@npm-tee:registry=https://pkgs.dev.azure.com/DTCZ/_packaging/NPM-TEE/npm/registry/
always-auth=true
```

## Spuštění
Balíček ve složce spustíme příkazem `npx @npm-tee/creator` dále se řídíme pokyny na obrazovce.