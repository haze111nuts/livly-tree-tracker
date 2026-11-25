# Livly Tree Tracker / リヴリー 木の管理帳

## Running it
Just double-click `index.html`. No server needed.

The top bar switches between the two pages (**Tree Viewer** and **Tree Checklist**) and has the 🌐 language menu at the right.

Use the **View** switch to pick a layout, from biggest to smallest: **Large cards**, **Compact** (default), **Tiles**, **Side by side** (all accounts in columns). The page remembers your choice; you can also open `index.html?view=tiles` etc.

**Share fruit across accounts** (switch next to View): when on, the "+N" tooltip counts trees from all your accounts as ingredients, so "Can make" means any of your accounts has the trees. Trees from another account get a teal ✓. Also `index.html?shared=1`.

Use the 🌐 language menu at the top right to switch between 日本語 and English. The pages
remember your choice. You can also open `index.html?lang=en` or `index.html?lang=ja`.

## Tree Checklist (`tree-checklist.html`)
A helper page for filling in `data/accounts.js`:
1. Open `tree-checklist.html` (or use the link at the top of the viewer).
2. Click every tree the account owns. Hover a tree to see its name; use the search box to find one by tree, fruit or gacha name (Japanese or English).
3. Click **Copy** and paste the result over that account's `"trees": [...]` in `data/accounts.js`.

"Load an existing account" starts from an account's current trees, so you can add or remove a few. The 3 starting apple trees are always selected (🔒), since every player has them and can't discard them. The selection is remembered if you refresh; use **Clear selection** before starting the next account.

## Folders
- `index.html` – page shell
- `css/style.css` – styles
- `scripts/app.js` – reads the data and renders the grids
- `tree-checklist.html`, `scripts/tree-checklist.js`, `css/tree-checklist.css` – the Tree Checklist
- `scripts/nav.js` – the shared top bar (page tabs + language menu)
- `scripts/i18n.js` – the pages' own text in each language (titles, labels, messages)
- `data/` – all game data (see below)
- `assets/banners`, `assets/trees`, `assets/livlies`, `assets/icons` – your local images

## Data files
All data uses **language-neutral ids**. Every name is stored as a pair:
`{ "ja": "雨上がりの虹の木", "en": "Rainbow Tree" }`.

Each data file is plain JSON with one line in front (`LIVLY_DATA.trees = ...`)
and a `;` at the end. That is what lets the page load it from disk.
If a card disappears after an edit, check for a missing comma or bracket.

### data/trees.js — key = tree id (e.g. `"1019-1-001"`, from the game's tree image)
| field | meaning |
|---|---|
| name, fruit, source | `{ ja, en }` — tree name, fruit name, gacha it comes from |
| image | URL **or** a filename in `assets/trees/` |
| banner | URL, filename in `assets/banners/`, or `null` (shows a text banner) |
| livlies | Livly ids this tree is used for; the **first** one is the big image on the card, the rest show as small icons |

### data/livlies.js — key = picturebook id (e.g. `"001-m-001"`)
| field | meaning |
|---|---|
| name | `{ ja, en }` |
| potion | `neobelmin` / `mix` / `plusterin` / `collab` (コラボルミン / Collabormin) |
| base | (plusterin only) id of the Livly whose Neobelmin is needed |
| image | URL **or** a filename in `assets/livlies/`. Official idle image pattern: `https://www.livly.com/picturebook/img/main/mono/motion/<id>/mono_<species>_P<n>_Idle.png` |
| page | link to the picturebook page |
| recipe | list of `{ "tree": <tree id>, "count": n }` |

### data/accounts.js
```
LIVLY_DATA.accounts = [
  {
    "name": "Main Account",
    "trees": [
      "1019-1-001", // 雨上がりの虹の木 / Rainbow Tree
      ...
    ]
  }
];
```
One grid per account, in this order. Trees are listed by id; the comment after
each id is just a reminder and is ignored by the page.

Hover over a Livly image to see its name and recipe; hover over a tree image to
see the tree name, fruit and where it comes from.

## Sources
- Japanese names, recipes, images: https://www.livly.com/picturebook/
- English names: https://livlyislandnewedition.wiki.gg/wiki/Trees and /wiki/Livly
- Banners: https://livly-guide.com/gacha-list/
