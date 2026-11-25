# Livly Tree Tracker / リヴリー 木の管理帳

## Running it
Just double-click `index.html`, or open the GitHub Pages link. No server needed.

## Your accounts
Accounts are saved **in your browser** (localStorage), so everyone who opens the page
keeps their own list. Nothing is sent anywhere.
- **+ Add account** (bottom of the Tree Viewer) adds one; the ✏️ and 🗑 icons next to an account rename or delete it.
- **Edit trees** opens the Tree Checklist for that account.
- **Export backup** (bottom of the Tree Viewer) downloads all accounts as a `.json` file.
  Use it as a backup, or to move your accounts to another browser or computer with
  **Import** next to it (you can add them to your current accounts or replace everything).

Saved data is per browser: clearing your browser's site data erases it, so export now and then.
Files named `livly-tree-tracker-backup*.json` are kept out of git by `.gitignore`.

The top bar switches between the two pages (**Tree Viewer** and **Tree Checklist**) and has the 🌐 language menu at the right.

Use the **View** switch to pick a layout, from biggest to smallest: **Large cards**, **Compact** (default), **Tiles**, **Side by side** (all accounts in columns). The page remembers your choice; you can also open `index.html?view=tiles` etc.

**Share fruit across accounts** (switch next to View): when on, the "+N" tooltip counts trees from all your accounts as ingredients, so "Can make" means any of your accounts has the trees. Trees from another account get a teal ✓. Also `index.html?shared=1`.

Use the 🌐 language menu at the top right to switch between 日本語 and English. The pages
remember your choice. You can also open `index.html?lang=en` or `index.html?lang=ja`.

## Tree Checklist (`tree-checklist.html`)
1. Pick the account in the **Account** menu (or "+ New account…").
2. Click every tree the account owns. Each click is saved straight away.
   Hover a tree to see its name; the search box finds trees by tree, fruit or gacha name (Japanese or English).

The 3 starting apple trees are always ticked (🔒), since every player has them and can't
discard them. **Reset to starter trees** unticks everything else.

## Wishlist (`wishlist.html`)
Two tabs:
- **My wishlist** – the trees each account wants (cream cards with a dashed gold outline and ★).
  Each card shows the Livlies the tree is used for: a green ✓ means that account could make it once
  it gets the tree; "+1" means it still needs one more tree. **✓ Got it** moves the tree to the
  account's owned trees; the × in the corner takes it off the wishlist.
- **Find trees** – one row per tree you don't have, with every Livly it makes. Click
  **☆ Hazy / ☆ ZK …** to add it to that account's wishlist (★ = on the wishlist, dashed ✓ = already owned).
  **Missing from** picks all accounts (trees no account has) or one account; the search box also
  finds Livly names; **Only trees that unlock something I can make** hides trees that wouldn't let
  you make anything new on their own.

Ticking a wished tree on the Tree Checklist removes it from the wishlist automatically. When
**Share fruit across accounts** is on in the viewer, ✓ / +1 count every account's trees.
Wishlists are included in Export / Import.

## Folders
- `index.html` – page shell
- `css/style.css` – styles
- `scripts/app.js` – reads the data and renders the grids
- `tree-checklist.html`, `scripts/tree-checklist.js`, `css/tree-checklist.css` – the Tree Checklist
- `wishlist.html`, `scripts/wishlist.js`, `css/wishlist.css` – the Wishlist
- `scripts/nav.js` – the shared top bar (page tabs + language menu)
- `scripts/store.js` – saving accounts in the browser, import / export
- `scripts/dialog.js` – the small pop-up boxes (add, rename, delete, import)
- `scripts/i18n.js` – the pages' own text in each language (titles, labels, messages)
- `data/` – game data: trees and Livlies (see below)
- `assets/banners`, `assets/trees`, `assets/livlies` – optional: your own images (see the `image` / `banner` fields below). Empty for now; all images currently load from the web.

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
| livlies | Livly ids this tree is used for; the **first** one is the big image on the card, the rest are listed in the "+N" tooltip |

### data/livlies.js — key = picturebook id (e.g. `"001-m-001"`)
| field | meaning |
|---|---|
| name | `{ ja, en }` |
| potion | `neobelmin` / `mix` / `plusterin` / `collab` (コラボルミン / Collabormin) |
| base | (plusterin only) id of the Livly whose Neobelmin is needed |
| image | URL **or** a filename in `assets/livlies/`. Official idle image pattern: `https://www.livly.com/picturebook/img/main/mono/motion/<id>/mono_<species>_P<n>_Idle.png` |
| page | link to the picturebook page |
| recipe | list of `{ "tree": <tree id>, "count": n }` |

### Export file (`livly-tree-tracker-backup-<date>.json`)
```
{
  "app": "livly-tree-tracker",
  "version": 1,
  "accounts": [
    { "id": "…", "name": "Main Account", "trees": ["1001-1-001", "1019-1-001", …], "wishlist": ["1055-1-001", …] }
  ]
}
```
Trees are listed by tree id. When importing, unknown tree ids are skipped; files without
`"wishlist"` (from older versions) import fine.

Hover over a Livly image to see its name and recipe; hover over a tree image to
see the tree name, fruit and where it comes from.

## Sources
- Japanese names, recipes, images: https://www.livly.com/picturebook/
- English names: https://livlyislandnewedition.wiki.gg/wiki/Trees and /wiki/Livly
- Banners: https://livly-guide.com/gacha-list/
