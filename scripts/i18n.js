/* =========================================================
 * Interface text for each language.
 * Data names (Livlies, trees, fruits, gachas) live in data/*.js
 * as { ja, en } pairs; this file only holds the page's own text.
 * ========================================================= */

window.LIVLY_I18N = {
  ja: {
    langName: "日本語",
    languageLabel: "言語",
    appName: "リヴリー 木の管理帳",
    pageTitle: "リヴリー 木の管理帳",
    subtitle: "全アカウントの木",
    stats: (livlies, trees) => `・リヴリー${livlies}種／木${trees}種を収録`,
    treeCount: (n) => `${n}本`,
    potion: {
      neobelmin: "ネオベルミン",
      mix: "ネオベルミン（ミックス）",
      plusterin: "プラステリン",
      collab: "コラボルミン",
    },
    baseNeobelmin: (name) => `${name}のネオベルミン`,
    tipTitle: (n) => `この実で作れるリヴリー（ほか${n}種）`,
    mainTag: "メイン",
    canMake: "✓ 作れる",
    missingTrees: "木が足りない",
    keyThisAccount: "このアカウントの木",
    keyOtherAccount: "別のアカウントの木",
    shareFruit: "全アカウントの実をまとめて使う",
    shareFruitHint: "オンにすると、別のアカウントで育てている木の実も材料に含めて計算します",
    fruit: "実",
    source: "入手先",
    unknownTree: (id) => `「${id}」という木が見つかりません。data/accounts.js と data/trees.js を確認してください`,
    loadError: "データを読み込めませんでした。",
    missingFiles: (files) => `読み込めないか、書き方に誤りがあるファイル：${files}`,
    consoleHint: "F12キーで開発者ツールのコンソールを開くと、問題のある行を確認できます。",

    // View switch (biggest -> smallest)
    viewLabel: "表示",
    views: { large: "大きく", compact: "標準", tiles: "小さく", columns: "横並び" },

    // Navigation
    navViewer: "木の一覧",
    navPicker: "木のチェックリスト",

    // Tree Checklist
    pickerTitle: "木のチェックリスト",
    pickerIntro: "持っている木をクリックして選んでください。表示されたコードをコピーし、data/accounts.js の該当アカウントの \"trees\" に貼り付けます。",
    search: "木・実・ガチャの名前で検索",
    loadAccount: "登録済みのアカウントから読み込む…",
    showSelectedOnly: "選んだ木だけ表示",
    clear: "選択を解除",
    selectedCount: (n, total) => `${total}本中 ${n}本を選択中`,
    copy: "コピー",
    copied: "コピーしました",
    copyFailed: "自動でコピーできませんでした。テキストを選択して Ctrl+C でコピーしてください。",
    confirmClear: "選択をすべて解除しますか？（最初から持っている3本の木はそのまま残ります）",
    confirmReplace: "いまの選択を、このアカウントの木に置き換えますか？",
    noResults: "条件に合う木が見つかりません。",
    alwaysOwned: "🔒 全員が最初から持っている木なので、常に選択されています",
  },

  en: {
    langName: "English",
    languageLabel: "Language",
    appName: "Livly Tree Tracker",
    pageTitle: "Livly Tree Tracker",
    subtitle: "My trees across all accounts",
    stats: (livlies, trees) => `· ${livlies} Livlies · ${trees} trees loaded`,
    treeCount: (n) => `${n} ${n === 1 ? "tree" : "trees"}`,
    potion: {
      neobelmin: "Neobelmin",
      mix: "Neobelmin (Mix)",
      plusterin: "Plusterin",
      collab: "Collabormin",
    },
    baseNeobelmin: (name) => `${name} Neobelmin`,
    tipTitle: (n) => `Livlies that use this fruit (+${n})`,
    mainTag: "Main",
    canMake: "✓ Can make",
    missingTrees: "Missing trees",
    keyThisAccount: "This account",
    keyOtherAccount: "Other account",
    shareFruit: "Share fruit across accounts",
    shareFruitHint: "When on, trees from your other accounts also count as ingredients",
    fruit: "Fruit",
    source: "Source",
    unknownTree: (id) => `Unknown tree id "${id}" — check data/accounts.js and data/trees.js`,
    loadError: "Could not load the data.",
    missingFiles: (files) => `Missing or broken: ${files}`,
    consoleHint: "Open the browser console (F12) to see the exact line with the problem.",

    // View switch
    viewLabel: "View",
    views: { large: "Large cards", compact: "Compact", tiles: "Tiles", columns: "Side by side" },

    // Navigation
    navViewer: "Tree Viewer",
    navPicker: "Tree Checklist",

    // Tree Checklist
    pickerTitle: "Tree Checklist",
    pickerIntro: "Click the trees you own. Then copy the code below and paste it as the account's \"trees\" in data/accounts.js.",
    search: "Search tree, fruit or gacha name",
    loadAccount: "Load an existing account…",
    showSelectedOnly: "Show selected only",
    clear: "Clear selection",
    selectedCount: (n, total) => `${n} of ${total} trees selected`,
    copy: "Copy",
    copied: "Copied!",
    copyFailed: "Couldn't copy automatically. Select the text and press Ctrl+C.",
    confirmClear: "Clear the selection? (The 3 starting trees stay selected.)",
    confirmReplace: "Replace the current selection with this account's trees?",
    noResults: "No trees match.",
    alwaysOwned: "🔒 Starting tree every player has — always selected",
  },
};
