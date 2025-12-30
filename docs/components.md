# Dokumentacja Komponentów

## Główne moduły

### 1. `howlist/`
Zawiera komponenty renderujące listy produktów z podziałem na kategorie.
- `Vegetables.js`, `Pasta.js`, `Groats.js`, `Various.js`: Wyświetlają kafelki z produktami. Pobierają dane przy użyciu funkcji z `Api.js`.

### 2. `ingredients/`
Komponenty wyświetlające szczegółowe informacje o wybranym produkcie (instrukcja gotowania, czas).
- `SingleVege.js`, `SinglePasta.js`, etc.: Wyświetlają szczegóły konkretnego elementu.

### 3. `recipes/` i `allrecipes/`
Zarządzanie przepisami kulinarnymi.
- `RecipesAll.js`: Lista wszystkich dostępnych przepisów.
- `SingleRecipe.js`: Widok pojedynczego przepisu z listą składników i krokami.

### 4. `counterdown/`
- `Counterdown.jsx`: Interaktywny minutnik. Pozwala użytkownikowi ustawić czas (minuty i sekundy) i odliczać do zera. Po zakończeniu odtwarzany jest dźwięk alarmu.

### 5. `navbar/`
- `Navbar.jsx`: Główna nawigacja aplikacji. Zawiera linki do najważniejszych sekcji oraz przycisk wylogowania (jeśli użytkownik jest zalogowany).

### 6. `intro/`
- `Intro.js`: Strona powitalna (Landing Page) aplikacji, zachęcająca do skorzystania z funkcji.

### 7. `seek/`
- `Seek.js`: Moduł wyszukiwania (filtrowania) przepisów lub produktów.

### 8. `common/`
- `DetailsParts.js`: Współdzielone elementy interfejsu wykorzystywane w widokach szczegółowych.

## Komponenty pomocnicze
- `loader/Loader.js`: Ekran ładowania danych.
- `spinner/Spinner.js`: Mały wskaźnik ładowania (np. wewnątrz przycisku).
