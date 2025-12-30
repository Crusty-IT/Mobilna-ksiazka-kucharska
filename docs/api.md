# Dokumentacja API (Firebase Realtime Database)

Aplikacja nie posiada tradycyjnego REST API. Komunikacja odbywa się bezpośrednio z Firebase Realtime Database za pomocą funkcji zdefiniowanych w `src/Api.js`.

## Struktura danych w Firebase

### `/vegetables`
Zbiór obiektów opisujących warzywa.
- `name` (string): Nazwa warzywa.
- `slug` (string): Unikalny identyfikator URL.
- `time` (string/number): Czas gotowania.
- `description` (string): Instrukcja przygotowania.
- `image` (string): URL do zdjęcia.

### `/pasta`
Zbiór obiektów opisujących makarony.
- Atrybuty analogiczne do `/vegetables`.

### `/groats`
Zbiór obiektów opisujących kasze.
- Atrybuty analogiczne do `/vegetables`.

### `/other`
Zbiór obiektów opisujących inne produkty (jajka, itp.).
- Atrybuty analogiczne do `/vegetables`.

### `/recipes`
Baza przepisów kulinarnych.
- `title` (string): Tytuł przepisu.
- `slug` (string): Unikalny identyfikator URL.
- `ingredients` (array): Lista składników.
- `steps` (array): Kroki przygotowania.
- `image` (string): URL do zdjęcia.

## Funkcje w `src/Api.js`

| Funkcja | Opis | Ścieżka Firebase |
|---------|------|------------------|
| `getVegetables()` | Pobiera listę warzyw | `vegetables` |
| `getPasta()` | Pobiera listę makaronów | `pasta` |
| `getVarious()` | Pobiera inne produkty | `other` |
| `getGroats()` | Pobiera listę kasz | `groats` |
| `getRecipes()` | Pobiera listę przepisów | `recipes` |

Wszystkie funkcje są asynchroniczne i zwracają tablicę obiektów.
