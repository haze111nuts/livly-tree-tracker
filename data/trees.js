// ============================================================
// Trees — key = official tree id (from the game's tree image, e.g. "1019-1-001").
//   name / fruit / source : { ja, en }
//   banner  : gacha banner image, or null (a text banner is shown)
//   livlies : Livly ids this tree's fruit is used for; the first one is
//             the big image on the card
// Sources: livly.com/picturebook (JA) · livlyislandnewedition.wiki.gg/wiki/Trees (EN)
//          · livly-guide.com/gacha-list (banners)
// Keep the "LIVLY_DATA.trees =" line and the final semicolon.
// ============================================================
window.LIVLY_DATA = window.LIVLY_DATA || {};
LIVLY_DATA.trees = {
  "1001-1-001": {
    "name": { "ja": "不思議な赤林檎の木", "en": "Mysterious Red Apple Tree" },
    "fruit": { "ja": "赤林檎の実", "en": "Red Apple" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-001-P.png",
    "banner": null,
    "livlies": ["001-m-000", "008-m-000", "045-m-000", "001-c-000"]
  },
  "1001-1-005": {
    "name": { "ja": "不思議な青ドロリ林檎の木", "en": "Mysterious Gooey Blue Apple Tree" },
    "fruit": { "ja": "青ドロリ林檎の実", "en": "Gooey Blue Apple" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-005-P.png",
    "banner": null,
    "livlies": ["003-n-000", "008-m-000"]
  },
  "1001-1-003": {
    "name": { "ja": "不思議なドングリ林檎の木", "en": "Mysterious Acorn Apple Tree" },
    "fruit": { "ja": "ドングリ林檎の実", "en": "Acorn Apple" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-003-P.png",
    "banner": null,
    "livlies": ["002-n-000", "008-m-000", "002-c-000", "078-c-000", "079-c-000", "080-c-000"]
  },
  "1011-1-001": {
    "name": { "ja": "知恵の木", "en": "Tree of Knowledge" },
    "fruit": { "ja": "知恵の木の実", "en": "Tree of Knowledge Fruit" },
    "source": { "ja": "本の上の知恵の島", "en": "Well-read Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1011-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/well-read-island.webp",
    "livlies": ["005-n-000"]
  },
  "1022-1-001": {
    "name": { "ja": "野苺の木", "en": "Wild Strawberry Tree" },
    "fruit": { "ja": "野苺の実", "en": "Wild Strawberry" },
    "source": { "ja": "野苺のお茶会", "en": "Wild Strawberry Tea Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1022-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wild-strawberry-tea-party.webp",
    "livlies": ["006-m-000"]
  },
  "1010-1-001": {
    "name": { "ja": "原生林の樹木", "en": "Primeval Forest Tree" },
    "fruit": { "ja": "電気キノコ", "en": "Electric Mushroom" },
    "source": { "ja": "原生林と電気キノコの島", "en": "Forest Island of Electric Mushrooms" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1010-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-island-of-electric-mushrooms.webp",
    "livlies": ["004-m-000"]
  },
  "1019-1-001": {
    "name": { "ja": "雨上がりの虹の木", "en": "Rainbow Tree" },
    "fruit": { "ja": "シャボン玉の実", "en": "Soap Bubble Fruit" },
    "source": { "ja": "雨上がりの島", "en": "Island of Passing Showers" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1019-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-passing-showers.webp",
    "livlies": ["001-m-001"]
  },
  "1012-1-001": {
    "name": { "ja": "どんぐりの木", "en": "Oak Tree" },
    "fruit": { "ja": "どんぐりの実", "en": "Acorn" },
    "source": { "ja": "深い森のどんぐりの島", "en": "Island of Deep Forest Acorns" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1012-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-deep-forest-acorns.webp",
    "livlies": ["002-n-001"]
  },
  "1015-1-001": {
    "name": { "ja": "楽園のヤシの木", "en": "Paradise Palm Tree" },
    "fruit": { "ja": "楽園のヤシの実", "en": "Paradise Palm Fruit" },
    "source": { "ja": "南国パラダイス", "en": "Southern Paradise" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1015-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/southern-paradise.webp",
    "livlies": ["007-m-000", "007-c-000"]
  },
  "1014-1-001": {
    "name": { "ja": "骨と生命の木", "en": "Skeleton Life Tree" },
    "fruit": { "ja": "骨と生命の実", "en": "Skeleton Life Fruit" },
    "source": { "ja": "いにしえの骨と花の島", "en": "Island of Ancient Bones and Flowers" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1014-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-ancient-bones-and-flowers.webp",
    "livlies": ["009-n-000"]
  },
  "1017-1-001": {
    "name": { "ja": "クリスタルの木", "en": "Crystal Tree" },
    "fruit": { "ja": "クリスタルの木の実", "en": "Crystal Tree Fruit" },
    "source": { "ja": "クリスタルの森", "en": "Crystal Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1017-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-forest.webp",
    "livlies": ["003-n-001"]
  },
  "1020-1-001": {
    "name": { "ja": "常夏の木", "en": "Coconut Palm Tree" },
    "fruit": { "ja": "ココナッツの実", "en": "Coconut" },
    "source": { "ja": "常夏の島", "en": "Island of Eternal Summer" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1020-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-eternal-summer.webp",
    "livlies": ["006-m-001"]
  },
  "1026-1-001": {
    "name": { "ja": "迷子の子雲の木", "en": "Lost Little Cloud Tree" },
    "fruit": { "ja": "子雲の涙プリズムの実", "en": "Little Cloud Tear Prism Fruit" },
    "source": { "ja": "迷子の子雲と空き地の少年", "en": "Lost Cloud and the Boy of Nowhere Land" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1026-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lost-cloud-and-the-boy-of-nowhere-land.webp",
    "livlies": ["010-m-000"]
  },
  "1025-1-001": {
    "name": { "ja": "天球儀の木", "en": "Celestial Globe Tree" },
    "fruit": { "ja": "星の実", "en": "Star Fruit" },
    "source": { "ja": "星降る島", "en": "Starry Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1025-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starry-island.webp",
    "livlies": ["004-m-001"]
  },
  "1018-1-001": {
    "name": { "ja": "オリーブの木", "en": "Olive Tree" },
    "fruit": { "ja": "オリーブの実", "en": "Olive" },
    "source": { "ja": "錬金術師見習いの小屋", "en": "Alchemist Apprentice's Shed" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1018-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-apprentices-shed.webp",
    "livlies": ["011-n-000"]
  },
  "1024-1-001": {
    "name": { "ja": "虹色パンケーキタワーの木", "en": "Rainbow Pancake Tower Tree" },
    "fruit": { "ja": "星形キャンディの実", "en": "Star-shaped Candy Fruit" },
    "source": { "ja": "虹色パンケーキの島", "en": "Island of Rainbow Pancakes" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1024-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-rainbow-pancakes.webp",
    "livlies": ["008-m-001"]
  },
  "1023-1-001": {
    "name": { "ja": "パキラの木", "en": "Pachira Tree" },
    "fruit": { "ja": "パキラの実", "en": "Pachira Fruit" },
    "source": { "ja": "探偵事務所のジオラマ", "en": "Detective Agency Diorama" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1023-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/detective-agency-diorama.webp",
    "livlies": ["005-n-001"]
  },
  "1027-1-001": {
    "name": { "ja": "キノコの森のおうちの木", "en": "Mushroom Forest House Tree" },
    "fruit": { "ja": "キノコの森のおうちの実", "en": "Mushroom Forest House Fruit" },
    "source": { "ja": "カラフルなキノコの森", "en": "Colorful Mushroom Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1027-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/colorful-mushroom-forest.webp",
    "livlies": ["007-m-001"]
  },
  "1021-1-001": {
    "name": { "ja": "歪んだ洋梨の木", "en": "Twisted Pear Tree" },
    "fruit": { "ja": "不気味な洋梨の実", "en": "Eerie Pear" },
    "source": { "ja": "魔女の眠る島", "en": "Witches' Land of Nod" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1021-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/witches-land-of-nod.webp",
    "livlies": ["012-m-000", "013-m-000"]
  },
  "1032-1-001": {
    "name": { "ja": "小さなゴーストの容器の木", "en": "Little Ghost Container Tree" },
    "fruit": { "ja": "スターフィッシュの実", "en": "Starfish Fruit" },
    "source": { "ja": "深海に消えた艦長", "en": "Captain Lost at Sea" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1032-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/captain-lost-at-sea.webp",
    "livlies": ["013-m-000"]
  },
  "1031-1-001": {
    "name": { "ja": "ホテルエントランスの木", "en": "Hotel Entrance Tree" },
    "fruit": { "ja": "視線を感じる実", "en": "Paranoia Fruit" },
    "source": { "ja": "スプーキーホテルアイランド", "en": "Spooky Hotel Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1031-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spooky-hotel-island.webp",
    "livlies": ["012-m-000"]
  },
  "1034-1-001": {
    "name": { "ja": "天蓋カーテンの木", "en": "Canopy Curtain Tree" },
    "fruit": { "ja": "電飾の実", "en": "Glowing Light Fruit" },
    "source": { "ja": "天蓋ベッドルーム", "en": "Canopy Bedroom" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1034-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/canopy-bedroom.webp",
    "livlies": ["006-m-002"]
  },
  "1035-1-001": {
    "name": { "ja": "ねじれたダークフォレストの木", "en": "Twisted Dark Forest Tree" },
    "fruit": { "ja": "滴る真っ赤な木の実", "en": "Bright Red Droplet Fruit" },
    "source": { "ja": "Dark Forest", "en": "Dark Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1035-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dark-forest.webp",
    "livlies": ["010-m-001"]
  },
  "1016-1-001": {
    "name": { "ja": "廃墟のグランドピアノの木", "en": "Discarded Grand Piano" },
    "fruit": { "ja": "忘れ去られた実", "en": "Forgotten Fruit" },
    "source": { "ja": "忘れ去られたサロン", "en": "Forgotten Parlor" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1016-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forgotten-parlor.webp",
    "livlies": ["014-m-000", "045-m-000"]
  },
  "1036-1-001": {
    "name": { "ja": "小屋と柿の木", "en": "Cottage and Persimmon Tree" },
    "fruit": { "ja": "雪国の柿の実", "en": "Snow Country Persimmon" },
    "source": { "ja": "雪国の柿の島", "en": "Snow Country Persimmon Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1036-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snow-country-persimmon-island.webp",
    "livlies": ["002-n-002"]
  },
  "1029-1-001": {
    "name": { "ja": "神秘の森の木", "en": "Mysterious Forest Tree" },
    "fruit": { "ja": "神秘の華の実", "en": "Mystical Flower Fruit" },
    "source": { "ja": "神秘の森の島", "en": "Mysterious Forest Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1029-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mysterious-forest-island.webp",
    "livlies": ["009-n-001"]
  },
  "1013-1-001": {
    "name": { "ja": "秘密のドールハウスの木", "en": "Secret Dollhouse Tree" },
    "fruit": { "ja": "つぎはぎハートの実", "en": "Stitched Heart Fruit" },
    "source": { "ja": "秘密のドールハウス", "en": "Secret Dollhouse" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1013-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-dollhouse.webp",
    "livlies": ["016-a-000"]
  },
  "1037-1-001": {
    "name": { "ja": "アットホームクリスマスの木", "en": "Cozy Christmas Tree" },
    "fruit": { "ja": "クリスマスオーナメントの実", "en": "Christmas Ornament Fruit" },
    "source": { "ja": "アットホームクリスマスルーム", "en": "Homely Christmas Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1037-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/homely-christmas-room.webp",
    "livlies": ["015-m-000"]
  },
  "1038-1-001": {
    "name": { "ja": "聖夜の特別なドリンクの木", "en": "Xmas Eve Special Drink Tree" },
    "fruit": { "ja": "聖夜のイエローポインセチアの実", "en": "Xmas Eve Yellow Poinsettia Fruit" },
    "source": { "ja": "聖夜の特別なお茶会", "en": "Xmas Eve Special Tea Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1038-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/xmas-eve-special-tea-party.webp",
    "livlies": ["015-m-000"]
  },
  "1030-1-001": {
    "name": { "ja": "松の木", "en": "Pine Tree" },
    "fruit": { "ja": "松ぼっくりの実", "en": "Pine Cone Fruit" },
    "source": { "ja": "花かるたのお屋敷", "en": "Hanafuda Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1030-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hanafuda-room.webp",
    "livlies": ["017-m-000"]
  },
  "1033-1-001": {
    "name": { "ja": "真珠の木", "en": "Pearl Tree" },
    "fruit": { "ja": "真珠の実", "en": "Pearl Fruit" },
    "source": { "ja": "珊瑚トレーダーの島", "en": "Ethical Coral Trader Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1033-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ethical-coral-trader-island.webp",
    "livlies": ["011-n-001"]
  },
  "1041-1-001": {
    "name": { "ja": "古びたインク瓶の木", "en": "Old Ink Bottle Tree" },
    "fruit": { "ja": "インクの実", "en": "Ink Fruit" },
    "source": { "ja": "スミレ色の思い出", "en": "Violet Memories" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1041-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/violet-memories.webp",
    "livlies": ["014-m-001"]
  },
  "1043-1-001": {
    "name": { "ja": "柚子の木", "en": "Yuzu Tree" },
    "fruit": { "ja": "柚子の実", "en": "Yuzu Fruit" },
    "source": { "ja": "ぽかぽか柚子湯の島", "en": "Steamy Yuzu Bath Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1043-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/steamy-yuzu-bath-island.webp",
    "livlies": ["015-m-001"]
  },
  "1049-1-001": {
    "name": { "ja": "チューリップリースの木", "en": "Tulip Wreath Tree" },
    "fruit": { "ja": "チューリップリースの実", "en": "Tulip Wreath Fruit" },
    "source": { "ja": "スイートバレンタインルーム", "en": "Sweet Valentine's Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1049-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-valentines-room.webp",
    "livlies": ["018-m-000"]
  },
  "1042-1-001": {
    "name": { "ja": "スリーピーダークベリーの木", "en": "Sleepy Dark Berry Tree" },
    "fruit": { "ja": "スリーピーダークベリーの実", "en": "Sleepy Dark Berry Fruit" },
    "source": { "ja": "スリーピーダークベリーの森", "en": "Sleepy Dark Berry Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1042-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleepy-dark-berry-forest.webp",
    "livlies": ["018-m-000"]
  },
  "1047-1-001": {
    "name": { "ja": "薔薇のガゼボの木", "en": "Rose Gazebo Tree" },
    "fruit": { "ja": "ガゼボに咲く薔薇の実", "en": "Blossoming Gazebo Rose Fruit" },
    "source": { "ja": "薔薇が咲き誇るリトルガーデン", "en": "Little Garden of Blooming Roses" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1047-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-garden-of-blooming-roses.webp",
    "livlies": ["003-n-002"]
  },
  "1045-1-001": {
    "name": { "ja": "仕立て中のドレスの木", "en": "Unfinished Dress Tree" },
    "fruit": { "ja": "キンズの実", "en": "Kumquat Fruit" },
    "source": { "ja": "小さな仕立て屋さん", "en": "Little Tailor's Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1045-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-tailors-shop.webp",
    "livlies": ["002-n-003"]
  },
  "1051-1-001": {
    "name": { "ja": "カフェのコーヒーの木", "en": "Coffee Tree" },
    "fruit": { "ja": "カフェのコーヒーの実", "en": "Coffee Berry" },
    "source": { "ja": "ホワイトデーカフェタイム", "en": "White Day Coffee Time" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1051-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/white-day-coffee-time.webp",
    "livlies": ["004-m-002"]
  },
  "1052-1-001": {
    "name": { "ja": "G.L.L城ミニチュアの木", "en": "Miniature G.L.L. Castle Tree" },
    "fruit": { "ja": "G.L.Lシンボルの実", "en": "G.L.L. Symbol Fruit" },
    "source": { "ja": "20th Anniversary Island", "en": "20th Anniversary Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1052-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/20th-anniversary-island.webp",
    "livlies": ["001-m-002"]
  },
  "1044-1-001": {
    "name": { "ja": "フープツリーの木", "en": "Hooped Tree" },
    "fruit": { "ja": "フープツリーの雫の実", "en": "Hooped Tree Dewdrop" },
    "source": { "ja": "無重力ガーデン", "en": "Zero Gravity Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1044-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/zero-gravity-garden.webp",
    "livlies": ["019-m-000"]
  },
  "1053-1-001": {
    "name": { "ja": "停止岩の木", "en": "Static Boulder Tree" },
    "fruit": { "ja": "青い花の実", "en": "Blue Blossom" },
    "source": { "ja": "停止の花園", "en": "Static Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1053-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/static-garden.webp",
    "livlies": ["020-n-000"]
  },
  "1058-1-001": {
    "name": { "ja": "イースターエッグの木", "en": "Easter Egg Tree" },
    "fruit": { "ja": "イースターエッグの実", "en": "Easter Egg" },
    "source": { "ja": "スプリングイースターガーデン", "en": "Spring Easter Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1058-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-easter-garden.webp",
    "livlies": ["008-m-002"]
  },
  "1057-1-001": {
    "name": { "ja": "遺された月の木", "en": "Forsaken Lunar Tree" },
    "fruit": { "ja": "月の光の実", "en": "Moonlight Fruit" },
    "source": { "ja": "遺された月の島", "en": "Forsaken Lunar Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1057-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forsaken-lunar-island.webp",
    "livlies": ["012-m-001"]
  },
  "1059-1-001": {
    "name": { "ja": "黄金の光をまとう神樹", "en": "Golden Sacred Tree" },
    "fruit": { "ja": "祈りのロウソクの実", "en": "Prayer Candle Fruit" },
    "source": { "ja": "Gold Ray", "en": "Gold Ray of Light" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1059-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gold-ray-of-light.webp",
    "livlies": ["021-m-000"]
  },
  "1060-1-001": {
    "name": { "ja": "お城の王座の木", "en": "Castle Throne Tree" },
    "fruit": { "ja": "研究室のフラスコの実", "en": "Lab Flask Fruit" },
    "source": { "ja": "錬金術師と王宮の研究室", "en": "Alchemist and the Royal Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1060-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-and-the-royal-laboratory.webp",
    "livlies": ["021-m-000"]
  },
  "1054-1-001": {
    "name": { "ja": "クローバーの木", "en": "Clover Tree" },
    "fruit": { "ja": "よつ葉のクローバーの実", "en": "Four-leaf Clover" },
    "source": { "ja": "クローバーの箱庭", "en": "Clover Fairy Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1054-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/clover-fairy-garden.webp",
    "livlies": ["015-m-002"]
  },
  "1055-1-001": {
    "name": { "ja": "キャンピングテントの木", "en": "Camping Tent Tree" },
    "fruit": { "ja": "キャンドルランプの実", "en": "Candle Lamp Fruit" },
    "source": { "ja": "キャンピングヴィレッジ", "en": "Camping Village" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1055-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/camping-village.webp",
    "livlies": ["013-m-001", "013-m-002"]
  },
  "1056-1-001": {
    "name": { "ja": "盆上の無限花の木", "en": "Infinite Flower Tree on Plate" },
    "fruit": { "ja": "無限花の実", "en": "Infinite Flower Fruit" },
    "source": { "ja": "無限砂丘", "en": "Infinite Sand Dunes" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1056-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/infinite-sand-dunes.webp",
    "livlies": ["022-m-000"]
  },
  "1062-1-001": {
    "name": { "ja": "レトロミニカーの木", "en": "Retro Mini Car Tree" },
    "fruit": { "ja": "サボテンの実", "en": "Cactus Fruit" },
    "source": { "ja": "眠らない街のダイナー", "en": "Sleepless Street Diner" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1062-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleepless-street-diner.webp",
    "livlies": ["022-m-001"]
  },
  "1072-1-001": {
    "name": { "ja": "晴れ間の紫陽花の木", "en": "Glistening Hydrangea Tree" },
    "fruit": { "ja": "紫陽花にたまる雨粒の実", "en": "Hydrangea Raindrop" },
    "source": { "ja": "紫陽花としずくの庭", "en": "Dewy Hydrangea Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1072-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dewy-hydrangea-garden.webp",
    "livlies": ["020-n-001"]
  },
  "1070-1-001": {
    "name": { "ja": "ピンクチェリーの木", "en": "Pink Cherry Tree" },
    "fruit": { "ja": "ピンクチェリーの実", "en": "Pink Cherry" },
    "source": { "ja": "ピンクチェリーティーパーティー", "en": "Pink Cherry Tea Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1070-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pink-cherry-tea-party.webp",
    "livlies": ["023-n-000"]
  },
  "1077-1-001": {
    "name": { "ja": "きらめく黄金の林檎の木", "en": "Shiny Golden Apple Tree" },
    "fruit": { "ja": "黄金の林檎の実", "en": "Golden Apple" },
    "source": { "ja": "祝福の太陽と神秘の月", "en": "Blessed Sun and Mystical Moon" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1077-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blessed-sun-and-mystical-moon.webp",
    "livlies": ["021-m-001"]
  },
  "1063-1-001": {
    "name": { "ja": "ウツボカズラの木", "en": "Nepenthes Tree" },
    "fruit": { "ja": "ウツボカズラの実", "en": "Nepenthes Fruit" },
    "source": { "ja": "ポップな食虫植物の島", "en": "Vibrant Insectivorous Plant Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1063-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/vibrant-insectivorous-plant-island.webp",
    "livlies": ["005-n-002"]
  },
  "1073-1-001": {
    "name": { "ja": "夢のナイトガーデンの木", "en": "Dreamy Night Garden Tree" },
    "fruit": { "ja": "ナイトライトの実", "en": "Night Light Fruit" },
    "source": { "ja": "夢のナイトガーデン", "en": "Dreamy Night Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1073-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-night-garden.webp",
    "livlies": ["023-n-001"]
  },
  "1064-1-001": {
    "name": { "ja": "サマープールスライダーの木", "en": "Summer Pool Slide Tree" },
    "fruit": { "ja": "ビニールヤシの木の実", "en": "Vinyl Coconut" },
    "source": { "ja": "真夏のリトルプール", "en": "Little Summer Pool" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1064-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-summer-pool.webp",
    "livlies": ["024-m-000"]
  },
  "1078-1-001": {
    "name": { "ja": "提灯の木", "en": "Lantern Tree" },
    "fruit": { "ja": "花火柄の実", "en": "Firework Pattern Fruit" },
    "source": { "ja": "夏の夜の花火", "en": "Summer Night Fireworks" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1078-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-night-fireworks.webp",
    "livlies": ["017-m-001"]
  },
  "1061-1-001": {
    "name": { "ja": "カフェのソーダゼリーの木", "en": "Soda Jelly Tree" },
    "fruit": { "ja": "ソーダゼリーのミントの実", "en": "Soda Jelly Mint Fruit" },
    "source": { "ja": "湖畔の隠れ家カフェ", "en": "Lakeside Hideaway Café" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1061-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lakeside-hideaway-cafe.webp",
    "livlies": ["009-n-002"]
  },
  "1080-1-001": {
    "name": { "ja": "グミフラワーの木", "en": "Gummy Flower Tree" },
    "fruit": { "ja": "グミフラワーの実", "en": "Gummy Flower" },
    "source": { "ja": "グミフラワーの苗床", "en": "Gummy Flower Seedbed" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1080-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gummy-flower-seedbed.webp",
    "livlies": ["025-m-000"]
  },
  "1083-1-001": {
    "name": { "ja": "桔梗和傘の木", "en": "Bellflower Wagasa Tree" },
    "fruit": { "ja": "白桔梗の花の実", "en": "White Bellflower" },
    "source": { "ja": "十五夜お月様の島", "en": "Harvest Moon Night Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1083-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/harvest-moon-night-island.webp",
    "livlies": ["025-m-000"]
  },
  "1084-1-001": {
    "name": { "ja": "コスモスの木", "en": "Cosmos Flower Tree" },
    "fruit": { "ja": "コスモスの実", "en": "Cosmos Flower Bud" },
    "source": { "ja": "夕暮れのコスモス畑で", "en": "Twilight Cosmos Field" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1084-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/twilight-cosmos-field.webp",
    "livlies": ["016-a-001"]
  },
  "1069-1-001": {
    "name": { "ja": "ピグミーパンの木", "en": "Pygmy Bread Tree" },
    "fruit": { "ja": "ピグミーの目のチョコの実", "en": "Pygmy Eye Choco Chip Fruit" },
    "source": { "ja": "焼きたての香り", "en": "Freshly Baked Aroma" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1069-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/freshly-baked-aroma.webp",
    "livlies": ["001-m-003"]
  },
  "1085-1-001": {
    "name": { "ja": "魔女の大釜から生えた木", "en": "Witch's Cauldron Tree" },
    "fruit": { "ja": "魔女の大釜から生えた木の実", "en": "Witch's Cauldron Tree Fruit" },
    "source": { "ja": "とある魔女の不思議な大釜", "en": "Witch's Curious Cauldron" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1085-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/witchs-curious-cauldron.webp",
    "livlies": ["026-m-000"]
  },
  "1071-1-001": {
    "name": { "ja": "御霊（ミタマ）の木", "en": "Mitama Spirit Tree" },
    "fruit": { "ja": "青火を纏う実", "en": "Blue Flaming Fruit" },
    "source": { "ja": "悲哀の影がひそむ島", "en": "Lurking Shadow of Sorrow" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1071-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lurking-shadow-of-sorrow.webp",
    "livlies": ["026-m-000"]
  },
  "1075-1-001": {
    "name": { "ja": "木馬の木", "en": "Rocking Horse Tree" },
    "fruit": { "ja": "ハートのシールの実", "en": "Heart Sticker Fruit" },
    "source": { "ja": "木馬のベビールーム", "en": "Rocking Horse Nursery" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1075-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/rocking-horse-nursery.webp",
    "livlies": ["022-m-002"]
  },
  "1086-1-001": {
    "name": { "ja": "ホーンテッドハウスの木", "en": "Haunted House Tree" },
    "fruit": { "ja": "ハロウィンカボチャの実", "en": "Halloween Pumpkin Fruit" },
    "source": { "ja": "ホーンテッドハウスナイト", "en": "Haunted House Night" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1086-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/haunted-house-night.webp",
    "livlies": ["012-m-002"]
  },
  "1082-1-001": {
    "name": { "ja": "黒百合の木", "en": "Black Lily Tree" },
    "fruit": { "ja": "黒百合の涙の実", "en": "Black Lily Teardrop" },
    "source": { "ja": "My Halloween Room", "en": "My Halloween Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1082-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-halloween-room.webp",
    "livlies": ["018-m-001"]
  },
  "1074-1-001": {
    "name": { "ja": "幻都の桃の木", "en": "Shangri-La Peach Tree" },
    "fruit": { "ja": "幻都の桃の実", "en": "Shangri-La Peach Fruit" },
    "source": { "ja": "幻都の桃の島", "en": "Shangri-La Peach Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1074-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/shangri-la-peach-island.webp",
    "livlies": ["027-m-000", "027-c-000"]
  },
  "1088-1-001": {
    "name": { "ja": "ロックツリー", "en": "Lock Tree" },
    "fruit": { "ja": "ヤマブドウの実", "en": "Wild Grapes" },
    "source": { "ja": "紅葉のロックツリー", "en": "Maple Lock Tree" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1088-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/maple-lock-tree.webp",
    "livlies": ["014-m-002"]
  },
  "1094-1-001": {
    "name": { "ja": "秋の山椒の木", "en": "Autumn Prickly Ash Tree" },
    "fruit": { "ja": "秋のお弁当ピック旗の実", "en": "Autumn Bento Pick Fruit" },
    "source": { "ja": "はらぺこ秋のお弁当の島", "en": "Autumn Bento Feast Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1094-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/autumn-bento-feast-island.webp",
    "livlies": ["019-m-001"]
  },
  "1081-1-001": {
    "name": { "ja": "金色の薔薇の木", "en": "Gold Rose Tree" },
    "fruit": { "ja": "青い薔薇の実", "en": "Blue Rose Fruit" },
    "source": { "ja": "ゴシックマスカレード", "en": "Gothic Masquerade" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1081-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gothic-masquerade.webp",
    "livlies": ["011-n-002"]
  },
  "1099-1-001": {
    "name": { "ja": "クリスマスクッキーハウスの木", "en": "Christmas Cookie House Tree" },
    "fruit": { "ja": "ジャムクッキーの実", "en": "Jam Cookie Fruit" },
    "source": { "ja": "クリスマスのお菓子の家", "en": "Christmas Candy House" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1099-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/christmas-candy-house.webp",
    "livlies": ["028-m-000"]
  },
  "1092-1-001": {
    "name": { "ja": "ドライローズの木", "en": "Dried Rose Tree" },
    "fruit": { "ja": "ドライローズの実", "en": "Dried Rose Fruit" },
    "source": { "ja": "ドライローズと金の鳥", "en": "Dried Rose and Gold Bird" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1092-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dried-rose-and-gold-bird.webp",
    "livlies": ["028-m-000"]
  },
  "1100-1-001": {
    "name": { "ja": "きらめくクリスマスの木", "en": "Twinkling Christmas Tree" },
    "fruit": { "ja": "ツリートップで輝く星の実", "en": "Twinkling Star Topper Fruit" },
    "source": { "ja": "A Twinkling Christmas Tale", "en": "A Twinkling Christmas Tale" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1100-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-twinkling-christmas-tale.webp",
    "livlies": ["010-m-002", "010-m-003"]
  },
  "1090-1-001": {
    "name": { "ja": "冬の切り株の木", "en": "Wintry Stump Tree" },
    "fruit": { "ja": "冬の赤い木の実", "en": "Wintry Red Berry" },
    "source": { "ja": "冬の深い森", "en": "Deep Wintry Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1090-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/deep-wintry-forest.webp",
    "livlies": ["023-n-002"]
  },
  "1106-1-001": {
    "name": { "ja": "アクリルスタンド富士山の木", "en": "Mt. Fuji Acrylic Stand Tree" },
    "fruit": { "ja": "アクリル飛雲の実", "en": "Acrylic Flying Cloud Fruit" },
    "source": { "ja": "お年賀スタジオ2022", "en": "New Year's Card Studio 2022" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1106-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/new-years-card-studio-2022.webp",
    "livlies": ["017-m-002"]
  },
  "1109-1-001": {
    "name": { "ja": "雪椿盆栽の木", "en": "Snow Camellia Bonsai Tree" },
    "fruit": { "ja": "雪椿の花の実", "en": "Snow Camellia Blossom" },
    "source": { "ja": "雪椿の庭 新春彩り和装2023", "en": "Snow Camellia Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1109-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snow-camellia-garden.webp",
    "livlies": ["029-m-000", "029-c-000"]
  },
  "1087-1-001": {
    "name": { "ja": "フレーバーティーポットの木", "en": "Flavor Teapot Tree" },
    "fruit": { "ja": "ティーポットタッセルの実", "en": "Teapot Tassel Fruit" },
    "source": { "ja": "フレーバーティーのアトリエ", "en": "Flavor Tea Atelier" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1087-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flavor-tea-atelier.webp",
    "livlies": ["007-m-002"]
  },
  "1089-1-001": {
    "name": { "ja": "電子多肉植物の木", "en": "Digital Succulent Tree" },
    "fruit": { "ja": "電子多肉植物の花の実", "en": "Digital Succulent Flower" },
    "source": { "ja": "多肉植物とコンピュータの島", "en": "Succulents x Computer Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1089-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/succulents-x-computer-island.webp",
    "livlies": ["020-n-002"]
  },
  "1111-1-001": {
    "name": { "ja": "春節を祝う銀柳の木", "en": "Lunar New Year Silver Willow" },
    "fruit": { "ja": "春節飾りの実", "en": "Lunar New Year Ornament Fruit" },
    "source": { "ja": "華やぐ天燈の島", "en": "Island of Brilliant Sky Lanterns" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1111-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-brilliant-sky-lanterns.webp",
    "livlies": ["024-m-001"]
  },
  "1091-1-001": {
    "name": { "ja": "蓄音機の木", "en": "Gramophone Tree" },
    "fruit": { "ja": "古いレコードの実", "en": "Vintage Vinyl Record Fruit" },
    "source": { "ja": "路地裏の小さな秘密基地", "en": "Little Backstreet Hideout" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1091-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-backstreet-hideout.webp",
    "livlies": ["030-n-000"]
  },
  "1110-1-001": {
    "name": { "ja": "愛情を具現化した薔薇の木", "en": "Embodiment of Love Rose Tree" },
    "fruit": { "ja": "愛情を具現化した薔薇の実", "en": "Embodiment of Love Rose Fruit" },
    "source": { "ja": "Love Laboratory", "en": "Love Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1110-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/love-laboratory.webp",
    "livlies": ["030-n-000"]
  },
  "1096-1-001": {
    "name": { "ja": "クラフト・ロリィタのランプの木", "en": "Lolita Craft Lamp Tree" },
    "fruit": { "ja": "ポンポンデイジーの実", "en": "Pompom Daisy Fruit" },
    "source": { "ja": "クラフト・ロリィタルーム", "en": "Lolita Craft Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1096-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lolita-craft-room.webp",
    "livlies": ["018-m-002"]
  },
  "1107-1-001": {
    "name": { "ja": "電球テラリウムの木", "en": "Light Bulb Terrarium Tree" },
    "fruit": { "ja": "いつの間にか生えていたきのこの実", "en": "Sprung-up Mushroom Fruit" },
    "source": { "ja": "電球テラリウムと苔の島", "en": "Light Bulb Terrarium & Moss Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1107-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/light-bulb-terrarium-and-moss-island.webp",
    "livlies": ["028-m-001"]
  },
  "1098-1-001": {
    "name": { "ja": "光り輝くオーロラ色の木", "en": "Glowing Aurora Tree" },
    "fruit": { "ja": "光り輝くオーロラ色の木の実", "en": "Glowing Aurora Tree Fruit" },
    "source": { "ja": "オーロラが照らす森", "en": "Shining Aurora Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1098-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/shining-aurora-forest.webp",
    "livlies": ["025-m-001"]
  },
  "1102-1-001": {
    "name": { "ja": "ボタニカル・レンズの木", "en": "Botanical Lens Tree" },
    "fruit": { "ja": "小さなホタルカズラの花の実", "en": "Small Hotaru Kazura Flower" },
    "source": { "ja": "ボタニカル・レンズの島", "en": "Botanical Lens Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1102-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/botanical-lens-island.webp",
    "livlies": ["031-m-000"]
  },
  "1113-1-001": {
    "name": { "ja": "花あかりの桜の木", "en": "Dazzling Sakura Tree" },
    "fruit": { "ja": "桜の花びらの実", "en": "Sakura Flower Fruit" },
    "source": { "ja": "桜舞う花あかりの島", "en": "Island of Dazzling Dancing Sakura" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1113-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-dazzling-dancing-sakura.webp",
    "livlies": ["027-m-001"]
  },
  "1114-1-001": {
    "name": { "ja": "ナイトカルーセルの木", "en": "Night Carousel Tree" },
    "fruit": { "ja": "ナイトカルーセルの小さな月の実", "en": "Night Carousel Small Moon Fruit" },
    "source": { "ja": "ナイトカルーセルの部屋", "en": "Night Carousel Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1114-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/night-carousel-room.webp",
    "livlies": ["006-m-003"]
  },
  "1103-1-001": {
    "name": { "ja": "ハチミツの木", "en": "Honey Tree" },
    "fruit": { "ja": "ハチミツの実", "en": "Honey Fruit" },
    "source": { "ja": "ハチミツパーティーの島", "en": "Honey Party Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1103-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/honey-party-island.webp",
    "livlies": ["013-m-003"]
  },
  "1097-1-001": {
    "name": { "ja": "大惑星の木", "en": "Giant Planet Tree" },
    "fruit": { "ja": "衛星の実", "en": "Satellite Fruit" },
    "source": { "ja": "惑星の降る丘", "en": "Hill of Celestial Bodies" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1097-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hill-of-celestial-bodies.webp",
    "livlies": ["019-m-002"]
  },
  "1115-1-001": {
    "name": { "ja": "ラビットトピアリーの木", "en": "Rabbit Topiary Tree" },
    "fruit": { "ja": "イースターエッグの実・イエロー", "en": "Yellow Easter Egg Fruit" },
    "source": { "ja": "イースターサンルーム", "en": "Easter Sunroom" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1115-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/easter-sunroom.webp",
    "livlies": ["032-m-000"]
  },
  "1117-1-001": {
    "name": { "ja": "マンドレイクの容器の木", "en": "Mandrake Vessel Tree" },
    "fruit": { "ja": "マンドレイクの実", "en": "Mandrake Fruit" },
    "source": { "ja": "クロックワークマンドレイクの島", "en": "Clockwork Mandrake Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1117-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/clockwork-mandrake-island.webp",
    "livlies": ["004-m-003"]
  },
  "1118-1-001": {
    "name": { "ja": "白い鳥かごの木", "en": "White Bird Cage Tree" },
    "fruit": { "ja": "鳥かごの水滴の実", "en": "Bird Cage Droplet Fruit" },
    "source": { "ja": "Faraway Resort Island", "en": "Faraway Resort Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1118-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/faraway-resort-island.webp",
    "livlies": ["016-a-002"]
  },
  "1119-1-001": {
    "name": { "ja": "小さな滝の木", "en": "Small Waterfall Tree" },
    "fruit": { "ja": "滝に咲く小さな花の実", "en": "Small Waterfall Flower Fruit" },
    "source": { "ja": "滝の裏の小さな洞窟", "en": "Small Cave Behind Waterfall" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1119-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/small-cave-behind-waterfall.webp",
    "livlies": ["003-n-003"]
  },
  "1130-1-001": {
    "name": { "ja": "白昼夢のイーゼルの木", "en": "Daydream Easel Tree" },
    "fruit": { "ja": "黄色い挿絵の花の実", "en": "Yellow Painted Flower Fruit" },
    "source": { "ja": "アトリエ・ドゥ・レヴリ", "en": "Atelier de Reverie" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1130-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/atelier-de-reverie.webp",
    "livlies": ["033-n-000"]
  },
  "1121-1-001": {
    "name": { "ja": "イチゴジャム瓶の木", "en": "Strawberry Jam Jar Tree" },
    "fruit": { "ja": "真っ赤なイチゴの実", "en": "Bright Red Strawberry" },
    "source": { "ja": "摘みたてイチゴジャムの島", "en": "Fresh Strawberry Jam Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1121-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fresh-strawberry-jam-island.webp",
    "livlies": ["021-m-002"]
  },
  "1122-1-001": {
    "name": { "ja": "路地裏に残された街灯の木", "en": "Alley Abandoned Lamppost Tree" },
    "fruit": { "ja": "誰かが貼ったステッカーの実", "en": "Random Sticker Fruit" },
    "source": { "ja": "Foggy Graffiti Street", "en": "Foggy Graffiti Street" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1122-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/foggy-graffiti-street.webp",
    "livlies": ["029-m-001"]
  },
  "1123-1-001": {
    "name": { "ja": "赤林檎の木のフィギュアツリー", "en": "Red Apple Tree Figurine Tree" },
    "fruit": { "ja": "ロゴジョイントパーツの実", "en": "Logo Joint Piece Fruit" },
    "source": { "ja": "カプセルトイ・ミニチュアルーム", "en": "Capsule Toy Miniature Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1123-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/capsule-toy-miniature-room.webp",
    "livlies": ["026-m-001"]
  },
  "1124-1-001": {
    "name": { "ja": "星明かりのスズランの木", "en": "Starlight May Bells Tree" },
    "fruit": { "ja": "スズランの花の実", "en": "May Bells Flower Fruit" },
    "source": { "ja": "星が煌くスズランの島", "en": "Starlight May Bells Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1124-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starlight-may-bells-island.webp",
    "livlies": ["005-n-003"]
  },
  "1125-1-001": {
    "name": { "ja": "虹色の葉をもつ植物の木", "en": "Rainbow Leaf Tree" },
    "fruit": { "ja": "葉に集まった小さな水滴の実", "en": "Collected Small Raindrop Fruit" },
    "source": { "ja": "逆さま傘の島", "en": "Upside-down Umbrella Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1125-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/upside-down-umbrella-island.webp",
    "livlies": ["034-n-000"]
  },
  "1126-1-001": {
    "name": { "ja": "竹の盆栽の木", "en": "Bamboo Bonsai Tree" },
    "fruit": { "ja": "瞑想のタケノコの実", "en": "Meditative Bamboo Shoot Fruit" },
    "source": { "ja": "瞑想の竹林庭園", "en": "Meditative Bamboo Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1126-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/meditative-bamboo-garden.webp",
    "livlies": ["015-m-003"]
  },
  "1127-1-001": {
    "name": { "ja": "ツタが絡んだシャンデリアの木", "en": "Ivy-entangled Chandelier Tree" },
    "fruit": { "ja": "色褪せたツタの葉の実", "en": "Faded Ivy Leaf Fruit" },
    "source": { "ja": "Forgotten Wedding Hall", "en": "Forgotten Wedding Hall" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1127-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forgotten-wedding-hall.webp",
    "livlies": ["012-m-003"]
  },
  "1128-1-001": {
    "name": { "ja": "折り紙の花が咲いた花瓶の木", "en": "Origami Flower Vase Tree" },
    "fruit": { "ja": "折り紙の花の実", "en": "Origami Flower Fruit" },
    "source": { "ja": "レトロハウスのミニチュア", "en": "Retro House Miniature" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1128-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/retro-house-miniature.webp",
    "livlies": ["030-n-001"]
  },
  "1132-1-001": {
    "name": { "ja": "静止した風船たちの木", "en": "Static Balloons Tree" },
    "fruit": { "ja": "ビーンズ型の風船の実", "en": "Bean-shaped Balloon Fruit" },
    "source": { "ja": "スパークリングバルーンの島", "en": "Sparkling Balloon Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1132-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sparkling-balloon-island.webp",
    "livlies": ["035-m-000"]
  },
  "1133-1-001": {
    "name": { "ja": "ヴィンテージな電球の木", "en": "Vintage Light Bulb Tree" },
    "fruit": { "ja": "電球のフィラメントの実", "en": "Light Bulb Filament Fruit" },
    "source": { "ja": "霧の街のテーラーショップ", "en": "Hazy Street Tailor Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1133-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hazy-street-tailor-shop.webp",
    "livlies": ["035-m-000"]
  },
  "1134-1-001": {
    "name": { "ja": "輝く七つの星が咲く金色の木", "en": "Sparkling Seven Star Gold Tree" },
    "fruit": { "ja": "輝く七つの星の実", "en": "Sparkling Seven Star Fruit" },
    "source": { "ja": "七惑星の錬金室", "en": "Seven Planets Alchemy Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1134-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seven-planets-alchemy-room.webp",
    "livlies": ["001-m-004"]
  },
  "1135-1-001": {
    "name": { "ja": "金のチェスクロックの木", "en": "Gold Chess Clock Tree" },
    "fruit": { "ja": "唯一の勝利の花の実", "en": "Victory-only Flower Fruit" },
    "source": { "ja": "不思議なチェス盤の庭", "en": "Bizarre Chessboard Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1135-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bizarre-chessboard-garden.webp",
    "livlies": ["033-n-001"]
  },
  "1136-1-001": {
    "name": { "ja": "スターローズクォーツの木", "en": "Star Rose Quartz Tree" },
    "fruit": { "ja": "スターローズクォーツの星薔薇の実", "en": "Star Rose Quartz Rose Fruit" },
    "source": { "ja": "スターローズクォーツの島", "en": "Star Rose Quartz Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1136-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/star-rose-quartz-island.webp",
    "livlies": ["008-m-003"]
  },
  "1137-1-001": {
    "name": { "ja": "氷山のウォータードームの木", "en": "Iceberg Water Globe Tree" },
    "fruit": { "ja": "小さな太陽の実", "en": "Small Sun Fruit" },
    "source": { "ja": "Summer Ice Island", "en": "Summer Ice Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1137-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-ice-island.webp",
    "livlies": ["036-n-000"]
  },
  "1138-1-001": {
    "name": { "ja": "夏祭りの太鼓の木", "en": "Summer Festival Taiko Tree" },
    "fruit": { "ja": "夏祭りの太鼓の木の実", "en": "Summer Festival Taiko Tree Fruit" },
    "source": { "ja": "屋台並ぶ夏祭りの島", "en": "Yatai Summer Festival Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1138-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/yatai-summer-festival-island.webp",
    "livlies": ["026-m-002"]
  },
  "1139-1-001": {
    "name": { "ja": "MODEなチューブ型ライトの木", "en": "MODE Tube Light Tree" },
    "fruit": { "ja": "ライトの光の実", "en": "Light Sparkle Fruit" },
    "source": { "ja": "MODE Vol.2", "en": "MODE Vol. 2" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1139-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mode-vol-2.webp",
    "livlies": ["031-m-001"]
  },
  "1140-1-001": {
    "name": { "ja": "ピグミー土偶の木", "en": "Pygmy Dogu Tree" },
    "fruit": { "ja": "古代からのメッセージの実", "en": "Ancient Message Fruit" },
    "source": { "ja": "謎めいた古代遺跡の島", "en": "Cryptic Ancient Ruins Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1140-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cryptic-ancient-ruins-island.webp",
    "livlies": ["034-n-001"]
  },
  "1141-1-001": {
    "name": { "ja": "夏のお家の吊り看板の木", "en": "Summer House Hanging Sign Tree" },
    "fruit": { "ja": "看板に絡むお花の実", "en": "Sign Entwined Flower Fruit" },
    "source": { "ja": "フラワリーゼリーキッチン", "en": "Flowery Jelly Kitchen" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1141-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flowery-jelly-kitchen.webp",
    "livlies": ["037-m-000"]
  },
  "1142-1-001": {
    "name": { "ja": "妖しげな火が灯るランプの木", "en": "Eerie Flame Lamp Tree" },
    "fruit": { "ja": "妖しげな火の実", "en": "Eerie Flame Fruit" },
    "source": { "ja": "古城の呪いと詩人の部屋", "en": "Ancient Castle's Curse & Poet's Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1142-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ancient-castles-curse-and-poets-room.webp",
    "livlies": ["037-m-000"]
  },
  "1143-1-001": {
    "name": { "ja": "神殿の燭台の木", "en": "Temple Candle Holder Tree" },
    "fruit": { "ja": "灯に集まる光虫の実", "en": "Phototactic Light Bug Fruit" },
    "source": { "ja": "碧き灯の神殿の島", "en": "Blue Flame Temple Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1143-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blue-flame-temple-island.webp",
    "livlies": ["009-n-003"]
  },
  "1144-1-001": {
    "name": { "ja": "ハローキティのりんごの木", "en": "Hello Kitty Apple Tree" },
    "fruit": { "ja": "ハローキティのりんごの実", "en": "Hello Kitty Apple Tree Fruit" },
    "source": { "ja": "ハローキティの錬金術ラボ", "en": "Hello Kitty's Alchemy Lab" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1144-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hello-kittys-alchemy-lab.webp",
    "livlies": ["001-c-000"]
  },
  "1145-1-001": {
    "name": { "ja": "野外スクリーンの木", "en": "Outdoor Screen Tree" },
    "fruit": { "ja": "シネマチケットタグの実", "en": "Cinema Ticket Tag Fruit" },
    "source": { "ja": "ムービーナイトの島", "en": "Movie Night Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1145-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/movie-night-island.webp",
    "livlies": ["022-m-003"]
  },
  "1146-1-001": {
    "name": { "ja": "トゲフラワーの木", "en": "Prickly Flower Tree" },
    "fruit": { "ja": "トゲの実", "en": "Prickly Fruit" },
    "source": { "ja": "トゲフラワーパニックストリート", "en": "Prickly Flower Panic Street" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1146-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/prickly-flower-panic-street.webp",
    "livlies": ["038-m-000"]
  },
  "1147-1-001": {
    "name": { "ja": "鎖に繋がれた奇妙な林檎の木", "en": "Chained Unusual Apple Tree" },
    "fruit": { "ja": "奇妙な林檎の木の実", "en": "Unusual Apple Tree Fruit" },
    "source": { "ja": "Halloween Cemetery", "en": "Halloween Cemetery" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1147-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/halloween-cemetery.webp",
    "livlies": ["038-m-000"]
  },
  "1148-1-001": {
    "name": { "ja": "吊るした花束の木", "en": "Pendent Flower Bouquet Tree" },
    "fruit": { "ja": "幽遠の花の実", "en": "Secluded Flower Fruit" },
    "source": { "ja": "幽遠の湖畔", "en": "Secluded Lakeside" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1148-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secluded-lakeside.webp",
    "livlies": ["032-m-001"]
  },
  "1149-1-001": {
    "name": { "ja": "マイメロディとクロミのいちごの木", "en": "My Melody & Kuromi Berry Tree" },
    "fruit": { "ja": "マイメロディとクロミのいちごの実", "en": "My Melody & Kuromi Berry Fruit" },
    "source": { "ja": "マイメロディ＆クロミルーム", "en": "My Melody & Kuromi Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1149-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-melody-and-kuromi-room.webp",
    "livlies": ["002-c-000", "027-c-000"]
  },
  "1150-1-001": {
    "name": { "ja": "ゴースト・クリームの木", "en": "Ghost Cream Tree" },
    "fruit": { "ja": "呼び出されたクリームの実", "en": "Summoned Cream Fruit" },
    "source": { "ja": "Ghost Treats Island", "en": "Ghost Treats Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1150-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ghost-treats-island.webp",
    "livlies": ["025-m-002"]
  },
  "1172-1-001": {
    "name": { "ja": "秋のコットンフラワーアレンジの木", "en": "Autumn Cotton Floral Design Tree" },
    "fruit": { "ja": "手作りポフの実", "en": "Handmade Pof Fruit" },
    "source": { "ja": "ハンドメイド・ハーベストの島", "en": "Handmade Harvest Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1172-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/handmade-harvest-island.webp",
    "livlies": ["039-m-000"]
  },
  "1151-1-001": {
    "name": { "ja": "カンテラテントの木", "en": "Cantera Tent Tree" },
    "fruit": { "ja": "テントの光の実", "en": "Tent Light Fruit" },
    "source": { "ja": "ペーパークラフトサーカス", "en": "Paper Craft Circus" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1151-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/paper-craft-circus.webp",
    "livlies": ["039-m-000"]
  },
  "1170-1-005": {
    "name": { "ja": "ハンギョドンのももの木", "en": "Hangyodon Peach Tree" },
    "fruit": { "ja": "ハンギョドンのももの実", "en": "Hangyodon Peach Fruit" },
    "source": { "ja": "コラボショップ", "en": "Collab Shop: Sanrio Characters (Vol. 2)" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1170-1-005-P.png",
    "banner": null,
    "livlies": ["007-c-000"]
  },
  "1153-1-001": {
    "name": { "ja": "秋のもみじの木", "en": "Autumn Maple Tree" },
    "fruit": { "ja": "色づいたもみじの葉の実", "en": "Turned Maple Leaf Fruit" },
    "source": { "ja": "秋色染まるもみじの島", "en": "Autumn Maple Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1153-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/autumn-maple-island.webp",
    "livlies": ["035-m-001"]
  },
  "1154-1-001": {
    "name": { "ja": "マカロンの木", "en": "Macaron Tree" },
    "fruit": { "ja": "アラザンの実", "en": "Dragée Fruit" },
    "source": { "ja": "フラワーマカロンの島", "en": "Flower Macaron Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1154-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flower-macaron-island.webp",
    "livlies": ["018-m-003"]
  },
  "1155-1-001": {
    "name": { "ja": "提灯型ネオンサインの木", "en": "Lantern Design Neon Sign Tree" },
    "fruit": { "ja": "鮨印ネオンの実", "en": "Neon Sushi Logo Fruit" },
    "source": { "ja": "Cyber寿司verse", "en": "Cyber Sushiverse" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1155-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cyber-sushiverse.webp",
    "livlies": ["011-n-003"]
  },
  "1156-1-001": {
    "name": { "ja": "きらびやかなクリスマスの木", "en": "Gorgeous Christmas Tree" },
    "fruit": { "ja": "クーゲルオーナメントの実", "en": "Kugel Ornament Fruit" },
    "source": { "ja": "Christmas Dinner Party", "en": "Christmas Dinner Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1156-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/christmas-dinner-party.webp",
    "livlies": ["040-m-000"]
  },
  "1157-1-001": {
    "name": { "ja": "聖なる森のクリスマスの木", "en": "Holy Forest Christmas Tree" },
    "fruit": { "ja": "聖なる光の木の実", "en": "Holy Light Fruit" },
    "source": { "ja": "聖なる森のクリスマス", "en": "Holy Forest Christmas" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1157-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/holy-forest-christmas.webp",
    "livlies": ["036-n-001"]
  },
  "1158-1-001": {
    "name": { "ja": "あったか暖炉の木", "en": "Toasty Fireplace Tree" },
    "fruit": { "ja": "あったか暖炉のライトの実", "en": "Toasty Fireplace Light Fruit" },
    "source": { "ja": "あったか暖炉と毛糸の島", "en": "Toasty Fireplace & Yarn Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1158-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/toasty-fireplace-and-yarn-island.webp",
    "livlies": ["014-m-003"]
  },
  "1159-1-001": {
    "name": { "ja": "旅立つ気球の木", "en": "Departing Balloon Tree" },
    "fruit": { "ja": "気球のボタンの実", "en": "Balloon Button Fruit" },
    "source": { "ja": "旅する気球の島", "en": "Island of Traveling Balloons" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1159-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-traveling-balloons.webp",
    "livlies": ["041-m-000"]
  },
  "1160-1-001": {
    "name": { "ja": "南天の木", "en": "Sacred Bamboo Tree" },
    "fruit": { "ja": "南天の実", "en": "Sacred Bamboo Fruit" },
    "source": { "ja": "星空と暮れの島", "en": "Starry Dusk Sky Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1160-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starry-dusk-sky-island.webp",
    "livlies": ["002-n-004"]
  },
  "1174-1-001": {
    "name": { "ja": "紅白梅盆栽の木", "en": "Red & White Plum Bonsai Tree" },
    "fruit": { "ja": "紅白梅の実", "en": "Red & White Plum Blossom Fruit" },
    "source": { "ja": "紅白梅の島 新春彩り和装2024", "en": "Red & White Plum Blossom Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1174-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/red-and-white-plum-blossom-island.webp",
    "livlies": ["042-m-000"]
  },
  "1175-1-001": {
    "name": { "ja": "特殊なチランジアの木", "en": "Special Tillandsia Tree" },
    "fruit": { "ja": "特殊なチランジアの実", "en": "Special Tillandsia Fruit" },
    "source": { "ja": "Bubble Bath Island", "en": "Bubble Bath Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1175-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bubble-bath-island.webp",
    "livlies": ["031-m-002", "031-m-003"]
  },
  "1198-1-001": {
    "name": { "ja": "ステージライトの木", "en": "Stage Light Tree" },
    "fruit": { "ja": "スターチャームの実", "en": "Star Charm Fruit" },
    "source": { "ja": "LIVLY ROCK LIVE 2024", "en": "LIVLY ROCK LIVE 2024" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1198-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-rock-live-2024.webp",
    "livlies": ["027-m-002"]
  },
  "1177-1-001": {
    "name": { "ja": "ハードディスクと電子多肉植物の木", "en": "HDD & Digital Succulent Tree" },
    "fruit": { "ja": "電子多肉植物の実", "en": "Digital Succulent Fruit" },
    "source": { "ja": "電子植物とコンピュータの島", "en": "Digital Plants x Computer Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1177-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/digital-plants-x-computer-island.webp",
    "livlies": ["024-m-002"]
  },
  "1105-1-001": {
    "name": { "ja": "夜香の木", "en": "Night Scent Tree" },
    "fruit": { "ja": "夜香の実", "en": "Night Scent Fruit" },
    "source": { "ja": "調香師の島", "en": "Perfumer's Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1105-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/perfumers-island.webp",
    "livlies": ["043-m-000"]
  },
  "1180-1-001": {
    "name": { "ja": "卵を見守る赤いモビールの木", "en": "Egg-guarding Red Mobile Tree" },
    "fruit": { "ja": "幸運の燕ぬいぐるみの実", "en": "Lucky Swallow Plushie Fruit" },
    "source": { "ja": "眠る卵を見守る島", "en": "Sleeping Egg Sanctuary" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1180-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleeping-egg-sanctuary.webp",
    "livlies": ["017-m-003"]
  },
  "1181-1-001": {
    "name": { "ja": "ペーパーハートの木", "en": "Paper Heart Tree" },
    "fruit": { "ja": "ペーパーハートの実", "en": "Paper Heart Fruit" },
    "source": { "ja": "Valentine Card Island", "en": "Valentine Card Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1181-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/valentine-card-island.webp",
    "livlies": ["044-n-000"]
  },
  "1183-1-001": {
    "name": { "ja": "きらめく薔薇の木", "en": "Glistening Rose Tree" },
    "fruit": { "ja": "きらめく薔薇の花の実", "en": "Glistening Rose Fruit" },
    "source": { "ja": "秘密の薔薇の園", "en": "Secret Rose Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1183-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-rose-garden.webp",
    "livlies": ["030-n-002"]
  },
  "1184-1-001": {
    "name": { "ja": "星飾りがついたアーチの木", "en": "Star Bauble Arch Tree" },
    "fruit": { "ja": "星飾りの実", "en": "Star Bauble Fruit" },
    "source": { "ja": "スノーキャンプの島", "en": "Snowy Camp Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1184-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snowy-camp-island.webp",
    "livlies": ["028-m-002"]
  },
  "1185-1-001": {
    "name": { "ja": "猫草の木", "en": "Cat Grass Tree" },
    "fruit": { "ja": "猫草の実", "en": "Cat Grass Fruit" },
    "source": { "ja": "まどろみサンセットルーム", "en": "Drowsy Sunset Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1185-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/drowsy-sunset-room.webp",
    "livlies": ["037-m-001"]
  },
  "1186-1-001": {
    "name": { "ja": "バードフィーダーの木", "en": "Bird Feeder Tree" },
    "fruit": { "ja": "グミの実", "en": "Gummy Fruit" },
    "source": { "ja": "小鳥たちとつどいの島", "en": "Feathered Friends Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1186-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/feathered-friends-island.webp",
    "livlies": ["045-m-000"]
  },
  "1187-1-001": {
    "name": { "ja": "満開の枝垂桜の木", "en": "Full Bloom Weeping Cherry Tree" },
    "fruit": { "ja": "枝垂桜の実", "en": "Weeping Cherry Fruit" },
    "source": { "ja": "春宵の枝垂桜の島", "en": "Spring Night Weeping Cherry Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1187-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-night-weeping-cherry-island.webp",
    "livlies": ["046-m-000"]
  },
  "1188-1-001": {
    "name": { "ja": "ハートクッキーギフトボックスの木", "en": "Heart Cookie Gift Box Tree" },
    "fruit": { "ja": "ハートクッキーギフトボックスの実", "en": "Heart Cookie Gift Box Fruit" },
    "source": { "ja": "Sweet White Day Island", "en": "Sweet White Day Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1188-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-white-day-island.webp",
    "livlies": ["007-m-003"]
  },
  "1189-1-001": {
    "name": { "ja": "エレベーターの階数表示の木", "en": "Elevator Floor Indicator Tree" },
    "fruit": { "ja": "エレベーターの特別な階数の実", "en": "Elevator Special Floor Fruit" },
    "source": { "ja": "ワンダーエレベーター", "en": "Wonder Elevator" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1189-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wonder-elevator.webp",
    "livlies": ["039-m-001"]
  },
  "1190-1-001": {
    "name": { "ja": "ミモザが咲くティーカップの木", "en": "Blooming Mimosa Teacup Tree" },
    "fruit": { "ja": "ミモザの実", "en": "Mimosa Fruit" },
    "source": { "ja": "ミモザの島", "en": "Mimosa Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1190-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mimosa-island.webp",
    "livlies": ["047-m-000"]
  },
  "1191-1-001": {
    "name": { "ja": "螺旋階段の木", "en": "Spiral Staircase Tree" },
    "fruit": { "ja": "ウィンドチャイムの実", "en": "Wind Chime Fruit" },
    "source": { "ja": "思い出の屋根裏", "en": "Attic of Memories" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1191-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/attic-of-memories.webp",
    "livlies": ["038-m-001"]
  },
  "1192-1-001": {
    "name": { "ja": "隠されたイースターエッグの木", "en": "Hidden Easter Egg Tree" },
    "fruit": { "ja": "隠されたイースターエッグの実", "en": "Hidden Easter Egg Fruit" },
    "source": { "ja": "イースターエッグが辿り着く庭", "en": "Easter Egg Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1192-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/easter-egg-garden.webp",
    "livlies": ["048-m-000"]
  },
  "1193-1-001": {
    "name": { "ja": "メカニカルな苺の木", "en": "Mechanical Strawberry Tree" },
    "fruit": { "ja": "メカニカル模様の苺の花の実", "en": "Mechanical Strawberry Flower" },
    "source": { "ja": "不思議な苺の工場", "en": "Fanciful Strawberry Factory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1193-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fanciful-strawberry-factory.webp",
    "livlies": ["023-n-003"]
  },
  "1197-1-001": {
    "name": { "ja": "ホログラムツリー", "en": "Hologram Tree" },
    "fruit": { "ja": "メモリーの実", "en": "Memory Fruit" },
    "source": { "ja": "Memory Ark Island", "en": "Memory Ark Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1197-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/memory-ark-island.webp",
    "livlies": ["016-a-003"]
  },
  "1195-1-001": {
    "name": { "ja": "小さなリゾート風ハンモックの木", "en": "Small Resort-style Hammock Tree" },
    "fruit": { "ja": "リゾート風の小さな造花の実", "en": "Small Resort-style Silk Flower" },
    "source": { "ja": "海が見えるリゾートの島", "en": "Ocean View Resort Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1195-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ocean-view-resort-island.webp",
    "livlies": ["021-m-003"]
  },
  "1196-1-001": {
    "name": { "ja": "角竜の骨格模型の木", "en": "Ceratopsian Skeleton Model Tree" },
    "fruit": { "ja": "古代の実", "en": "Ancient Fruit" },
    "source": { "ja": "museum－古生物館", "en": "Museum of Paleontology" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1196-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/museum-of-paleontology.webp",
    "livlies": ["034-n-002"]
  },
  "1199-1-001": {
    "name": { "ja": "瑞々しいモンステラの木", "en": "Fresh Monstera Tree" },
    "fruit": { "ja": "瑞々しいモンステラの若葉の実", "en": "Fresh Monstera Young Leaf Fruit" },
    "source": { "ja": "ミニチュアジャングルの島", "en": "Miniature Jungle Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1199-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-jungle-island.webp",
    "livlies": ["049-m-000", "049-c-000"]
  },
  "1164-1-001": {
    "name": { "ja": "夜市ネオンライトの木", "en": "Night Market Neon Light Tree" },
    "fruit": { "ja": "ネオンライトの実", "en": "Neon Light Fruit" },
    "source": { "ja": "夜市電子遊樂場", "en": "Night Market Digital Arcade" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1164-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/night-market-digital-arcade.webp",
    "livlies": ["045-m-001"]
  },
  "1200-1-001": {
    "name": { "ja": "長寿の藤の木", "en": "Long-lived Wisteria Tree" },
    "fruit": { "ja": "藤の花の実", "en": "Wisteria Flower Fruit" },
    "source": { "ja": "不死の妙薬と藤の庭", "en": "Elixir of Immortality and Wisteria Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1200-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/elixir-of-immortality-and-wisteria-garden.webp",
    "livlies": ["020-n-003"]
  },
  "1201-1-001": {
    "name": { "ja": "不思議な青林檎の木", "en": "Mysterious Green Apple Tree" },
    "fruit": { "ja": "青林檎の実", "en": "Green Apple" },
    "source": { "ja": "日々の響き", "en": "Echoes of the Days" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1201-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/echoes-of-the-days.webp",
    "livlies": ["052-c-000", "050-c-000", "051-c-000"]
  },
  "1202-1-001": {
    "name": { "ja": "複葉機クラウドキャプチャーの木", "en": "Cloud Capture Biplane Tree" },
    "fruit": { "ja": "燃料オイルの実", "en": "Engine Oil Fruit" },
    "source": { "ja": "レトロフューチャーエアポート", "en": "Retro Future Airport" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1202-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/retro-future-airport.webp",
    "livlies": ["025-m-003"]
  },
  "1203-1-001": {
    "name": { "ja": "ワイルドフラワーの木", "en": "Wildflower Tree" },
    "fruit": { "ja": "ワイルドフラワーの実", "en": "Wildflower Fruit" },
    "source": { "ja": "おひさまの匂いの島", "en": "Sun-kissed Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1203-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sun-kissed-island.webp",
    "livlies": ["040-m-001"]
  },
  "1206-1-001": {
    "name": { "ja": "サンルームの紫陽花の木", "en": "Sunroom Hydrangea Tree" },
    "fruit": { "ja": "サンルームの紫陽花の実", "en": "Sunroom Hydrangea Fruit" },
    "source": { "ja": "雨の紫陽花サンルーム", "en": "Drizzling Hydrangea Sunroom" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1206-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/drizzling-hydrangea-sunroom.webp",
    "livlies": ["053-m-000"]
  },
  "1207-1-001": {
    "name": { "ja": "小さなウェディングガゼボの木", "en": "Little Wedding Gazebo Tree" },
    "fruit": { "ja": "ウェディングガゼボの花飾りの実", "en": "Wedding Gazebo Decor Fruit" },
    "source": { "ja": "Secret Toy Wedding", "en": "Secret Toy Wedding" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1207-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-toy-wedding.webp",
    "livlies": ["043-m-001"]
  },
  "1208-1-001": {
    "name": { "ja": "バブルプラントの木", "en": "Bubble Plant Tree" },
    "fruit": { "ja": "バブルプラントの実", "en": "Bubble Plant Fruit" },
    "source": { "ja": "バブルプラントの島", "en": "Bubble Plants Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1208-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bubble-plants-island.webp",
    "livlies": ["041-m-001"]
  },
  "1209-1-001": {
    "name": { "ja": "アイスのお城の木", "en": "Ice Cream Castle Tree" },
    "fruit": { "ja": "お花のキャンディの実", "en": "Floral Candy Fruit" },
    "source": { "ja": "夢色アイスケーキの島", "en": "Dreamy Ice Cream Cake Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1209-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-ice-cream-cake-island.webp",
    "livlies": ["029-m-002"]
  },
  "1210-1-001": {
    "name": { "ja": "蓮の木", "en": "Lotus Blossom Tree" },
    "fruit": { "ja": "蓮の実", "en": "Lotus Pod Fruit" },
    "source": { "ja": "卓上遊戯の応接間", "en": "Mahjong Parlor" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1210-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mahjong-parlor.webp",
    "livlies": ["042-m-001"]
  },
  "1211-1-001": {
    "name": { "ja": "堅牢な門扉の木", "en": "Sturdy Latticework Gate Tree" },
    "fruit": { "ja": "不思議な花の実", "en": "Curious Flower Fruit" },
    "source": { "ja": "花と門扉の島", "en": "Floral Latticework Gate Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1211-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/floral-latticework-gate-island.webp",
    "livlies": ["054-m-000"]
  },
  "1212-1-001": {
    "name": { "ja": "スイーツネイルポリッシュの木", "en": "Sweet Nail Polish Tree" },
    "fruit": { "ja": "星型ホログラムの実", "en": "Star-shaped Hologram Fruit" },
    "source": { "ja": "Sweet Nail Salon", "en": "Sweet Nail Salon" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1212-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-nail-salon.webp",
    "livlies": ["035-m-002"]
  },
  "1213-1-001": {
    "name": { "ja": "小さなブルーベリーの木", "en": "Small Blueberry Bush" },
    "fruit": { "ja": "小さなブルーベリーの実", "en": "Small Blueberry Fruit" },
    "source": { "ja": "ブルーベリーキッチンの島", "en": "Blueberry Kitchen Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1213-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blueberry-kitchen-island.webp",
    "livlies": ["019-m-003"]
  },
  "1214-1-001": {
    "name": { "ja": "深き水底の神秘なウロコの木", "en": "Mysterious Depths Scale Tree" },
    "fruit": { "ja": "神秘的なウロコ葉の実", "en": "Mysterious Scale Leaf Fruit" },
    "source": { "ja": "深き水底の神秘", "en": "Mysteries of the Deep" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1214-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mysteries-of-the-deep.webp",
    "livlies": ["003-n-004"]
  },
  "1215-1-001": {
    "name": { "ja": "夏祭りの赤風鈴の木", "en": "Summer Fest Red Wind Chime Tree" },
    "fruit": { "ja": "赤風鈴の実", "en": "Red Wind Chime Fruit" },
    "source": { "ja": "夏の夕暮れと祭りの島", "en": "Summer Sunset Festival Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1215-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-sunset-festival-island.webp",
    "livlies": ["055-m-000"]
  },
  "1216-1-001": {
    "name": { "ja": "郵便鞄を持ったテディベアの木", "en": "Letter Carrier Teddy Bear Tree" },
    "fruit": { "ja": "香り付きドライフラワーの実", "en": "Scented Dried Flower Fruit" },
    "source": { "ja": "ポストオフィステディベアの島", "en": "Postal Teddy Bear Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1216-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/postal-teddy-bear-island.webp",
    "livlies": ["056-m-000"]
  },
  "1217-1-001": {
    "name": { "ja": "大輪のひまわりの木", "en": "Giant Sunflower Tree" },
    "fruit": { "ja": "ひまわりの花の実", "en": "Sunflower Blossom Fruit" },
    "source": { "ja": "夕陽の空とひまわり畑", "en": "Sunset Sunflower Field" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1217-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sunset-sunflower-field.webp",
    "livlies": ["057-n-000"]
  },
  "1218-1-001": {
    "name": { "ja": "妖しい柳の木", "en": "Haunted Willow Tree" },
    "fruit": { "ja": "妖しい柳の鬼火の実", "en": "Spectral Will-o’-wisp Fruit" },
    "source": { "ja": "妖かし柳の島", "en": "Haunted Willow Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1218-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/haunted-willow-island.webp",
    "livlies": ["046-m-001"]
  },
  "1204-1-001": {
    "name": { "ja": "砂灯台の木", "en": "Sand Lighthouse Tree" },
    "fruit": { "ja": "砂灯台の灯りの実", "en": "Sand Lighthouse Beacon Fruit" },
    "source": { "ja": "貝がらクラフトの島", "en": "Seashell Crafts Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1204-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seashell-crafts-island.webp",
    "livlies": ["026-m-003"]
  },
  "1219-1-001": {
    "name": { "ja": "紙幣の山の木", "en": "Cash Heap Tree" },
    "fruit": { "ja": "幸運の金貨の実", "en": "Lucky Gold Coin Fruit" },
    "source": { "ja": "ゴージャスバンクの島", "en": "Dazzling Bank Vault Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1219-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dazzling-bank-vault-island.webp",
    "livlies": ["033-n-002"]
  },
  "1220-1-001": {
    "name": { "ja": "ティーポットハウスの木", "en": "Teapot House Tree" },
    "fruit": { "ja": "スズメウリの実", "en": "Zehneria Fruit" },
    "source": { "ja": "森の中のティーポットハウス", "en": "Forest Teapot House" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1220-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-teapot-house.webp",
    "livlies": ["044-n-001"]
  },
  "1221-1-001": {
    "name": { "ja": "月宴のリンドウの木", "en": "Moon Festival Rindo Tree" },
    "fruit": { "ja": "月宴のリンドウの実", "en": "Moon Festival Rindo Fruit" },
    "source": { "ja": "お月見の宴の島", "en": "Moon Viewing Festival Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1221-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/moon-viewing-festival-island.webp",
    "livlies": ["058-m-000"]
  },
  "1222-1-001": {
    "name": { "ja": "水の街のガラスランプの木", "en": "Hydropolis Glass Lamp Tree" },
    "fruit": { "ja": "水の街のガラスランプの実", "en": "Hydropolis Glass Lamp Fruit" },
    "source": { "ja": "黄昏にきらめく水の街", "en": "Twilight Sparkling Hydropolis" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1222-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/twilight-sparkling-hydropolis.webp",
    "livlies": ["032-m-002"]
  },
  "1223-1-001": {
    "name": { "ja": "大きなオパールの木", "en": "Massive Opal Tree" },
    "fruit": { "ja": "大きなオパールの木の実", "en": "Massive Opal Fruit" },
    "source": { "ja": "オパールの神殿の島", "en": "Opal Shrine Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1223-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/opal-shrine-island.webp",
    "livlies": ["059-m-000"]
  },
  "1225-1-001": {
    "name": { "ja": "喫茶店の固めプリンの木", "en": "Coffee Shop Custard Pudding Tree" },
    "fruit": { "ja": "シロップ漬けチェリーの実", "en": "Syrupy Cherry Fruit" },
    "source": { "ja": "隠れ小路の珈琲喫茶", "en": "Back-alley Coffee Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1225-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/back-alley-coffee-shop.webp",
    "livlies": ["047-m-001"]
  },
  "1226-1-001": {
    "name": { "ja": "アップルハウスの木", "en": "Apple House Tree" },
    "fruit": { "ja": "アップルハウスの実", "en": "Apple House Fruit" },
    "source": { "ja": "不思議なアップルハウスの島", "en": "Wondrous Apple House Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1226-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wondrous-apple-house-island.webp",
    "livlies": ["036-n-002"]
  },
  "1227-1-001": {
    "name": { "ja": "赤薔薇に囲まれた棺桶の木", "en": "Rose-choked Coffin Tree" },
    "fruit": { "ja": "棺桶を囲む赤薔薇の実", "en": "Coffin-clinging Rose Fruit" },
    "source": { "ja": "Vampire Night Halloween", "en": "Vampire Night Halloween" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1227-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/vampire-night-halloween.webp",
    "livlies": ["060-m-000"]
  },
  "1228-1-001": {
    "name": { "ja": "甘い香りの金木犀の木", "en": "Fragrant Osmanthus Tree" },
    "fruit": { "ja": "甘い香りの金木犀の実", "en": "Fragrant Osmanthus Tree Fruit" },
    "source": { "ja": "香る金木犀の森", "en": "Fragrant Osmanthus Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1228-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fragrant-osmanthus-forest.webp",
    "livlies": ["038-m-002"]
  },
  "1229-1-001": {
    "name": { "ja": "フラワーハロウィンハットの木", "en": "Flower Halloween Hat Tree" },
    "fruit": { "ja": "ハッピーフラワーの実", "en": "Happy Flower Fruit" },
    "source": { "ja": "魔女と帽子の島", "en": "A Witch and Her Hat Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1229-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-witch-and-her-hat-island.webp",
    "livlies": ["037-m-002"]
  },
  "1230-1-001": {
    "name": { "ja": "物語のブラックベリーの木", "en": "Storytime Blackberry Tree" },
    "fruit": { "ja": "物語のブラックベリーの実", "en": "Storytime Blackberry Fruit" },
    "source": { "ja": "赤ずきんの物語の島", "en": "Red Riding Hood Story Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1230-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/red-riding-hood-story-island.webp",
    "livlies": ["061-m-000"]
  },
  "1231-1-001": {
    "name": { "ja": "エレメンタルツリー", "en": "Elemental Tree" },
    "fruit": { "ja": "運命のエレメントの実", "en": "Element of Fate Fruit" },
    "source": { "ja": "占者見習いの部屋", "en": "Apprentice Diviner's Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1231-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/apprentice-diviners-room.webp",
    "livlies": ["048-m-001"]
  },
  "1232-1-001": {
    "name": { "ja": "トランプが浮かぶシルクハットの木", "en": "Floating Card Top Hat Tree" },
    "fruit": { "ja": "浮かぶトランプの実", "en": "Floating Card Fruit" },
    "source": { "ja": "Midnight Magic Show!", "en": "Midnight Magic Show!" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1232-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/midnight-magic-show.webp",
    "livlies": ["049-m-001"]
  },
  "1233-1-001": {
    "name": { "ja": "真っ赤なキノコの木", "en": "Ruby-red Mushroom Tree" },
    "fruit": { "ja": "真っ赤なキノコの実", "en": "Ruby-red Mushroom Fruit" },
    "source": { "ja": "真っ赤なキノコの森", "en": "Ruby-red Mushroom Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1233-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ruby-red-mushroom-forest.webp",
    "livlies": ["062-n-000", "062-c-000"]
  },
  "1234-1-001": {
    "name": { "ja": "黄金色に染まるイチョウの木", "en": "Golden Ginkgo Tree" },
    "fruit": { "ja": "黄金色に染まるイチョウの葉の実", "en": "Golden Ginkgo Leaf Fruit" },
    "source": { "ja": "イチョウの図書館の島", "en": "Ginkgo Library Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1234-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ginkgo-library-island.webp",
    "livlies": ["056-m-001"]
  },
  "1235-1-001": {
    "name": { "ja": "ダークチェリーケーキの木", "en": "Dark Cherry Cake Tree" },
    "fruit": { "ja": "ダークチェリーの実", "en": "Dark Cherry" },
    "source": { "ja": "ダークチェリーパティスリーの島", "en": "Dark Cherry Patisserie Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1235-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dark-cherry-patisserie-island.webp",
    "livlies": ["004-m-004"]
  },
  "1236-1-001": {
    "name": { "ja": "透き通ったザラエノヒトヨタケの木", "en": "Transparent Inkcap Mushroom Tree" },
    "fruit": { "ja": "ザラエノヒトヨタケの傘の実", "en": "Inkcap Mushroom Cap Fruit" },
    "source": { "ja": "透明偏愛家の研究室", "en": "Crystal Clear Connoisseur's Lab" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1236-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-clear-connoisseurs-lab.webp",
    "livlies": ["063-m-000"]
  },
  "1237-1-001": {
    "name": { "ja": "ミニチュアミシンの木", "en": "Mini Sewing Machine Tree" },
    "fruit": { "ja": "糸巻の実", "en": "Thread Spool Fruit" },
    "source": { "ja": "ソーイングルームの島", "en": "Sewing Room Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1237-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sewing-room-island.webp",
    "livlies": ["028-m-003"]
  },
  "1238-1-001": {
    "name": { "ja": "スノードームツリー", "en": "Snow Globe Tree" },
    "fruit": { "ja": "六花の実", "en": "Snow Crystal Fruit" },
    "source": { "ja": "暖炉上のホワイトタウン", "en": "White Townscape Over The Fireplace" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1238-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/white-townscape-over-the-fireplace.webp",
    "livlies": ["064-m-000"]
  },
  "1240-1-001": {
    "name": { "ja": "朝露に濡れる氷凛花の木", "en": "Dew-dappled Frost Blossom Tree" },
    "fruit": { "ja": "氷凛花の実", "en": "Frost Blossom Fruit" },
    "source": { "ja": "朝霧に包まれた静寂の島", "en": "Mist-veiled Silent Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1240-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mist-veiled-silent-island.webp",
    "livlies": ["055-m-001"]
  },
  "1241-1-001": {
    "name": { "ja": "白インククリスタルの木", "en": "White Ink Crystal Tree" },
    "fruit": { "ja": "白インククリスタルの実", "en": "White Ink Crystal Fruit" },
    "source": { "ja": "冬の本の島", "en": "Book of Winter Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1241-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/book-of-winter-island.webp",
    "livlies": ["039-m-002"]
  },
  "1242-1-001": {
    "name": { "ja": "お魚と星のパイのガーランドの木", "en": "Fish & Star Pie Garland Tree" },
    "fruit": { "ja": "パステルカラーのお魚と星の実", "en": "Pastel-colored Fish & Star Fruit" },
    "source": { "ja": "スターゲイジーパイの島", "en": "Stargazy Pie Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1242-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/stargazy-pie-island.webp",
    "livlies": ["043-m-002"]
  },
  "1243-1-001": {
    "name": { "ja": "光に彩られたクリスマスの木", "en": "Illuminated Christmas Tree" },
    "fruit": { "ja": "光に彩られたリボンの実", "en": "Illuminated Ribbon Fruit" },
    "source": { "ja": "イルミネーションクリスマス", "en": "Illumination Christmas" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1243-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/illumination-christmas.webp",
    "livlies": ["065-m-000"]
  },
  "1244-1-001": {
    "name": { "ja": "銭湯の親子アヒルの木", "en": "Bathhouse Rubber Duckies Tree" },
    "fruit": { "ja": "子アヒルの実", "en": "Rubber Duckling Fruit" },
    "source": { "ja": "くつろぎリヴリー銭湯の島", "en": "Relaxing Livly Bathhouse Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1244-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/relaxing-livly-bathhouse-island.webp",
    "livlies": ["042-m-002"]
  },
  "1245-1-001": {
    "name": { "ja": "天上に咲く牡丹の木", "en": "Heaven-blooming Peony Tree" },
    "fruit": { "ja": "天上に咲く牡丹の花の実", "en": "Heaven-blooming Peony Fruit" },
    "source": { "ja": "天上の牡丹の島 新春彩り和装2025", "en": "Heavenly Peony Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1245-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/heavenly-peony-island.webp",
    "livlies": ["066-n-000"]
  },
  "1246-1-001": {
    "name": { "ja": "キャンドルライトの木", "en": "Candle Light Tree" },
    "fruit": { "ja": "キャンドルライトの実", "en": "Candle Flame Fruit" },
    "source": { "ja": "Cozy Sketchbook Island", "en": "Cozy Sketchbook Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1246-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cozy-sketchbook-island.webp",
    "livlies": ["040-m-002"]
  },
  "1247-1-001": {
    "name": { "ja": "美術館のシャンデリアの木", "en": "Art Museum's Chandelier Tree" },
    "fruit": { "ja": "ガラスの蝋燭の実", "en": "Glass Candle Fruit" },
    "source": { "ja": "誰もいない美術館", "en": "Desolate Art Museum" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1247-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/desolate-art-museum.webp",
    "livlies": ["067-m-000"]
  },
  "1248-1-001": {
    "name": { "ja": "トゲツボカズラの木", "en": "Thorned Nepenthes Tree" },
    "fruit": { "ja": "トゲツボカズラの実", "en": "Thorned Nepenthes Fruit" },
    "source": { "ja": "museum―食虫植物館", "en": "Insectivorous Plant Museum" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1248-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/insectivorous-plant-museum.webp",
    "livlies": ["053-m-001"]
  },
  "1249-1-001": {
    "name": { "ja": "魔法の鏡と毒林檎の木", "en": "Mirror & Poisoned Apple Tree" },
    "fruit": { "ja": "甘い毒林檎の実", "en": "Sweet Poisoned Apple Fruit" },
    "source": { "ja": "毒林檎と鏡の物語", "en": "A Tale of Poisoned Apples and Mirrors" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1249-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-tale-of-poisoned-apples-and-mirrors.webp",
    "livlies": ["054-m-001"]
  },
  "1250-1-001": {
    "name": { "ja": "祝福の吊り飾りの木", "en": "Blessing Pendent Ornament Tree" },
    "fruit": { "ja": "祝福の赤い花の実", "en": "Blessing Scarlet Blossom Fruit" },
    "source": { "ja": "天に華咲く祝福の島", "en": "Island of Blossoming Blessings" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1250-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-blossoming-blessings.webp",
    "livlies": ["034-n-003"]
  },
  "1251-1-001": {
    "name": { "ja": "ベルベットローズの木", "en": "Velvet Rose Tree" },
    "fruit": { "ja": "ベルベットローズのつぼみの実", "en": "Velvet Rose Bud Fruit" },
    "source": { "ja": "Velvet Rose Valentine", "en": "Velvet Rose Valentine" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1251-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/velvet-rose-valentine.webp",
    "livlies": ["068-n-000"]
  },
  "1252-1-001": {
    "name": { "ja": "骨董店の金柑の木", "en": "Antique Shop Kumquat Tree" },
    "fruit": { "ja": "骨董店の金柑の実", "en": "Antique Shop Kumquat Fruit" },
    "source": { "ja": "雪舞う骨董店と金柑の島", "en": "Snowy Antique Shop & Kumquat Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1252-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snowy-antique-shop-and-kumquat-island.webp",
    "livlies": ["059-m-001"]
  },
  "1253-1-001": {
    "name": { "ja": "白いミニチュアテーブルセットの木", "en": "White Miniature Table Set Tree" },
    "fruit": { "ja": "ピンクの造花のバラの実", "en": "Pink Artificial Rose Fruit" },
    "source": { "ja": "ときめくバレンタインデートの島", "en": "Lovely Valentine's Date Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1253-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lovely-valentines-date-island.webp",
    "livlies": ["069-m-000"]
  },
  "1254-1-001": {
    "name": { "ja": "ブックヌックの木", "en": "Book Nook Tree" },
    "fruit": { "ja": "ランタンベリーの実", "en": "Lantern Berry Fruit" },
    "source": { "ja": "本棚の隠れ家の島", "en": "Bookworm's Hideout Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1254-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bookworms-hideout-island.webp",
    "livlies": ["057-n-001"]
  },
  "1255-1-001": {
    "name": { "ja": "グローワームの罠の木", "en": "Glow-worm Trap Tree" },
    "fruit": { "ja": "しずく型の粘液の実", "en": "Glow-worm Mucus Fruit" },
    "source": { "ja": "胞子舞う幻想洞窟", "en": "Fantastical Cave of Dancing Spores" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1255-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fantastical-cave-of-dancing-spores.webp",
    "livlies": ["045-m-002"]
  },
  "1256-1-001": {
    "name": { "ja": "カスミソウの木", "en": "Baby's Breath Tree" },
    "fruit": { "ja": "カスミソウの花の実", "en": "Baby's Breath Flower Fruit" },
    "source": { "ja": "My Precious White day", "en": "My Precious White Day" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1256-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-precious-white-day.webp",
    "livlies": ["070-a-000"]
  },
  "1257-1-001": {
    "name": { "ja": "きらめく金桜の木", "en": "Glistening Gold Sakura Tree" },
    "fruit": { "ja": "きらめく金桜の実", "en": "Glistening Gold Sakura Fruit" },
    "source": { "ja": "月夜にきらめく金桜の島", "en": "Moonlit Night Gold Sakura Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1257-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/moonlit-night-gold-sakura-island.webp",
    "livlies": ["060-m-001"]
  },
  "1258-1-001": {
    "name": { "ja": "紙飛行機の木", "en": "Paper Plane Tree" },
    "fruit": { "ja": "紙飛行機に貼ったシールの実", "en": "Paper Plane Sticker Fruit" },
    "source": { "ja": "あの日の教室", "en": "The Classroom on a Certain Day" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1258-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-classroom-on-a-certain-day.webp",
    "livlies": ["030-n-003"]
  },
  "1259-1-001": {
    "name": { "ja": "壊された魔女の棲家の木", "en": "The Witch's House in Ruins Tree" },
    "fruit": { "ja": "壊された魔女の棲家の実", "en": "The Witch's House in Ruins Fruit" },
    "source": { "ja": "壊された魔女の棲家", "en": "The Witch's House in Ruins" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1259-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-witchs-house-in-ruins.webp",
    "livlies": ["029-m-003"]
  },
  "1260-1-001": {
    "name": { "ja": "回る観覧車の木", "en": "Spinning Ferris Wheel Tree" },
    "fruit": { "ja": "観覧車の飾りの実", "en": "Ferris Wheel Decor Fruit" },
    "source": { "ja": "春めく遊園地の島", "en": "Springtime Amusement Park Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1260-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/springtime-amusement-park-island.webp",
    "livlies": ["062-n-001"]
  },
  "1272-1-001": {
    "name": { "ja": "思い出のフレームの木", "en": "Frame of Memories Tree" },
    "fruit": { "ja": "お祝いのバラの実", "en": "Celebratory Rose Fruit" },
    "source": { "ja": "Cherished Wedding Garden", "en": "Cherished Wedding Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1272-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cherished-wedding-garden.webp",
    "livlies": ["077-n-000"]
  },
  "1261-1-001": {
    "name": { "ja": "光溢れる不思議な扉の木", "en": "Luminous Mysterious Door Tree" },
    "fruit": { "ja": "太陽形の窓の実", "en": "Sun-shaped Window Fruit" },
    "source": { "ja": "とある扉の島", "en": "Island of a Certain Door" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1261-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-a-certain-door.webp",
    "livlies": ["071-n-000"]
  },
  "1263-1-001": {
    "name": { "ja": "苺の盆栽の木", "en": "Strawberry Bonsai Tree" },
    "fruit": { "ja": "いちばん美味しそうな赤い苺の実", "en": "Tastiest Red Strawberry Fruit" },
    "source": { "ja": "苺盆栽を愛でる島", "en": "Lovable Strawberry Bonsai Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1263-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lovable-strawberry-bonsai-island.webp",
    "livlies": ["027-m-003"]
  },
  "1264-1-001": {
    "name": { "ja": "飛行船ペリステラー号の木", "en": "Peristera Airship Tree" },
    "fruit": { "ja": "高山野ぶどうの実", "en": "Mountain Wild Grape Fruit" },
    "source": { "ja": "発見されたペリステラー号", "en": "The Discovered Peristera Airship" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1264-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-discovered-peristera-airship.webp",
    "livlies": ["033-n-003"]
  },
  "1265-1-001": {
    "name": { "ja": "黄金植物の木", "en": "Golden Flower Tree" },
    "fruit": { "ja": "黄金植物の実", "en": "Golden Flower Fruit" },
    "source": { "ja": "錬金術師と黄金植物の研究室", "en": "Alchemist and the Golden Plant Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1265-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-and-the-golden-plant-laboratory.webp",
    "livlies": ["072-m-000"]
  },
  "1266-1-001": {
    "name": { "ja": "空から降るひとすじの砂の木", "en": "Sky Sandfall Tree" },
    "fruit": { "ja": "星形の砂の実", "en": "Star-shaped Sand Fruit" },
    "source": { "ja": "Faraway Desert Island", "en": "Faraway Desert Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1266-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/faraway-desert-island.webp",
    "livlies": ["076-n-000"]
  },
  "1267-1-001": {
    "name": { "ja": "ネモフィラの木", "en": "Nemophila Tree" },
    "fruit": { "ja": "ネモフィラの花の実", "en": "Nemophila Flower Fruit" },
    "source": { "ja": "青空とネモフィラの島", "en": "Blue Sky and Nemophila Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1267-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blue-sky-and-nemophila-island.webp",
    "livlies": ["044-n-002"]
  },
  "1268-1-001": {
    "name": { "ja": "ゲーミングパッドの木", "en": "Gamepad Tree" },
    "fruit": { "ja": "サイコロの実", "en": "Dice Fruit" },
    "source": { "ja": "ゲーミングジャングル", "en": "Game Jungle" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1268-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/game-jungle.webp",
    "livlies": ["061-m-001"]
  },
  "1270-1-001": {
    "name": { "ja": "水草アクアリウムの木", "en": "Aquatic Plant Aquarium Tree" },
    "fruit": { "ja": "水草アクアリウムの実", "en": "Aquatic Plant Aquarium Fruit" },
    "source": { "ja": "水草アクアリウムのジオラマ", "en": "Aquatic Plant Aquarium Diorama" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1270-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/aquatic-plant-aquarium-diorama.webp",
    "livlies": ["041-m-002"]
  },
  "1271-1-001": {
    "name": { "ja": "ビッグドーナツのオブジェの木", "en": "Big Donut Tree" },
    "fruit": { "ja": "大人気のいちごドーナツの実", "en": "Popular Strawberry Donut Fruit" },
    "source": { "ja": "ミニチュアドーナツショップ", "en": "Miniature Donut Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1271-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-donut-shop.webp",
    "livlies": ["037-m-003"]
  },
  "1273-1-001": {
    "name": { "ja": "アトリエにある牛骨の木", "en": "Atelier's Cow Skull Tree" },
    "fruit": { "ja": "モチーフ管理タグの実", "en": "Inspiration Tag Fruit" },
    "source": { "ja": "曇り空のアトリエ", "en": "The Cloudy Atelier" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1273-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-cloudy-atelier.webp",
    "livlies": ["010-m-004"]
  },
  "1274-1-001": {
    "name": { "ja": "梅雨の音楽会の楽譜の木", "en": "Rainy Season Concert Score Tree" },
    "fruit": { "ja": "雨と奏でる楽譜の音符の実", "en": "Music Notes Played in Rain Fruit" },
    "source": { "ja": "雨降る音楽会の島", "en": "Rainy Concert Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1274-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/rainy-concert-island.webp",
    "livlies": ["024-m-003"]
  },
  "1275-1-001": {
    "name": { "ja": "特製ソーダの木", "en": "Special Soda Tree" },
    "fruit": { "ja": "赤いお花とリボン飾りの実", "en": "Red Flower & Ribbon Decor Fruit" },
    "source": { "ja": "戌亥とこの特製ソーダ喫茶", "en": "Inui Toko's Special Soda Cafe" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1275-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/inui-tokos-special-soda-cafe.webp",
    "livlies": ["078-c-000"]
  },
  "1277-1-001": {
    "name": { "ja": "バラのランプの木", "en": "Rose Lamp Tree" },
    "fruit": { "ja": "バラのランプの実", "en": "Rose Lamp Fruit" },
    "source": { "ja": "壱百満天原サロメのエレガントラボ", "en": "Hyakumantenbara Salome's Elegant Lab" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1277-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hyakumantenbara-salomes-elegant-lab.webp",
    "livlies": ["080-c-000"]
  },
  "1276-1-001": {
    "name": { "ja": "お花で飾られた鳥かごの木", "en": "Flower Adorned Bird Cage Tree" },
    "fruit": { "ja": "鳥かごの勿忘草の実", "en": "Forget-me-not Bird Cage Fruit" },
    "source": { "ja": "町田ちまと花のサンルーム", "en": "Machita Chima's Flower Sunroom" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1276-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/machita-chimas-flower-sunroom.webp",
    "livlies": ["079-c-000"]
  },
  "1278-1-001": {
    "name": { "ja": "ふわふわパンケーキの木", "en": "Fluffy Pancake Tree" },
    "fruit": { "ja": "パンケーキのバターの実", "en": "Pancake Butter Fruit" },
    "source": { "ja": "パンケーキブレックファーストの島", "en": "Pancake Breakfast Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1278-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pancake-breakfast-island.webp",
    "livlies": ["058-m-001"]
  },
  "1280-1-001": {
    "name": { "ja": "フワフワな花の雲の木", "en": "Floaty Flower Cloud Tree" },
    "fruit": { "ja": "フワフワな花の実", "en": "Floaty Flower Fruit" },
    "source": { "ja": "フワフワな花の雲の島", "en": "Mystical Floaty Flower Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1280-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mystical-floaty-flower-island.webp",
    "livlies": ["073-n-000"]
  },
  "1281-1-001": {
    "name": { "ja": "勇者の剣のおもちゃの木", "en": "Hero's Sword Toy Tree" },
    "fruit": { "ja": "加護の宝石の実", "en": "Gem of Protection Fruit" },
    "source": { "ja": "リヴリーアドベンチャーの島", "en": "Livly Adventure Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1281-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-adventure-island.webp",
    "livlies": ["074-n-000"]
  },
  "1282-1-001": {
    "name": { "ja": "聖なる炎を抱く神秘の玉樹", "en": "Mystical Sacred Flame Tree" },
    "fruit": { "ja": "燃え盛るような羽状の葉の実", "en": "Fiery Featherlike Leaf Fruit" },
    "source": { "ja": "聖なる炎と不死の錬金術", "en": "The Sacred Flame and Immortal Alchemy" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1282-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-sacred-flame-and-immortal-alchemy.webp",
    "livlies": ["046-m-002"]
  },
  "1283-1-001": {
    "name": { "ja": "再生したアボカドツリー", "en": "Replanted Avocado Tree" },
    "fruit": { "ja": "アボカドの種の実", "en": "Avocado Seed Fruit" },
    "source": { "ja": "窓辺のミニ菜園の島", "en": "Mini Vege Patch Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1283-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mini-vege-patch-island.webp",
    "livlies": ["064-m-001"]
  },
  "1284-1-001": {
    "name": { "ja": "不思議な小粒林檎のフラスコの木", "en": "Flasked Little Red Apple Tree" },
    "fruit": { "ja": "不思議な小粒林檎の実", "en": "Odd Little Red Apple Fruit" },
    "source": { "ja": "森にのまれた研究所", "en": "Lab Deep in the Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1284-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lab-deep-in-the-forest.webp",
    "livlies": ["075-a-000"]
  },
  "1285-1-001": {
    "name": { "ja": "人魚が愛した珊瑚のハープの木", "en": "Mermaid's Beloved Harp Tree" },
    "fruit": { "ja": "カラフルヒトデの実", "en": "Lilac Sea Star Fruit" },
    "source": { "ja": "海辺のシェルマリンルーム", "en": "Seaside Shell Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1285-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seaside-shell-room.webp",
    "livlies": ["035-m-003"]
  },
  "1286-1-001": {
    "name": { "ja": "スターライトトレインの窓の木", "en": "Starlight Train's Window Tree" },
    "fruit": { "ja": "星形オーナメントの実", "en": "Star Ornament Fruit" },
    "source": { "ja": "スターライトトレインの島", "en": "Starlight Train Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1286-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starlight-train-island.webp",
    "livlies": ["081-n-000"]
  },
  "1287-1-001": {
    "name": { "ja": "かごいっぱいのレモンの木", "en": "Basket of Lemons Tree" },
    "fruit": { "ja": "陽の光を浴びたレモンの実", "en": "Sun-ripened Lemon Fruit" },
    "source": { "ja": "Summer Lemon Party", "en": "Summer Lemon Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1287-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-lemon-party.webp",
    "livlies": ["056-m-002"]
  },
  "1288-1-001": {
    "name": { "ja": "白昼夢の中の金魚鉢の木", "en": "Daydream Goldfish Bowl Tree" },
    "fruit": { "ja": "金魚型琥珀糖の実", "en": "Goldfish Sugar Candy Fruit" },
    "source": { "ja": "金魚と白昼夢の庭", "en": "Garden of Goldfish and Daydreams" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1288-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/garden-of-goldfish-and-daydreams.webp",
    "livlies": ["066-n-001"]
  },
  "1289-1-001": {
    "name": { "ja": "ミニチュア火山の木", "en": "Miniature Volcano Tree" },
    "fruit": { "ja": "溢れるマグマの実", "en": "Overflowing Magma Fruit" },
    "source": { "ja": "ミニチュア火山と恐竜の島", "en": "Miniature Volcano and Dinosaur Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1289-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-volcano-and-dinosaur-island.webp",
    "livlies": ["055-m-002"]
  },
  "1291-1-001": {
    "name": { "ja": "特製ウォータードリッパーの木", "en": "Dutch Slow-Drip Coffee Tree" },
    "fruit": { "ja": "コールドブリュー・コーヒーの実", "en": "Cold Brew Coffee Fruit" },
    "source": { "ja": "コールドブリュー・コーヒーの島", "en": "Cold Brew Coffee Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1291-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cold-brew-coffee-island.webp",
    "livlies": ["063-m-001"]
  },
  "1292-1-001": {
    "name": { "ja": "鬼灯の木", "en": "Chinese Lantern Tree" },
    "fruit": { "ja": "透かし鬼灯の実", "en": "Shining Chinese Lantern Fruit" },
    "source": { "ja": "赤き月と鬼灯の島", "en": "Blood Moon and Chinese Lantern Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1292-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blood-moon-and-chinese-lantern-island.webp",
    "livlies": ["082-m-000"]
  },
  "1293-1-001": {
    "name": { "ja": "ガジュマルの木", "en": "Chinese Banyan Tree" },
    "fruit": { "ja": "ムーンストーンの実", "en": "Moonstone Fruit" },
    "source": { "ja": "月光浴バルコニー", "en": "Balcony Bathed in Moonlight" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1293-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/balcony-bathed-in-moonlight.webp",
    "livlies": ["036-n-003"]
  },
  "1294-1-001": {
    "name": { "ja": "ヘクセンハウスの木", "en": "Gingerbread House Tree" },
    "fruit": { "ja": "魔女が作ったクッキーの実", "en": "Witch's Baked Cookies Fruit" },
    "source": { "ja": "迷いの森とお菓子の物語", "en": "The Tale of the Lost Forest and Sweets" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1294-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-tale-of-the-lost-forest-and-sweets.webp",
    "livlies": ["068-n-001"]
  },
  "1295-1-001": {
    "name": { "ja": "レトロなブルーラジオの木", "en": "Blue Retro Radio Tree" },
    "fruit": { "ja": "アンテナトッパーの実", "en": "Antenna Cap Fruit" },
    "source": { "ja": "午後8時のラジオルーム", "en": "After Eight Radio Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1295-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/after-eight-radio-room.webp",
    "livlies": ["005-n-004"]
  },
  "1296-1-001": {
    "name": { "ja": "ラベンダーの木", "en": "Lavender Tree" },
    "fruit": { "ja": "ラベンダーの花の実", "en": "Lavender Flower Fruit" },
    "source": { "ja": "ラベンダー香る島", "en": "Scents of Lavender Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1296-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/scents-of-lavender-island.webp",
    "livlies": ["048-m-002"]
  },
  "1297-1-001": {
    "name": { "ja": "宇宙服の木", "en": "Astronaut Tree" },
    "fruit": { "ja": "電波の実", "en": "Electromagnetic Wave Fruit" },
    "source": { "ja": "museum―宇宙館", "en": "Space Museum" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1297-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/space-museum.webp",
    "livlies": ["047-m-002"]
  },
  "1298-1-001": {
    "name": { "ja": "ウィスプランタンの木", "en": "Will-o'-Wisp Lantern Tree" },
    "fruit": { "ja": "ウィスプランタンの実", "en": "Will-o'-Wisp Lantern Fruit" },
    "source": { "ja": "魔女集う秘密の森", "en": "Secret Forest Where Witches Gather" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1298-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-forest-where-witches-gather.webp",
    "livlies": ["083-m-000"]
  },
  "1300-1-001": {
    "name": { "ja": "神殿の水晶の木", "en": "Sanctuary's Crystal Tree" },
    "fruit": { "ja": "結晶化した花の実", "en": "Crystallized Flower Fruit" },
    "source": { "ja": "水晶の眠る神殿の島", "en": "Sanctuary of Sleeping Crystals Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1300-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sanctuary-of-sleeping-crystals-island.webp",
    "livlies": ["071-n-001"]
  },
  "1301-1-001": {
    "name": { "ja": "ジャック・オ・ランタンの木", "en": "Jack-o'-Lantern Tree" },
    "fruit": { "ja": "ぐるぐるキャンディの実", "en": "Twisted Candy Fruit" },
    "source": { "ja": "BOO! Halloween Factory", "en": "BOO! Halloween Factory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1301-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/boo-halloween-factory.webp",
    "livlies": ["084-m-000"]
  },
  "1302-1-001": {
    "name": { "ja": "モフモフジャケットの木", "en": "Favorite Fluffy Jacket" },
    "fruit": { "ja": "ボタンの目の実", "en": "Button Eye Fruit" },
    "source": { "ja": "モンスターメイクルーム", "en": "Monster Makeup Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1302-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/monster-makeup-room.webp",
    "livlies": ["067-m-001"]
  },
  "1303-1-001": {
    "name": { "ja": "赤い蝋燭の付いた燭台の木", "en": "Scarlet Candle Candelabra Tree" },
    "fruit": { "ja": "赤い蝋燭に灯る火の実", "en": "Ghostly Flame Fruit" },
    "source": { "ja": "悪食伯爵の饗宴の島", "en": "Bloodthirsty Count's Banquet Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1303-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bloodthirsty-counts-banquet-island.webp",
    "livlies": ["084-m-001"]
  },
  "1304-1-001": {
    "name": { "ja": "かぎ編み秋色の木", "en": "Crocheted Autumn Tree" },
    "fruit": { "ja": "かぎ編みどんぐりの実", "en": "Crocheted Acorn Fruit" },
    "source": { "ja": "秋をつむぐ編み物の島", "en": "Crocheted with Fall's Thread Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1304-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crocheted-with-falls-thread-island.webp",
    "livlies": ["085-m-000"]
  },
  "1305-1-001": {
    "name": { "ja": "汀の彼岸花の木", "en": "Water's Edge Spider Lily Tree" },
    "fruit": { "ja": "汀の彼岸花の実", "en": "Water's Edge Spider Lily Fruit" },
    "source": { "ja": "汀の彼岸花の島", "en": "Spider Lilies Along Water's Edge Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1305-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spider-lilies-along-waters-edge-island.webp",
    "livlies": ["076-n-001"]
  },
  "1306-1-001": {
    "name": { "ja": "ふわふわの雲ベッドの木", "en": "Fluffy Cloud Bed Tree" },
    "fruit": { "ja": "月と星のきらめきクッションの実", "en": "Moon & Stars Cushion Fruit" },
    "source": { "ja": "ふんわりベッドとおやすみの島", "en": "Soft Bed on Night-Night Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1306-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/soft-bed-on-night-night-island.webp",
    "livlies": ["070-a-001"]
  },
  "1307-1-001": {
    "name": { "ja": "宇宙タコヤキ星の木", "en": "Planet Takoyaki Tree" },
    "fruit": { "ja": "宇宙タコヤキ星の実", "en": "Planet Takoyaki Fruit" },
    "source": { "ja": "TAKOYAKI UNIVERSE", "en": "TAKOYAKI UNIVERSE" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1307-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/takoyaki-universe.webp",
    "livlies": ["069-m-001"]
  },
  "1308-1-001": {
    "name": { "ja": "機関車レッドアルケミストの木", "en": "Steam Train Red Alchemist Tree" },
    "fruit": { "ja": "機関車のヘッドライトの実", "en": "Steam Train Headlight Fruit" },
    "source": { "ja": "汽笛響く紅き列車", "en": "Crimson Steam Train's Echoing Whistle" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1308-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crimson-steam-trains-echoing-whistle.webp",
    "livlies": ["049-m-002"]
  },
  "1309-1-001": {
    "name": { "ja": "フロストツリー", "en": "Frost Tree" },
    "fruit": { "ja": "フロストツリーの実", "en": "Frost Tree Fruit" },
    "source": { "ja": "精霊の宿るフロストウッド", "en": "Frosty Woods Where the Spirits Dwell" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1309-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/frosty-woods-where-the-spirits-dwell.webp",
    "livlies": ["086-m-000"]
  },
  "1310-1-001": {
    "name": { "ja": "マクラメ編みタペストリーの木", "en": "Macrame Tapestry Tree" },
    "fruit": { "ja": "マクラメ編みのフリンジの実", "en": "Macrame Tassel Fruit" },
    "source": { "ja": "BOHOスタイルの窓辺", "en": "Boho Style Windowsill" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1310-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/boho-style-windowsill.webp",
    "livlies": ["059-m-002"]
  },
  "1311-1-001": {
    "name": { "ja": "ルミナスプリズムの木", "en": "Luminous Prism Tree" },
    "fruit": { "ja": "プリズムドロップの実", "en": "Prism Teardrop Fruit" },
    "source": { "ja": "Luminous Prism Island", "en": "Luminous Prism Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1311-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/luminous-prism-island.webp",
    "livlies": ["072-m-001"]
  },
  "1312-1-001": {
    "name": { "ja": "ブックツリーとランプの木", "en": "Book and Lamp Tree" },
    "fruit": { "ja": "ブックツリーのランプの実", "en": "Book and Lamp Fruit" },
    "source": { "ja": "物語が灯る小さな本屋", "en": "Tiny Bookshop Illuminated by Stories" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1312-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/tiny-bookshop-illuminated-by-stories.webp",
    "livlies": ["077-n-001"]
  },
  "1313-1-001": {
    "name": { "ja": "クリスマスリースの木", "en": "Christmas Wreath Tree" },
    "fruit": { "ja": "リースを飾るリボンの実", "en": "Wreath Ribbon Fruit" },
    "source": { "ja": "サンタクロースを待つ島", "en": "The Island that Waits for Santa" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1313-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-island-that-waits-for-santa.webp",
    "livlies": ["088-m-000"]
  },
  "1314-1-001": {
    "name": { "ja": "色褪せたスノードロップの木", "en": "Faded Snowdrop Tree" },
    "fruit": { "ja": "色褪せたスノードロップの実", "en": "Faded Snowdrop Fruit" },
    "source": { "ja": "モノクロスノードロップの島", "en": "Monochrome Snowdrop Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1314-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/monochrome-snowdrop-island.webp",
    "livlies": ["086-m-001"]
  },
  "1315-1-001": {
    "name": { "ja": "ラーメン屋さんの提灯の木", "en": "Ramen Shop's Lantern Tree" },
    "fruit": { "ja": "ラーメン屋さんの提灯の実", "en": "Ramen Shop's Lantern Fruit" },
    "source": { "ja": "冬空のラーメン屋さん", "en": "Winter Ramen Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1315-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/winter-ramen-shop.webp",
    "livlies": ["046-m-003"]
  },
  "1316-1-001": {
    "name": { "ja": "咲き誇る古典菊の木", "en": "Brilliant Chrysanthemum Tree" },
    "fruit": { "ja": "菊水の露の実", "en": "Chrysanthemum Nectar Fruit" },
    "source": { "ja": "菊水の盃の島 新春彩り和装2026", "en": "Cup of Chrysanthemum Nectar Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1316-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cup-of-chrysanthemum-nectar-island.webp",
    "livlies": ["087-n-000"]
  },
  "1317-1-001": {
    "name": { "ja": "舞踏会の開かれるお城の木", "en": "Grand Ball at the Castle Tree" },
    "fruit": { "ja": "お城の鐘の実", "en": "Castle's Bell Fruit" },
    "source": { "ja": "シンデレラとガラスの靴の物語", "en": "The Tale of Cinderella & Glass Slippers" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1317-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-tale-of-cinderella-and-glass-slippers.webp",
    "livlies": ["064-m-002"]
  },
  "1318-1-001": {
    "name": { "ja": "銀色の蛇口の木", "en": "Silver Tap Tree" },
    "fruit": { "ja": "蛇口の水滴の実", "en": "Water Drop Fruit" },
    "source": { "ja": "パチャパチャシンクの島", "en": "Splish Splash Sink Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1318-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/splish-splash-sink-island.webp",
    "livlies": ["054-m-002"]
  },
  "1319-1-001": {
    "name": { "ja": "スケートリンクの街灯の木", "en": "Ice Rink Streetlight Tree" },
    "fruit": { "ja": "導く灯りの実", "en": "Beckoning Light Fruit" },
    "source": { "ja": "Ice Skate Island", "en": "Ice Skate Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1319-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ice-skate-island.webp",
    "livlies": ["065-m-001"]
  },
  "1320-1-001": {
    "name": { "ja": "クラウドベリーのなる倒木", "en": "Fallen Cloudberry-covered Tree" },
    "fruit": { "ja": "クラウドベリーの実", "en": "Cloudberry Fruit" },
    "source": { "ja": "クラウドベリーと精霊の森", "en": "Cloudberry & Woodland Nymph Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1320-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cloudberry-and-woodland-nymph-forest.webp",
    "livlies": ["089-m-000"]
  },
  "1321-1-001": {
    "name": { "ja": "蜃気楼の塔の木", "en": "Tower of Mirages Tree" },
    "fruit": { "ja": "蜃気楼にかかるもやの実", "en": "Hazy Mirage Fruit" },
    "source": { "ja": "夢現なトリックアートの島", "en": "Trick Art & Trances Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1321-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/trick-art-and-trances-island.webp",
    "livlies": ["074-n-001"]
  },
  "1322-1-001": {
    "name": { "ja": "ワイヤーランタンの木", "en": "Wire Lantern Tree" },
    "fruit": { "ja": "沈丁花のミニブーケの実", "en": "Posy of Winter Daphne Fruit" },
    "source": { "ja": "夜に香る恋の花屋", "en": "Florist of Love & Midnight Perfumes" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1322-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/florist-of-love-and-midnight-perfumes.webp",
    "livlies": ["090-n-000"]
  },
  "1323-1-001": {
    "name": { "ja": "大粒の苺のケーキの木", "en": "Large Strawberry Cake Tree" },
    "fruit": { "ja": "粉砂糖のかかった苺の実", "en": "Crushed Sugar Strawberry Fruit" },
    "source": { "ja": "Strawberry Cafe Island", "en": "Strawberry Cafe Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1323-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/strawberry-cafe-island.webp",
    "livlies": ["017-m-004"]
  },
  "1324-1-001": {
    "name": { "ja": "結晶のなる松の木", "en": "Crystallizing Pine Tree" },
    "fruit": { "ja": "不思議な結晶の実", "en": "Mysterious Crystal Fruit" },
    "source": { "ja": "霧深い仙境の島", "en": "The Mystical Island Beyond the Mist" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1324-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-mystical-island-beyond-the-mist.webp",
    "livlies": ["053-m-002"]
  },
  "1325-1-001": {
    "name": { "ja": "春の訪れを告げる木", "en": "Spring’s Arrival Tree" },
    "fruit": { "ja": "春の訪れを告げる花の実", "en": "Spring’s Arrival Flower Fruit" },
    "source": { "ja": "春の蝶と雪解けの洞窟", "en": "Spring’s Butterfly & the Cave of Melting Snow" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1325-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/springs-butterfly-and-the-cave-of-melting-snow.webp",
    "livlies": ["091-m-000"]
  },
  "1326-1-001": {
    "name": { "ja": "ペンダントネックレスの木", "en": "Necklace & Pendant Tree" },
    "fruit": { "ja": "ペンダントトップの実", "en": "Pendant Top Fruit" },
    "source": { "ja": "とある夫人の宝石箱の島", "en": "A Lady's Jewelry Box Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1326-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-ladys-jewelry-box-island.webp",
    "livlies": ["057-n-002"]
  },
  "1327-1-001": {
    "name": { "ja": "霞む白桜の木", "en": "Veiled by Snowy Blossoms Tree" },
    "fruit": { "ja": "白桜に舞う光の実", "en": "Dancing Blossom's Light Fruit" },
    "source": { "ja": "白桜に霞む丘", "en": "A Hillside Veiled by Snowy Blossoms" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1327-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-hillside-veiled-by-snowy-blossoms.webp",
    "livlies": ["092-n-000"]
  },
  "1328-1-001": {
    "name": { "ja": "紳士服のショーケースの木", "en": "Tailored Suit Showcase Tree" },
    "fruit": { "ja": "さまざまなネクタイの実", "en": "Curated Necktie Fruit" },
    "source": { "ja": "Classic Tailor Shop", "en": "Classic Tailor Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1328-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/classic-tailor-shop.webp",
    "livlies": ["063-m-002"]
  },
  "1329-1-001": {
    "name": { "ja": "透き通った桜の木", "en": "Gossamer Cherry Blossom Tree" },
    "fruit": { "ja": "透き通った桜の実", "en": "Gossamer Cherry Blossom Fruit" },
    "source": { "ja": "幻想のブロッサムパレス", "en": "The Blossom Palace of Dreams" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1329-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-blossom-palace-of-dreams.webp",
    "livlies": ["073-n-001"]
  },
  "1330-1-001": {
    "name": { "ja": "コンビニの看板の木", "en": "Store's Sign Tree" },
    "fruit": { "ja": "コンビニロゴの実", "en": "Store's Logo Fruit" },
    "source": { "ja": "ミニチュアリヴリーコンビニ", "en": "Livly Miniature Convenience Store" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1330-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-miniature-convenience-store.webp",
    "livlies": ["062-n-002"]
  },
  "1331-1-001": {
    "name": { "ja": "ボタニカルキャンドルの木", "en": "Botanical Candle Tree" },
    "fruit": { "ja": "ドライフルーツの実", "en": "Spiced Sundried Fruit" },
    "source": { "ja": "Candle Laboratory", "en": "Candle Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1331-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/candle-laboratory.webp",
    "livlies": ["093-n-000"]
  },
  "1332-1-001": {
    "name": { "ja": "花咲く山ワサビの木", "en": "Flowering Wild Wasabi Tree" },
    "fruit": { "ja": "山ワサビの花の実", "en": "Wild Wasabi Flower Fruit" },
    "source": { "ja": "春の山菜とせせらぎの島", "en": "Island of Spring's Wild Herbs & Streams" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1332-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-springs-wild-herbs-and-streams.webp",
    "livlies": ["066-n-002"]
  },
  "1333-1-001": {
    "name": { "ja": "静かな月の木", "en": "Soundless Moon Tree" },
    "fruit": { "ja": "静かな月の実", "en": "Soundless Moon Fruit" },
    "source": { "ja": "とある芽吹きの島", "en": "Island of a Certain Tree Sprout" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1333-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-a-certain-tree-sprout.webp",
    "livlies": ["094-n-000"]
  },
  "1335-1-001": {
    "name": { "ja": "スイートピーティーポットの木", "en": "Sweet Pea Teapot Tree" },
    "fruit": { "ja": "スイートピーの実", "en": "Sweet Pea Fruit" },
    "source": { "ja": "Spring Flower Picnic", "en": "Spring Flower Picnic" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1335-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-flower-picnic.webp",
    "livlies": ["075-a-001"]
  },
  "1336-1-001": {
    "name": { "ja": "球型の特製フラスコの木", "en": "Special Distillation Flask Tree" },
    "fruit": { "ja": "光るミニフラスコの実", "en": "Glowing Mini Flask Fruit" },
    "source": { "ja": "電気と錬金術の研究室", "en": "Electrical Alchemy Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1336-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/electrical-alchemy-laboratory.webp",
    "livlies": ["095-m-000"]
  },
  "1337-1-001": {
    "name": { "ja": "ハニーブーケの木", "en": "Honey Bouquet Tree" },
    "fruit": { "ja": "ハチミツべっこう飴の実", "en": "Honey Lollipop Fruit" },
    "source": { "ja": "スウィートハニープレゼントルーム", "en": "Sweet Honey Bouquet Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1337-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-honey-bouquet-room.webp",
    "livlies": ["039-m-003"]
  },
  "1338-1-001": {
    "name": { "ja": "ピグミーとヴォルグの柱の木", "en": "Pygmy & Volg-covered Pillar Tree" },
    "fruit": { "ja": "ピグミーとヴォルグステッカーの実", "en": "Pygmy & Volg Sticker Fruit" },
    "source": { "ja": "アニメ化妄想プロモーションの島", "en": "Imaginary Anime Promotion Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1338-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/imaginary-anime-promotion-island.webp",
    "livlies": ["012-m-004"]
  },
  "1339-1-001": {
    "name": { "ja": "咲き誇るチューリップの木", "en": "Blooming Tulip Tree" },
    "fruit": { "ja": "咲き誇るチューリップの実", "en": "Blooming Tulip Fruit" },
    "source": { "ja": "風に揺れるチューリップの島", "en": "Island of Swaying Tulips" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1339-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-swaying-tulips.webp",
    "livlies": ["096-n-000"]
  },
  "1340-1-001": {
    "name": { "ja": "白化サンゴの木", "en": "Bleached Coral Tree" },
    "fruit": { "ja": "アオトゲサンゴの実", "en": "Pink-Tipped Blue Anemone Fruit" },
    "source": { "ja": "白化サンゴの島", "en": "Bleached Coral Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1340-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bleached-coral-island.webp",
    "livlies": ["022-m-004"]
  },
  "1341-1-001": {
    "name": { "ja": "気球モビールの木", "en": "Hot Air Balloon Mobile Tree" },
    "fruit": { "ja": "気球モビールの実", "en": "Hot Air Balloon Mobile Fruit" },
    "source": { "ja": "Antique Toy Island", "en": "Antique Toy Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1341-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/antique-toy-island.webp",
    "livlies": ["026-m-004"]
  },
  "1343-1-001": {
    "name": { "ja": "夢と現実をつなぐ木", "en": "Linked Dreams and Reality Tree" },
    "fruit": { "ja": "夢を閉じ込めた実", "en": "Full of Dreams Fruit" },
    "source": { "ja": "クジラが見た夢の島", "en": "The Island from the Whale's Dreams" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1343-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-island-from-the-whales-dreams.webp",
    "livlies": ["008-m-004"]
  },
  "1344-1-001": {
    "name": { "ja": "甘く香るビワの木", "en": "Sweet Scented Loquat Tree" },
    "fruit": { "ja": "こぼれたビワの花の実", "en": "Fallen Loquat Blossom Fruit" },
    "source": { "ja": "ビワ香るおばあちゃんの家", "en": "Warm Scents of Loquat Jam Kitchen" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1344-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/warm-scents-of-loquat-jam-kitchen.webp",
    "livlies": ["038-m-003"]
  },
  "1345-1-001": {
    "name": { "ja": "月下美人の木", "en": "Queen of the Night Tree" },
    "fruit": { "ja": "月下美人の実", "en": "Queen of the Night Fruit" },
    "source": { "ja": "夜半の月下美人の島", "en": "Queen of the Night Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1345-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/queen-of-the-night-island.webp",
    "livlies": ["099-m-000"]
  },
  "1346-1-001": {
    "name": { "ja": "山積みの洗濯物の木", "en": "Mountain of Laundry Tree" },
    "fruit": { "ja": "洗濯した靴下の実", "en": "Freshly Laundered Socks Fruit" },
    "source": { "ja": "週末コインランドリーの島", "en": "Weekend Laundromat Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1346-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/weekend-laundromat-island.webp",
    "livlies": ["076-n-002"]
  },
  "1347-1-001": {
    "name": { "ja": "紫陽花とバラのブーケの木", "en": "Hydrangea & Rose Bouquet Tree" },
    "fruit": { "ja": "ボードゲームのコマの実", "en": "Board Game Piece Fruit" },
    "source": { "ja": "Wedding Board Game Party", "en": "Wedding Board Game Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1347-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wedding-board-game-party.webp",
    "livlies": ["069-m-002"]
  },
  "1350-1-001": {
    "name": { "ja": "ガラスの小鳥と雨雫の木", "en": "Glass Birdie and Raindrop Tree" },
    "fruit": { "ja": "ガラスの青い花の実", "en": "Blue Glass Flower Fruit" },
    "source": { "ja": "リゼ・ヘルエスタと雨宿りのお茶会", "en": "Lize Helesta and the Rainy Tea Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1350-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lize-helesta-and-the-rainy-tea-party.webp",
    "livlies": ["029-c-000"]
  },
  "1348-1-001": {
    "name": { "ja": "愛をはかる天秤の木", "en": "The Scales of Love Tree" },
    "fruit": { "ja": "赤いハート型鉱石の実", "en": "Red Heart Crystal Fruit" },
    "source": { "ja": "アンジュ・カトリーナの恋愛錬金室", "en": "Ange Katrina's Alchemy Lab of Romance" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1348-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ange-katrinas-alchemy-lab-of-romance.webp",
    "livlies": ["062-c-000"]
  },
  "1349-1-001": {
    "name": { "ja": "召喚ダイカガミの木", "en": "Summoned DAIKAGAMI Tree" },
    "fruit": { "ja": "ダイカガミハンマーの実", "en": "DAIKAGAMI Hammer Fruit" },
    "source": { "ja": "加賀美ハヤトのホビーラウンジ", "en": "Kagami Hayato's Hobby Lounge" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1349-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/kagami-hayatos-hobby-lounge.webp",
    "livlies": ["049-c-000"]
  },
  "1352-1-001": {
    "name": { "ja": "ライブストリームマイクの木", "en": "Live Stream Mic Tree" },
    "fruit": { "ja": "ライブストリームマイクの実", "en": "Live Stream Mic Fruit" },
    "source": { "ja": "深夜XX時の配信部屋", "en": "Live Streamer's Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1352-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/live-streamers-room.webp",
    "livlies": ["081-n-001"]
  },
  "1353-1-001": {
    "name": { "ja": "惑星のフローターの木", "en": "Planet Floaty Tree" },
    "fruit": { "ja": "星形のフローターの実", "en": "Star Floaty Fruit" },
    "source": { "ja": "Dreamy Floating Pool", "en": "Dreamy Floating Pool" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1353-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-floating-pool.webp",
    "livlies": ["070-a-002"]
  },
  "1354-1-001": {
    "name": { "ja": "大きなパイプオルガンの木", "en": "Large Pipe Organ Tree" },
    "fruit": { "ja": "パイプオルガンの音色の実", "en": "Pipe Organ's Melody Fruit" },
    "source": { "ja": "祝福のパイプオルガンの島", "en": "Pipe Organ of Blessings Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1354-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pipe-organ-of-blessings-island.webp",
    "livlies": ["100-n-000"]
  },
  "1355-1-001": {
    "name": { "ja": "ボタニカルゼリーの木", "en": "Botanical Jelly Tree" },
    "fruit": { "ja": "ゼリーのタグの実", "en": "Jelly Label Fruit" },
    "source": { "ja": "ボタニカルゼリーラボ", "en": "Botanical Jelly Lab" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1355-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/botanical-jelly-lab.webp",
    "livlies": ["101-n-000"]
  },
  "1356-1-001": {
    "name": { "ja": "神秘の鉱石をいだく根の木", "en": "Entwined Root and Crystal Tree" },
    "fruit": { "ja": "生命を潤す鉱石の実", "en": "Life-giving Crystal Fruit" },
    "source": { "ja": "地の迷宮に眠る石", "en": "Crystal that Slumbers in the Earth's Maze" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1356-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-that-slumbers-in-the-earths-maze.webp",
    "livlies": ["083-m-001"]
  },
  "1357-1-001": {
    "name": { "ja": "ホログラムオーダーツールの木", "en": "Holographic Ordering Screen Tree" },
    "fruit": { "ja": "ホログラムアイコンの実", "en": "Holographic Icon Fruit" },
    "source": { "ja": "Cosmic Sweet Cafe", "en": "Cosmic Sweet Cafe" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1357-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cosmic-sweet-cafe.webp",
    "livlies": ["067-m-002"]
  },
  "1358-1-001": {
    "name": { "ja": "淡く光る幻想的な花の木", "en": "Wondrous Glowing Flower Tree" },
    "fruit": { "ja": "幻想的な花の実", "en": "Wondrous Flower Fruit" },
    "source": { "ja": "深緑の水辺の島", "en": "The Greenery Along the Shore Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1358-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-greenery-along-the-shore-island.webp",
    "livlies": ["102-n-000"]
  },
  "1359-1-001": {
    "name": { "ja": "ボトルシップロゴ入りセイルの木", "en": "Bottled Ship Logo Sail Tree" },
    "fruit": { "ja": "ボトルシップロゴの実", "en": "Bottled Ship Logo Fruit" },
    "source": { "ja": "Marine Summer Island", "en": "Marine Summer Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1359-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/marine-summer-island.webp",
    "livlies": ["072-m-002"]
  },
  "1360-1-001": {
    "name": { "ja": "アーチに咲く夜顔の木", "en": "Arch of Moonflowers Tree" },
    "fruit": { "ja": "アーチに咲く夜顔の実", "en": "Arch of Moonflowers Fruit" },
    "source": { "ja": "夜顔咲く夏祭りの島", "en": "Blooming Moonflowers & Summer Festival Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1360-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blooming-moonflowers-and-summer-festival-island.webp",
    "livlies": ["097-n-000"]
  },
  "1361-1-001": {
    "name": { "ja": "ちいさな家のポットの木", "en": "Tiny Ceramic House Tree" },
    "fruit": { "ja": "ひまわりの種の実", "en": "Sunflower Seed Fruit" },
    "source": { "ja": "ちいさなぬくもりのねどこ", "en": "Tiny Warm Nest House" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1361-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/tiny-warm-nest-house.webp",
    "livlies": ["090-n-001"]
  },
  "1363-1-001": {
    "name": { "ja": "洋梨の入ったコンポート皿の木", "en": "Pear-filled Compote Bowl Tree" },
    "fruit": { "ja": "洋梨の実", "en": "Pear Fruit" },
    "source": { "ja": "昼下がりの洋梨の島", "en": "Early Afternoons & Pears Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1363-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/early-afternoons-and-pears-island.webp",
    "livlies": ["103-m-000"]
  },
  "1364-1-001": {
    "name": { "ja": "木漏れ日の大木", "en": "Large Streaming Sunbeam Tree" },
    "fruit": { "ja": "大木の若葉の実", "en": "Large Tree's New Leaf Fruit" },
    "source": { "ja": "夏空のツリーハウス", "en": "Summer Sky Tree House" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1364-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-sky-tree-house.webp",
    "livlies": ["085-m-001"]
  },
  "1365-1-001": {
    "name": { "ja": "妖精の女王のカップケーキの木", "en": "Fairy Queen's Cupcake Tree" },
    "fruit": { "ja": "妖精の女王の砂糖菓子の実", "en": "Fairy Queen's Sugar Candy Fruit" },
    "source": { "ja": "Fairy Cake Island", "en": "Fairy Cake Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1365-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fairy-cake-island.webp",
    "livlies": ["071-n-002"]
  },
  "1366-1-001": {
    "name": { "ja": "孤島に佇む古びた洋館の木", "en": "Isolated Chateau Tree" },
    "fruit": { "ja": "洋館の窓の実", "en": "Chateau's Window Fruit" },
    "source": { "ja": "暗雲覆う絶海の洋館", "en": "Chateau Over the Stormy Seas" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1366-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/chateau-over-the-stormy-seas.webp",
    "livlies": ["104-m-000"]
  },
  "1367-1-001": {
    "name": { "ja": "不思議な鍵の木", "en": "Wondrous Key Tree" },
    "fruit": { "ja": "不思議な鍵の実", "en": "Wondrous Key Fruit" },
    "source": { "ja": "鍵と不思議な扉の物語", "en": "A Tale of Keys and Wondrous Doors" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1367-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-tale-of-keys-and-wondrous-doors.webp",
    "livlies": ["061-m-002"]
  },
  "1368-1-001": {
    "name": { "ja": "積み上がったティーカップの木", "en": "Tower of Teacups Tree" },
    "fruit": { "ja": "お花のアイシングクッキーの実", "en": "Flower Icing Cookie Fruit" },
    "source": { "ja": "ティーカップコレクターのお茶会", "en": "Teacup Collector's Tea Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1368-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/teacup-collectors-tea-party.webp",
    "livlies": ["094-n-001"]
  },
  "1369-1-001": {
    "name": { "ja": "まぼろしの樹木", "en": "Great Mythical Tree" },
    "fruit": { "ja": "まぼろしの蝶の実", "en": "Mythical Butterfly Fruit" },
    "source": { "ja": "まぼろしの霧の森", "en": "Forest of Mythical Mists" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1369-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-of-mythical-mists.webp",
    "livlies": ["105-m-000"]
  },
  "1370-1-001": {
    "name": { "ja": "持ち上げたナポリタンの木", "en": "Forkful of Napolitan Tree" },
    "fruit": { "ja": "トッピングのピーマンの実", "en": "Cut Bell Pepper Fruit" },
    "source": { "ja": "洋食屋さんのショーケースの島", "en": "Restaurant's Showcase Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1370-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/restaurants-showcase-island.webp",
    "livlies": ["075-a-002"]
  },
  "1372-1-001": {
    "name": { "ja": "思い出の駅舎の木", "en": "Train Station of Memories Tree" },
    "fruit": { "ja": "夕陽がにじんだ駅名標の実", "en": "Sunset Station's Sign Fruit" },
    "source": { "ja": "思い出の駅舎の島", "en": "Train Station of Memories Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1372-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/train-station-of-memories-island.webp",
    "livlies": ["043-m-003"]
  },
  "1373-1-001": {
    "name": { "ja": "古びた針山の木", "en": "Aged Pincushion Tree" },
    "fruit": { "ja": "小さな綿の実", "en": "Tiny Cotton Ball Fruit" },
    "source": { "ja": "つぎはぎの記憶の島", "en": "Island of Patched Up Memories" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1373-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-patched-up-memories.webp",
    "livlies": ["106-m-000"]
  },
  "1375-1-001": {
    "name": { "ja": "ヒスイカズラの木", "en": "Jade Vine Tree" },
    "fruit": { "ja": "ヒスイカズラの実", "en": "Jade Vine Fruit" },
    "source": { "ja": "ヒスイカズラの島", "en": "Jade Vine Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1375-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/jade-vine-island.webp",
    "livlies": ["092-n-001"]
  },
  "1376-1-001": {
    "name": { "ja": "オーガのソフビつきビルの木", "en": "Ogre Statue on Building Tree" },
    "fruit": { "ja": "オーガのソフビの実", "en": "Ogre Statue Fruit" },
    "source": { "ja": "小さなフィルムスタジオの島", "en": "Tiny Film Studio Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1376-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/tiny-film-studio-island.webp",
    "livlies": ["007-m-004"]
  },
  "1377-1-001": {
    "name": { "ja": "深淵へ誘う花の木", "en": "Abyss-beckoning Flower Tree" },
    "fruit": { "ja": "深淵へ誘う花の実", "en": "Abyss-beckoning Flower Fruit" },
    "source": { "ja": "混沌たる深淵の島", "en": "The Chaos Beyond the Abyss Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1377-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-chaos-beyond-the-abyss-island.webp",
    "livlies": ["107-m-000"]
  },
  "1378-1-001": {
    "name": { "ja": "魔女帽子型のキノコの木", "en": "Witch Hat Mushroom Tree" },
    "fruit": { "ja": "魔法植物の花の実", "en": "Magical Plant's Bloom Fruit" },
    "source": { "ja": "Witches' Night Party", "en": "Witches' Night Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1378-1-001-P.png",
    "banner": null,
    "livlies": ["093-n-001"]
  },
  "1379-1-001": {
    "name": { "ja": "薬剤師の手帳の木", "en": "Herbalist's Notebook Tree" },
    "fruit": { "ja": "アンティークな銀の栞の実", "en": "Antique Silver Bookmark Fruit" },
    "source": { "ja": "薬剤師の探し物の島", "en": "The Herbalist's Lost Item Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1379-1-001-P.png",
    "banner": null,
    "livlies": ["100-n-001"]
  }
};
