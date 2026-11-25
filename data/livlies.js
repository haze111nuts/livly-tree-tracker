// ============================================================
// Livlies — key = official picturebook id (e.g. "001-m-001").
//   name     : { ja, en }
//   potion   : neobelmin / mix / plusterin / collab
//   base     : (plusterin only) id of the Livly whose Neobelmin is needed
//   recipe   : [{ tree: <tree id from trees.js>, count }]
// Sources: livly.com/picturebook (JA) · livlyislandnewedition.wiki.gg (EN)
// Keep the "LIVLY_DATA.livlies =" line and the final semicolon.
// ============================================================
window.LIVLY_DATA = window.LIVLY_DATA || {};
LIVLY_DATA.livlies = {
  "001-m-000": {
    "name": { "ja": "ピグミー", "en": "Pygmy" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-m-000/mono_pygmy_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-m-000/",
    "recipe": [
      { "tree": "1001-1-001", "count": 10 }
    ]
  },
  "001-m-001": {
    "name": { "ja": "ピグミー P-1", "en": "Pygmy P-1" },
    "potion": "plusterin",
    "base": "001-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-m-001/mono_pygmy_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-m-001/",
    "recipe": [
      { "tree": "1019-1-001", "count": 6 }
    ]
  },
  "001-m-002": {
    "name": { "ja": "ピグミー P-2", "en": "Pygmy P-2" },
    "potion": "plusterin",
    "base": "001-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-m-002/mono_pygmy_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-m-002/",
    "recipe": [
      { "tree": "1052-1-001", "count": 6 }
    ]
  },
  "001-m-003": {
    "name": { "ja": "ピグミー P-3", "en": "Pygmy P-3" },
    "potion": "plusterin",
    "base": "001-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-m-003/mono_pygmy_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-m-003/",
    "recipe": [
      { "tree": "1069-1-001", "count": 6 }
    ]
  },
  "001-m-004": {
    "name": { "ja": "ピグミー P-4", "en": "Pygmy P-4" },
    "potion": "plusterin",
    "base": "001-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-m-004/mono_pygmy_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-m-004/",
    "recipe": [
      { "tree": "1134-1-001", "count": 6 }
    ]
  },
  "002-n-000": {
    "name": { "ja": "コルヌレプス", "en": "Cornu Lepus" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-n-000/mono_cornulepus_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-n-000/",
    "recipe": [
      { "tree": "1001-1-003", "count": 10 }
    ]
  },
  "002-n-001": {
    "name": { "ja": "コルヌレプス P-1", "en": "Cornu Lepus P-1" },
    "potion": "plusterin",
    "base": "002-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-n-001/mono_cornulepus_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-n-001/",
    "recipe": [
      { "tree": "1012-1-001", "count": 6 }
    ]
  },
  "002-n-002": {
    "name": { "ja": "コルヌレプス P-2", "en": "Cornu Lepus P-2" },
    "potion": "plusterin",
    "base": "002-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-n-002/mono_cornulepus_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-n-002/",
    "recipe": [
      { "tree": "1036-1-001", "count": 6 }
    ]
  },
  "002-n-003": {
    "name": { "ja": "コルヌレプス P-3", "en": "Cornu Lepus P-3" },
    "potion": "plusterin",
    "base": "002-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-n-003/mono_cornulepus_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-n-003/",
    "recipe": [
      { "tree": "1045-1-001", "count": 6 }
    ]
  },
  "002-n-004": {
    "name": { "ja": "コルヌレプス P-4", "en": "Cornu Lepus P-4" },
    "potion": "plusterin",
    "base": "002-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-n-004/mono_cornulepus_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-n-004/",
    "recipe": [
      { "tree": "1160-1-001", "count": 6 }
    ]
  },
  "003-n-000": {
    "name": { "ja": "モモス", "en": "Momoth" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/003-n-000/mono_momoth_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/003-n-000/",
    "recipe": [
      { "tree": "1001-1-005", "count": 10 }
    ]
  },
  "003-n-001": {
    "name": { "ja": "モモス P-1", "en": "Momoth P-1" },
    "potion": "plusterin",
    "base": "003-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/003-n-001/mono_momoth_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/003-n-001/",
    "recipe": [
      { "tree": "1017-1-001", "count": 6 }
    ]
  },
  "003-n-002": {
    "name": { "ja": "モモス P-2", "en": "Momoth P-2" },
    "potion": "plusterin",
    "base": "003-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/003-n-002/mono_momoth_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/003-n-002/",
    "recipe": [
      { "tree": "1047-1-001", "count": 6 }
    ]
  },
  "003-n-003": {
    "name": { "ja": "モモス P-3", "en": "Momoth P-3" },
    "potion": "plusterin",
    "base": "003-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/003-n-003/mono_momoth_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/003-n-003/",
    "recipe": [
      { "tree": "1119-1-001", "count": 6 }
    ]
  },
  "003-n-004": {
    "name": { "ja": "モモス P-4", "en": "Momoth P-4" },
    "potion": "plusterin",
    "base": "003-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/003-n-004/mono_momoth_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/003-n-004/",
    "recipe": [
      { "tree": "1214-1-001", "count": 6 }
    ]
  },
  "004-m-000": {
    "name": { "ja": "ブラックドッグ", "en": "Black Dog" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/004-m-000/mono_blackdog_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/004-m-000/",
    "recipe": [
      { "tree": "1010-1-001", "count": 14 }
    ]
  },
  "004-m-001": {
    "name": { "ja": "ブラックドッグ P-1", "en": "Black Dog P-1" },
    "potion": "plusterin",
    "base": "004-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/004-m-001/mono_blackdog_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/004-m-001/",
    "recipe": [
      { "tree": "1025-1-001", "count": 6 }
    ]
  },
  "004-m-002": {
    "name": { "ja": "ブラックドッグ P-2", "en": "Black Dog P-2" },
    "potion": "plusterin",
    "base": "004-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/004-m-002/mono_blackdog_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/004-m-002/",
    "recipe": [
      { "tree": "1051-1-001", "count": 6 }
    ]
  },
  "004-m-003": {
    "name": { "ja": "ブラックドッグ P-3", "en": "Black Dog P-3" },
    "potion": "plusterin",
    "base": "004-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/004-m-003/mono_blackdog_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/004-m-003/",
    "recipe": [
      { "tree": "1117-1-001", "count": 6 }
    ]
  },
  "004-m-004": {
    "name": { "ja": "ブラックドッグ P-4", "en": "Black Dog P-4" },
    "potion": "plusterin",
    "base": "004-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/004-m-004/mono_blackdog_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/004-m-004/",
    "recipe": [
      { "tree": "1235-1-001", "count": 6 }
    ]
  },
  "005-n-000": {
    "name": { "ja": "ツノリムル", "en": "Tsunoriml" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/005-n-000/mono_tsunoriml_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/005-n-000/",
    "recipe": [
      { "tree": "1011-1-001", "count": 14 }
    ]
  },
  "005-n-001": {
    "name": { "ja": "ツノリムル P-1", "en": "Tsunoriml P-1" },
    "potion": "plusterin",
    "base": "005-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/005-n-001/mono_tsunoriml_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/005-n-001/",
    "recipe": [
      { "tree": "1023-1-001", "count": 6 }
    ]
  },
  "005-n-002": {
    "name": { "ja": "ツノリムル P-2", "en": "Tsunoriml P-2" },
    "potion": "plusterin",
    "base": "005-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/005-n-002/mono_tsunoriml_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/005-n-002/",
    "recipe": [
      { "tree": "1063-1-001", "count": 6 }
    ]
  },
  "005-n-003": {
    "name": { "ja": "ツノリムル P-3", "en": "Tsunoriml P-3" },
    "potion": "plusterin",
    "base": "005-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/005-n-003/mono_tsunoriml_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/005-n-003/",
    "recipe": [
      { "tree": "1124-1-001", "count": 6 }
    ]
  },
  "005-n-004": {
    "name": { "ja": "ツノリムル P-4", "en": "Tsunoriml P-4" },
    "potion": "plusterin",
    "base": "005-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/005-n-004/mono_tsunoriml_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/005-n-004/",
    "recipe": [
      { "tree": "1295-1-001", "count": 6 }
    ]
  },
  "006-m-000": {
    "name": { "ja": "パキケ", "en": "Pakike" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/006-m-000/mono_pakike_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/006-m-000/",
    "recipe": [
      { "tree": "1022-1-001", "count": 14 }
    ]
  },
  "006-m-001": {
    "name": { "ja": "パキケ P-1", "en": "Pakike P-1" },
    "potion": "plusterin",
    "base": "006-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/006-m-001/mono_pakike_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/006-m-001/",
    "recipe": [
      { "tree": "1020-1-001", "count": 6 }
    ]
  },
  "006-m-002": {
    "name": { "ja": "パキケ P-2", "en": "Pakike P-2" },
    "potion": "plusterin",
    "base": "006-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/006-m-002/mono_pakike_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/006-m-002/",
    "recipe": [
      { "tree": "1034-1-001", "count": 6 }
    ]
  },
  "006-m-003": {
    "name": { "ja": "パキケ P-3", "en": "Pakike P-3" },
    "potion": "plusterin",
    "base": "006-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/006-m-003/mono_pakike_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/006-m-003/",
    "recipe": [
      { "tree": "1114-1-001", "count": 6 }
    ]
  },
  "007-m-000": {
    "name": { "ja": "オーガ", "en": "Ogre" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-m-000/mono_ogre_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-m-000/",
    "recipe": [
      { "tree": "1015-1-001", "count": 14 }
    ]
  },
  "007-m-001": {
    "name": { "ja": "オーガ P-1", "en": "Ogre P-1" },
    "potion": "plusterin",
    "base": "007-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-m-001/mono_oga_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-m-001/",
    "recipe": [
      { "tree": "1027-1-001", "count": 6 }
    ]
  },
  "007-m-002": {
    "name": { "ja": "オーガ P-2", "en": "Ogre P-2" },
    "potion": "plusterin",
    "base": "007-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-m-002/mono_ogre_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-m-002/",
    "recipe": [
      { "tree": "1087-1-001", "count": 6 }
    ]
  },
  "007-m-003": {
    "name": { "ja": "オーガ P-3", "en": "Ogre P-3" },
    "potion": "plusterin",
    "base": "007-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-m-003/mono_ogre_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-m-003/",
    "recipe": [
      { "tree": "1188-1-001", "count": 6 }
    ]
  },
  "007-m-004": {
    "name": { "ja": "オーガ P-4", "en": "Ogre P-4" },
    "potion": "plusterin",
    "base": "007-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-m-004/mono_ogre_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-m-004/",
    "recipe": [
      { "tree": "1376-1-001", "count": 6 }
    ]
  },
  "008-m-000": {
    "name": { "ja": "ネオピグミー", "en": "Neo Pygmy" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/008-m-000/mono_neopygmy_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/008-m-000/",
    "recipe": [
      { "tree": "1001-1-001", "count": 7 },
      { "tree": "1001-1-003", "count": 7 },
      { "tree": "1001-1-005", "count": 7 }
    ]
  },
  "008-m-001": {
    "name": { "ja": "ネオピグミー P-1", "en": "Neo Pygmy P-1" },
    "potion": "plusterin",
    "base": "008-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/008-m-001/mono_neopygmy_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/008-m-001/",
    "recipe": [
      { "tree": "1024-1-001", "count": 6 }
    ]
  },
  "008-m-002": {
    "name": { "ja": "ネオピグミー P-2", "en": "Neo Pygmy P-2" },
    "potion": "plusterin",
    "base": "008-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/008-m-002/mono_neopygmy_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/008-m-002/",
    "recipe": [
      { "tree": "1058-1-001", "count": 6 }
    ]
  },
  "008-m-003": {
    "name": { "ja": "ネオピグミー P-3", "en": "Neo Pygmy P-3" },
    "potion": "plusterin",
    "base": "008-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/008-m-003/mono_neopygmy_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/008-m-003/",
    "recipe": [
      { "tree": "1136-1-001", "count": 6 }
    ]
  },
  "008-m-004": {
    "name": { "ja": "ネオピグミー P-4", "en": "Neo Pygmy P-4" },
    "potion": "plusterin",
    "base": "008-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/008-m-004/mono_neopygmy_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/008-m-004/",
    "recipe": [
      { "tree": "1343-1-001", "count": 6 }
    ]
  },
  "009-n-000": {
    "name": { "ja": "ソニモグリ", "en": "Sonimoguri" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/009-n-000/mono_sonimoguri_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/009-n-000/",
    "recipe": [
      { "tree": "1014-1-001", "count": 14 }
    ]
  },
  "009-n-001": {
    "name": { "ja": "ソニモグリ P-1", "en": "Sonimoguri P-1" },
    "potion": "plusterin",
    "base": "009-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/009-n-001/mono_sonimoguri_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/009-n-001/",
    "recipe": [
      { "tree": "1029-1-001", "count": 6 }
    ]
  },
  "009-n-002": {
    "name": { "ja": "ソニモグリ P-2", "en": "Sonimoguri P-2" },
    "potion": "plusterin",
    "base": "009-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/009-n-002/mono_sonimoguri_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/009-n-002/",
    "recipe": [
      { "tree": "1061-1-001", "count": 6 }
    ]
  },
  "009-n-003": {
    "name": { "ja": "ソニモグリ P-3", "en": "Sonimoguri P-3" },
    "potion": "plusterin",
    "base": "009-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/009-n-003/mono_sonimoguri_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/009-n-003/",
    "recipe": [
      { "tree": "1143-1-001", "count": 6 }
    ]
  },
  "010-m-000": {
    "name": { "ja": "ワタメ", "en": "Watame" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/010-m-000/mono_watame_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/010-m-000/",
    "recipe": [
      { "tree": "1026-1-001", "count": 14 }
    ]
  },
  "010-m-001": {
    "name": { "ja": "ワタメ P-1", "en": "Watame P-1" },
    "potion": "plusterin",
    "base": "010-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/010-m-001/mono_watame_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/010-m-001/",
    "recipe": [
      { "tree": "1035-1-001", "count": 6 }
    ]
  },
  "010-m-002": {
    "name": { "ja": "ワタメ P-2", "en": "Watame P-2" },
    "potion": "plusterin",
    "base": "010-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/010-m-002/mono_watame_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/010-m-002/",
    "recipe": [
      { "tree": "1100-1-001", "count": 6 }
    ]
  },
  "010-m-003": {
    "name": { "ja": "ワタメ P-3", "en": "Watame P-3" },
    "potion": "plusterin",
    "base": "010-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/010-m-003/mono_watame_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/010-m-003/",
    "recipe": [
      { "tree": "1100-1-001", "count": 8 }
    ]
  },
  "010-m-004": {
    "name": { "ja": "ワタメ P-4", "en": "Watame P-4" },
    "potion": "plusterin",
    "base": "010-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/010-m-004/mono_watame_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/010-m-004/",
    "recipe": [
      { "tree": "1273-1-001", "count": 6 }
    ]
  },
  "011-n-000": {
    "name": { "ja": "グレムリン", "en": "Gremlin" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/011-n-000/mono_gremlin_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/011-n-000/",
    "recipe": [
      { "tree": "1018-1-001", "count": 14 }
    ]
  },
  "011-n-001": {
    "name": { "ja": "グレムリン P-1", "en": "Gremlin P-1" },
    "potion": "plusterin",
    "base": "011-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/011-n-001/mono_gremlin_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/011-n-001/",
    "recipe": [
      { "tree": "1033-1-001", "count": 6 }
    ]
  },
  "011-n-002": {
    "name": { "ja": "グレムリン P-2", "en": "Gremlin P-2" },
    "potion": "plusterin",
    "base": "011-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/011-n-002/mono_gremlin_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/011-n-002/",
    "recipe": [
      { "tree": "1081-1-001", "count": 6 }
    ]
  },
  "011-n-003": {
    "name": { "ja": "グレムリン P-3", "en": "Gremlin P-3" },
    "potion": "plusterin",
    "base": "011-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/011-n-003/mono_gremlin_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/011-n-003/",
    "recipe": [
      { "tree": "1155-1-001", "count": 6 }
    ]
  },
  "012-m-000": {
    "name": { "ja": "ヴォルグ", "en": "Volg" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/012-m-000/mono_volg_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/012-m-000/",
    "recipe": [
      { "tree": "1021-1-001", "count": 9 },
      { "tree": "1031-1-001", "count": 9 }
    ]
  },
  "012-m-001": {
    "name": { "ja": "ヴォルグ P-1", "en": "Volg P-1" },
    "potion": "plusterin",
    "base": "012-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/012-m-001/mono_volg_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/012-m-001/",
    "recipe": [
      { "tree": "1057-1-001", "count": 6 }
    ]
  },
  "012-m-002": {
    "name": { "ja": "ヴォルグ P-2", "en": "Volg P-2" },
    "potion": "plusterin",
    "base": "012-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/012-m-002/mono_volg_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/012-m-002/",
    "recipe": [
      { "tree": "1086-1-001", "count": 6 }
    ]
  },
  "012-m-003": {
    "name": { "ja": "ヴォルグ P-3", "en": "Volg P-3" },
    "potion": "plusterin",
    "base": "012-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/012-m-003/mono_volg_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/012-m-003/",
    "recipe": [
      { "tree": "1127-1-001", "count": 6 }
    ]
  },
  "012-m-004": {
    "name": { "ja": "ヴォルグ P-4", "en": "Volg P-4" },
    "potion": "plusterin",
    "base": "012-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/012-m-004/mono_volg_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/012-m-004/",
    "recipe": [
      { "tree": "1338-1-001", "count": 6 }
    ]
  },
  "013-m-000": {
    "name": { "ja": "マダラカガ", "en": "Madarakaga" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/013-m-000/mono_madarakaga_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/013-m-000/",
    "recipe": [
      { "tree": "1021-1-001", "count": 9 },
      { "tree": "1032-1-001", "count": 9 }
    ]
  },
  "013-m-001": {
    "name": { "ja": "マダラカガ P-1", "en": "Madarakaga P-1" },
    "potion": "plusterin",
    "base": "013-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/013-m-001/mono_madarakaga_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/013-m-001/",
    "recipe": [
      { "tree": "1055-1-001", "count": 4 }
    ]
  },
  "013-m-002": {
    "name": { "ja": "マダラカガ P-2", "en": "Madarakaga P-2" },
    "potion": "plusterin",
    "base": "013-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/013-m-002/mono_madarakaga_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/013-m-002/",
    "recipe": [
      { "tree": "1055-1-001", "count": 6 }
    ]
  },
  "013-m-003": {
    "name": { "ja": "マダラカガ P-3", "en": "Madarakaga P-3" },
    "potion": "plusterin",
    "base": "013-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/013-m-003/mono_madarakaga_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/013-m-003/",
    "recipe": [
      { "tree": "1103-1-001", "count": 6 }
    ]
  },
  "014-m-000": {
    "name": { "ja": "トビネ", "en": "Tobine" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/014-m-000/mono_tobine_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/014-m-000/",
    "recipe": [
      { "tree": "1016-1-001", "count": 14 }
    ]
  },
  "014-m-001": {
    "name": { "ja": "トビネ P-1", "en": "Tobine P-1" },
    "potion": "plusterin",
    "base": "014-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/014-m-001/mono_tobine_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/014-m-001/",
    "recipe": [
      { "tree": "1041-1-001", "count": 6 }
    ]
  },
  "014-m-002": {
    "name": { "ja": "トビネ P-2", "en": "Tobine P-2" },
    "potion": "plusterin",
    "base": "014-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/014-m-002/mono_tobine_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/014-m-002/",
    "recipe": [
      { "tree": "1088-1-001", "count": 6 }
    ]
  },
  "014-m-003": {
    "name": { "ja": "トビネ P-3", "en": "Tobine P-3" },
    "potion": "plusterin",
    "base": "014-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/014-m-003/mono_tobine_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/014-m-003/",
    "recipe": [
      { "tree": "1158-1-001", "count": 6 }
    ]
  },
  "015-m-000": {
    "name": { "ja": "ケマリ", "en": "Kemari" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/015-m-000/mono_kemari_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/015-m-000/",
    "recipe": [
      { "tree": "1037-1-001", "count": 9 },
      { "tree": "1038-1-001", "count": 9 }
    ]
  },
  "015-m-001": {
    "name": { "ja": "ケマリ P-1", "en": "Kemari P-1" },
    "potion": "plusterin",
    "base": "015-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/015-m-001/mono_kemari_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/015-m-001/",
    "recipe": [
      { "tree": "1043-1-001", "count": 6 }
    ]
  },
  "015-m-002": {
    "name": { "ja": "ケマリ P-2", "en": "Kemari P-2" },
    "potion": "plusterin",
    "base": "015-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/015-m-002/mono_kemari_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/015-m-002/",
    "recipe": [
      { "tree": "1054-1-001", "count": 6 }
    ]
  },
  "015-m-003": {
    "name": { "ja": "ケマリ P-3", "en": "Kemari P-3" },
    "potion": "plusterin",
    "base": "015-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/015-m-003/mono_kemari_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/015-m-003/",
    "recipe": [
      { "tree": "1126-1-001", "count": 6 }
    ]
  },
  "016-a-000": {
    "name": { "ja": "ハナパキケ", "en": "Hanapakike" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/016-a-000/mono_hanapakike_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/016-a-000/",
    "recipe": [
      { "tree": "1013-1-001", "count": 14 }
    ]
  },
  "016-a-001": {
    "name": { "ja": "ハナパキケ P-1", "en": "Hanapakike P-1" },
    "potion": "plusterin",
    "base": "016-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/016-a-001/mono_hanapakike_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/016-a-001/",
    "recipe": [
      { "tree": "1084-1-001", "count": 6 }
    ]
  },
  "016-a-002": {
    "name": { "ja": "ハナパキケ P-2", "en": "Hanapakike P-2" },
    "potion": "plusterin",
    "base": "016-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/016-a-002/mono_hanapakike_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/016-a-002/",
    "recipe": [
      { "tree": "1118-1-001", "count": 6 }
    ]
  },
  "016-a-003": {
    "name": { "ja": "ハナパキケ P-3", "en": "Hanapakike P-3" },
    "potion": "plusterin",
    "base": "016-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/016-a-003/mono_hanapakike_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/016-a-003/",
    "recipe": [
      { "tree": "1197-1-001", "count": 6 }
    ]
  },
  "017-m-000": {
    "name": { "ja": "ビャッコ", "en": "Byakko" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/017-m-000/mono_byakko_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/017-m-000/",
    "recipe": [
      { "tree": "1030-1-001", "count": 14 }
    ]
  },
  "017-m-001": {
    "name": { "ja": "ビャッコ P-1", "en": "Byakko P-1" },
    "potion": "plusterin",
    "base": "017-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/017-m-001/mono_byakko_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/017-m-001/",
    "recipe": [
      { "tree": "1078-1-001", "count": 6 }
    ]
  },
  "017-m-002": {
    "name": { "ja": "ビャッコ P-2", "en": "Byakko P-2" },
    "potion": "plusterin",
    "base": "017-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/017-m-002/mono_byakko_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/017-m-002/",
    "recipe": [
      { "tree": "1106-1-001", "count": 6 }
    ]
  },
  "017-m-003": {
    "name": { "ja": "ビャッコ P-3", "en": "Byakko P-3" },
    "potion": "plusterin",
    "base": "017-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/017-m-003/mono_byakko_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/017-m-003/",
    "recipe": [
      { "tree": "1180-1-001", "count": 6 }
    ]
  },
  "017-m-004": {
    "name": { "ja": "ビャッコ P-4", "en": "Byakko P-4" },
    "potion": "plusterin",
    "base": "017-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/017-m-004/mono_byakko_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/017-m-004/",
    "recipe": [
      { "tree": "1323-1-001", "count": 6 }
    ]
  },
  "018-m-000": {
    "name": { "ja": "ラヴォクス", "en": "Lovox" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/018-m-000/mono_lovox_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/018-m-000/",
    "recipe": [
      { "tree": "1049-1-001", "count": 9 },
      { "tree": "1042-1-001", "count": 9 }
    ]
  },
  "018-m-001": {
    "name": { "ja": "ラヴォクス P-1", "en": "Lovox P-1" },
    "potion": "plusterin",
    "base": "018-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/018-m-001/mono_lovox_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/018-m-001/",
    "recipe": [
      { "tree": "1082-1-001", "count": 6 }
    ]
  },
  "018-m-002": {
    "name": { "ja": "ラヴォクス P-2", "en": "Lovox P-2" },
    "potion": "plusterin",
    "base": "018-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/018-m-002/mono_lovox_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/018-m-002/",
    "recipe": [
      { "tree": "1096-1-001", "count": 6 }
    ]
  },
  "018-m-003": {
    "name": { "ja": "ラヴォクス P-3", "en": "Lovox P-3" },
    "potion": "plusterin",
    "base": "018-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/018-m-003/mono_lovox_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/018-m-003/",
    "recipe": [
      { "tree": "1154-1-001", "count": 6 }
    ]
  },
  "019-m-000": {
    "name": { "ja": "ハナマキ", "en": "Hanamaki" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/019-m-000/mono_hanamaki_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/019-m-000/",
    "recipe": [
      { "tree": "1044-1-001", "count": 14 }
    ]
  },
  "019-m-001": {
    "name": { "ja": "ハナマキ P-1", "en": "Hanamaki P-1" },
    "potion": "plusterin",
    "base": "019-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/019-m-001/mono_hanamaki_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/019-m-001/",
    "recipe": [
      { "tree": "1094-1-001", "count": 6 }
    ]
  },
  "019-m-002": {
    "name": { "ja": "ハナマキ P-2", "en": "Hanamaki P-2" },
    "potion": "plusterin",
    "base": "019-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/019-m-002/mono_hanamaki_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/019-m-002/",
    "recipe": [
      { "tree": "1097-1-001", "count": 6 }
    ]
  },
  "019-m-003": {
    "name": { "ja": "ハナマキ P-3", "en": "Hanamaki P-3" },
    "potion": "plusterin",
    "base": "019-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/019-m-003/mono_hanamaki_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/019-m-003/",
    "recipe": [
      { "tree": "1213-1-001", "count": 6 }
    ]
  },
  "020-n-000": {
    "name": { "ja": "モノコーン", "en": "Monocorn" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/020-n-000/mono_monocorn_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/020-n-000/",
    "recipe": [
      { "tree": "1053-1-001", "count": 14 }
    ]
  },
  "020-n-001": {
    "name": { "ja": "モノコーン P-1", "en": "Monocorn P-1" },
    "potion": "plusterin",
    "base": "020-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/020-n-001/mono_monocorn_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/020-n-001/",
    "recipe": [
      { "tree": "1072-1-001", "count": 6 }
    ]
  },
  "020-n-002": {
    "name": { "ja": "モノコーン P-2", "en": "Monocorn P-2" },
    "potion": "plusterin",
    "base": "020-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/020-n-002/mono_monocorn_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/020-n-002/",
    "recipe": [
      { "tree": "1089-1-001", "count": 6 }
    ]
  },
  "020-n-003": {
    "name": { "ja": "モノコーン P-3", "en": "Monocorn P-3" },
    "potion": "plusterin",
    "base": "020-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/020-n-003/mono_monocorn_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/020-n-003/",
    "recipe": [
      { "tree": "1200-1-001", "count": 6 }
    ]
  },
  "021-m-000": {
    "name": { "ja": "ムシチョウ", "en": "Mushicho" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/021-m-000/mono_mushicho_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/021-m-000/",
    "recipe": [
      { "tree": "1059-1-001", "count": 9 },
      { "tree": "1060-1-001", "count": 9 }
    ]
  },
  "021-m-001": {
    "name": { "ja": "ムシチョウ P-1", "en": "Mushicho P-1" },
    "potion": "plusterin",
    "base": "021-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/021-m-001/mono_mushicho_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/021-m-001/",
    "recipe": [
      { "tree": "1077-1-001", "count": 6 }
    ]
  },
  "021-m-002": {
    "name": { "ja": "ムシチョウ P-2", "en": "Mushicho P-2" },
    "potion": "plusterin",
    "base": "021-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/021-m-002/mono_mushicho_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/021-m-002/",
    "recipe": [
      { "tree": "1121-1-001", "count": 6 }
    ]
  },
  "021-m-003": {
    "name": { "ja": "ムシチョウ P-3", "en": "Mushicho P-3" },
    "potion": "plusterin",
    "base": "021-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/021-m-003/mono_mushicho_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/021-m-003/",
    "recipe": [
      { "tree": "1195-1-001", "count": 6 }
    ]
  },
  "022-m-000": {
    "name": { "ja": "ピキ", "en": "Piki" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/022-m-000/mono_piki_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/022-m-000/",
    "recipe": [
      { "tree": "1056-1-001", "count": 14 }
    ]
  },
  "022-m-001": {
    "name": { "ja": "ピキ P-1", "en": "Piki P-1" },
    "potion": "plusterin",
    "base": "022-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/022-m-001/mono_piki_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/022-m-001/",
    "recipe": [
      { "tree": "1062-1-001", "count": 6 }
    ]
  },
  "022-m-002": {
    "name": { "ja": "ピキ P-2", "en": "Piki P-2" },
    "potion": "plusterin",
    "base": "022-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/022-m-002/mono_piki_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/022-m-002/",
    "recipe": [
      { "tree": "1075-1-001", "count": 6 }
    ]
  },
  "022-m-003": {
    "name": { "ja": "ピキ P-3", "en": "Piki P-3" },
    "potion": "plusterin",
    "base": "022-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/022-m-003/mono_piki_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/022-m-003/",
    "recipe": [
      { "tree": "1145-1-001", "count": 6 }
    ]
  },
  "022-m-004": {
    "name": { "ja": "ピキ P-4", "en": "Piki P-4" },
    "potion": "plusterin",
    "base": "022-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/022-m-004/mono_piki_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/022-m-004/",
    "recipe": [
      { "tree": "1340-1-001", "count": 6 }
    ]
  },
  "023-n-000": {
    "name": { "ja": "ファードット", "en": "Furdot" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/023-n-000/mono_furdot_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/023-n-000/",
    "recipe": [
      { "tree": "1070-1-001", "count": 14 }
    ]
  },
  "023-n-001": {
    "name": { "ja": "ファードット P-1", "en": "Furdot P-1" },
    "potion": "plusterin",
    "base": "023-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/023-n-001/mono_furdot_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/023-n-001/",
    "recipe": [
      { "tree": "1073-1-001", "count": 6 }
    ]
  },
  "023-n-002": {
    "name": { "ja": "ファードット P-2", "en": "Furdot P-2" },
    "potion": "plusterin",
    "base": "023-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/023-n-002/mono_furdot_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/023-n-002/",
    "recipe": [
      { "tree": "1090-1-001", "count": 6 }
    ]
  },
  "023-n-003": {
    "name": { "ja": "ファードット P-3", "en": "Furdot P-3" },
    "potion": "plusterin",
    "base": "023-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/023-n-003/mono_furdot_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/023-n-003/",
    "recipe": [
      { "tree": "1193-1-001", "count": 6 }
    ]
  },
  "024-m-000": {
    "name": { "ja": "アメノヒグラシ", "en": "Amenohigurashi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/024-m-000/mono_amenohigurashi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/024-m-000/",
    "recipe": [
      { "tree": "1064-1-001", "count": 14 }
    ]
  },
  "024-m-001": {
    "name": { "ja": "アメノヒグラシ P-1", "en": "Amenohigurashi P-1" },
    "potion": "plusterin",
    "base": "024-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/024-m-001/mono_amenohigurashi_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/024-m-001/",
    "recipe": [
      { "tree": "1111-1-001", "count": 6 }
    ]
  },
  "024-m-002": {
    "name": { "ja": "アメノヒグラシ P-2", "en": "Amenohigurashi P-2" },
    "potion": "plusterin",
    "base": "024-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/024-m-002/mono_amenohigurashi_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/024-m-002/",
    "recipe": [
      { "tree": "1177-1-001", "count": 6 }
    ]
  },
  "024-m-003": {
    "name": { "ja": "アメノヒグラシ P-3", "en": "Amenohigurashi P-3" },
    "potion": "plusterin",
    "base": "024-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/024-m-003/mono_amenohigurashi_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/024-m-003/",
    "recipe": [
      { "tree": "1274-1-001", "count": 6 }
    ]
  },
  "025-m-000": {
    "name": { "ja": "クロメ", "en": "Kurome" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/025-m-000/mono_kurome_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/025-m-000/",
    "recipe": [
      { "tree": "1080-1-001", "count": 9 },
      { "tree": "1083-1-001", "count": 9 }
    ]
  },
  "025-m-001": {
    "name": { "ja": "クロメ P-1", "en": "Kurome P-1" },
    "potion": "plusterin",
    "base": "025-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/025-m-001/mono_kurome_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/025-m-001/",
    "recipe": [
      { "tree": "1098-1-001", "count": 6 }
    ]
  },
  "025-m-002": {
    "name": { "ja": "クロメ P-2", "en": "Kurome P-2" },
    "potion": "plusterin",
    "base": "025-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/025-m-002/mono_kurome_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/025-m-002/",
    "recipe": [
      { "tree": "1150-1-001", "count": 6 }
    ]
  },
  "025-m-003": {
    "name": { "ja": "クロメ P-3", "en": "Kurome P-3" },
    "potion": "plusterin",
    "base": "025-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/025-m-003/mono_kurome_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/025-m-003/",
    "recipe": [
      { "tree": "1202-1-001", "count": 6 }
    ]
  },
  "026-m-000": {
    "name": { "ja": "カンボジャク", "en": "Kambojaku" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/026-m-000/mono_kambojaku_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/026-m-000/",
    "recipe": [
      { "tree": "1085-1-001", "count": 9 },
      { "tree": "1071-1-001", "count": 9 }
    ]
  },
  "026-m-001": {
    "name": { "ja": "カンボジャク P-1", "en": "Kambojaku P-1" },
    "potion": "plusterin",
    "base": "026-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/026-m-001/mono_kambojaku_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/026-m-001/",
    "recipe": [
      { "tree": "1123-1-001", "count": 6 }
    ]
  },
  "026-m-002": {
    "name": { "ja": "カンボジャク P-2", "en": "Kambojaku P-2" },
    "potion": "plusterin",
    "base": "026-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/026-m-002/mono_kambojaku_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/026-m-002/",
    "recipe": [
      { "tree": "1138-1-001", "count": 6 }
    ]
  },
  "026-m-003": {
    "name": { "ja": "カンボジャク P-3", "en": "Kambojaku P-3" },
    "potion": "plusterin",
    "base": "026-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/026-m-003/mono_kambojaku_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/026-m-003/",
    "recipe": [
      { "tree": "1204-1-001", "count": 6 }
    ]
  },
  "026-m-004": {
    "name": { "ja": "カンボジャク P-4", "en": "Kambojaku P-4" },
    "potion": "plusterin",
    "base": "026-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/026-m-004/mono_kambojaku_P4_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/026-m-004/",
    "recipe": [
      { "tree": "1341-1-001", "count": 6 }
    ]
  },
  "027-m-000": {
    "name": { "ja": "クンパ", "en": "Kumpa" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/027-m-000/mono_kumpa_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/027-m-000/",
    "recipe": [
      { "tree": "1074-1-001", "count": 14 }
    ]
  },
  "027-m-001": {
    "name": { "ja": "クンパ P-1", "en": "Kumpa P-1" },
    "potion": "plusterin",
    "base": "027-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/027-m-001/mono_kumpa_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/027-m-001/",
    "recipe": [
      { "tree": "1113-1-001", "count": 6 }
    ]
  },
  "027-m-002": {
    "name": { "ja": "クンパ P-2", "en": "Kumpa P-2" },
    "potion": "plusterin",
    "base": "027-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/027-m-002/mono_kumpa_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/027-m-002/",
    "recipe": [
      { "tree": "1198-1-001", "count": 6 }
    ]
  },
  "027-m-003": {
    "name": { "ja": "クンパ P-3", "en": "Kumpa P-3" },
    "potion": "plusterin",
    "base": "027-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/027-m-003/mono_kumpa_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/027-m-003/",
    "recipe": [
      { "tree": "1263-1-001", "count": 6 }
    ]
  },
  "028-m-000": {
    "name": { "ja": "イッカクフェレル", "en": "Ikkaku Ferel" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/028-m-000/mono_ikkakuferel_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/028-m-000/",
    "recipe": [
      { "tree": "1099-1-001", "count": 9 },
      { "tree": "1092-1-001", "count": 9 }
    ]
  },
  "028-m-001": {
    "name": { "ja": "イッカクフェレル P-1", "en": "Ikkaku Ferel P-1" },
    "potion": "plusterin",
    "base": "028-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/028-m-001/mono_ikkakuferel_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/028-m-001/",
    "recipe": [
      { "tree": "1107-1-001", "count": 6 }
    ]
  },
  "028-m-002": {
    "name": { "ja": "イッカクフェレル P-2", "en": "Ikkaku Ferel P-2" },
    "potion": "plusterin",
    "base": "028-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/028-m-002/mono_ikkakuferel_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/028-m-002/",
    "recipe": [
      { "tree": "1184-1-001", "count": 6 }
    ]
  },
  "028-m-003": {
    "name": { "ja": "イッカクフェレル P-3", "en": "Ikkaku Ferel P-3" },
    "potion": "plusterin",
    "base": "028-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/028-m-003/mono_ikkakuferel_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/028-m-003/",
    "recipe": [
      { "tree": "1237-1-001", "count": 6 }
    ]
  },
  "029-m-000": {
    "name": { "ja": "ラビネ", "en": "Rabine" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/029-m-000/mono_rabine_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/029-m-000/",
    "recipe": [
      { "tree": "1109-1-001", "count": 14 }
    ]
  },
  "029-m-001": {
    "name": { "ja": "ラビネ P-1", "en": "Rabine P-1" },
    "potion": "plusterin",
    "base": "029-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/029-m-001/mono_rabine_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/029-m-001/",
    "recipe": [
      { "tree": "1122-1-001", "count": 6 }
    ]
  },
  "029-m-002": {
    "name": { "ja": "ラビネ P-2", "en": "Rabine P-2" },
    "potion": "plusterin",
    "base": "029-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/029-m-002/mono_rabine_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/029-m-002/",
    "recipe": [
      { "tree": "1209-1-001", "count": 6 }
    ]
  },
  "029-m-003": {
    "name": { "ja": "ラビネ P-3", "en": "Rabine P-3" },
    "potion": "plusterin",
    "base": "029-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/029-m-003/mono_rabine_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/029-m-003/",
    "recipe": [
      { "tree": "1259-1-001", "count": 6 }
    ]
  },
  "030-n-000": {
    "name": { "ja": "ハムロット", "en": "Hamlot" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/030-n-000/mono_hamlot_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/030-n-000/",
    "recipe": [
      { "tree": "1091-1-001", "count": 9 },
      { "tree": "1110-1-001", "count": 9 }
    ]
  },
  "030-n-001": {
    "name": { "ja": "ハムロット P-1", "en": "Hamlot P-1" },
    "potion": "plusterin",
    "base": "030-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/030-n-001/mono_hamlot_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/030-n-001/",
    "recipe": [
      { "tree": "1128-1-001", "count": 6 }
    ]
  },
  "030-n-002": {
    "name": { "ja": "ハムロット P-2", "en": "Hamlot P-2" },
    "potion": "plusterin",
    "base": "030-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/030-n-002/mono_hamlot_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/030-n-002/",
    "recipe": [
      { "tree": "1183-1-001", "count": 6 }
    ]
  },
  "030-n-003": {
    "name": { "ja": "ハムロット P-3", "en": "Hamlot P-3" },
    "potion": "plusterin",
    "base": "030-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/030-n-003/mono_hamlot_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/030-n-003/",
    "recipe": [
      { "tree": "1258-1-001", "count": 6 }
    ]
  },
  "031-m-000": {
    "name": { "ja": "ミミマキムクネ", "en": "Mimimaki Mukune" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/031-m-000/mono_mimimakimukune_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/031-m-000/",
    "recipe": [
      { "tree": "1102-1-001", "count": 14 }
    ]
  },
  "031-m-001": {
    "name": { "ja": "ミミマキムクネ P-1", "en": "Mimimaki Mukune P-1" },
    "potion": "plusterin",
    "base": "031-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/031-m-001/mono_mimimakimukune_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/031-m-001/",
    "recipe": [
      { "tree": "1139-1-001", "count": 6 }
    ]
  },
  "031-m-002": {
    "name": { "ja": "ミミマキムクネ P-2", "en": "Mimimaki Mukune P-2" },
    "potion": "plusterin",
    "base": "031-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/031-m-002/mono_mimimakimukune_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/031-m-002/",
    "recipe": [
      { "tree": "1175-1-001", "count": 8 }
    ]
  },
  "031-m-003": {
    "name": { "ja": "ミミマキムクネ P-3", "en": "Mimimaki Mukune P-3" },
    "potion": "plusterin",
    "base": "031-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/031-m-003/mono_mimimakimukune_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/031-m-003/",
    "recipe": [
      { "tree": "1175-1-001", "count": 6 }
    ]
  },
  "032-m-000": {
    "name": { "ja": "ゲッコウヤグラ", "en": "Gekko Yagura" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/032-m-000/mono_gekkoyagura_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/032-m-000/",
    "recipe": [
      { "tree": "1115-1-001", "count": 14 }
    ]
  },
  "032-m-001": {
    "name": { "ja": "ゲッコウヤグラ P-1", "en": "Gekko Yagura P-1" },
    "potion": "plusterin",
    "base": "032-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/032-m-001/mono_gekkoyagura_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/032-m-001/",
    "recipe": [
      { "tree": "1148-1-001", "count": 6 }
    ]
  },
  "032-m-002": {
    "name": { "ja": "ゲッコウヤグラ P-2", "en": "Gekko Yagura P-2" },
    "potion": "plusterin",
    "base": "032-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/032-m-002/mono_gekkoyagura_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/032-m-002/",
    "recipe": [
      { "tree": "1222-1-001", "count": 6 }
    ]
  },
  "033-n-000": {
    "name": { "ja": "バングス", "en": "Bangth" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/033-n-000/mono_bangth_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/033-n-000/",
    "recipe": [
      { "tree": "1130-1-001", "count": 14 }
    ]
  },
  "033-n-001": {
    "name": { "ja": "バングス P-1", "en": "Bangth P-1" },
    "potion": "plusterin",
    "base": "033-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/033-n-001/mono_bangth_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/033-n-001/",
    "recipe": [
      { "tree": "1135-1-001", "count": 6 }
    ]
  },
  "033-n-002": {
    "name": { "ja": "バングス P-2", "en": "Bangth P-2" },
    "potion": "plusterin",
    "base": "033-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/033-n-002/mono_bangth_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/033-n-002/",
    "recipe": [
      { "tree": "1219-1-001", "count": 6 }
    ]
  },
  "033-n-003": {
    "name": { "ja": "バングス P-3", "en": "Bangth P-3" },
    "potion": "plusterin",
    "base": "033-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/033-n-003/mono_bangth_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/033-n-003/",
    "recipe": [
      { "tree": "1264-1-001", "count": 6 }
    ]
  },
  "034-n-000": {
    "name": { "ja": "ホプレクス", "en": "Hoprex" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/034-n-000/mono_hoprex_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/034-n-000/",
    "recipe": [
      { "tree": "1125-1-001", "count": 14 }
    ]
  },
  "034-n-001": {
    "name": { "ja": "ホプレクス P-1", "en": "Hoprex P-1" },
    "potion": "plusterin",
    "base": "034-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/034-n-001/mono_hoprex_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/034-n-001/",
    "recipe": [
      { "tree": "1140-1-001", "count": 6 }
    ]
  },
  "034-n-002": {
    "name": { "ja": "ホプレクス P-2", "en": "Hoprex P-2" },
    "potion": "plusterin",
    "base": "034-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/034-n-002/mono_hoprex_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/034-n-002/",
    "recipe": [
      { "tree": "1196-1-001", "count": 6 }
    ]
  },
  "034-n-003": {
    "name": { "ja": "ホプレクス P-3", "en": "Hoprex P-3" },
    "potion": "plusterin",
    "base": "034-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/034-n-003/mono_hoprex_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/034-n-003/",
    "recipe": [
      { "tree": "1250-1-001", "count": 6 }
    ]
  },
  "035-m-000": {
    "name": { "ja": "スナイロユンク", "en": "Sunairo Yunk" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/035-m-000/mono_sunairoyunk_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/035-m-000/",
    "recipe": [
      { "tree": "1132-1-001", "count": 9 },
      { "tree": "1133-1-001", "count": 9 }
    ]
  },
  "035-m-001": {
    "name": { "ja": "スナイロユンク P-1", "en": "Sunairo Yunk P-1" },
    "potion": "plusterin",
    "base": "035-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/035-m-001/mono_sunairoyunk_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/035-m-001/",
    "recipe": [
      { "tree": "1153-1-001", "count": 6 }
    ]
  },
  "035-m-002": {
    "name": { "ja": "スナイロユンク P-2", "en": "Sunairo Yunk P-2" },
    "potion": "plusterin",
    "base": "035-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/035-m-002/mono_sunairoyunk_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/035-m-002/",
    "recipe": [
      { "tree": "1212-1-001", "count": 6 }
    ]
  },
  "035-m-003": {
    "name": { "ja": "スナイロユンク P-3", "en": "Sunairo Yunk P-3" },
    "potion": "plusterin",
    "base": "035-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/035-m-003/mono_sunairoyunk_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/035-m-003/",
    "recipe": [
      { "tree": "1285-1-001", "count": 6 }
    ]
  },
  "036-n-000": {
    "name": { "ja": "ユキムスビ", "en": "Yuki Musubi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/036-n-000/mono_yukimusubi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/036-n-000/",
    "recipe": [
      { "tree": "1137-1-001", "count": 14 }
    ]
  },
  "036-n-001": {
    "name": { "ja": "ユキムスビ P-1", "en": "Yuki Musubi P-1" },
    "potion": "plusterin",
    "base": "036-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/036-n-001/mono_yukimusubi_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/036-n-001/",
    "recipe": [
      { "tree": "1157-1-001", "count": 6 }
    ]
  },
  "036-n-002": {
    "name": { "ja": "ユキムスビ P-2", "en": "Yuki Musubi P-2" },
    "potion": "plusterin",
    "base": "036-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/036-n-002/mono_yukimusubi_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/036-n-002/",
    "recipe": [
      { "tree": "1226-1-001", "count": 6 }
    ]
  },
  "036-n-003": {
    "name": { "ja": "ユキムスビ P-3", "en": "Yuki Musubi P-3" },
    "potion": "plusterin",
    "base": "036-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/036-n-003/mono_yukimusubi_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/036-n-003/",
    "recipe": [
      { "tree": "1293-1-001", "count": 6 }
    ]
  },
  "037-m-000": {
    "name": { "ja": "ビズー", "en": "Bizoo" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/037-m-000/mono_bizoo_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/037-m-000/",
    "recipe": [
      { "tree": "1141-1-001", "count": 9 },
      { "tree": "1142-1-001", "count": 9 }
    ]
  },
  "037-m-001": {
    "name": { "ja": "ビズー P-1", "en": "Bizoo P-1" },
    "potion": "plusterin",
    "base": "037-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/037-m-001/mono_bizoo_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/037-m-001/",
    "recipe": [
      { "tree": "1185-1-001", "count": 6 }
    ]
  },
  "037-m-002": {
    "name": { "ja": "ビズー P-2", "en": "Bizoo P-2" },
    "potion": "plusterin",
    "base": "037-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/037-m-002/mono_bizoo_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/037-m-002/",
    "recipe": [
      { "tree": "1229-1-001", "count": 6 }
    ]
  },
  "037-m-003": {
    "name": { "ja": "ビズー P-3", "en": "Bizoo P-3" },
    "potion": "plusterin",
    "base": "037-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/037-m-003/mono_bizoo_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/037-m-003/",
    "recipe": [
      { "tree": "1271-1-001", "count": 6 }
    ]
  },
  "038-m-000": {
    "name": { "ja": "ヘンプクジンチョウ", "en": "Hempuku Jincho" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/038-m-000/mono_hempukujincho_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/038-m-000/",
    "recipe": [
      { "tree": "1146-1-001", "count": 9 },
      { "tree": "1147-1-001", "count": 9 }
    ]
  },
  "038-m-001": {
    "name": { "ja": "ヘンプクジンチョウ P-1", "en": "Hempuku Jincho P-1" },
    "potion": "plusterin",
    "base": "038-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/038-m-001/mono_hempukujincho_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/038-m-001/",
    "recipe": [
      { "tree": "1191-1-001", "count": 6 }
    ]
  },
  "038-m-002": {
    "name": { "ja": "ヘンプクジンチョウ P-2", "en": "Hempuku Jincho P-2" },
    "potion": "plusterin",
    "base": "038-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/038-m-002/mono_hempukujincho_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/038-m-002/",
    "recipe": [
      { "tree": "1228-1-001", "count": 6 }
    ]
  },
  "038-m-003": {
    "name": { "ja": "ヘンプクジンチョウ P-3", "en": "Hempuku Jincho P-3" },
    "potion": "plusterin",
    "base": "038-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/038-m-003/mono_hempukujincho_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/038-m-003/",
    "recipe": [
      { "tree": "1344-1-001", "count": 6 }
    ]
  },
  "039-m-000": {
    "name": { "ja": "ウォーム", "en": "Warm" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/039-m-000/mono_warm_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/039-m-000/",
    "recipe": [
      { "tree": "1172-1-001", "count": 9 },
      { "tree": "1151-1-001", "count": 9 }
    ]
  },
  "039-m-001": {
    "name": { "ja": "ウォーム P-1", "en": "Warm P-1" },
    "potion": "plusterin",
    "base": "039-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/039-m-001/mono_warm_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/039-m-001/",
    "recipe": [
      { "tree": "1189-1-001", "count": 6 }
    ]
  },
  "039-m-002": {
    "name": { "ja": "ウォーム P-2", "en": "Warm P-2" },
    "potion": "plusterin",
    "base": "039-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/039-m-002/mono_warm_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/039-m-002/",
    "recipe": [
      { "tree": "1241-1-001", "count": 6 }
    ]
  },
  "039-m-003": {
    "name": { "ja": "ウォーム P-3", "en": "Warm P-3" },
    "potion": "plusterin",
    "base": "039-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/039-m-003/mono_warm_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/039-m-003/",
    "recipe": [
      { "tree": "1337-1-001", "count": 6 }
    ]
  },
  "040-m-000": {
    "name": { "ja": "ユキムグリ", "en": "Yuki Muguri" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/040-m-000/mono_yukimuguri_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/040-m-000/",
    "recipe": [
      { "tree": "1156-1-001", "count": 14 }
    ]
  },
  "040-m-001": {
    "name": { "ja": "ユキムグリ P-1", "en": "Yuki Muguri P-1" },
    "potion": "plusterin",
    "base": "040-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/040-m-001/mono_yukimuguri_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/040-m-001/",
    "recipe": [
      { "tree": "1203-1-001", "count": 6 }
    ]
  },
  "040-m-002": {
    "name": { "ja": "ユキムグリ P-2", "en": "Yuki Muguri P-2" },
    "potion": "plusterin",
    "base": "040-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/040-m-002/mono_yukimuguri_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/040-m-002/",
    "recipe": [
      { "tree": "1246-1-001", "count": 6 }
    ]
  },
  "041-m-000": {
    "name": { "ja": "ジュラファント", "en": "Juraphant" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/041-m-000/mono_juraphant_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/041-m-000/",
    "recipe": [
      { "tree": "1159-1-001", "count": 14 }
    ]
  },
  "041-m-001": {
    "name": { "ja": "ジュラファント P-1", "en": "Juraphant P-1" },
    "potion": "plusterin",
    "base": "041-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/041-m-001/mono_juraphant_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/041-m-001/",
    "recipe": [
      { "tree": "1208-1-001", "count": 6 }
    ]
  },
  "041-m-002": {
    "name": { "ja": "ジュラファント P-2", "en": "Juraphant P-2" },
    "potion": "plusterin",
    "base": "041-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/041-m-002/mono_juraphant_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/041-m-002/",
    "recipe": [
      { "tree": "1270-1-001", "count": 6 }
    ]
  },
  "042-m-000": {
    "name": { "ja": "ツノツキウリュー", "en": "Tsunotsuki Uryu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/042-m-000/mono_tsunotsukiuryu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/042-m-000/",
    "recipe": [
      { "tree": "1174-1-001", "count": 14 }
    ]
  },
  "042-m-001": {
    "name": { "ja": "ツノツキウリュー P-1", "en": "Tsunotsuki Uryu P-1" },
    "potion": "plusterin",
    "base": "042-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/042-m-001/mono_tsunotsukiuryu_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/042-m-001/",
    "recipe": [
      { "tree": "1210-1-001", "count": 6 }
    ]
  },
  "042-m-002": {
    "name": { "ja": "ツノツキウリュー P-2", "en": "Tsunotsuki Uryu P-2" },
    "potion": "plusterin",
    "base": "042-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/042-m-002/mono_tsunotsukiuryu_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/042-m-002/",
    "recipe": [
      { "tree": "1244-1-001", "count": 6 }
    ]
  },
  "043-m-000": {
    "name": { "ja": "ハナアルキ", "en": "Hana Aruki" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/043-m-000/mono_hanaaruki_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/043-m-000/",
    "recipe": [
      { "tree": "1105-1-001", "count": 14 }
    ]
  },
  "043-m-001": {
    "name": { "ja": "ハナアルキ P-1", "en": "Hana Aruki P-1" },
    "potion": "plusterin",
    "base": "043-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/043-m-001/mono_hanaaruki_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/043-m-001/",
    "recipe": [
      { "tree": "1207-1-001", "count": 6 }
    ]
  },
  "043-m-002": {
    "name": { "ja": "ハナアルキ P-2", "en": "Hana Aruki P-2" },
    "potion": "plusterin",
    "base": "043-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/043-m-002/mono_hanaaruki_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/043-m-002/",
    "recipe": [
      { "tree": "1242-1-001", "count": 6 }
    ]
  },
  "043-m-003": {
    "name": { "ja": "ハナアルキ P-3", "en": "Hana Aruki P-3" },
    "potion": "plusterin",
    "base": "043-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/043-m-003/mono_hanaaruki_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/043-m-003/",
    "recipe": [
      { "tree": "1372-1-001", "count": 6 }
    ]
  },
  "044-n-000": {
    "name": { "ja": "ハリニコゲ", "en": "Hari Nikoge" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/044-n-000/mono_harinikoge_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/044-n-000/",
    "recipe": [
      { "tree": "1181-1-001", "count": 14 }
    ]
  },
  "044-n-001": {
    "name": { "ja": "ハリニコゲ P-1", "en": "Hari Nikoge P-1" },
    "potion": "plusterin",
    "base": "044-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/044-n-001/mono_harinikoge_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/044-n-001/",
    "recipe": [
      { "tree": "1220-1-001", "count": 6 }
    ]
  },
  "044-n-002": {
    "name": { "ja": "ハリニコゲ P-2", "en": "Hari Nikoge P-2" },
    "potion": "plusterin",
    "base": "044-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/044-n-002/mono_harinikoge_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/044-n-002/",
    "recipe": [
      { "tree": "1267-1-001", "count": 6 }
    ]
  },
  "045-m-000": {
    "name": { "ja": "ネタツザル", "en": "Netatsuzaru" },
    "potion": "mix",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/045-m-000/mono_netatsuzaru_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/045-m-000/",
    "recipe": [
      { "tree": "1186-1-001", "count": 8 },
      { "tree": "1016-1-001", "count": 6 },
      { "tree": "1001-1-001", "count": 6 }
    ]
  },
  "045-m-001": {
    "name": { "ja": "ネタツザル P-1", "en": "Netatsuzaru P-1" },
    "potion": "plusterin",
    "base": "045-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/045-m-001/mono_netatsuzaru_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/045-m-001/",
    "recipe": [
      { "tree": "1164-1-001", "count": 6 }
    ]
  },
  "045-m-002": {
    "name": { "ja": "ネタツザル P-2", "en": "Netatsuzaru P-2" },
    "potion": "plusterin",
    "base": "045-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/045-m-002/mono_netatsuzaru_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/045-m-002/",
    "recipe": [
      { "tree": "1255-1-001", "count": 6 }
    ]
  },
  "046-m-000": {
    "name": { "ja": "ミズカミノオロチ", "en": "Mizukamino Orochi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/046-m-000/mono_mizukaminoorochi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/046-m-000/",
    "recipe": [
      { "tree": "1187-1-001", "count": 14 }
    ]
  },
  "046-m-001": {
    "name": { "ja": "ミズカミノオロチ P-1", "en": "Mizukamino Orochi P-1" },
    "potion": "plusterin",
    "base": "046-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/046-m-001/mono_mizukaminoorochi_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/046-m-001/",
    "recipe": [
      { "tree": "1218-1-001", "count": 6 }
    ]
  },
  "046-m-002": {
    "name": { "ja": "ミズカミノオロチ P-2", "en": "Mizukamino Orochi P-2" },
    "potion": "plusterin",
    "base": "046-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/046-m-002/mono_mizukaminoorochi_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/046-m-002/",
    "recipe": [
      { "tree": "1282-1-001", "count": 6 }
    ]
  },
  "046-m-003": {
    "name": { "ja": "ミズカミノオロチ P-3", "en": "Mizukamino Orochi P-3" },
    "potion": "plusterin",
    "base": "046-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/046-m-003/mono_mizukaminoorochi_P3_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/046-m-003/",
    "recipe": [
      { "tree": "1315-1-001", "count": 6 }
    ]
  },
  "047-m-000": {
    "name": { "ja": "ミンツ", "en": "Mints" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/047-m-000/mono_mints_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/047-m-000/",
    "recipe": [
      { "tree": "1190-1-001", "count": 14 }
    ]
  },
  "047-m-001": {
    "name": { "ja": "ミンツ P-1", "en": "Mints P-1" },
    "potion": "plusterin",
    "base": "047-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/047-m-001/mono_mints_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/047-m-001/",
    "recipe": [
      { "tree": "1225-1-001", "count": 6 }
    ]
  },
  "047-m-002": {
    "name": { "ja": "ミンツ P-2", "en": "Mints P-2" },
    "potion": "plusterin",
    "base": "047-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/047-m-002/mono_mints_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/047-m-002/",
    "recipe": [
      { "tree": "1297-1-001", "count": 6 }
    ]
  },
  "048-m-000": {
    "name": { "ja": "ルシア", "en": "Lucia" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/048-m-000/mono_lucia_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/048-m-000/",
    "recipe": [
      { "tree": "1192-1-001", "count": 14 }
    ]
  },
  "048-m-001": {
    "name": { "ja": "ルシア P-1", "en": "Lucia P-1" },
    "potion": "plusterin",
    "base": "048-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/048-m-001/mono_lucia_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/048-m-001/",
    "recipe": [
      { "tree": "1231-1-001", "count": 6 }
    ]
  },
  "048-m-002": {
    "name": { "ja": "ルシア P-2", "en": "Lucia P-2" },
    "potion": "plusterin",
    "base": "048-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/048-m-002/mono_lucia_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/048-m-002/",
    "recipe": [
      { "tree": "1296-1-001", "count": 6 }
    ]
  },
  "049-m-000": {
    "name": { "ja": "マウンテンピグミー", "en": "Mountain Pygmy" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/049-m-000/mono_mountainpygmy_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/049-m-000/",
    "recipe": [
      { "tree": "1199-1-001", "count": 14 }
    ]
  },
  "049-m-001": {
    "name": { "ja": "マウンテンピグミー P-1", "en": "Mountain Pygmy P-1" },
    "potion": "plusterin",
    "base": "049-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/049-m-001/mono_mountainpygmy_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/049-m-001/",
    "recipe": [
      { "tree": "1232-1-001", "count": 6 }
    ]
  },
  "049-m-002": {
    "name": { "ja": "マウンテンピグミーP-2", "en": "Mountain Pygmy P-2" },
    "potion": "plusterin",
    "base": "049-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/049-m-002/mono_mountainpygmy_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/049-m-002/",
    "recipe": [
      { "tree": "1308-1-001", "count": 6 }
    ]
  },
  "053-m-000": {
    "name": { "ja": "オサナヒグラシ", "en": "Osanahigurashi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/053-m-000/mono_osanahigurashi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/053-m-000/",
    "recipe": [
      { "tree": "1206-1-001", "count": 14 }
    ]
  },
  "053-m-001": {
    "name": { "ja": "オサナヒグラシ P-1", "en": "Osanahigurashi P-1" },
    "potion": "plusterin",
    "base": "053-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/053-m-001/mono_osanahigurashi_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/053-m-001/",
    "recipe": [
      { "tree": "1248-1-001", "count": 6 }
    ]
  },
  "053-m-002": {
    "name": { "ja": "オサナヒグラシ P-2", "en": "Osanahigurashi P-2" },
    "potion": "plusterin",
    "base": "053-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/053-m-002/mono_osanahigurashi_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/053-m-002/",
    "recipe": [
      { "tree": "1324-1-001", "count": 6 }
    ]
  },
  "054-m-000": {
    "name": { "ja": "ムラクモノテンマ", "en": "Murakumono Temma" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/054-m-000/mono_murakumonotemma_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/054-m-000/",
    "recipe": [
      { "tree": "1211-1-001", "count": 14 }
    ]
  },
  "054-m-001": {
    "name": { "ja": "ムラクモノテンマ P-1", "en": "Murakumono Temma P-1" },
    "potion": "plusterin",
    "base": "054-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/054-m-001/mono_murakumonotemma_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/054-m-001/",
    "recipe": [
      { "tree": "1249-1-001", "count": 6 }
    ]
  },
  "054-m-002": {
    "name": { "ja": "ムラクモノテンマ P-2", "en": "Murakumono Temma P-2" },
    "potion": "plusterin",
    "base": "054-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/054-m-002/mono_murakumonotemma_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/054-m-002/",
    "recipe": [
      { "tree": "1318-1-001", "count": 6 }
    ]
  },
  "055-m-000": {
    "name": { "ja": "ホオベニムクチョウ", "en": "Hobeni Mukucho" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/055-m-000/mono_hobenimukucho_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/055-m-000/",
    "recipe": [
      { "tree": "1215-1-001", "count": 14 }
    ]
  },
  "055-m-001": {
    "name": { "ja": "ホオベニムクチョウ P-1", "en": "Hobeni Mukucho P-1" },
    "potion": "plusterin",
    "base": "055-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/055-m-001/mono_hobenimukucho_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/055-m-001/",
    "recipe": [
      { "tree": "1240-1-001", "count": 6 }
    ]
  },
  "055-m-002": {
    "name": { "ja": "ホオベニムクチョウ P-2", "en": "Hobeni Mukucho P-2" },
    "potion": "plusterin",
    "base": "055-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/055-m-002/mono_hobenimukucho_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/055-m-002/",
    "recipe": [
      { "tree": "1289-1-001", "count": 6 }
    ]
  },
  "056-m-000": {
    "name": { "ja": "オオツノワタケ", "en": "Otsuno Watake" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/056-m-000/mono_otsunowatake_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/056-m-000/",
    "recipe": [
      { "tree": "1216-1-001", "count": 14 }
    ]
  },
  "056-m-001": {
    "name": { "ja": "オオツノワタケ P-1", "en": "Otsuno Watake P-1" },
    "potion": "plusterin",
    "base": "056-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/056-m-001/mono_otsunowatake_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/056-m-001/",
    "recipe": [
      { "tree": "1234-1-001", "count": 6 }
    ]
  },
  "056-m-002": {
    "name": { "ja": "オオツノワタケ P-2", "en": "Otsuno Watake P-2" },
    "potion": "plusterin",
    "base": "056-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/056-m-002/mono_otsunowatake_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/056-m-002/",
    "recipe": [
      { "tree": "1287-1-001", "count": 6 }
    ]
  },
  "057-n-000": {
    "name": { "ja": "ムング", "en": "Muungu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/057-n-000/mono_muungu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/057-n-000/",
    "recipe": [
      { "tree": "1217-1-001", "count": 14 }
    ]
  },
  "057-n-001": {
    "name": { "ja": "ムング P-1", "en": "Muungu P-1" },
    "potion": "plusterin",
    "base": "057-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/057-n-001/mono_muungu_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/057-n-001/",
    "recipe": [
      { "tree": "1254-1-001", "count": 6 }
    ]
  },
  "057-n-002": {
    "name": { "ja": "ムング P-2", "en": "Muungu P-2" },
    "potion": "plusterin",
    "base": "057-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/057-n-002/mono_muungu_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/057-n-002/",
    "recipe": [
      { "tree": "1326-1-001", "count": 6 }
    ]
  },
  "058-m-000": {
    "name": { "ja": "トウナスモドキ", "en": "Tonasu Modoki" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/058-m-000/mono_tonasumodoki_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/058-m-000/",
    "recipe": [
      { "tree": "1221-1-001", "count": 14 }
    ]
  },
  "058-m-001": {
    "name": { "ja": "トウナスモドキ P-1", "en": "Tonasu Modoki P-1" },
    "potion": "plusterin",
    "base": "058-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/058-m-001/mono_tonasumodoki_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/058-m-001/",
    "recipe": [
      { "tree": "1278-1-001", "count": 6 }
    ]
  },
  "059-m-000": {
    "name": { "ja": "リオン", "en": "Rion" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/059-m-000/mono_rion_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/059-m-000/",
    "recipe": [
      { "tree": "1223-1-001", "count": 14 }
    ]
  },
  "059-m-001": {
    "name": { "ja": "リオン P-1", "en": "Rion P-1" },
    "potion": "plusterin",
    "base": "059-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/059-m-001/mono_rion_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/059-m-001/",
    "recipe": [
      { "tree": "1252-1-001", "count": 6 }
    ]
  },
  "059-m-002": {
    "name": { "ja": "リオン P-2", "en": "Rion P-2" },
    "potion": "plusterin",
    "base": "059-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/059-m-002/mono_rion_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/059-m-002/",
    "recipe": [
      { "tree": "1310-1-001", "count": 6 }
    ]
  },
  "060-m-000": {
    "name": { "ja": "ヴォルフ", "en": "Volf" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/060-m-000/mono_volf_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/060-m-000/",
    "recipe": [
      { "tree": "1227-1-001", "count": 14 }
    ]
  },
  "060-m-001": {
    "name": { "ja": "ヴォルフ P-1", "en": "Volf P-1" },
    "potion": "plusterin",
    "base": "060-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/060-m-001/mono_volf_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/060-m-001/",
    "recipe": [
      { "tree": "1257-1-001", "count": 6 }
    ]
  },
  "061-m-000": {
    "name": { "ja": "シャマネコ", "en": "Shamaneko" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/061-m-000/mono_shamaneko_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/061-m-000/",
    "recipe": [
      { "tree": "1230-1-001", "count": 14 }
    ]
  },
  "061-m-001": {
    "name": { "ja": "シャマネコ P-1", "en": "Shamaneko P-1" },
    "potion": "plusterin",
    "base": "061-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/061-m-001/mono_shamaneko_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/061-m-001/",
    "recipe": [
      { "tree": "1268-1-001", "count": 6 }
    ]
  },
  "061-m-002": {
    "name": { "ja": "シャマネコ P-2", "en": "Shamaneko P-2" },
    "potion": "plusterin",
    "base": "061-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/061-m-002/mono_shamaneko_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/061-m-002/",
    "recipe": [
      { "tree": "1367-1-001", "count": 6 }
    ]
  },
  "062-n-000": {
    "name": { "ja": "マーモール", "en": "Marmolu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/062-n-000/mono_marmolu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/062-n-000/",
    "recipe": [
      { "tree": "1233-1-001", "count": 14 }
    ]
  },
  "062-n-001": {
    "name": { "ja": "マーモール P-1", "en": "Marmolu P-1" },
    "potion": "plusterin",
    "base": "062-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/062-n-001/mono_marmolu_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/062-n-001/",
    "recipe": [
      { "tree": "1260-1-001", "count": 6 }
    ]
  },
  "062-n-002": {
    "name": { "ja": "マーモール P-2", "en": "Marmolu P-2" },
    "potion": "plusterin",
    "base": "062-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/062-n-002/mono_marmolu_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/062-n-002/",
    "recipe": [
      { "tree": "1330-1-001", "count": 6 }
    ]
  },
  "063-m-000": {
    "name": { "ja": "ユキワラベ", "en": "Yuki Warabe" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/063-m-000/mono_yukiwarabe_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/063-m-000/",
    "recipe": [
      { "tree": "1236-1-001", "count": 14 }
    ]
  },
  "063-m-001": {
    "name": { "ja": "ユキワラベ P-1", "en": "Yuki Warabe P-1" },
    "potion": "plusterin",
    "base": "063-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/063-m-001/mono_yukiwarabe_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/063-m-001/",
    "recipe": [
      { "tree": "1291-1-001", "count": 6 }
    ]
  },
  "063-m-002": {
    "name": { "ja": "ユキワラベ P-2", "en": "Yuki Warabe P-2" },
    "potion": "plusterin",
    "base": "063-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/063-m-002/mono_yukiwarabe_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/063-m-002/",
    "recipe": [
      { "tree": "1328-1-001", "count": 6 }
    ]
  },
  "064-m-000": {
    "name": { "ja": "スノードット", "en": "Snow Dot" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/064-m-000/mono_snowdot_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/064-m-000/",
    "recipe": [
      { "tree": "1238-1-001", "count": 14 }
    ]
  },
  "064-m-001": {
    "name": { "ja": "スノードット P-1", "en": "Snow Dot P-1" },
    "potion": "plusterin",
    "base": "064-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/064-m-001/mono_snowdot_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/064-m-001/",
    "recipe": [
      { "tree": "1283-1-001", "count": 6 }
    ]
  },
  "064-m-002": {
    "name": { "ja": "スノードット P-2", "en": "Snow Dot P-2" },
    "potion": "plusterin",
    "base": "064-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/064-m-002/mono_snowdot_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/064-m-002/",
    "recipe": [
      { "tree": "1317-1-001", "count": 6 }
    ]
  },
  "065-m-000": {
    "name": { "ja": "ステルラ", "en": "Stella" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/065-m-000/mono_stella_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/065-m-000/",
    "recipe": [
      { "tree": "1243-1-001", "count": 14 }
    ]
  },
  "065-m-001": {
    "name": { "ja": "ステルラ P-1", "en": "Stella P-1" },
    "potion": "plusterin",
    "base": "065-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/065-m-001/mono_stella_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/065-m-001/",
    "recipe": [
      { "tree": "1319-1-001", "count": 6 }
    ]
  },
  "066-n-000": {
    "name": { "ja": "ジャノモノケ", "en": "Janomonoke" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/066-n-000/mono_janomonoke_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/066-n-000/",
    "recipe": [
      { "tree": "1245-1-001", "count": 14 }
    ]
  },
  "066-n-001": {
    "name": { "ja": "ジャノモノケ P-1", "en": "Janomonoke P-1" },
    "potion": "plusterin",
    "base": "066-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/066-n-001/mono_janomonoke_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/066-n-001/",
    "recipe": [
      { "tree": "1288-1-001", "count": 6 }
    ]
  },
  "066-n-002": {
    "name": { "ja": "ジャノモノケ P-2", "en": "Janomonoke P-2" },
    "potion": "plusterin",
    "base": "066-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/066-n-002/mono_janomonoke_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/066-n-002/",
    "recipe": [
      { "tree": "1332-1-001", "count": 6 }
    ]
  },
  "067-m-000": {
    "name": { "ja": "キャンディスノー", "en": "Candy Snow" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/067-m-000/mono_candysnow_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/067-m-000/",
    "recipe": [
      { "tree": "1247-1-001", "count": 14 }
    ]
  },
  "067-m-001": {
    "name": { "ja": "キャンディスノー P-1", "en": "Candy Snow P-1" },
    "potion": "plusterin",
    "base": "067-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/067-m-001/mono_candysnow_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/067-m-001/",
    "recipe": [
      { "tree": "1302-1-001", "count": 6 }
    ]
  },
  "067-m-002": {
    "name": { "ja": "キャンディスノー P-2", "en": "Candy Snow P-2" },
    "potion": "plusterin",
    "base": "067-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/067-m-002/mono_candysnow_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/067-m-002/",
    "recipe": [
      { "tree": "1357-1-001", "count": 6 }
    ]
  },
  "068-n-000": {
    "name": { "ja": "ロゼルラ", "en": "Rozella" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/068-n-000/mono_rozella_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/068-n-000/",
    "recipe": [
      { "tree": "1251-1-001", "count": 14 }
    ]
  },
  "068-n-001": {
    "name": { "ja": "ロゼルラ P-1", "en": "Rozella P-1" },
    "potion": "plusterin",
    "base": "068-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/068-n-001/mono_rozella_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/068-n-001/",
    "recipe": [
      { "tree": "1294-1-001", "count": 6 }
    ]
  },
  "069-m-000": {
    "name": { "ja": "ワング", "en": "Wanguu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/069-m-000/mono_wanguu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/069-m-000/",
    "recipe": [
      { "tree": "1253-1-001", "count": 14 }
    ]
  },
  "069-m-001": {
    "name": { "ja": "ワング P-1", "en": "Wanguu P-1" },
    "potion": "plusterin",
    "base": "069-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/069-m-001/mono_wanguu_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/069-m-001/",
    "recipe": [
      { "tree": "1307-1-001", "count": 6 }
    ]
  },
  "069-m-002": {
    "name": { "ja": "ワング P-2", "en": "Wanguu P-2" },
    "potion": "plusterin",
    "base": "069-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/069-m-002/mono_wanguu_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/069-m-002/",
    "recipe": [
      { "tree": "1347-1-001", "count": 6 }
    ]
  },
  "070-a-000": {
    "name": { "ja": "ヒメゼルラ", "en": "Hime Zella" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/070-a-000/mono_himezella_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/070-a-000/",
    "recipe": [
      { "tree": "1256-1-001", "count": 14 }
    ]
  },
  "070-a-001": {
    "name": { "ja": "ヒメゼルラ P-1", "en": "Hime Zella P-1" },
    "potion": "plusterin",
    "base": "070-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/070-a-001/mono_himezella_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/070-a-001/",
    "recipe": [
      { "tree": "1306-1-001", "count": 6 }
    ]
  },
  "070-a-002": {
    "name": { "ja": "ヒメゼルラ P-2", "en": "Hime Zella P-2" },
    "potion": "plusterin",
    "base": "070-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/070-a-002/mono_himezella_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/070-a-002/",
    "recipe": [
      { "tree": "1353-1-001", "count": 6 }
    ]
  },
  "071-n-000": {
    "name": { "ja": "レオソルム", "en": "Leosolem" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/071-n-000/mono_leosolem_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/071-n-000/",
    "recipe": [
      { "tree": "1261-1-001", "count": 14 }
    ]
  },
  "071-n-001": {
    "name": { "ja": "レオソルム P-1", "en": "Leosolem P-1" },
    "potion": "plusterin",
    "base": "071-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/071-n-001/mono_leosolem_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/071-n-001/",
    "recipe": [
      { "tree": "1300-1-001", "count": 6 }
    ]
  },
  "071-n-002": {
    "name": { "ja": "レオソルム P-2", "en": "Leosolem P-2" },
    "potion": "plusterin",
    "base": "071-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/071-n-002/mono_leosolem_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/071-n-002/",
    "recipe": [
      { "tree": "1365-1-001", "count": 6 }
    ]
  },
  "072-m-000": {
    "name": { "ja": "プリミティブピグミー", "en": "Primitive Pygmy" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/072-m-000/mono_primitivepygmy_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/072-m-000/",
    "recipe": [
      { "tree": "1265-1-001", "count": 14 }
    ]
  },
  "072-m-001": {
    "name": { "ja": "プリミティブピグミー P-1", "en": "Primitive Pygmy P-1" },
    "potion": "plusterin",
    "base": "072-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/072-m-001/mono_primitivepygmy_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/072-m-001/",
    "recipe": [
      { "tree": "1311-1-001", "count": 6 }
    ]
  },
  "072-m-002": {
    "name": { "ja": "プリミティブピグミー P-2", "en": "Primitive Pygmy P-2" },
    "potion": "plusterin",
    "base": "072-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/072-m-002/mono_primitivepygmy_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/072-m-002/",
    "recipe": [
      { "tree": "1359-1-001", "count": 6 }
    ]
  },
  "076-n-000": {
    "name": { "ja": "ポムフロート", "en": "Pomfloat" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/076-n-000/mono_pomfloat_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/076-n-000/",
    "recipe": [
      { "tree": "1266-1-001", "count": 14 }
    ]
  },
  "076-n-001": {
    "name": { "ja": "ポムフロート P-1", "en": "Pomfloat P-1" },
    "potion": "plusterin",
    "base": "076-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/076-n-001/mono_pomfloat_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/076-n-001/",
    "recipe": [
      { "tree": "1305-1-001", "count": 6 }
    ]
  },
  "076-n-002": {
    "name": { "ja": "ポムフロート P-2", "en": "Pomfloat P-2" },
    "potion": "plusterin",
    "base": "076-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/076-n-002/mono_pomfloat_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/076-n-002/",
    "recipe": [
      { "tree": "1346-1-001", "count": 6 }
    ]
  },
  "077-n-000": {
    "name": { "ja": "レミント", "en": "Remmint" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/077-n-000/mono_remmint_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/077-n-000/",
    "recipe": [
      { "tree": "1272-1-001", "count": 14 }
    ]
  },
  "077-n-001": {
    "name": { "ja": "レミント P-1", "en": "Remmint P-1" },
    "potion": "plusterin",
    "base": "077-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/077-n-001/mono_remmint_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/077-n-001/",
    "recipe": [
      { "tree": "1312-1-001", "count": 6 }
    ]
  },
  "073-n-000": {
    "name": { "ja": "アニュリラ", "en": "Annulila" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/073-n-000/mono_annulila_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/073-n-000/",
    "recipe": [
      { "tree": "1280-1-001", "count": 14 }
    ]
  },
  "073-n-001": {
    "name": { "ja": "アニュリラ P-1", "en": "Annulila P-1" },
    "potion": "plusterin",
    "base": "073-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/073-n-001/mono_annulila_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/073-n-001/",
    "recipe": [
      { "tree": "1329-1-001", "count": 6 }
    ]
  },
  "074-n-000": {
    "name": { "ja": "ミミリット", "en": "Mimilit" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/074-n-000/mono_mimilit_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/074-n-000/",
    "recipe": [
      { "tree": "1281-1-001", "count": 14 }
    ]
  },
  "074-n-001": {
    "name": { "ja": "ミミリット P-1", "en": "Mimilit P-1" },
    "potion": "plusterin",
    "base": "074-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/074-n-001/mono_mimilit_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/074-n-001/",
    "recipe": [
      { "tree": "1321-1-001", "count": 6 }
    ]
  },
  "075-a-000": {
    "name": { "ja": "ドワーフピグミー", "en": "Dwarf Pygmy" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/075-a-000/mono_dwarfpygmy_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/075-a-000/",
    "recipe": [
      { "tree": "1284-1-001", "count": 14 }
    ]
  },
  "075-a-001": {
    "name": { "ja": "ドワーフピグミー P-1", "en": "Dwarf Pygmy P-1" },
    "potion": "plusterin",
    "base": "075-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/075-a-001/mono_dwarfpygmy_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/075-a-001/",
    "recipe": [
      { "tree": "1335-1-001", "count": 6 }
    ]
  },
  "075-a-002": {
    "name": { "ja": "ドワーフピグミー P-2", "en": "Dwarf Pygmy P-2" },
    "potion": "plusterin",
    "base": "075-a-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/075-a-002/mono_dwarfpygmy_P2_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/075-a-002/",
    "recipe": [
      { "tree": "1370-1-001", "count": 6 }
    ]
  },
  "081-n-000": {
    "name": { "ja": "シャークビット", "en": "Sharkbit" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/081-n-000/mono_sharkbit_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/081-n-000/",
    "recipe": [
      { "tree": "1286-1-001", "count": 14 }
    ]
  },
  "081-n-001": {
    "name": { "ja": "シャークビット P-1", "en": "Sharkbit P-1" },
    "potion": "plusterin",
    "base": "081-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/081-n-001/mono_sharkbit_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/081-n-001/",
    "recipe": [
      { "tree": "1352-1-001", "count": 6 }
    ]
  },
  "082-m-000": {
    "name": { "ja": "フィンク", "en": "Finck" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/082-m-000/mono_finck_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/082-m-000/",
    "recipe": [
      { "tree": "1292-1-001", "count": 14 }
    ]
  },
  "083-m-000": {
    "name": { "ja": "ナイトメア", "en": "Nightmare" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/083-m-000/mono_nightmare_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/083-m-000/",
    "recipe": [
      { "tree": "1298-1-001", "count": 14 }
    ]
  },
  "083-m-001": {
    "name": { "ja": "ナイトメア P-1", "en": "Nightmare P-1" },
    "potion": "plusterin",
    "base": "083-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/083-m-001/mono_nightmare_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/083-m-001/",
    "recipe": [
      { "tree": "1356-1-001", "count": 6 }
    ]
  },
  "084-m-000": {
    "name": { "ja": "レヴナント", "en": "Revenant" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/084-m-000/mono_revenant_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/084-m-000/",
    "recipe": [
      { "tree": "1301-1-001", "count": 14 }
    ]
  },
  "084-m-001": {
    "name": { "ja": "レヴナント P-1", "en": "Revenant P-1" },
    "potion": "plusterin",
    "base": "084-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/084-m-001/mono_revenant_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/084-m-001/",
    "recipe": [
      { "tree": "1303-1-001", "count": 6 }
    ]
  },
  "085-m-000": {
    "name": { "ja": "ウルラ", "en": "Ulula" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/085-m-000/mono_ulula_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/085-m-000/",
    "recipe": [
      { "tree": "1304-1-001", "count": 14 }
    ]
  },
  "085-m-001": {
    "name": { "ja": "ウルラ P-1", "en": "Ulula P-1" },
    "potion": "plusterin",
    "base": "085-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/085-m-001/mono_ulula_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/085-m-001/",
    "recipe": [
      { "tree": "1364-1-001", "count": 6 }
    ]
  },
  "086-m-000": {
    "name": { "ja": "アシェット", "en": "Assiette" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/086-m-000/mono_assiette_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/086-m-000/",
    "recipe": [
      { "tree": "1309-1-001", "count": 14 }
    ]
  },
  "086-m-001": {
    "name": { "ja": "アシェット P-1", "en": "Assiette P-1" },
    "potion": "plusterin",
    "base": "086-m-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/086-m-001/mono_assiette_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/086-m-001/",
    "recipe": [
      { "tree": "1314-1-001", "count": 6 }
    ]
  },
  "088-m-000": {
    "name": { "ja": "ナタリス", "en": "Natalis" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/088-m-000/mono_natalis_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/088-m-000/",
    "recipe": [
      { "tree": "1313-1-001", "count": 14 }
    ]
  },
  "087-n-000": {
    "name": { "ja": "マルコマ", "en": "Marukoma" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/087-n-000/mono_marukoma_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/087-n-000/",
    "recipe": [
      { "tree": "1316-1-001", "count": 14 }
    ]
  },
  "089-m-000": {
    "name": { "ja": "ゴズ", "en": "Gozu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/089-m-000/mono_gozu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/089-m-000/",
    "recipe": [
      { "tree": "1320-1-001", "count": 14 }
    ]
  },
  "090-n-000": {
    "name": { "ja": "パフー", "en": "Paffuu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/090-n-000/mono_paffuu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/090-n-000/",
    "recipe": [
      { "tree": "1322-1-001", "count": 14 }
    ]
  },
  "090-n-001": {
    "name": { "ja": "パフー P-1", "en": "Paffuu P-1" },
    "potion": "plusterin",
    "base": "090-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/090-n-001/mono_paffuu_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/090-n-001/",
    "recipe": [
      { "tree": "1361-1-001", "count": 6 }
    ]
  },
  "091-m-000": {
    "name": { "ja": "リルネ", "en": "Rirune" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/091-m-000/mono_rirune_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/091-m-000/",
    "recipe": [
      { "tree": "1325-1-001", "count": 14 }
    ]
  },
  "092-n-000": {
    "name": { "ja": "スカシアカリネ", "en": "Sukashi Akarine" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/092-n-000/mono_sukashiakarine_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/092-n-000/",
    "recipe": [
      { "tree": "1327-1-001", "count": 14 }
    ]
  },
  "092-n-001": {
    "name": { "ja": "スカシアカリネ P-1", "en": "Sukashi Akarine P-1" },
    "potion": "plusterin",
    "base": "092-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/092-n-001/mono_sukashiakarine_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/092-n-001/",
    "recipe": [
      { "tree": "1375-1-001", "count": 6 }
    ]
  },
  "093-n-000": {
    "name": { "ja": "フェザームー", "en": "Feathermou" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/093-n-000/mono_feathermou_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/093-n-000/",
    "recipe": [
      { "tree": "1331-1-001", "count": 14 }
    ]
  },
  "093-n-001": {
    "name": { "ja": "フェザームー P-1", "en": "Feathermou P-1" },
    "potion": "plusterin",
    "base": "093-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/093-n-001/mono_feathermou_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/093-n-001/",
    "recipe": [
      { "tree": "1378-1-001", "count": 6 }
    ]
  },
  "094-n-000": {
    "name": { "ja": "ルナルリア", "en": "Lunaluria" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/094-n-000/mono_lunaluria_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/094-n-000/",
    "recipe": [
      { "tree": "1333-1-001", "count": 14 }
    ]
  },
  "094-n-001": {
    "name": { "ja": "ルナルリア P-1", "en": "Lunaluria P-1" },
    "potion": "plusterin",
    "base": "094-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/094-n-001/mono_lunaluria_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/094-n-001/",
    "recipe": [
      { "tree": "1368-1-001", "count": 6 }
    ]
  },
  "095-m-000": {
    "name": { "ja": "プリミティブトビネ", "en": "Primitive Tobine" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/095-m-000/mono_primitivetobine_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/095-m-000/",
    "recipe": [
      { "tree": "1336-1-001", "count": 14 }
    ]
  },
  "096-n-000": {
    "name": { "ja": "モンモーク", "en": "Monmork" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/096-n-000/mono_monmork_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/096-n-000/",
    "recipe": [
      { "tree": "1339-1-001", "count": 14 }
    ]
  },
  "099-m-000": {
    "name": { "ja": "ツノナデシ", "en": "Tsunonadeshi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/099-m-000/mono_tsunonadeshi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/099-m-000/",
    "recipe": [
      { "tree": "1345-1-001", "count": 14 }
    ]
  },
  "100-n-000": {
    "name": { "ja": "イリシア", "en": "Illisia" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/100-n-000/mono_Illisia_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/100-n-000/",
    "recipe": [
      { "tree": "1354-1-001", "count": 14 }
    ]
  },
  "100-n-001": {
    "name": { "ja": "イリシア P-1", "en": "Illisia P-1" },
    "potion": "plusterin",
    "base": "100-n-000",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/100-n-001/mono_Illisia_P1_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/100-n-001/",
    "recipe": [
      { "tree": "1379-1-001", "count": 6 }
    ]
  },
  "101-n-000": {
    "name": { "ja": "オオヤワイモチ", "en": "Oyawaimochi" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/101-n-000/mono_oyawaimochi_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/101-n-000/",
    "recipe": [
      { "tree": "1355-1-001", "count": 14 }
    ]
  },
  "102-n-000": {
    "name": { "ja": "ハユニシキ", "en": "Hayunishiki" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/102-n-000/mono_hayunishiki_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/102-n-000/",
    "recipe": [
      { "tree": "1358-1-001", "count": 14 }
    ]
  },
  "097-n-000": {
    "name": { "ja": "キキツムリ", "en": "Kiki Tsumuri" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/097-n-000/mono_kikitsumuri_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/097-n-000/",
    "recipe": [
      { "tree": "1360-1-001", "count": 14 }
    ]
  },
  "103-m-000": {
    "name": { "ja": "クイ", "en": "Kui" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/103-m-000/mono_kui_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/103-m-000/",
    "recipe": [
      { "tree": "1363-1-001", "count": 14 }
    ]
  },
  "104-m-000": {
    "name": { "ja": "オルフ", "en": "Orufu" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/104-m-000/mono_orufu_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/104-m-000/",
    "recipe": [
      { "tree": "1366-1-001", "count": 14 }
    ]
  },
  "105-m-000": {
    "name": { "ja": "ウボー", "en": "Ubo" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/105-m-000/mono_ubo_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/105-m-000/",
    "recipe": [
      { "tree": "1369-1-001", "count": 14 }
    ]
  },
  "106-m-000": {
    "name": { "ja": "ギッテム", "en": "Gittem" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/106-m-000/mono_gittem_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/106-m-000/",
    "recipe": [
      { "tree": "1373-1-001", "count": 14 }
    ]
  },
  "107-m-000": {
    "name": { "ja": "フォスク", "en": "Fosk" },
    "potion": "neobelmin",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/107-m-000/mono_fosk_P0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/107-m-000/",
    "recipe": [
      { "tree": "1377-1-001", "count": 14 }
    ]
  },
  "001-c-000": {
    "name": { "ja": "ハローキティピグミー", "en": "Hello Kitty Pygmy" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/001-c-000/mono_pygmy_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/001-c-000/",
    "recipe": [
      { "tree": "1001-1-001", "count": 9 },
      { "tree": "1144-1-001", "count": 9 }
    ]
  },
  "002-c-000": {
    "name": { "ja": "マイメロディコルヌレプス", "en": "My Melody Cornu Lepus" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/002-c-000/mono_cornulepus_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/002-c-000/",
    "recipe": [
      { "tree": "1001-1-003", "count": 9 },
      { "tree": "1149-1-001", "count": 9 }
    ]
  },
  "027-c-000": {
    "name": { "ja": "クロミクンパ", "en": "Kuromi Kumpa" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/027-c-000/mono_kumpa_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/027-c-000/",
    "recipe": [
      { "tree": "1074-1-001", "count": 9 },
      { "tree": "1149-1-001", "count": 9 }
    ]
  },
  "007-c-000": {
    "name": { "ja": "ハンギョドン オーガ", "en": "Hangyodon Ogre" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/007-c-000/mono_oga_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/007-c-000/",
    "recipe": [
      { "tree": "1015-1-001", "count": 9 },
      { "tree": "1170-1-005", "count": 9 }
    ]
  },
  "052-c-000": {
    "name": { "ja": "リョウプミリオ", "en": "Ryo Pumilio" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/052-c-000/mono_ryopumilio_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/052-c-000/",
    "recipe": [
      { "tree": "1201-1-001", "count": 14 }
    ]
  },
  "050-c-000": {
    "name": { "ja": "モトプミリオ", "en": "Moto Pumilio" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/050-c-000/mono_motopumilio_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/050-c-000/",
    "recipe": [
      { "tree": "1201-1-001", "count": 14 }
    ]
  },
  "051-c-000": {
    "name": { "ja": "ヒロプミリオ", "en": "Hilo Pumilio" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/051-c-000/mono_hilopumilio_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/051-c-000/",
    "recipe": [
      { "tree": "1201-1-001", "count": 14 }
    ]
  },
  "078-c-000": {
    "name": { "ja": "トココルヌレプス", "en": "Toko Cornu Lepus" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/078-c-000/mono_tokocornulepus_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/078-c-000/",
    "recipe": [
      { "tree": "1001-1-003", "count": 9 },
      { "tree": "1275-1-001", "count": 9 }
    ]
  },
  "079-c-000": {
    "name": { "ja": "チマコルヌレプス", "en": "Chima Cornu Lepus" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/079-c-000/mono_chimacornulepus_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/079-c-000/",
    "recipe": [
      { "tree": "1001-1-003", "count": 9 },
      { "tree": "1276-1-001", "count": 9 }
    ]
  },
  "080-c-000": {
    "name": { "ja": "サロメコルヌレプス", "en": "Salome Cornu Lepus" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/080-c-000/mono_salomecornulepus_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/080-c-000/",
    "recipe": [
      { "tree": "1001-1-003", "count": 9 },
      { "tree": "1277-1-001", "count": 9 }
    ]
  },
  "029-c-000": {
    "name": { "ja": "リゼラビネ", "en": "Lize Rabine" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/029-c-000/mono_lizerabine_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/029-c-000/",
    "recipe": [
      { "tree": "1109-1-001", "count": 9 },
      { "tree": "1350-1-001", "count": 9 }
    ]
  },
  "062-c-000": {
    "name": { "ja": "アンジュマーモール", "en": "Ange Marmolu" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/062-c-000/mono_angemarmolu_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/062-c-000/",
    "recipe": [
      { "tree": "1233-1-001", "count": 9 },
      { "tree": "1348-1-001", "count": 9 }
    ]
  },
  "049-c-000": {
    "name": { "ja": "カガミマウンテンピグミー", "en": "Kagami Mountain Pygmy" },
    "potion": "collab",
    "image": "https://www.livly.com/picturebook/img/main/mono/motion/049-c-000/mono_kagamimountainpygmy_C0_Idle.png",
    "page": "https://www.livly.com/picturebook/detail/049-c-000/",
    "recipe": [
      { "tree": "1199-1-001", "count": 9 },
      { "tree": "1349-1-001", "count": 9 }
    ]
  }
};
