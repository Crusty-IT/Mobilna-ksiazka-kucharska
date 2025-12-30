# Mobilna Książka Kucharska

Aplikacja mobilna (PWA) będąca pomocnikiem kuchennym, ułatwiająca gotowanie poprzez dostarczanie przepisów, instrukcji przygotowania składników oraz wbudowany minutnik.

## Spis treści
- [Opis aplikacji](#opis-aplikacji)
- [Wymagania systemowe](#wymagania-systemowe)
- [Instrukcja instalacji i uruchomienia](#instrukcja-instalacji-i-uruchomienia)
- [Struktura projektu](#struktura-projektu)
- [Dokumentacja dodatkowa](#dokumentacja-dodatkowa)

## Opis aplikacji
Mobilna Książka Kucharska to narzędzie stworzone z myślą o użytkownikach szukających szybkich informacji o czasie gotowania warzyw, kasz, makaronów oraz dostępu do bazy przepisów. Aplikacja oferuje:
- Przeglądanie instrukcji gotowania konkretnych produktów.
- Bazę przepisów kulinarnych.
- Interaktywny minutnik kuchenny.
- System autoryzacji użytkowników (Firebase).

Umożliwia również działanie w trybie offline dzięki technologii PWA.

## Wymagania systemowe
- **Node.js**: wersja 12.x lub nowsza (zalecana 14.x+)
- **NPM**: wersja 6.x lub nowsza
- Przeglądarka internetowa z obsługą nowoczesnych standardów (Chrome, Firefox, Safari)

## Instrukcja instalacji i uruchomienia

### Klonowanie repozytorium
```bash
git clone <url-repozytorium>
cd Mobilna-ksiazka-kucharska
```

### Instalacja zależności
```bash
npm install
```

### Uruchomienie aplikacji w trybie deweloperskim
```bash
npm start
```
Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

### Budowa wersji produkcyjnej
```bash
npm run build
```

## Podstawowe informacje o strukturze projektu
- `src/components/` - komponenty interfejsu użytkownika podzielone na moduły.
- `src/firebase/` - konfiguracja i metody integracji z Firebase.
- `src/provider/` - dostawcy kontekstu (np. autoryzacja).
- `src/utils/` - funkcje pomocnicze i konfiguracje.
- `src/Api.js` - funkcje pobierające dane z bazy Firebase Realtime Database.

## Dokumentacja dodatkowa
Więcej szczegółów znajdziesz w folderze `docs/`:
- [Architektura](docs/architecture.md)
- [API i dane](docs/api.md)
- [Komponenty](docs/components.md)
- [Konfiguracja](docs/setup.md)
- [Przewodnik dewelopera](docs/development.md)

## Oryginalne funkcje PWA
1. **Instalacja**
   - **Desktop**: Otwórz [https://simple-react-pwa.web.app](https://simple-react-pwa.web.app), kliknij 3 kropki i wybierz "Zainstaluj simple-react-app".
   - **Mobile**: Otwórz adres w Chrome, kliknij 3 kropki i wybierz "Dodaj do ekranu głównego".
2. **Działanie offline**
   - Aplikacja cache'uje zasoby statyczne, umożliwiając dostęp do interfejsu bez połączenia z internetem.
