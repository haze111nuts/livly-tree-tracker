// ============================================================
// Trees — key = official tree id (from the game's tree image, e.g. "1019-1-001").
//   name / fruit / source : { ja, en, zh }   (zh = Taiwan Traditional Chinese; missing → English is shown)
//   banner  : gacha banner image, or null (a text banner is shown)
//   livlies : Livly ids this tree's fruit is used for; the first one is
//             the big image on the card
// Sources: livly.com/picturebook (JA) · livlyislandnewedition.wiki.gg/wiki/Trees (EN)
//          · livly-guide.com/gacha-list (banners)
//          · livlyislandyabi.blogspot.com (ZH, fan site for the Taiwan server)
// Keep the "LIVLY_DATA.trees =" line and the final semicolon.
// ============================================================
window.LIVLY_DATA = window.LIVLY_DATA || {};
LIVLY_DATA.trees = {
  "1001-1-001": {
    "name": { "ja": "不思議な赤林檎の木", "en": "Mysterious Red Apple Tree", "zh": "不可思議的紅蘋果樹" },
    "fruit": { "ja": "赤林檎の実", "en": "Red Apple", "zh": "紅蘋果" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree", "zh": "初始道具" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-001-P.png",
    "banner": null,
    "livlies": ["001-m-000", "008-m-000", "045-m-000", "001-c-000"]
  },
  "1001-1-005": {
    "name": { "ja": "不思議な青ドロリ林檎の木", "en": "Mysterious Gooey Blue Apple Tree", "zh": "不可思議的藍黏液蘋果樹" },
    "fruit": { "ja": "青ドロリ林檎の実", "en": "Gooey Blue Apple", "zh": "藍黏液蘋果" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree", "zh": "初始道具" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-005-P.png",
    "banner": null,
    "livlies": ["003-n-000", "008-m-000"]
  },
  "1001-1-003": {
    "name": { "ja": "不思議なドングリ林檎の木", "en": "Mysterious Acorn Apple Tree", "zh": "不可思議的橡子蘋果樹" },
    "fruit": { "ja": "ドングリ林檎の実", "en": "Acorn Apple", "zh": "橡子蘋果" },
    "source": { "ja": "初期所持アイテム", "en": "Starting tree", "zh": "初始道具" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1001-1-003-P.png",
    "banner": null,
    "livlies": ["002-n-000", "008-m-000", "002-c-000", "078-c-000", "079-c-000", "080-c-000"]
  },
  "1011-1-001": {
    "name": { "ja": "知恵の木", "en": "Tree of Knowledge", "zh": "智慧之木" },
    "fruit": { "ja": "知恵の木の実", "en": "Tree of Knowledge Fruit", "zh": "智慧之木果實" },
    "source": { "ja": "本の上の知恵の島", "en": "Well-read Island", "zh": "書本上的智慧之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1011-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/well-read-island.webp",
    "livlies": ["005-n-000"]
  },
  "1022-1-001": {
    "name": { "ja": "野苺の木", "en": "Wild Strawberry Tree", "zh": "野莓樹" },
    "fruit": { "ja": "野苺の実", "en": "Wild Strawberry", "zh": "野莓" },
    "source": { "ja": "野苺のお茶会", "en": "Wild Strawberry Tea Party", "zh": "野莓茶會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1022-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wild-strawberry-tea-party.webp",
    "livlies": ["006-m-000"]
  },
  "1010-1-001": {
    "name": { "ja": "原生林の樹木", "en": "Primeval Forest Tree", "zh": "原始森林樹木" },
    "fruit": { "ja": "電気キノコ", "en": "Electric Mushroom", "zh": "電菇" },
    "source": { "ja": "原生林と電気キノコの島", "en": "Forest Island of Electric Mushrooms", "zh": "原始森林與電菇之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1010-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-island-of-electric-mushrooms.webp",
    "livlies": ["004-m-000"]
  },
  "1019-1-001": {
    "name": { "ja": "雨上がりの虹の木", "en": "Rainbow Tree", "zh": "雨後的彩虹樹" },
    "fruit": { "ja": "シャボン玉の実", "en": "Soap Bubble Fruit", "zh": "泡泡果實" },
    "source": { "ja": "雨上がりの島", "en": "Island of Passing Showers", "zh": "雨後天晴之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1019-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-passing-showers.webp",
    "livlies": ["001-m-001"]
  },
  "1012-1-001": {
    "name": { "ja": "どんぐりの木", "en": "Oak Tree", "zh": "橡樹" },
    "fruit": { "ja": "どんぐりの実", "en": "Acorn", "zh": "橡子" },
    "source": { "ja": "深い森のどんぐりの島", "en": "Island of Deep Forest Acorns", "zh": "深邃森林的橡子之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1012-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-deep-forest-acorns.webp",
    "livlies": ["002-n-001"]
  },
  "1015-1-001": {
    "name": { "ja": "楽園のヤシの木", "en": "Paradise Palm Tree", "zh": "樂園椰子樹" },
    "fruit": { "ja": "楽園のヤシの実", "en": "Paradise Palm Fruit", "zh": "樂園椰子" },
    "source": { "ja": "南国パラダイス", "en": "Southern Paradise", "zh": "南國樂園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1015-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/southern-paradise.webp",
    "livlies": ["007-m-000", "007-c-000"]
  },
  "1014-1-001": {
    "name": { "ja": "骨と生命の木", "en": "Skeleton Life Tree", "zh": "骨頭與生命之樹" },
    "fruit": { "ja": "骨と生命の実", "en": "Skeleton Life Fruit", "zh": "骨頭與生命果實" },
    "source": { "ja": "いにしえの骨と花の島", "en": "Island of Ancient Bones and Flowers", "zh": "遠古骨骸與花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1014-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-ancient-bones-and-flowers.webp",
    "livlies": ["009-n-000"]
  },
  "1017-1-001": {
    "name": { "ja": "クリスタルの木", "en": "Crystal Tree", "zh": "水晶樹" },
    "fruit": { "ja": "クリスタルの木の実", "en": "Crystal Tree Fruit", "zh": "水晶果實" },
    "source": { "ja": "クリスタルの森", "en": "Crystal Forest", "zh": "水晶之森" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1017-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-forest.webp",
    "livlies": ["003-n-001"]
  },
  "1020-1-001": {
    "name": { "ja": "常夏の木", "en": "Coconut Palm Tree", "zh": "常夏之木" },
    "fruit": { "ja": "ココナッツの実", "en": "Coconut", "zh": "椰子" },
    "source": { "ja": "常夏の島", "en": "Island of Eternal Summer", "zh": "常夏之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1020-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-eternal-summer.webp",
    "livlies": ["006-m-001"]
  },
  "1026-1-001": {
    "name": { "ja": "迷子の子雲の木", "en": "Lost Little Cloud Tree", "zh": "迷路雲朵之樹" },
    "fruit": { "ja": "子雲の涙プリズムの実", "en": "Little Cloud Tear Prism Fruit", "zh": "小雲的淚晶果實" },
    "source": { "ja": "迷子の子雲と空き地の少年", "en": "Lost Cloud and the Boy of Nowhere Land", "zh": "迷路雲朵與空地少年" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1026-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lost-cloud-and-the-boy-of-nowhere-land.webp",
    "livlies": ["010-m-000"]
  },
  "1025-1-001": {
    "name": { "ja": "天球儀の木", "en": "Celestial Globe Tree", "zh": "天球儀之樹" },
    "fruit": { "ja": "星の実", "en": "Star Fruit", "zh": "星星果實" },
    "source": { "ja": "星降る島", "en": "Starry Island", "zh": "落星之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1025-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starry-island.webp",
    "livlies": ["004-m-001"]
  },
  "1018-1-001": {
    "name": { "ja": "オリーブの木", "en": "Olive Tree", "zh": "橄欖樹" },
    "fruit": { "ja": "オリーブの実", "en": "Olive", "zh": "橄欖果實" },
    "source": { "ja": "錬金術師見習いの小屋", "en": "Alchemist Apprentice's Shed", "zh": "鍊金術師實習生的小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1018-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-apprentices-shed.webp",
    "livlies": ["011-n-000"]
  },
  "1024-1-001": {
    "name": { "ja": "虹色パンケーキタワーの木", "en": "Rainbow Pancake Tower Tree", "zh": "七彩鬆餅塔之樹" },
    "fruit": { "ja": "星形キャンディの実", "en": "Star-shaped Candy Fruit", "zh": "星形糖果實" },
    "source": { "ja": "虹色パンケーキの島", "en": "Island of Rainbow Pancakes", "zh": "七彩鬆餅之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1024-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-rainbow-pancakes.webp",
    "livlies": ["008-m-001"]
  },
  "1023-1-001": {
    "name": { "ja": "パキラの木", "en": "Pachira Tree", "zh": "發財樹" },
    "fruit": { "ja": "パキラの実", "en": "Pachira Fruit", "zh": "發財樹果實" },
    "source": { "ja": "探偵事務所のジオラマ", "en": "Detective Agency Diorama", "zh": "偵探事務所的情景模型" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1023-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/detective-agency-diorama.webp",
    "livlies": ["005-n-001"]
  },
  "1027-1-001": {
    "name": { "ja": "キノコの森のおうちの木", "en": "Mushroom Forest House Tree", "zh": "香菇森林的住家之樹" },
    "fruit": { "ja": "キノコの森のおうちの実", "en": "Mushroom Forest House Fruit", "zh": "香菇森林的住家果實" },
    "source": { "ja": "カラフルなキノコの森", "en": "Colorful Mushroom Forest", "zh": "繽紛的香菇森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1027-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/colorful-mushroom-forest.webp",
    "livlies": ["007-m-001"]
  },
  "1021-1-001": {
    "name": { "ja": "歪んだ洋梨の木", "en": "Twisted Pear Tree", "zh": "扭曲的洋梨樹" },
    "fruit": { "ja": "不気味な洋梨の実", "en": "Eerie Pear", "zh": "詭異洋梨" },
    "source": { "ja": "魔女の眠る島", "en": "Witches' Land of Nod", "zh": "魔女沉睡之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1021-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/witches-land-of-nod.webp",
    "livlies": ["012-m-000", "013-m-000"]
  },
  "1032-1-001": {
    "name": { "ja": "小さなゴーストの容器の木", "en": "Little Ghost Container Tree", "zh": "小鬼魂的容器之樹" },
    "fruit": { "ja": "スターフィッシュの実", "en": "Starfish Fruit", "zh": "海星果實" },
    "source": { "ja": "深海に消えた艦長", "en": "Captain Lost at Sea", "zh": "消失在深海的艦長" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1032-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/captain-lost-at-sea.webp",
    "livlies": ["013-m-000"]
  },
  "1031-1-001": {
    "name": { "ja": "ホテルエントランスの木", "en": "Hotel Entrance Tree", "zh": "旅館入口之樹" },
    "fruit": { "ja": "視線を感じる実", "en": "Paranoia Fruit", "zh": "能感覺到視線的果實" },
    "source": { "ja": "スプーキーホテルアイランド", "en": "Spooky Hotel Island", "zh": "陰森旅館小島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1031-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spooky-hotel-island.webp",
    "livlies": ["012-m-000"]
  },
  "1034-1-001": {
    "name": { "ja": "天蓋カーテンの木", "en": "Canopy Curtain Tree", "zh": "天蓬床簾之樹" },
    "fruit": { "ja": "電飾の実", "en": "Glowing Light Fruit", "zh": "燈飾果實" },
    "source": { "ja": "天蓋ベッドルーム", "en": "Canopy Bedroom", "zh": "天蓬床臥室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1034-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/canopy-bedroom.webp",
    "livlies": ["006-m-002"]
  },
  "1035-1-001": {
    "name": { "ja": "ねじれたダークフォレストの木", "en": "Twisted Dark Forest Tree", "zh": "扭曲的黑暗森林之樹" },
    "fruit": { "ja": "滴る真っ赤な木の実", "en": "Bright Red Droplet Fruit", "zh": "鮮紅欲滴的果實" },
    "source": { "ja": "Dark Forest", "en": "Dark Forest", "zh": "Dark Forest" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1035-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dark-forest.webp",
    "livlies": ["010-m-001"]
  },
  "1016-1-001": {
    "name": { "ja": "廃墟のグランドピアノの木", "en": "Discarded Grand Piano", "zh": "廢墟的平台鋼琴之樹" },
    "fruit": { "ja": "忘れ去られた実", "en": "Forgotten Fruit", "zh": "忘卻果實" },
    "source": { "ja": "忘れ去られたサロン", "en": "Forgotten Parlor", "zh": "被徹底遺忘的交誼廳" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1016-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forgotten-parlor.webp",
    "livlies": ["014-m-000", "045-m-000"]
  },
  "1036-1-001": {
    "name": { "ja": "小屋と柿の木", "en": "Cottage and Persimmon Tree", "zh": "小屋和柿子樹" },
    "fruit": { "ja": "雪国の柿の実", "en": "Snow Country Persimmon", "zh": "柿子" },
    "source": { "ja": "雪国の柿の島", "en": "Snow Country Persimmon Island", "zh": "雪國的柿子島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1036-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snow-country-persimmon-island.webp",
    "livlies": ["002-n-002"]
  },
  "1029-1-001": {
    "name": { "ja": "神秘の森の木", "en": "Mysterious Forest Tree", "zh": "神祕森林之樹" },
    "fruit": { "ja": "神秘の華の実", "en": "Mystical Flower Fruit", "zh": "神秘花朵果實" },
    "source": { "ja": "神秘の森の島", "en": "Mysterious Forest Island", "zh": "神秘森林之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1029-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mysterious-forest-island.webp",
    "livlies": ["009-n-001"]
  },
  "1013-1-001": {
    "name": { "ja": "秘密のドールハウスの木", "en": "Secret Dollhouse Tree", "zh": "秘密的娃娃屋之樹" },
    "fruit": { "ja": "つぎはぎハートの実", "en": "Stitched Heart Fruit", "zh": "縫補的心形果實" },
    "source": { "ja": "秘密のドールハウス", "en": "Secret Dollhouse", "zh": "秘密的娃娃屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1013-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-dollhouse.webp",
    "livlies": ["016-a-000"]
  },
  "1037-1-001": {
    "name": { "ja": "アットホームクリスマスの木", "en": "Cozy Christmas Tree", "zh": "居家聖誕樹" },
    "fruit": { "ja": "クリスマスオーナメントの実", "en": "Christmas Ornament Fruit", "zh": "聖誕裝飾的果實" },
    "source": { "ja": "アットホームクリスマスルーム", "en": "Homely Christmas Room", "zh": "居家聖誕間" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1037-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/homely-christmas-room.webp",
    "livlies": ["015-m-000"]
  },
  "1038-1-001": {
    "name": { "ja": "聖夜の特別なドリンクの木", "en": "Xmas Eve Special Drink Tree", "zh": "聖誕夜特製飲料的樹木" },
    "fruit": { "ja": "聖夜のイエローポインセチアの実", "en": "Xmas Eve Yellow Poinsettia Fruit", "zh": "聖誕夜的黃色聖誕紅果實" },
    "source": { "ja": "聖夜の特別なお茶会", "en": "Xmas Eve Special Tea Party", "zh": "聖誕夜的特別茶會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1038-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/xmas-eve-special-tea-party.webp",
    "livlies": ["015-m-000"]
  },
  "1030-1-001": {
    "name": { "ja": "松の木", "en": "Pine Tree", "zh": "松樹" },
    "fruit": { "ja": "松ぼっくりの実", "en": "Pine Cone Fruit", "zh": "松果實" },
    "source": { "ja": "花かるたのお屋敷", "en": "Hanafuda Room", "zh": "花牌宅第" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1030-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hanafuda-room.webp",
    "livlies": ["017-m-000"]
  },
  "1033-1-001": {
    "name": { "ja": "真珠の木", "en": "Pearl Tree", "zh": "珍珠樹木" },
    "fruit": { "ja": "真珠の実", "en": "Pearl Fruit", "zh": "珍珠果實" },
    "source": { "ja": "珊瑚トレーダーの島", "en": "Ethical Coral Trader Island", "zh": "珊瑚貿易商的小島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1033-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ethical-coral-trader-island.webp",
    "livlies": ["011-n-001"]
  },
  "1041-1-001": {
    "name": { "ja": "古びたインク瓶の木", "en": "Old Ink Bottle Tree", "zh": "老舊墨水瓶樹木" },
    "fruit": { "ja": "インクの実", "en": "Ink Fruit", "zh": "墨水果實" },
    "source": { "ja": "スミレ色の思い出", "en": "Violet Memories", "zh": "紫羅蘭色的回憶" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1041-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/violet-memories.webp",
    "livlies": ["014-m-001"]
  },
  "1043-1-001": {
    "name": { "ja": "柚子の木", "en": "Yuzu Tree", "zh": "柚子樹" },
    "fruit": { "ja": "柚子の実", "en": "Yuzu Fruit", "zh": "柚子果實" },
    "source": { "ja": "ぽかぽか柚子湯の島", "en": "Steamy Yuzu Bath Island", "zh": "暖呼呼柚子浴小島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1043-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/steamy-yuzu-bath-island.webp",
    "livlies": ["015-m-001"]
  },
  "1049-1-001": {
    "name": { "ja": "チューリップリースの木", "en": "Tulip Wreath Tree", "zh": "鬱金香花環樹" },
    "fruit": { "ja": "チューリップリースの実", "en": "Tulip Wreath Fruit", "zh": "鬱金香花環樹的果實" },
    "source": { "ja": "スイートバレンタインルーム", "en": "Sweet Valentine's Room", "zh": "甜蜜情人節小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1049-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-valentines-room.webp",
    "livlies": ["018-m-000"]
  },
  "1042-1-001": {
    "name": { "ja": "スリーピーダークベリーの木", "en": "Sleepy Dark Berry Tree", "zh": "睏睏黑暗樹莓樹" },
    "fruit": { "ja": "スリーピーダークベリーの実", "en": "Sleepy Dark Berry Fruit", "zh": "睏睏黑暗樹莓的果實" },
    "source": { "ja": "スリーピーダークベリーの森", "en": "Sleepy Dark Berry Forest", "zh": "睏睏黑暗樹莓之森" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1042-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleepy-dark-berry-forest.webp",
    "livlies": ["018-m-000"]
  },
  "1047-1-001": {
    "name": { "ja": "薔薇のガゼボの木", "en": "Rose Gazebo Tree", "zh": "薔薇涼亭之樹" },
    "fruit": { "ja": "ガゼボに咲く薔薇の実", "en": "Blossoming Gazebo Rose Fruit", "zh": "在涼亭中盛開的薔薇果實" },
    "source": { "ja": "薔薇が咲き誇るリトルガーデン", "en": "Little Garden of Blooming Roses", "zh": "薔薇盛開小小花園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1047-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-garden-of-blooming-roses.webp",
    "livlies": ["003-n-002"]
  },
  "1045-1-001": {
    "name": { "ja": "仕立て中のドレスの木", "en": "Unfinished Dress Tree", "zh": "裁剪中的禮裙樹" },
    "fruit": { "ja": "キンズの実", "en": "Kumquat Fruit", "zh": "金桔果實" },
    "source": { "ja": "小さな仕立て屋さん", "en": "Little Tailor's Shop", "zh": "小小裁縫店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1045-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-tailors-shop.webp",
    "livlies": ["002-n-003"]
  },
  "1051-1-001": {
    "name": { "ja": "カフェのコーヒーの木", "en": "Coffee Tree", "zh": "咖啡店的咖啡樹" },
    "fruit": { "ja": "カフェのコーヒーの実", "en": "Coffee Berry", "zh": "咖啡店的咖啡果實" },
    "source": { "ja": "ホワイトデーカフェタイム", "en": "White Day Coffee Time", "zh": "白色情人節咖啡時光" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1051-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/white-day-coffee-time.webp",
    "livlies": ["004-m-002"]
  },
  "1052-1-001": {
    "name": { "ja": "G.L.L城ミニチュアの木", "en": "Miniature G.L.L. Castle Tree", "zh": "袖珍G.L.L城堡之樹" },
    "fruit": { "ja": "G.L.Lシンボルの実", "en": "G.L.L. Symbol Fruit", "zh": "G.L.L象徵果實" },
    "source": { "ja": "20th Anniversary Island", "en": "20th Anniversary Island", "zh": "20th Anniversary Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1052-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/20th-anniversary-island.webp",
    "livlies": ["001-m-002"]
  },
  "1044-1-001": {
    "name": { "ja": "フープツリーの木", "en": "Hooped Tree", "zh": "環圈樹" },
    "fruit": { "ja": "フープツリーの雫の実", "en": "Hooped Tree Dewdrop", "zh": "環圈樹的水滴果實" },
    "source": { "ja": "無重力ガーデン", "en": "Zero Gravity Garden", "zh": "無重力花園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1044-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/zero-gravity-garden.webp",
    "livlies": ["019-m-000"]
  },
  "1053-1-001": {
    "name": { "ja": "停止岩の木", "en": "Static Boulder Tree", "zh": "靜止岩之樹" },
    "fruit": { "ja": "青い花の実", "en": "Blue Blossom", "zh": "青之花果實" },
    "source": { "ja": "停止の花園", "en": "Static Garden", "zh": "靜止的花園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1053-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/static-garden.webp",
    "livlies": ["020-n-000"]
  },
  "1058-1-001": {
    "name": { "ja": "イースターエッグの木", "en": "Easter Egg Tree", "zh": "復活節彩蛋之樹" },
    "fruit": { "ja": "イースターエッグの実", "en": "Easter Egg", "zh": "復活節彩蛋果實" },
    "source": { "ja": "スプリングイースターガーデン", "en": "Spring Easter Garden", "zh": "春光明媚復活節花園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1058-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-easter-garden.webp",
    "livlies": ["008-m-002"]
  },
  "1057-1-001": {
    "name": { "ja": "遺された月の木", "en": "Forsaken Lunar Tree", "zh": "被遺下的月之樹" },
    "fruit": { "ja": "月の光の実", "en": "Moonlight Fruit", "zh": "月光果實" },
    "source": { "ja": "遺された月の島", "en": "Forsaken Lunar Island", "zh": "被遺下的月之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1057-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forsaken-lunar-island.webp",
    "livlies": ["012-m-001"]
  },
  "1059-1-001": {
    "name": { "ja": "黄金の光をまとう神樹", "en": "Golden Sacred Tree", "zh": "帶有金黃光芒的神樹" },
    "fruit": { "ja": "祈りのロウソクの実", "en": "Prayer Candle Fruit", "zh": "祈禱蠟燭果實" },
    "source": { "ja": "Gold Ray", "en": "Gold Ray of Light", "zh": "Gold Ray" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1059-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gold-ray-of-light.webp",
    "livlies": ["021-m-000"]
  },
  "1060-1-001": {
    "name": { "ja": "お城の王座の木", "en": "Castle Throne Tree", "zh": "城堡王座之樹" },
    "fruit": { "ja": "研究室のフラスコの実", "en": "Lab Flask Fruit", "zh": "研究室燒瓶果實" },
    "source": { "ja": "錬金術師と王宮の研究室", "en": "Alchemist and the Royal Laboratory", "zh": "錬金術師與王宮研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1060-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-and-the-royal-laboratory.webp",
    "livlies": ["021-m-000"]
  },
  "1054-1-001": {
    "name": { "ja": "クローバーの木", "en": "Clover Tree", "zh": "幸運草之樹" },
    "fruit": { "ja": "よつ葉のクローバーの実", "en": "Four-leaf Clover", "zh": "四葉幸運草果實" },
    "source": { "ja": "クローバーの箱庭", "en": "Clover Fairy Garden", "zh": "幸運草箱庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1054-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/clover-fairy-garden.webp",
    "livlies": ["015-m-002"]
  },
  "1055-1-001": {
    "name": { "ja": "キャンピングテントの木", "en": "Camping Tent Tree", "zh": "露營帳篷之樹" },
    "fruit": { "ja": "キャンドルランプの実", "en": "Candle Lamp Fruit", "zh": "蠟燭營燈果實" },
    "source": { "ja": "キャンピングヴィレッジ", "en": "Camping Village", "zh": "露營鄉村" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1055-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/camping-village.webp",
    "livlies": ["013-m-001", "013-m-002"]
  },
  "1056-1-001": {
    "name": { "ja": "盆上の無限花の木", "en": "Infinite Flower Tree on Plate", "zh": "盆上的無限花之樹" },
    "fruit": { "ja": "無限花の実", "en": "Infinite Flower Fruit", "zh": "無限花果實" },
    "source": { "ja": "無限砂丘", "en": "Infinite Sand Dunes", "zh": "無限沙丘" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1056-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/infinite-sand-dunes.webp",
    "livlies": ["022-m-000"]
  },
  "1062-1-001": {
    "name": { "ja": "レトロミニカーの木", "en": "Retro Mini Car Tree", "zh": "復古迷你車之樹" },
    "fruit": { "ja": "サボテンの実", "en": "Cactus Fruit", "zh": "仙人掌果實" },
    "source": { "ja": "眠らない街のダイナー", "en": "Sleepless Street Diner", "zh": "不夜城的美式餐館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1062-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleepless-street-diner.webp",
    "livlies": ["022-m-001"]
  },
  "1072-1-001": {
    "name": { "ja": "晴れ間の紫陽花の木", "en": "Glistening Hydrangea Tree", "zh": "短暫放晴的繡球花之樹" },
    "fruit": { "ja": "紫陽花にたまる雨粒の実", "en": "Hydrangea Raindrop", "zh": "停留在繡球花上的雨滴果實" },
    "source": { "ja": "紫陽花としずくの庭", "en": "Dewy Hydrangea Garden", "zh": "繡球花與水珠之庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1072-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dewy-hydrangea-garden.webp",
    "livlies": ["020-n-001"]
  },
  "1070-1-001": {
    "name": { "ja": "ピンクチェリーの木", "en": "Pink Cherry Tree", "zh": "粉紅櫻桃樹" },
    "fruit": { "ja": "ピンクチェリーの実", "en": "Pink Cherry", "zh": "粉紅櫻桃" },
    "source": { "ja": "ピンクチェリーティーパーティー", "en": "Pink Cherry Tea Party", "zh": "粉紅櫻桃奇異茶會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1070-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pink-cherry-tea-party.webp",
    "livlies": ["023-n-000"]
  },
  "1077-1-001": {
    "name": { "ja": "きらめく黄金の林檎の木", "en": "Shiny Golden Apple Tree", "zh": "閃耀的金蘋果樹" },
    "fruit": { "ja": "黄金の林檎の実", "en": "Golden Apple", "zh": "金蘋果" },
    "source": { "ja": "祝福の太陽と神秘の月", "en": "Blessed Sun and Mystical Moon", "zh": "祝福太陽與神祕月亮" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1077-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blessed-sun-and-mystical-moon.webp",
    "livlies": ["021-m-001"]
  },
  "1063-1-001": {
    "name": { "ja": "ウツボカズラの木", "en": "Nepenthes Tree", "zh": "豬籠草之樹" },
    "fruit": { "ja": "ウツボカズラの実", "en": "Nepenthes Fruit", "zh": "豬籠草" },
    "source": { "ja": "ポップな食虫植物の島", "en": "Vibrant Insectivorous Plant Island", "zh": "五彩繽紛食蟲植物島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1063-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/vibrant-insectivorous-plant-island.webp",
    "livlies": ["005-n-002"]
  },
  "1073-1-001": {
    "name": { "ja": "夢のナイトガーデンの木", "en": "Dreamy Night Garden Tree", "zh": "夢幻夜幕花園之樹" },
    "fruit": { "ja": "ナイトライトの実", "en": "Night Light Fruit", "zh": "夜燈果實" },
    "source": { "ja": "夢のナイトガーデン", "en": "Dreamy Night Garden", "zh": "夢幻夜幕花園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1073-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-night-garden.webp",
    "livlies": ["023-n-001"]
  },
  "1064-1-001": {
    "name": { "ja": "サマープールスライダーの木", "en": "Summer Pool Slide Tree", "zh": "夏季泳池滑水道之樹" },
    "fruit": { "ja": "ビニールヤシの木の実", "en": "Vinyl Coconut", "zh": "塑膠椰子" },
    "source": { "ja": "真夏のリトルプール", "en": "Little Summer Pool", "zh": "盛夏的小小泳池" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1064-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-summer-pool.webp",
    "livlies": ["024-m-000"]
  },
  "1078-1-001": {
    "name": { "ja": "提灯の木", "en": "Lantern Tree", "zh": "燈籠之樹" },
    "fruit": { "ja": "花火柄の実", "en": "Firework Pattern Fruit", "zh": "煙火圖案果實" },
    "source": { "ja": "夏の夜の花火", "en": "Summer Night Fireworks", "zh": "夏夜的煙火" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1078-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-night-fireworks.webp",
    "livlies": ["017-m-001"]
  },
  "1061-1-001": {
    "name": { "ja": "カフェのソーダゼリーの木", "en": "Soda Jelly Tree", "zh": "咖啡廳的汽水果凍之樹" },
    "fruit": { "ja": "ソーダゼリーのミントの実", "en": "Soda Jelly Mint Fruit", "zh": "汽水果凍的薄荷" },
    "source": { "ja": "湖畔の隠れ家カフェ", "en": "Lakeside Hideaway Café", "zh": "湖畔的隱密咖啡廳" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1061-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lakeside-hideaway-cafe.webp",
    "livlies": ["009-n-002"]
  },
  "1080-1-001": {
    "name": { "ja": "グミフラワーの木", "en": "Gummy Flower Tree", "zh": "軟糖花之樹" },
    "fruit": { "ja": "グミフラワーの実", "en": "Gummy Flower", "zh": "軟糖花果實" },
    "source": { "ja": "グミフラワーの苗床", "en": "Gummy Flower Seedbed", "zh": "軟糖花的苗床" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1080-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gummy-flower-seedbed.webp",
    "livlies": ["025-m-000"]
  },
  "1083-1-001": {
    "name": { "ja": "桔梗和傘の木", "en": "Bellflower Wagasa Tree", "zh": "桔梗和傘之樹" },
    "fruit": { "ja": "白桔梗の花の実", "en": "White Bellflower", "zh": "白桔梗花果實" },
    "source": { "ja": "十五夜お月様の島", "en": "Harvest Moon Night Island", "zh": "十五夜的滿月之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1083-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/harvest-moon-night-island.webp",
    "livlies": ["025-m-000"]
  },
  "1084-1-001": {
    "name": { "ja": "コスモスの木", "en": "Cosmos Flower Tree", "zh": "波斯菊之樹" },
    "fruit": { "ja": "コスモスの実", "en": "Cosmos Flower Bud", "zh": "波斯菊果實" },
    "source": { "ja": "夕暮れのコスモス畑で", "en": "Twilight Cosmos Field", "zh": "黃昏下的波斯菊花田" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1084-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/twilight-cosmos-field.webp",
    "livlies": ["016-a-001"]
  },
  "1069-1-001": {
    "name": { "ja": "ピグミーパンの木", "en": "Pygmy Bread Tree", "zh": "提可咪麵包之樹" },
    "fruit": { "ja": "ピグミーの目のチョコの実", "en": "Pygmy Eye Choco Chip Fruit", "zh": "提可咪的巧克力眼睛果實" },
    "source": { "ja": "焼きたての香り", "en": "Freshly Baked Aroma", "zh": "剛出爐的馥郁香氣" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1069-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/freshly-baked-aroma.webp",
    "livlies": ["001-m-003"]
  },
  "1085-1-001": {
    "name": { "ja": "魔女の大釜から生えた木", "en": "Witch's Cauldron Tree", "zh": "魔女大鍋中長出的樹木" },
    "fruit": { "ja": "魔女の大釜から生えた木の実", "en": "Witch's Cauldron Tree Fruit", "zh": "魔女大鍋中長出的樹木果實" },
    "source": { "ja": "とある魔女の不思議な大釜", "en": "Witch's Curious Cauldron", "zh": "某位魔女的不可思議大鍋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1085-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/witchs-curious-cauldron.webp",
    "livlies": ["026-m-000"]
  },
  "1071-1-001": {
    "name": { "ja": "御霊（ミタマ）の木", "en": "Mitama Spirit Tree", "zh": "魂靈之樹" },
    "fruit": { "ja": "青火を纏う実", "en": "Blue Flaming Fruit", "zh": "鬼火縈繞的果實" },
    "source": { "ja": "悲哀の影がひそむ島", "en": "Lurking Shadow of Sorrow", "zh": "悲戚黑影的匿跡之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1071-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lurking-shadow-of-sorrow.webp",
    "livlies": ["026-m-000"]
  },
  "1075-1-001": {
    "name": { "ja": "木馬の木", "en": "Rocking Horse Tree", "zh": "木馬之樹" },
    "fruit": { "ja": "ハートのシールの実", "en": "Heart Sticker Fruit", "zh": "心型貼紙果實" },
    "source": { "ja": "木馬のベビールーム", "en": "Rocking Horse Nursery", "zh": "木馬的溫馨嬰兒房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1075-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/rocking-horse-nursery.webp",
    "livlies": ["022-m-002"]
  },
  "1086-1-001": {
    "name": { "ja": "ホーンテッドハウスの木", "en": "Haunted House Tree", "zh": "鬼屋之樹" },
    "fruit": { "ja": "ハロウィンカボチャの実", "en": "Halloween Pumpkin Fruit", "zh": "萬聖節南瓜果實" },
    "source": { "ja": "ホーンテッドハウスナイト", "en": "Haunted House Night", "zh": "鬼屋之夜" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1086-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/haunted-house-night.webp",
    "livlies": ["012-m-002"]
  },
  "1082-1-001": {
    "name": { "ja": "黒百合の木", "en": "Black Lily Tree", "zh": "黑百合之樹" },
    "fruit": { "ja": "黒百合の涙の実", "en": "Black Lily Teardrop", "zh": "黑百合的淚滴果實" },
    "source": { "ja": "My Halloween Room", "en": "My Halloween Room", "zh": "My Halloween Room" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1082-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-halloween-room.webp",
    "livlies": ["018-m-001"]
  },
  "1074-1-001": {
    "name": { "ja": "幻都の桃の木", "en": "Shangri-La Peach Tree", "zh": "幻都的桃樹" },
    "fruit": { "ja": "幻都の桃の実", "en": "Shangri-La Peach Fruit", "zh": "幻都的桃子果實" },
    "source": { "ja": "幻都の桃の島", "en": "Shangri-La Peach Island", "zh": "幻都的桃子之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1074-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/shangri-la-peach-island.webp",
    "livlies": ["027-m-000", "027-c-000"]
  },
  "1088-1-001": {
    "name": { "ja": "ロックツリー", "en": "Lock Tree", "zh": "古鎖之樹" },
    "fruit": { "ja": "ヤマブドウの実", "en": "Wild Grapes", "zh": "山葡萄果實" },
    "source": { "ja": "紅葉のロックツリー", "en": "Maple Lock Tree", "zh": "紅葉飄落的古鎖之樹" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1088-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/maple-lock-tree.webp",
    "livlies": ["014-m-002"]
  },
  "1094-1-001": {
    "name": { "ja": "秋の山椒の木", "en": "Autumn Prickly Ash Tree", "zh": "秋季山椒樹" },
    "fruit": { "ja": "秋のお弁当ピック旗の実", "en": "Autumn Bento Pick Fruit", "zh": "秋季便當叉旗果實" },
    "source": { "ja": "はらぺこ秋のお弁当の島", "en": "Autumn Bento Feast Island", "zh": "食指大動秋季便當島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1094-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/autumn-bento-feast-island.webp",
    "livlies": ["019-m-001"]
  },
  "1081-1-001": {
    "name": { "ja": "金色の薔薇の木", "en": "Gold Rose Tree", "zh": "金色玫瑰樹" },
    "fruit": { "ja": "青い薔薇の実", "en": "Blue Rose Fruit", "zh": "藍玫瑰果實" },
    "source": { "ja": "ゴシックマスカレード", "en": "Gothic Masquerade", "zh": "哥德式化裝舞會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1081-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/gothic-masquerade.webp",
    "livlies": ["011-n-002"]
  },
  "1099-1-001": {
    "name": { "ja": "クリスマスクッキーハウスの木", "en": "Christmas Cookie House Tree", "zh": "聖誕薑餅屋之樹" },
    "fruit": { "ja": "ジャムクッキーの実", "en": "Jam Cookie Fruit", "zh": "果醬餅乾果實" },
    "source": { "ja": "クリスマスのお菓子の家", "en": "Christmas Candy House", "zh": "聖誕薑餅屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1099-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/christmas-candy-house.webp",
    "livlies": ["028-m-000"]
  },
  "1092-1-001": {
    "name": { "ja": "ドライローズの木", "en": "Dried Rose Tree", "zh": "乾燥玫瑰花之樹" },
    "fruit": { "ja": "ドライローズの実", "en": "Dried Rose Fruit", "zh": "乾燥玫瑰花果實" },
    "source": { "ja": "ドライローズと金の鳥", "en": "Dried Rose and Gold Bird", "zh": "乾燥玫瑰花與黃金鳥" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1092-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dried-rose-and-gold-bird.webp",
    "livlies": ["028-m-000"]
  },
  "1100-1-001": {
    "name": { "ja": "きらめくクリスマスの木", "en": "Twinkling Christmas Tree", "zh": "閃亮聖誕樹" },
    "fruit": { "ja": "ツリートップで輝く星の実", "en": "Twinkling Star Topper Fruit", "zh": "樹頂的璀璨星星果實" },
    "source": { "ja": "A Twinkling Christmas Tale", "en": "A Twinkling Christmas Tale", "zh": "A Twinkling Christmas Tale" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1100-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-twinkling-christmas-tale.webp",
    "livlies": ["010-m-002", "010-m-003"]
  },
  "1090-1-001": {
    "name": { "ja": "冬の切り株の木", "en": "Wintry Stump Tree", "zh": "冬季樹樁之樹" },
    "fruit": { "ja": "冬の赤い木の実", "en": "Wintry Red Berry", "zh": "冬季紅色果實" },
    "source": { "ja": "冬の深い森", "en": "Deep Wintry Forest", "zh": "冬季的深邃森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1090-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/deep-wintry-forest.webp",
    "livlies": ["023-n-002"]
  },
  "1106-1-001": {
    "name": { "ja": "アクリルスタンド富士山の木", "en": "Mt. Fuji Acrylic Stand Tree", "zh": "壓克力立牌富士山之樹" },
    "fruit": { "ja": "アクリル飛雲の実", "en": "Acrylic Flying Cloud Fruit", "zh": "壓克力飛雲果實" },
    "source": { "ja": "お年賀スタジオ2022", "en": "New Year's Card Studio 2022", "zh": "賀年卡攝影棚 2022" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1106-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/new-years-card-studio-2022.webp",
    "livlies": ["017-m-002"]
  },
  "1109-1-001": {
    "name": { "ja": "雪椿盆栽の木", "en": "Snow Camellia Bonsai Tree", "zh": "凝雪山茶花盆栽之樹" },
    "fruit": { "ja": "雪椿の花の実", "en": "Snow Camellia Blossom", "zh": "凝雪山茶花果實" },
    "source": { "ja": "雪椿の庭 新春彩り和装2023", "en": "Snow Camellia Garden", "zh": "凝雪山茶花之庭　新春色彩和裝 2023" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1109-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snow-camellia-garden.webp",
    "livlies": ["029-m-000", "029-c-000"]
  },
  "1087-1-001": {
    "name": { "ja": "フレーバーティーポットの木", "en": "Flavor Teapot Tree", "zh": "花草茶壺之樹" },
    "fruit": { "ja": "ティーポットタッセルの実", "en": "Teapot Tassel Fruit", "zh": "茶壺流蘇果實" },
    "source": { "ja": "フレーバーティーのアトリエ", "en": "Flavor Tea Atelier", "zh": "花草茶工坊" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1087-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flavor-tea-atelier.webp",
    "livlies": ["007-m-002"]
  },
  "1089-1-001": {
    "name": { "ja": "電子多肉植物の木", "en": "Digital Succulent Tree", "zh": "電子多肉植物之樹" },
    "fruit": { "ja": "電子多肉植物の花の実", "en": "Digital Succulent Flower", "zh": "電子多肉植物的花朵果實" },
    "source": { "ja": "多肉植物とコンピュータの島", "en": "Succulents x Computer Island", "zh": "多肉植物與電腦之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1089-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/succulents-x-computer-island.webp",
    "livlies": ["020-n-002"]
  },
  "1111-1-001": {
    "name": { "ja": "春節を祝う銀柳の木", "en": "Lunar New Year Silver Willow", "zh": "慶祝春節的銀柳之樹" },
    "fruit": { "ja": "春節飾りの実", "en": "Lunar New Year Ornament Fruit", "zh": "春節裝飾果實" },
    "source": { "ja": "華やぐ天燈の島", "en": "Island of Brilliant Sky Lanterns", "zh": "繁華絢麗天燈之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1111-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-brilliant-sky-lanterns.webp",
    "livlies": ["024-m-001"]
  },
  "1091-1-001": {
    "name": { "ja": "蓄音機の木", "en": "Gramophone Tree", "zh": "留聲機之樹" },
    "fruit": { "ja": "古いレコードの実", "en": "Vintage Vinyl Record Fruit", "zh": "老舊唱片果實" },
    "source": { "ja": "路地裏の小さな秘密基地", "en": "Little Backstreet Hideout", "zh": "巷弄深處的小小祕密基地" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1091-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/little-backstreet-hideout.webp",
    "livlies": ["030-n-000"]
  },
  "1110-1-001": {
    "name": { "ja": "愛情を具現化した薔薇の木", "en": "Embodiment of Love Rose Tree", "zh": "將愛情實體化的玫瑰之樹" },
    "fruit": { "ja": "愛情を具現化した薔薇の実", "en": "Embodiment of Love Rose Fruit", "zh": "將愛情實體化的玫瑰果實" },
    "source": { "ja": "Love Laboratory", "en": "Love Laboratory", "zh": "Love Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1110-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/love-laboratory.webp",
    "livlies": ["030-n-000"]
  },
  "1096-1-001": {
    "name": { "ja": "クラフト・ロリィタのランプの木", "en": "Lolita Craft Lamp Tree", "zh": "創意手工・蘿莉塔檯燈之樹" },
    "fruit": { "ja": "ポンポンデイジーの実", "en": "Pompom Daisy Fruit", "zh": "絨球雛菊果實" },
    "source": { "ja": "クラフト・ロリィタルーム", "en": "Lolita Craft Room", "zh": "創意手工・蘿莉塔小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1096-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lolita-craft-room.webp",
    "livlies": ["018-m-002"]
  },
  "1107-1-001": {
    "name": { "ja": "電球テラリウムの木", "en": "Light Bulb Terrarium Tree", "zh": "燈泡生態瓶之樹" },
    "fruit": { "ja": "いつの間にか生えていたきのこの実", "en": "Sprung-up Mushroom Fruit", "zh": "不知不覺間生長出的香菇果實" },
    "source": { "ja": "電球テラリウムと苔の島", "en": "Light Bulb Terrarium & Moss Island", "zh": "燈泡生態瓶與苔蘚之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1107-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/light-bulb-terrarium-and-moss-island.webp",
    "livlies": ["028-m-001"]
  },
  "1098-1-001": {
    "name": { "ja": "光り輝くオーロラ色の木", "en": "Glowing Aurora Tree", "zh": "光輝燦爛極光色之樹" },
    "fruit": { "ja": "光り輝くオーロラ色の木の実", "en": "Glowing Aurora Tree Fruit", "zh": "光輝燦爛極光色之樹果實" },
    "source": { "ja": "オーロラが照らす森", "en": "Shining Aurora Forest", "zh": "極光照耀之森" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1098-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/shining-aurora-forest.webp",
    "livlies": ["025-m-001"]
  },
  "1102-1-001": {
    "name": { "ja": "ボタニカル・レンズの木", "en": "Botanical Lens Tree", "zh": "植物保育・鏡片之樹" },
    "fruit": { "ja": "小さなホタルカズラの花の実", "en": "Small Hotaru Kazura Flower", "zh": "小小的梓木草花朵果實" },
    "source": { "ja": "ボタニカル・レンズの島", "en": "Botanical Lens Island", "zh": "植物保育・鏡片之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1102-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/botanical-lens-island.webp",
    "livlies": ["031-m-000"]
  },
  "1113-1-001": {
    "name": { "ja": "花あかりの桜の木", "en": "Dazzling Sakura Tree", "zh": "絢麗盛開櫻花樹" },
    "fruit": { "ja": "桜の花びらの実", "en": "Sakura Flower Fruit", "zh": "櫻花花瓣果實" },
    "source": { "ja": "桜舞う花あかりの島", "en": "Island of Dazzling Dancing Sakura", "zh": "絢麗盛開櫻花飄舞之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1113-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-dazzling-dancing-sakura.webp",
    "livlies": ["027-m-001"]
  },
  "1114-1-001": {
    "name": { "ja": "ナイトカルーセルの木", "en": "Night Carousel Tree", "zh": "暮夜旋轉木馬之樹" },
    "fruit": { "ja": "ナイトカルーセルの小さな月の実", "en": "Night Carousel Small Moon Fruit", "zh": "暮夜旋轉木馬的小巧月亮果實" },
    "source": { "ja": "ナイトカルーセルの部屋", "en": "Night Carousel Room", "zh": "暮夜旋轉木馬暗室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1114-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/night-carousel-room.webp",
    "livlies": ["006-m-003"]
  },
  "1103-1-001": {
    "name": { "ja": "ハチミツの木", "en": "Honey Tree", "zh": "蜂蜜之樹" },
    "fruit": { "ja": "ハチミツの実", "en": "Honey Fruit", "zh": "蜂蜜果實" },
    "source": { "ja": "ハチミツパーティーの島", "en": "Honey Party Island", "zh": "蜂蜜派對之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1103-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/honey-party-island.webp",
    "livlies": ["013-m-003"]
  },
  "1097-1-001": {
    "name": { "ja": "大惑星の木", "en": "Giant Planet Tree", "zh": "巨大星球之樹" },
    "fruit": { "ja": "衛星の実", "en": "Satellite Fruit", "zh": "衛星果實" },
    "source": { "ja": "惑星の降る丘", "en": "Hill of Celestial Bodies", "zh": "星球降落之丘" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1097-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hill-of-celestial-bodies.webp",
    "livlies": ["019-m-002"]
  },
  "1115-1-001": {
    "name": { "ja": "ラビットトピアリーの木", "en": "Rabbit Topiary Tree", "zh": "兔兔園藝造型之樹" },
    "fruit": { "ja": "イースターエッグの実・イエロー", "en": "Yellow Easter Egg Fruit", "zh": "復活節彩蛋果實・黃色" },
    "source": { "ja": "イースターサンルーム", "en": "Easter Sunroom", "zh": "復活節日光房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1115-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/easter-sunroom.webp",
    "livlies": ["032-m-000"]
  },
  "1117-1-001": {
    "name": { "ja": "マンドレイクの容器の木", "en": "Mandrake Vessel Tree", "zh": "曼德拉草的容器之樹" },
    "fruit": { "ja": "マンドレイクの実", "en": "Mandrake Fruit", "zh": "曼德拉草的果實" },
    "source": { "ja": "クロックワークマンドレイクの島", "en": "Clockwork Mandrake Island", "zh": "發條裝置曼德拉草之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1117-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/clockwork-mandrake-island.webp",
    "livlies": ["004-m-003"]
  },
  "1118-1-001": {
    "name": { "ja": "白い鳥かごの木", "en": "White Bird Cage Tree", "zh": "白色鳥籠之樹" },
    "fruit": { "ja": "鳥かごの水滴の実", "en": "Bird Cage Droplet Fruit", "zh": "鳥籠的水滴果實" },
    "source": { "ja": "Faraway Resort Island", "en": "Faraway Resort Island", "zh": "Faraway Resort Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1118-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/faraway-resort-island.webp",
    "livlies": ["016-a-002"]
  },
  "1119-1-001": {
    "name": { "ja": "小さな滝の木", "en": "Small Waterfall Tree", "zh": "小小瀑布之樹" },
    "fruit": { "ja": "滝に咲く小さな花の実", "en": "Small Waterfall Flower Fruit", "zh": "在瀑布中綻放的小花果實" },
    "source": { "ja": "滝の裏の小さな洞窟", "en": "Small Cave Behind Waterfall", "zh": "瀑布深處的小小洞窟" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1119-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/small-cave-behind-waterfall.webp",
    "livlies": ["003-n-003"]
  },
  "1130-1-001": {
    "name": { "ja": "白昼夢のイーゼルの木", "en": "Daydream Easel Tree", "zh": "白日夢畫架之樹" },
    "fruit": { "ja": "黄色い挿絵の花の実", "en": "Yellow Painted Flower Fruit", "zh": "黃色插畫花朵果實" },
    "source": { "ja": "アトリエ・ドゥ・レヴリ", "en": "Atelier de Reverie", "zh": "白日夢工坊" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1130-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/atelier-de-reverie.webp",
    "livlies": ["033-n-000"]
  },
  "1121-1-001": {
    "name": { "ja": "イチゴジャム瓶の木", "en": "Strawberry Jam Jar Tree", "zh": "草莓果醬瓶之樹" },
    "fruit": { "ja": "真っ赤なイチゴの実", "en": "Bright Red Strawberry", "zh": "鮮紅草莓果實" },
    "source": { "ja": "摘みたてイチゴジャムの島", "en": "Fresh Strawberry Jam Island", "zh": "新鮮現採草莓果醬之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1121-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fresh-strawberry-jam-island.webp",
    "livlies": ["021-m-002"]
  },
  "1122-1-001": {
    "name": { "ja": "路地裏に残された街灯の木", "en": "Alley Abandoned Lamppost Tree", "zh": "被遺留在巷弄深處的路燈之樹" },
    "fruit": { "ja": "誰かが貼ったステッカーの実", "en": "Random Sticker Fruit", "zh": "某人貼上的貼紙果實" },
    "source": { "ja": "Foggy Graffiti Street", "en": "Foggy Graffiti Street", "zh": "Foggy Graffiti Street" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1122-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/foggy-graffiti-street.webp",
    "livlies": ["029-m-001"]
  },
  "1123-1-001": {
    "name": { "ja": "赤林檎の木のフィギュアツリー", "en": "Red Apple Tree Figurine Tree", "zh": "紅蘋果樹的模型之樹" },
    "fruit": { "ja": "ロゴジョイントパーツの実", "en": "Logo Joint Piece Fruit", "zh": "標誌組裝零件果實" },
    "source": { "ja": "カプセルトイ・ミニチュアルーム", "en": "Capsule Toy Miniature Room", "zh": "轉蛋模型・袖珍小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1123-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/capsule-toy-miniature-room.webp",
    "livlies": ["026-m-001"]
  },
  "1124-1-001": {
    "name": { "ja": "星明かりのスズランの木", "en": "Starlight May Bells Tree", "zh": "星輝鈴蘭之樹" },
    "fruit": { "ja": "スズランの花の実", "en": "May Bells Flower Fruit", "zh": "鈴蘭花朵果實" },
    "source": { "ja": "星が煌くスズランの島", "en": "Starlight May Bells Island", "zh": "星光熠熠鈴蘭之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1124-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starlight-may-bells-island.webp",
    "livlies": ["005-n-003"]
  },
  "1125-1-001": {
    "name": { "ja": "虹色の葉をもつ植物の木", "en": "Rainbow Leaf Tree", "zh": "長出七彩葉子的植物之樹" },
    "fruit": { "ja": "葉に集まった小さな水滴の実", "en": "Collected Small Raindrop Fruit", "zh": "匯集於葉子上的小水滴果實" },
    "source": { "ja": "逆さま傘の島", "en": "Upside-down Umbrella Island", "zh": "顛倒雨傘之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1125-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/upside-down-umbrella-island.webp",
    "livlies": ["034-n-000"]
  },
  "1126-1-001": {
    "name": { "ja": "竹の盆栽の木", "en": "Bamboo Bonsai Tree", "zh": "竹盆栽之樹" },
    "fruit": { "ja": "瞑想のタケノコの実", "en": "Meditative Bamboo Shoot Fruit", "zh": "瞑想竹筍果實" },
    "source": { "ja": "瞑想の竹林庭園", "en": "Meditative Bamboo Garden", "zh": "瞑想竹林庭園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1126-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/meditative-bamboo-garden.webp",
    "livlies": ["015-m-003"]
  },
  "1127-1-001": {
    "name": { "ja": "ツタが絡んだシャンデリアの木", "en": "Ivy-entangled Chandelier Tree", "zh": "被藤蔓纏繞的水晶吊燈之樹" },
    "fruit": { "ja": "色褪せたツタの葉の実", "en": "Faded Ivy Leaf Fruit", "zh": "凋謝的藤葉果實" },
    "source": { "ja": "Forgotten Wedding Hall", "en": "Forgotten Wedding Hall", "zh": "Forgotten Wedding Hall" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1127-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forgotten-wedding-hall.webp",
    "livlies": ["012-m-003"]
  },
  "1128-1-001": {
    "name": { "ja": "折り紙の花が咲いた花瓶の木", "en": "Origami Flower Vase Tree", "zh": "摺紙花朵綻放的花瓶之樹" },
    "fruit": { "ja": "折り紙の花の実", "en": "Origami Flower Fruit", "zh": "摺紙花朵果實" },
    "source": { "ja": "レトロハウスのミニチュア", "en": "Retro House Miniature", "zh": "袖珍復古小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1128-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/retro-house-miniature.webp",
    "livlies": ["030-n-001"]
  },
  "1132-1-001": {
    "name": { "ja": "静止した風船たちの木", "en": "Static Balloons Tree", "zh": "靜止氣球之樹" },
    "fruit": { "ja": "ビーンズ型の風船の実", "en": "Bean-shaped Balloon Fruit", "zh": "豆型氣球果實" },
    "source": { "ja": "スパークリングバルーンの島", "en": "Sparkling Balloon Island", "zh": "光彩奪目氣球之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1132-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sparkling-balloon-island.webp",
    "livlies": ["035-m-000"]
  },
  "1133-1-001": {
    "name": { "ja": "ヴィンテージな電球の木", "en": "Vintage Light Bulb Tree", "zh": "復古風燈泡之樹" },
    "fruit": { "ja": "電球のフィラメントの実", "en": "Light Bulb Filament Fruit", "zh": "燈泡燈絲果實" },
    "source": { "ja": "霧の街のテーラーショップ", "en": "Hazy Street Tailor Shop", "zh": "迷霧之街的裁縫店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1133-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hazy-street-tailor-shop.webp",
    "livlies": ["035-m-000"]
  },
  "1134-1-001": {
    "name": { "ja": "輝く七つの星が咲く金色の木", "en": "Sparkling Seven Star Gold Tree", "zh": "璀璨七星綻放的金色樹木" },
    "fruit": { "ja": "輝く七つの星の実", "en": "Sparkling Seven Star Fruit", "zh": "璀璨七星果實" },
    "source": { "ja": "七惑星の錬金室", "en": "Seven Planets Alchemy Room", "zh": "七大行星的鍊金室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1134-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seven-planets-alchemy-room.webp",
    "livlies": ["001-m-004"]
  },
  "1135-1-001": {
    "name": { "ja": "金のチェスクロックの木", "en": "Gold Chess Clock Tree", "zh": "黃金棋鐘之樹" },
    "fruit": { "ja": "唯一の勝利の花の実", "en": "Victory-only Flower Fruit", "zh": "唯一勝利花朵果實" },
    "source": { "ja": "不思議なチェス盤の庭", "en": "Bizarre Chessboard Garden", "zh": "不可思議的西洋棋盤之庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1135-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bizarre-chessboard-garden.webp",
    "livlies": ["033-n-001"]
  },
  "1136-1-001": {
    "name": { "ja": "スターローズクォーツの木", "en": "Star Rose Quartz Tree", "zh": "星光粉晶球之樹" },
    "fruit": { "ja": "スターローズクォーツの星薔薇の実", "en": "Star Rose Quartz Rose Fruit", "zh": "星光粉晶球的星星玫瑰果實" },
    "source": { "ja": "スターローズクォーツの島", "en": "Star Rose Quartz Island", "zh": "星光粉晶球之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1136-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/star-rose-quartz-island.webp",
    "livlies": ["008-m-003"]
  },
  "1137-1-001": {
    "name": { "ja": "氷山のウォータードームの木", "en": "Iceberg Water Globe Tree", "zh": "冰山造景水球之樹" },
    "fruit": { "ja": "小さな太陽の実", "en": "Small Sun Fruit", "zh": "小巧太陽果實" },
    "source": { "ja": "Summer Ice Island", "en": "Summer Ice Island", "zh": "Summer Ice Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1137-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-ice-island.webp",
    "livlies": ["036-n-000"]
  },
  "1138-1-001": {
    "name": { "ja": "夏祭りの太鼓の木", "en": "Summer Festival Taiko Tree", "zh": "夏日祭典的太鼓之樹" },
    "fruit": { "ja": "夏祭りの太鼓の木の実", "en": "Summer Festival Taiko Tree Fruit", "zh": "夏日祭典的太鼓之樹果實" },
    "source": { "ja": "屋台並ぶ夏祭りの島", "en": "Yatai Summer Festival Island", "zh": "攤販雲集夏日祭典之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1138-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/yatai-summer-festival-island.webp",
    "livlies": ["026-m-002"]
  },
  "1139-1-001": {
    "name": { "ja": "MODEなチューブ型ライトの木", "en": "MODE Tube Light Tree", "zh": "MODE條型補光燈之樹" },
    "fruit": { "ja": "ライトの光の実", "en": "Light Sparkle Fruit", "zh": "燈光果實" },
    "source": { "ja": "MODE Vol.2", "en": "MODE Vol. 2", "zh": "MODE Vol.2" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1139-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mode-vol-2.webp",
    "livlies": ["031-m-001"]
  },
  "1140-1-001": {
    "name": { "ja": "ピグミー土偶の木", "en": "Pygmy Dogu Tree", "zh": "提可咪土偶之樹" },
    "fruit": { "ja": "古代からのメッセージの実", "en": "Ancient Message Fruit", "zh": "來自古代的訊息果實" },
    "source": { "ja": "謎めいた古代遺跡の島", "en": "Cryptic Ancient Ruins Island", "zh": "謎團重重古代遺跡之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1140-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cryptic-ancient-ruins-island.webp",
    "livlies": ["034-n-001"]
  },
  "1141-1-001": {
    "name": { "ja": "夏のお家の吊り看板の木", "en": "Summer House Hanging Sign Tree", "zh": "夏日小屋的垂掛看板之樹" },
    "fruit": { "ja": "看板に絡むお花の実", "en": "Sign Entwined Flower Fruit", "zh": "纏繞看板的花朵果實" },
    "source": { "ja": "フラワリーゼリーキッチン", "en": "Flowery Jelly Kitchen", "zh": "花卉果凍廚房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1141-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flowery-jelly-kitchen.webp",
    "livlies": ["037-m-000"]
  },
  "1142-1-001": {
    "name": { "ja": "妖しげな火が灯るランプの木", "en": "Eerie Flame Lamp Tree", "zh": "燃起古怪火焰的吊燈之樹" },
    "fruit": { "ja": "妖しげな火の実", "en": "Eerie Flame Fruit", "zh": "古怪火焰果實" },
    "source": { "ja": "古城の呪いと詩人の部屋", "en": "Ancient Castle's Curse & Poet's Room", "zh": "古城詛咒與詩人居室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1142-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ancient-castles-curse-and-poets-room.webp",
    "livlies": ["037-m-000"]
  },
  "1143-1-001": {
    "name": { "ja": "神殿の燭台の木", "en": "Temple Candle Holder Tree", "zh": "神殿燭台之樹" },
    "fruit": { "ja": "灯に集まる光虫の実", "en": "Phototactic Light Bug Fruit", "zh": "聚集於燭火周圍的發光昆蟲果實" },
    "source": { "ja": "碧き灯の神殿の島", "en": "Blue Flame Temple Island", "zh": "碧藍燭火神殿之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1143-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blue-flame-temple-island.webp",
    "livlies": ["009-n-003"]
  },
  "1144-1-001": {
    "name": { "ja": "ハローキティのりんごの木", "en": "Hello Kitty Apple Tree", "zh": "HelloKitty蘋果樹" },
    "fruit": { "ja": "ハローキティのりんごの実", "en": "Hello Kitty Apple Tree Fruit", "zh": "Hello Kitty蘋果" },
    "source": { "ja": "ハローキティの錬金術ラボ", "en": "Hello Kitty's Alchemy Lab", "zh": "Hello Kitty的鍊金術研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1144-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hello-kittys-alchemy-lab.webp",
    "livlies": ["001-c-000"]
  },
  "1145-1-001": {
    "name": { "ja": "野外スクリーンの木", "en": "Outdoor Screen Tree", "zh": "露天投影布幕之樹" },
    "fruit": { "ja": "シネマチケットタグの実", "en": "Cinema Ticket Tag Fruit", "zh": "電影票券標籤果實" },
    "source": { "ja": "ムービーナイトの島", "en": "Movie Night Island", "zh": "露天電影夜之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1145-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/movie-night-island.webp",
    "livlies": ["022-m-003"]
  },
  "1146-1-001": {
    "name": { "ja": "トゲフラワーの木", "en": "Prickly Flower Tree", "zh": "棘瓣花之樹" },
    "fruit": { "ja": "トゲの実", "en": "Prickly Fruit", "zh": "棘刺果實" },
    "source": { "ja": "トゲフラワーパニックストリート", "en": "Prickly Flower Panic Street", "zh": "棘瓣花驚魂街頭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1146-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/prickly-flower-panic-street.webp",
    "livlies": ["038-m-000"]
  },
  "1147-1-001": {
    "name": { "ja": "鎖に繋がれた奇妙な林檎の木", "en": "Chained Unusual Apple Tree", "zh": "被繫上鎖鏈的奇異蘋果樹" },
    "fruit": { "ja": "奇妙な林檎の木の実", "en": "Unusual Apple Tree Fruit", "zh": "奇異蘋果" },
    "source": { "ja": "Halloween Cemetery", "en": "Halloween Cemetery", "zh": "Halloween Cemetery" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1147-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/halloween-cemetery.webp",
    "livlies": ["038-m-000"]
  },
  "1148-1-001": {
    "name": { "ja": "吊るした花束の木", "en": "Pendent Flower Bouquet Tree", "zh": "吊掛花束之樹" },
    "fruit": { "ja": "幽遠の花の実", "en": "Secluded Flower Fruit", "zh": "悠遠的花朵果實" },
    "source": { "ja": "幽遠の湖畔", "en": "Secluded Lakeside", "zh": "幽遠的湖畔" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1148-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secluded-lakeside.webp",
    "livlies": ["032-m-001"]
  },
  "1149-1-001": {
    "name": { "ja": "マイメロディとクロミのいちごの木", "en": "My Melody & Kuromi Berry Tree", "zh": "美樂蒂與酷洛米的草莓樹" },
    "fruit": { "ja": "マイメロディとクロミのいちごの実", "en": "My Melody & Kuromi Berry Fruit", "zh": "美樂蒂與酷洛米的草莓" },
    "source": { "ja": "マイメロディ＆クロミルーム", "en": "My Melody & Kuromi Room", "zh": "美樂蒂＆酷洛米小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1149-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-melody-and-kuromi-room.webp",
    "livlies": ["002-c-000", "027-c-000"]
  },
  "1150-1-001": {
    "name": { "ja": "ゴースト・クリームの木", "en": "Ghost Cream Tree", "zh": "鬼魂・鮮奶油之樹" },
    "fruit": { "ja": "呼び出されたクリームの実", "en": "Summoned Cream Fruit", "zh": "受到召喚的鮮奶油果實" },
    "source": { "ja": "Ghost Treats Island", "en": "Ghost Treats Island", "zh": "Ghost Treats Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1150-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ghost-treats-island.webp",
    "livlies": ["025-m-002"]
  },
  "1172-1-001": {
    "name": { "ja": "秋のコットンフラワーアレンジの木", "en": "Autumn Cotton Floral Design Tree", "zh": "秋季棉花擺設之樹" },
    "fruit": { "ja": "手作りポフの実", "en": "Handmade Pof Fruit", "zh": "手工製作波弗果實" },
    "source": { "ja": "ハンドメイド・ハーベストの島", "en": "Handmade Harvest Island", "zh": "手工製・豐收之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1172-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/handmade-harvest-island.webp",
    "livlies": ["039-m-000"]
  },
  "1151-1-001": {
    "name": { "ja": "カンテラテントの木", "en": "Cantera Tent Tree", "zh": "油燈帳篷之樹" },
    "fruit": { "ja": "テントの光の実", "en": "Tent Light Fruit", "zh": "帳篷亮光果實" },
    "source": { "ja": "ペーパークラフトサーカス", "en": "Paper Craft Circus", "zh": "紙模型馬戲團" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1151-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/paper-craft-circus.webp",
    "livlies": ["039-m-000"]
  },
  "1170-1-005": {
    "name": { "ja": "ハンギョドンのももの木", "en": "Hangyodon Peach Tree", "zh": "人魚漢頓的桃樹" },
    "fruit": { "ja": "ハンギョドンのももの実", "en": "Hangyodon Peach Fruit", "zh": "人魚漢頓的桃子果實" },
    "source": { "ja": "コラボショップ", "en": "Collab Shop: Sanrio Characters (Vol. 2)", "zh": "三麗鷗角色聯名商店 Vol.2" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1170-1-005-P.png",
    "banner": null,
    "livlies": ["007-c-000"]
  },
  "1153-1-001": {
    "name": { "ja": "秋のもみじの木", "en": "Autumn Maple Tree", "zh": "秋季楓葉之樹" },
    "fruit": { "ja": "色づいたもみじの葉の実", "en": "Turned Maple Leaf Fruit", "zh": "變色的楓葉果實" },
    "source": { "ja": "秋色染まるもみじの島", "en": "Autumn Maple Island", "zh": "秋色盡染楓葉之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1153-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/autumn-maple-island.webp",
    "livlies": ["035-m-001"]
  },
  "1154-1-001": {
    "name": { "ja": "マカロンの木", "en": "Macaron Tree", "zh": "馬卡龍之樹" },
    "fruit": { "ja": "アラザンの実", "en": "Dragée Fruit", "zh": "糖珠果實" },
    "source": { "ja": "フラワーマカロンの島", "en": "Flower Macaron Island", "zh": "鮮花馬卡龍之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1154-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/flower-macaron-island.webp",
    "livlies": ["018-m-003"]
  },
  "1155-1-001": {
    "name": { "ja": "提灯型ネオンサインの木", "en": "Lantern Design Neon Sign Tree", "zh": "燈籠型霓虹燈招牌之樹" },
    "fruit": { "ja": "鮨印ネオンの実", "en": "Neon Sushi Logo Fruit", "zh": "鮨印霓虹燈果實" },
    "source": { "ja": "Cyber寿司verse", "en": "Cyber Sushiverse", "zh": "Cyber壽司verse" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1155-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cyber-sushiverse.webp",
    "livlies": ["011-n-003"]
  },
  "1156-1-001": {
    "name": { "ja": "きらびやかなクリスマスの木", "en": "Gorgeous Christmas Tree", "zh": "燦爛奪目的聖誕樹" },
    "fruit": { "ja": "クーゲルオーナメントの実", "en": "Kugel Ornament Fruit", "zh": "圓球裝飾果實" },
    "source": { "ja": "Christmas Dinner Party", "en": "Christmas Dinner Party", "zh": "Christmas Dinner Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1156-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/christmas-dinner-party.webp",
    "livlies": ["040-m-000"]
  },
  "1157-1-001": {
    "name": { "ja": "聖なる森のクリスマスの木", "en": "Holy Forest Christmas Tree", "zh": "神聖森林的聖誕樹" },
    "fruit": { "ja": "聖なる光の木の実", "en": "Holy Light Fruit", "zh": "聖光果實" },
    "source": { "ja": "聖なる森のクリスマス", "en": "Holy Forest Christmas", "zh": "神聖森林的聖誕節" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1157-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/holy-forest-christmas.webp",
    "livlies": ["036-n-001"]
  },
  "1158-1-001": {
    "name": { "ja": "あったか暖炉の木", "en": "Toasty Fireplace Tree", "zh": "暖洋洋暖爐之樹" },
    "fruit": { "ja": "あったか暖炉のライトの実", "en": "Toasty Fireplace Light Fruit", "zh": "暖洋洋暖爐的燈飾果實" },
    "source": { "ja": "あったか暖炉と毛糸の島", "en": "Toasty Fireplace & Yarn Island", "zh": "暖洋洋暖爐與毛線之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1158-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/toasty-fireplace-and-yarn-island.webp",
    "livlies": ["014-m-003"]
  },
  "1159-1-001": {
    "name": { "ja": "旅立つ気球の木", "en": "Departing Balloon Tree", "zh": "啟程熱氣球之樹" },
    "fruit": { "ja": "気球のボタンの実", "en": "Balloon Button Fruit", "zh": "熱氣球鈕扣果實" },
    "source": { "ja": "旅する気球の島", "en": "Island of Traveling Balloons", "zh": "旅行熱氣球之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1159-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-traveling-balloons.webp",
    "livlies": ["041-m-000"]
  },
  "1160-1-001": {
    "name": { "ja": "南天の木", "en": "Sacred Bamboo Tree", "zh": "南天竹之樹" },
    "fruit": { "ja": "南天の実", "en": "Sacred Bamboo Fruit", "zh": "南天竹果實" },
    "source": { "ja": "星空と暮れの島", "en": "Starry Dusk Sky Island", "zh": "星空與薄暮之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1160-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starry-dusk-sky-island.webp",
    "livlies": ["002-n-004"]
  },
  "1174-1-001": {
    "name": { "ja": "紅白梅盆栽の木", "en": "Red & White Plum Bonsai Tree", "zh": "紅白梅花盆栽之樹" },
    "fruit": { "ja": "紅白梅の実", "en": "Red & White Plum Blossom Fruit", "zh": "紅白梅花果實" },
    "source": { "ja": "紅白梅の島 新春彩り和装2024", "en": "Red & White Plum Blossom Island", "zh": "紅白梅花之島 新春色彩和裝2024" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1174-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/red-and-white-plum-blossom-island.webp",
    "livlies": ["042-m-000"]
  },
  "1175-1-001": {
    "name": { "ja": "特殊なチランジアの木", "en": "Special Tillandsia Tree", "zh": "特殊鐵蘭之樹" },
    "fruit": { "ja": "特殊なチランジアの実", "en": "Special Tillandsia Fruit", "zh": "特殊鐵蘭果實" },
    "source": { "ja": "Bubble Bath Island", "en": "Bubble Bath Island", "zh": "Bubble Bath Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1175-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bubble-bath-island.webp",
    "livlies": ["031-m-002", "031-m-003"]
  },
  "1198-1-001": {
    "name": { "ja": "ステージライトの木", "en": "Stage Light Tree", "zh": "舞台燈之樹" },
    "fruit": { "ja": "スターチャームの実", "en": "Star Charm Fruit", "zh": "星星飾品果實" },
    "source": { "ja": "LIVLY ROCK LIVE 2024", "en": "LIVLY ROCK LIVE 2024", "zh": "LIVLY ROCK LIVE 2024" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1198-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-rock-live-2024.webp",
    "livlies": ["027-m-002"]
  },
  "1177-1-001": {
    "name": { "ja": "ハードディスクと電子多肉植物の木", "en": "HDD & Digital Succulent Tree", "zh": "硬碟與電子多肉植物之樹" },
    "fruit": { "ja": "電子多肉植物の実", "en": "Digital Succulent Fruit", "zh": "電子多肉植物果實" },
    "source": { "ja": "電子植物とコンピュータの島", "en": "Digital Plants x Computer Island", "zh": "電子植物與電腦之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1177-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/digital-plants-x-computer-island.webp",
    "livlies": ["024-m-002"]
  },
  "1105-1-001": {
    "name": { "ja": "夜香の木", "en": "Night Scent Tree", "zh": "暮香之樹" },
    "fruit": { "ja": "夜香の実", "en": "Night Scent Fruit", "zh": "暮香果實" },
    "source": { "ja": "調香師の島", "en": "Perfumer's Island", "zh": "調香師之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1105-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/perfumers-island.webp",
    "livlies": ["043-m-000"]
  },
  "1180-1-001": {
    "name": { "ja": "卵を見守る赤いモビールの木", "en": "Egg-guarding Red Mobile Tree", "zh": "守護蛋群的紅色掛飾之樹" },
    "fruit": { "ja": "幸運の燕ぬいぐるみの実", "en": "Lucky Swallow Plushie Fruit", "zh": "幸運燕子玩偶果實" },
    "source": { "ja": "眠る卵を見守る島", "en": "Sleeping Egg Sanctuary", "zh": "沉眠蛋群的守護之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1180-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sleeping-egg-sanctuary.webp",
    "livlies": ["017-m-003"]
  },
  "1181-1-001": {
    "name": { "ja": "ペーパーハートの木", "en": "Paper Heart Tree", "zh": "紙愛心之樹" },
    "fruit": { "ja": "ペーパーハートの実", "en": "Paper Heart Fruit", "zh": "紙愛心果實" },
    "source": { "ja": "Valentine Card Island", "en": "Valentine Card Island", "zh": "Valentine Card Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1181-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/valentine-card-island.webp",
    "livlies": ["044-n-000"]
  },
  "1183-1-001": {
    "name": { "ja": "きらめく薔薇の木", "en": "Glistening Rose Tree", "zh": "閃耀的玫瑰之樹" },
    "fruit": { "ja": "きらめく薔薇の花の実", "en": "Glistening Rose Fruit", "zh": "閃耀的玫瑰花果實" },
    "source": { "ja": "秘密の薔薇の園", "en": "Secret Rose Garden", "zh": "秘密玫瑰園" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1183-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-rose-garden.webp",
    "livlies": ["030-n-002"]
  },
  "1184-1-001": {
    "name": { "ja": "星飾りがついたアーチの木", "en": "Star Bauble Arch Tree", "zh": "附有星星裝飾的拱門之樹" },
    "fruit": { "ja": "星飾りの実", "en": "Star Bauble Fruit", "zh": "星星裝飾果實" },
    "source": { "ja": "スノーキャンプの島", "en": "Snowy Camp Island", "zh": "雪地露營之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1184-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snowy-camp-island.webp",
    "livlies": ["028-m-002"]
  },
  "1185-1-001": {
    "name": { "ja": "猫草の木", "en": "Cat Grass Tree", "zh": "貓草之樹" },
    "fruit": { "ja": "猫草の実", "en": "Cat Grass Fruit", "zh": "貓草果實" },
    "source": { "ja": "まどろみサンセットルーム", "en": "Drowsy Sunset Room", "zh": "午後微眠日落小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1185-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/drowsy-sunset-room.webp",
    "livlies": ["037-m-001"]
  },
  "1186-1-001": {
    "name": { "ja": "バードフィーダーの木", "en": "Bird Feeder Tree", "zh": "餵鳥器之樹" },
    "fruit": { "ja": "グミの実", "en": "Gummy Fruit", "zh": "軟糖果實" },
    "source": { "ja": "小鳥たちとつどいの島", "en": "Feathered Friends Island", "zh": "小鳥們的聚會之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1186-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/feathered-friends-island.webp",
    "livlies": ["045-m-000"]
  },
  "1187-1-001": {
    "name": { "ja": "満開の枝垂桜の木", "en": "Full Bloom Weeping Cherry Tree", "zh": "盛開的垂枝櫻花樹" },
    "fruit": { "ja": "枝垂桜の実", "en": "Weeping Cherry Fruit", "zh": "垂枝櫻果實" },
    "source": { "ja": "春宵の枝垂桜の島", "en": "Spring Night Weeping Cherry Island", "zh": "春宵美景垂枝櫻之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1187-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-night-weeping-cherry-island.webp",
    "livlies": ["046-m-000"]
  },
  "1188-1-001": {
    "name": { "ja": "ハートクッキーギフトボックスの木", "en": "Heart Cookie Gift Box Tree", "zh": "心型餅乾禮物盒之樹" },
    "fruit": { "ja": "ハートクッキーギフトボックスの実", "en": "Heart Cookie Gift Box Fruit", "zh": "心型餅乾禮物盒果實" },
    "source": { "ja": "Sweet White Day Island", "en": "Sweet White Day Island", "zh": "Sweet White Day Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1188-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-white-day-island.webp",
    "livlies": ["007-m-003"]
  },
  "1189-1-001": {
    "name": { "ja": "エレベーターの階数表示の木", "en": "Elevator Floor Indicator Tree", "zh": "電梯的樓層顯示板之樹" },
    "fruit": { "ja": "エレベーターの特別な階数の実", "en": "Elevator Special Floor Fruit", "zh": "電梯的特別樓層果實" },
    "source": { "ja": "ワンダーエレベーター", "en": "Wonder Elevator", "zh": "奇幻電梯之旅" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1189-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wonder-elevator.webp",
    "livlies": ["039-m-001"]
  },
  "1190-1-001": {
    "name": { "ja": "ミモザが咲くティーカップの木", "en": "Blooming Mimosa Teacup Tree", "zh": "銀荊花綻放的茶壺之樹" },
    "fruit": { "ja": "ミモザの実", "en": "Mimosa Fruit", "zh": "銀荊花果實" },
    "source": { "ja": "ミモザの島", "en": "Mimosa Island", "zh": "銀荊花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1190-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mimosa-island.webp",
    "livlies": ["047-m-000"]
  },
  "1191-1-001": {
    "name": { "ja": "螺旋階段の木", "en": "Spiral Staircase Tree", "zh": "旋轉樓梯之樹" },
    "fruit": { "ja": "ウィンドチャイムの実", "en": "Wind Chime Fruit", "zh": "吊鐘風鈴果實" },
    "source": { "ja": "思い出の屋根裏", "en": "Attic of Memories", "zh": "回憶的閣樓" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1191-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/attic-of-memories.webp",
    "livlies": ["038-m-001"]
  },
  "1192-1-001": {
    "name": { "ja": "隠されたイースターエッグの木", "en": "Hidden Easter Egg Tree", "zh": "隱藏的復活節彩蛋之樹" },
    "fruit": { "ja": "隠されたイースターエッグの実", "en": "Hidden Easter Egg Fruit", "zh": "隱藏的復活節彩蛋果實" },
    "source": { "ja": "イースターエッグが辿り着く庭", "en": "Easter Egg Garden", "zh": "復活節彩蛋的守候之庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1192-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/easter-egg-garden.webp",
    "livlies": ["048-m-000"]
  },
  "1193-1-001": {
    "name": { "ja": "メカニカルな苺の木", "en": "Mechanical Strawberry Tree", "zh": "機械風草莓之樹" },
    "fruit": { "ja": "メカニカル模様の苺の花の実", "en": "Mechanical Strawberry Flower", "zh": "機械紋路的草莓花朵果實" },
    "source": { "ja": "不思議な苺の工場", "en": "Fanciful Strawberry Factory", "zh": "不可思議的草莓工廠" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1193-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fanciful-strawberry-factory.webp",
    "livlies": ["023-n-003"]
  },
  "1197-1-001": {
    "name": { "ja": "ホログラムツリー", "en": "Hologram Tree", "zh": "全像投影樹" },
    "fruit": { "ja": "メモリーの実", "en": "Memory Fruit", "zh": "記憶果實" },
    "source": { "ja": "Memory Ark Island", "en": "Memory Ark Island", "zh": "Memory Ark Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1197-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/memory-ark-island.webp",
    "livlies": ["016-a-003"]
  },
  "1195-1-001": {
    "name": { "ja": "小さなリゾート風ハンモックの木", "en": "Small Resort-style Hammock Tree", "zh": "小小的度假風吊床之樹" },
    "fruit": { "ja": "リゾート風の小さな造花の実", "en": "Small Resort-style Silk Flower", "zh": "小小的度假風仿真花果實" },
    "source": { "ja": "海が見えるリゾートの島", "en": "Ocean View Resort Island", "zh": "坐擁海景度假之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1195-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ocean-view-resort-island.webp",
    "livlies": ["021-m-003"]
  },
  "1196-1-001": {
    "name": { "ja": "角竜の骨格模型の木", "en": "Ceratopsian Skeleton Model Tree", "zh": "角龍骨骼模型之樹" },
    "fruit": { "ja": "古代の実", "en": "Ancient Fruit", "zh": "古代果實" },
    "source": { "ja": "museum－古生物館", "en": "Museum of Paleontology", "zh": "museum — 古生物館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1196-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/museum-of-paleontology.webp",
    "livlies": ["034-n-002"]
  },
  "1199-1-001": {
    "name": { "ja": "瑞々しいモンステラの木", "en": "Fresh Monstera Tree", "zh": "鮮綠龜背芋之樹" },
    "fruit": { "ja": "瑞々しいモンステラの若葉の実", "en": "Fresh Monstera Young Leaf Fruit", "zh": "鮮綠龜背芋的新葉果實" },
    "source": { "ja": "ミニチュアジャングルの島", "en": "Miniature Jungle Island", "zh": "袖珍叢林之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1199-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-jungle-island.webp",
    "livlies": ["049-m-000", "049-c-000"]
  },
  "1164-1-001": {
    "name": { "ja": "夜市ネオンライトの木", "en": "Night Market Neon Light Tree", "zh": "夜市霓虹燈之樹" },
    "fruit": { "ja": "ネオンライトの実", "en": "Neon Light Fruit", "zh": "霓虹燈果實" },
    "source": { "ja": "夜市電子遊樂場", "en": "Night Market Digital Arcade", "zh": "夜市電子遊樂場" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1164-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/night-market-digital-arcade.webp",
    "livlies": ["045-m-001"]
  },
  "1200-1-001": {
    "name": { "ja": "長寿の藤の木", "en": "Long-lived Wisteria Tree", "zh": "長壽紫藤樹" },
    "fruit": { "ja": "藤の花の実", "en": "Wisteria Flower Fruit", "zh": "紫藤花果實" },
    "source": { "ja": "不死の妙薬と藤の庭", "en": "Elixir of Immortality and Wisteria Garden", "zh": "不死靈藥與紫藤之庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1200-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/elixir-of-immortality-and-wisteria-garden.webp",
    "livlies": ["020-n-003"]
  },
  "1201-1-001": {
    "name": { "ja": "不思議な青林檎の木", "en": "Mysterious Green Apple Tree", "zh": "不可思議的青蘋果樹" },
    "fruit": { "ja": "青林檎の実", "en": "Green Apple", "zh": "青蘋果" },
    "source": { "ja": "日々の響き", "en": "Echoes of the Days", "zh": "日常的共鳴" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1201-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/echoes-of-the-days.webp",
    "livlies": ["052-c-000", "050-c-000", "051-c-000"]
  },
  "1202-1-001": {
    "name": { "ja": "複葉機クラウドキャプチャーの木", "en": "Cloud Capture Biplane Tree", "zh": "捕雲雙翼機之樹" },
    "fruit": { "ja": "燃料オイルの実", "en": "Engine Oil Fruit", "zh": "燃料油果實" },
    "source": { "ja": "レトロフューチャーエアポート", "en": "Retro Future Airport", "zh": "復古未來機場" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1202-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/retro-future-airport.webp",
    "livlies": ["025-m-003"]
  },
  "1203-1-001": {
    "name": { "ja": "ワイルドフラワーの木", "en": "Wildflower Tree", "zh": "野生花朵之樹" },
    "fruit": { "ja": "ワイルドフラワーの実", "en": "Wildflower Fruit", "zh": "野生花朵果實" },
    "source": { "ja": "おひさまの匂いの島", "en": "Sun-kissed Island", "zh": "暖暖陽光氣味之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1203-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sun-kissed-island.webp",
    "livlies": ["040-m-001"]
  },
  "1206-1-001": {
    "name": { "ja": "サンルームの紫陽花の木", "en": "Sunroom Hydrangea Tree", "zh": "日光房的繡球花之樹" },
    "fruit": { "ja": "サンルームの紫陽花の実", "en": "Sunroom Hydrangea Fruit", "zh": "日光房的繡球花果實" },
    "source": { "ja": "雨の紫陽花サンルーム", "en": "Drizzling Hydrangea Sunroom", "zh": "雨天的繡球花日光房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1206-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/drizzling-hydrangea-sunroom.webp",
    "livlies": ["053-m-000"]
  },
  "1207-1-001": {
    "name": { "ja": "小さなウェディングガゼボの木", "en": "Little Wedding Gazebo Tree", "zh": "小小的婚禮涼亭之樹" },
    "fruit": { "ja": "ウェディングガゼボの花飾りの実", "en": "Wedding Gazebo Decor Fruit", "zh": "婚禮涼亭的花朵裝飾果實" },
    "source": { "ja": "Secret Toy Wedding", "en": "Secret Toy Wedding", "zh": "Secret Toy Wedding" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1207-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-toy-wedding.webp",
    "livlies": ["043-m-001"]
  },
  "1208-1-001": {
    "name": { "ja": "バブルプラントの木", "en": "Bubble Plant Tree", "zh": "泡泡植物之樹" },
    "fruit": { "ja": "バブルプラントの実", "en": "Bubble Plant Fruit", "zh": "泡泡植物果實" },
    "source": { "ja": "バブルプラントの島", "en": "Bubble Plants Island", "zh": "泡泡植物之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1208-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bubble-plants-island.webp",
    "livlies": ["041-m-001"]
  },
  "1209-1-001": {
    "name": { "ja": "アイスのお城の木", "en": "Ice Cream Castle Tree", "zh": "冰淇淋城堡之樹" },
    "fruit": { "ja": "お花のキャンディの実", "en": "Floral Candy Fruit", "zh": "花朵糖果果實" },
    "source": { "ja": "夢色アイスケーキの島", "en": "Dreamy Ice Cream Cake Island", "zh": "夢色冰淇淋蛋糕之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1209-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-ice-cream-cake-island.webp",
    "livlies": ["029-m-002"]
  },
  "1210-1-001": {
    "name": { "ja": "蓮の木", "en": "Lotus Blossom Tree", "zh": "蓮花之樹" },
    "fruit": { "ja": "蓮の実", "en": "Lotus Pod Fruit", "zh": "蓮花果實" },
    "source": { "ja": "卓上遊戯の応接間", "en": "Mahjong Parlor", "zh": "方城之戰的會客室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1210-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mahjong-parlor.webp",
    "livlies": ["042-m-001"]
  },
  "1211-1-001": {
    "name": { "ja": "堅牢な門扉の木", "en": "Sturdy Latticework Gate Tree", "zh": "牢固門扉之樹" },
    "fruit": { "ja": "不思議な花の実", "en": "Curious Flower Fruit", "zh": "不可思議的花朵果實" },
    "source": { "ja": "花と門扉の島", "en": "Floral Latticework Gate Island", "zh": "花與門扉之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1211-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/floral-latticework-gate-island.webp",
    "livlies": ["054-m-000"]
  },
  "1212-1-001": {
    "name": { "ja": "スイーツネイルポリッシュの木", "en": "Sweet Nail Polish Tree", "zh": "甜點指甲油之樹" },
    "fruit": { "ja": "星型ホログラムの実", "en": "Star-shaped Hologram Fruit", "zh": "星型全像投影果實" },
    "source": { "ja": "Sweet Nail Salon", "en": "Sweet Nail Salon", "zh": "Sweet Nail Salon" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1212-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-nail-salon.webp",
    "livlies": ["035-m-002"]
  },
  "1213-1-001": {
    "name": { "ja": "小さなブルーベリーの木", "en": "Small Blueberry Bush", "zh": "小小的藍莓樹" },
    "fruit": { "ja": "小さなブルーベリーの実", "en": "Small Blueberry Fruit", "zh": "小小的藍莓果實" },
    "source": { "ja": "ブルーベリーキッチンの島", "en": "Blueberry Kitchen Island", "zh": "藍莓廚房之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1213-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blueberry-kitchen-island.webp",
    "livlies": ["019-m-003"]
  },
  "1214-1-001": {
    "name": { "ja": "深き水底の神秘なウロコの木", "en": "Mysterious Depths Scale Tree", "zh": "幽深水底的神祕鱗片之樹" },
    "fruit": { "ja": "神秘的なウロコ葉の実", "en": "Mysterious Scale Leaf Fruit", "zh": "神秘鱗片葉子果實" },
    "source": { "ja": "深き水底の神秘", "en": "Mysteries of the Deep", "zh": "幽深水底的神秘傳說" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1214-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mysteries-of-the-deep.webp",
    "livlies": ["003-n-004"]
  },
  "1215-1-001": {
    "name": { "ja": "夏祭りの赤風鈴の木", "en": "Summer Fest Red Wind Chime Tree", "zh": "夏日祭典的紅風鈴之樹" },
    "fruit": { "ja": "赤風鈴の実", "en": "Red Wind Chime Fruit", "zh": "紅風鈴果實" },
    "source": { "ja": "夏の夕暮れと祭りの島", "en": "Summer Sunset Festival Island", "zh": "夏日黃昏與祭典之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1215-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-sunset-festival-island.webp",
    "livlies": ["055-m-000"]
  },
  "1216-1-001": {
    "name": { "ja": "郵便鞄を持ったテディベアの木", "en": "Letter Carrier Teddy Bear Tree", "zh": "背著郵差包的泰迪熊之樹" },
    "fruit": { "ja": "香り付きドライフラワーの実", "en": "Scented Dried Flower Fruit", "zh": "芳香乾燥花果實" },
    "source": { "ja": "ポストオフィステディベアの島", "en": "Postal Teddy Bear Island", "zh": "郵局泰迪熊之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1216-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/postal-teddy-bear-island.webp",
    "livlies": ["056-m-000"]
  },
  "1217-1-001": {
    "name": { "ja": "大輪のひまわりの木", "en": "Giant Sunflower Tree", "zh": "碩大向日葵之樹" },
    "fruit": { "ja": "ひまわりの花の実", "en": "Sunflower Blossom Fruit", "zh": "向日葵花朵果實" },
    "source": { "ja": "夕陽の空とひまわり畑", "en": "Sunset Sunflower Field", "zh": "夕陽天空與向日葵田" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1217-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sunset-sunflower-field.webp",
    "livlies": ["057-n-000"]
  },
  "1218-1-001": {
    "name": { "ja": "妖しい柳の木", "en": "Haunted Willow Tree", "zh": "古怪柳樹" },
    "fruit": { "ja": "妖しい柳の鬼火の実", "en": "Spectral Will-o’-wisp Fruit", "zh": "古怪柳樹的鬼火果實" },
    "source": { "ja": "妖かし柳の島", "en": "Haunted Willow Island", "zh": "妖異柳樹之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1218-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/haunted-willow-island.webp",
    "livlies": ["046-m-001"]
  },
  "1204-1-001": {
    "name": { "ja": "砂灯台の木", "en": "Sand Lighthouse Tree", "zh": "沙燈塔之樹" },
    "fruit": { "ja": "砂灯台の灯りの実", "en": "Sand Lighthouse Beacon Fruit", "zh": "沙燈塔的燭火果實" },
    "source": { "ja": "貝がらクラフトの島", "en": "Seashell Crafts Island", "zh": "貝殼工藝之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1204-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seashell-crafts-island.webp",
    "livlies": ["026-m-003"]
  },
  "1219-1-001": {
    "name": { "ja": "紙幣の山の木", "en": "Cash Heap Tree", "zh": "紙鈔堆之樹" },
    "fruit": { "ja": "幸運の金貨の実", "en": "Lucky Gold Coin Fruit", "zh": "幸運金幣果實" },
    "source": { "ja": "ゴージャスバンクの島", "en": "Dazzling Bank Vault Island", "zh": "金碧輝煌銀行之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1219-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dazzling-bank-vault-island.webp",
    "livlies": ["033-n-002"]
  },
  "1220-1-001": {
    "name": { "ja": "ティーポットハウスの木", "en": "Teapot House Tree", "zh": "茶壺小屋之樹" },
    "fruit": { "ja": "スズメウリの実", "en": "Zehneria Fruit", "zh": "馬㼎兒果實" },
    "source": { "ja": "森の中のティーポットハウス", "en": "Forest Teapot House", "zh": "森林中的茶壺小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1220-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-teapot-house.webp",
    "livlies": ["044-n-001"]
  },
  "1221-1-001": {
    "name": { "ja": "月宴のリンドウの木", "en": "Moon Festival Rindo Tree", "zh": "月下筵席的龍膽之樹" },
    "fruit": { "ja": "月宴のリンドウの実", "en": "Moon Festival Rindo Fruit", "zh": "月下筵席的龍膽果實" },
    "source": { "ja": "お月見の宴の島", "en": "Moon Viewing Festival Island", "zh": "賞月筵席之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1221-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/moon-viewing-festival-island.webp",
    "livlies": ["058-m-000"]
  },
  "1222-1-001": {
    "name": { "ja": "水の街のガラスランプの木", "en": "Hydropolis Glass Lamp Tree", "zh": "水上之城的玻璃吊燈之樹" },
    "fruit": { "ja": "水の街のガラスランプの実", "en": "Hydropolis Glass Lamp Fruit", "zh": "水上之城的玻璃吊燈果實" },
    "source": { "ja": "黄昏にきらめく水の街", "en": "Twilight Sparkling Hydropolis", "zh": "黃昏中閃耀的水上之城" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1222-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/twilight-sparkling-hydropolis.webp",
    "livlies": ["032-m-002"]
  },
  "1223-1-001": {
    "name": { "ja": "大きなオパールの木", "en": "Massive Opal Tree", "zh": "巨大蛋白石之樹" },
    "fruit": { "ja": "大きなオパールの木の実", "en": "Massive Opal Fruit", "zh": "巨大蛋白石之樹果實" },
    "source": { "ja": "オパールの神殿の島", "en": "Opal Shrine Island", "zh": "蛋白石神殿之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1223-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/opal-shrine-island.webp",
    "livlies": ["059-m-000"]
  },
  "1225-1-001": {
    "name": { "ja": "喫茶店の固めプリンの木", "en": "Coffee Shop Custard Pudding Tree", "zh": "咖啡館的紮實布丁之樹" },
    "fruit": { "ja": "シロップ漬けチェリーの実", "en": "Syrupy Cherry Fruit", "zh": "糖漬櫻桃果實" },
    "source": { "ja": "隠れ小路の珈琲喫茶", "en": "Back-alley Coffee Shop", "zh": "隱密巷弄的懷舊咖啡館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1225-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/back-alley-coffee-shop.webp",
    "livlies": ["047-m-001"]
  },
  "1226-1-001": {
    "name": { "ja": "アップルハウスの木", "en": "Apple House Tree", "zh": "蘋果屋之樹" },
    "fruit": { "ja": "アップルハウスの実", "en": "Apple House Fruit", "zh": "蘋果屋果實" },
    "source": { "ja": "不思議なアップルハウスの島", "en": "Wondrous Apple House Island", "zh": "不可思議的蘋果屋之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1226-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wondrous-apple-house-island.webp",
    "livlies": ["036-n-002"]
  },
  "1227-1-001": {
    "name": { "ja": "赤薔薇に囲まれた棺桶の木", "en": "Rose-choked Coffin Tree", "zh": "被紅玫瑰圍繞的棺木之樹" },
    "fruit": { "ja": "棺桶を囲む赤薔薇の実", "en": "Coffin-clinging Rose Fruit", "zh": "紅玫瑰果實" },
    "source": { "ja": "Vampire Night Halloween", "en": "Vampire Night Halloween", "zh": "Vampire Night Halloween" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1227-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/vampire-night-halloween.webp",
    "livlies": ["060-m-000"]
  },
  "1228-1-001": {
    "name": { "ja": "甘い香りの金木犀の木", "en": "Fragrant Osmanthus Tree", "zh": "散發香甜氣息的桂花樹" },
    "fruit": { "ja": "甘い香りの金木犀の実", "en": "Fragrant Osmanthus Tree Fruit", "zh": "散發香甜氣息的桂花果實" },
    "source": { "ja": "香る金木犀の森", "en": "Fragrant Osmanthus Forest", "zh": "飄香桂花森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1228-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fragrant-osmanthus-forest.webp",
    "livlies": ["038-m-002"]
  },
  "1229-1-001": {
    "name": { "ja": "フラワーハロウィンハットの木", "en": "Flower Halloween Hat Tree", "zh": "花朵萬聖節帽子之樹" },
    "fruit": { "ja": "ハッピーフラワーの実", "en": "Happy Flower Fruit", "zh": "快樂花朵果實" },
    "source": { "ja": "魔女と帽子の島", "en": "A Witch and Her Hat Island", "zh": "魔女與帽子之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1229-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-witch-and-her-hat-island.webp",
    "livlies": ["037-m-002"]
  },
  "1230-1-001": {
    "name": { "ja": "物語のブラックベリーの木", "en": "Storytime Blackberry Tree", "zh": "故事中的黑莓樹" },
    "fruit": { "ja": "物語のブラックベリーの実", "en": "Storytime Blackberry Fruit", "zh": "故事中的黑莓果實" },
    "source": { "ja": "赤ずきんの物語の島", "en": "Red Riding Hood Story Island", "zh": "小紅帽的故事之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1230-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/red-riding-hood-story-island.webp",
    "livlies": ["061-m-000"]
  },
  "1231-1-001": {
    "name": { "ja": "エレメンタルツリー", "en": "Elemental Tree", "zh": "元素之樹" },
    "fruit": { "ja": "運命のエレメントの実", "en": "Element of Fate Fruit", "zh": "命運元素果實" },
    "source": { "ja": "占者見習いの部屋", "en": "Apprentice Diviner's Room", "zh": "見習占卜師的房間" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1231-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/apprentice-diviners-room.webp",
    "livlies": ["048-m-001"]
  },
  "1232-1-001": {
    "name": { "ja": "トランプが浮かぶシルクハットの木", "en": "Floating Card Top Hat Tree", "zh": "撲克牌飄浮的大禮帽之樹" },
    "fruit": { "ja": "浮かぶトランプの実", "en": "Floating Card Fruit", "zh": "漂浮的撲克牌果實" },
    "source": { "ja": "Midnight Magic Show!", "en": "Midnight Magic Show!", "zh": "Midnight Magic Show!" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1232-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/midnight-magic-show.webp",
    "livlies": ["049-m-001"]
  },
  "1233-1-001": {
    "name": { "ja": "真っ赤なキノコの木", "en": "Ruby-red Mushroom Tree", "zh": "鮮紅香菇之樹" },
    "fruit": { "ja": "真っ赤なキノコの実", "en": "Ruby-red Mushroom Fruit", "zh": "鮮紅香菇果實" },
    "source": { "ja": "真っ赤なキノコの森", "en": "Ruby-red Mushroom Forest", "zh": "鮮紅香菇森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1233-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ruby-red-mushroom-forest.webp",
    "livlies": ["062-n-000", "062-c-000"]
  },
  "1234-1-001": {
    "name": { "ja": "黄金色に染まるイチョウの木", "en": "Golden Ginkgo Tree", "zh": "染上金黃色的銀杏樹" },
    "fruit": { "ja": "黄金色に染まるイチョウの葉の実", "en": "Golden Ginkgo Leaf Fruit", "zh": "染上金黃色的銀杏葉果實" },
    "source": { "ja": "イチョウの図書館の島", "en": "Ginkgo Library Island", "zh": "銀杏圖書館之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1234-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ginkgo-library-island.webp",
    "livlies": ["056-m-001"]
  },
  "1235-1-001": {
    "name": { "ja": "ダークチェリーケーキの木", "en": "Dark Cherry Cake Tree", "zh": "黑暗櫻桃蛋糕之樹" },
    "fruit": { "ja": "ダークチェリーの実", "en": "Dark Cherry", "zh": "黑暗櫻桃果實" },
    "source": { "ja": "ダークチェリーパティスリーの島", "en": "Dark Cherry Patisserie Island", "zh": "黑暗櫻桃糕點店之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1235-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dark-cherry-patisserie-island.webp",
    "livlies": ["004-m-004"]
  },
  "1236-1-001": {
    "name": { "ja": "透き通ったザラエノヒトヨタケの木", "en": "Transparent Inkcap Mushroom Tree", "zh": "透明白絨鬼傘之樹" },
    "fruit": { "ja": "ザラエノヒトヨタケの傘の実", "en": "Inkcap Mushroom Cap Fruit", "zh": "白絨鬼傘的菌蓋果實" },
    "source": { "ja": "透明偏愛家の研究室", "en": "Crystal Clear Connoisseur's Lab", "zh": "透明愛好者的研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1236-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-clear-connoisseurs-lab.webp",
    "livlies": ["063-m-000"]
  },
  "1237-1-001": {
    "name": { "ja": "ミニチュアミシンの木", "en": "Mini Sewing Machine Tree", "zh": "袖珍縫紉機之樹" },
    "fruit": { "ja": "糸巻の実", "en": "Thread Spool Fruit", "zh": "線軸果實" },
    "source": { "ja": "ソーイングルームの島", "en": "Sewing Room Island", "zh": "裁縫小屋之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1237-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sewing-room-island.webp",
    "livlies": ["028-m-003"]
  },
  "1238-1-001": {
    "name": { "ja": "スノードームツリー", "en": "Snow Globe Tree", "zh": "雪花球之樹" },
    "fruit": { "ja": "六花の実", "en": "Snow Crystal Fruit", "zh": "六角冰晶果實" },
    "source": { "ja": "暖炉上のホワイトタウン", "en": "White Townscape Over The Fireplace", "zh": "壁爐上的雪白小鎮" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1238-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/white-townscape-over-the-fireplace.webp",
    "livlies": ["064-m-000"]
  },
  "1240-1-001": {
    "name": { "ja": "朝露に濡れる氷凛花の木", "en": "Dew-dappled Frost Blossom Tree", "zh": "被朝露沾濕的冰凜花之樹" },
    "fruit": { "ja": "氷凛花の実", "en": "Frost Blossom Fruit", "zh": "冰凜花果實" },
    "source": { "ja": "朝霧に包まれた静寂の島", "en": "Mist-veiled Silent Island", "zh": "朝霧籠罩的寂靜之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1240-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mist-veiled-silent-island.webp",
    "livlies": ["055-m-001"]
  },
  "1241-1-001": {
    "name": { "ja": "白インククリスタルの木", "en": "White Ink Crystal Tree", "zh": "白墨水水晶樹" },
    "fruit": { "ja": "白インククリスタルの実", "en": "White Ink Crystal Fruit", "zh": "白墨水水晶果實" },
    "source": { "ja": "冬の本の島", "en": "Book of Winter Island", "zh": "冬季書本之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1241-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/book-of-winter-island.webp",
    "livlies": ["039-m-002"]
  },
  "1242-1-001": {
    "name": { "ja": "お魚と星のパイのガーランドの木", "en": "Fish & Star Pie Garland Tree", "zh": "派上的小魚與星星吊飾之樹" },
    "fruit": { "ja": "パステルカラーのお魚と星の実", "en": "Pastel-colored Fish & Star Fruit", "zh": "粉彩色小魚與星星果實" },
    "source": { "ja": "スターゲイジーパイの島", "en": "Stargazy Pie Island", "zh": "仰望星空派之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1242-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/stargazy-pie-island.webp",
    "livlies": ["043-m-002"]
  },
  "1243-1-001": {
    "name": { "ja": "光に彩られたクリスマスの木", "en": "Illuminated Christmas Tree", "zh": "燈光點綴的聖誕樹" },
    "fruit": { "ja": "光に彩られたリボンの実", "en": "Illuminated Ribbon Fruit", "zh": "燈光點綴的蝴蝶結果實" },
    "source": { "ja": "イルミネーションクリスマス", "en": "Illumination Christmas", "zh": "絢爛燈飾聖誕節" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1243-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/illumination-christmas.webp",
    "livlies": ["065-m-000"]
  },
  "1244-1-001": {
    "name": { "ja": "銭湯の親子アヒルの木", "en": "Bathhouse Rubber Duckies Tree", "zh": "澡堂的小鴨親子之樹" },
    "fruit": { "ja": "子アヒルの実", "en": "Rubber Duckling Fruit", "zh": "小鴨鴨果實" },
    "source": { "ja": "くつろぎリヴリー銭湯の島", "en": "Relaxing Livly Bathhouse Island", "zh": "暖心舒暢Livly澡堂之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1244-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/relaxing-livly-bathhouse-island.webp",
    "livlies": ["042-m-002"]
  },
  "1245-1-001": {
    "name": { "ja": "天上に咲く牡丹の木", "en": "Heaven-blooming Peony Tree", "zh": "綻放於天穹的牡丹之樹" },
    "fruit": { "ja": "天上に咲く牡丹の花の実", "en": "Heaven-blooming Peony Fruit", "zh": "綻放於天穹的牡丹花果實" },
    "source": { "ja": "天上の牡丹の島 新春彩り和装2025", "en": "Heavenly Peony Island", "zh": "天穹的牡丹之島 新春色彩和裝2025" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1245-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/heavenly-peony-island.webp",
    "livlies": ["066-n-000"]
  },
  "1246-1-001": {
    "name": { "ja": "キャンドルライトの木", "en": "Candle Light Tree", "zh": "燭燈之樹" },
    "fruit": { "ja": "キャンドルライトの実", "en": "Candle Flame Fruit", "zh": "燭燈果實" },
    "source": { "ja": "Cozy Sketchbook Island", "en": "Cozy Sketchbook Island", "zh": "Cozy Sketchbook Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1246-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cozy-sketchbook-island.webp",
    "livlies": ["040-m-002"]
  },
  "1247-1-001": {
    "name": { "ja": "美術館のシャンデリアの木", "en": "Art Museum's Chandelier Tree", "zh": "美術館的水晶吊燈之樹" },
    "fruit": { "ja": "ガラスの蝋燭の実", "en": "Glass Candle Fruit", "zh": "玻璃蠟燭果實" },
    "source": { "ja": "誰もいない美術館", "en": "Desolate Art Museum", "zh": "空無一人的美術館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1247-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/desolate-art-museum.webp",
    "livlies": ["067-m-000"]
  },
  "1248-1-001": {
    "name": { "ja": "トゲツボカズラの木", "en": "Thorned Nepenthes Tree", "zh": "棘刺豬籠草之樹" },
    "fruit": { "ja": "トゲツボカズラの実", "en": "Thorned Nepenthes Fruit", "zh": "棘刺豬籠草果實" },
    "source": { "ja": "museum―食虫植物館", "en": "Insectivorous Plant Museum", "zh": "museum_食蟲植物館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1248-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/insectivorous-plant-museum.webp",
    "livlies": ["053-m-001"]
  },
  "1249-1-001": {
    "name": { "ja": "魔法の鏡と毒林檎の木", "en": "Mirror & Poisoned Apple Tree", "zh": "魔鏡與毒蘋果之樹" },
    "fruit": { "ja": "甘い毒林檎の実", "en": "Sweet Poisoned Apple Fruit", "zh": "甜美毒蘋果" },
    "source": { "ja": "毒林檎と鏡の物語", "en": "A Tale of Poisoned Apples and Mirrors", "zh": "毒蘋果與魔鏡的故事" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1249-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-tale-of-poisoned-apples-and-mirrors.webp",
    "livlies": ["054-m-001"]
  },
  "1250-1-001": {
    "name": { "ja": "祝福の吊り飾りの木", "en": "Blessing Pendent Ornament Tree", "zh": "祝福的掛飾之樹" },
    "fruit": { "ja": "祝福の赤い花の実", "en": "Blessing Scarlet Blossom Fruit", "zh": "祝福的紅色花朵果實" },
    "source": { "ja": "天に華咲く祝福の島", "en": "Island of Blossoming Blessings", "zh": "花映天際祝福之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1250-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-blossoming-blessings.webp",
    "livlies": ["034-n-003"]
  },
  "1251-1-001": {
    "name": { "ja": "ベルベットローズの木", "en": "Velvet Rose Tree", "zh": "天鵝絨玫瑰之樹" },
    "fruit": { "ja": "ベルベットローズのつぼみの実", "en": "Velvet Rose Bud Fruit", "zh": "天鵝絨玫瑰花蕾果實" },
    "source": { "ja": "Velvet Rose Valentine", "en": "Velvet Rose Valentine", "zh": "Velvet Rose Valentine" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1251-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/velvet-rose-valentine.webp",
    "livlies": ["068-n-000"]
  },
  "1252-1-001": {
    "name": { "ja": "骨董店の金柑の木", "en": "Antique Shop Kumquat Tree", "zh": "骨董行的金柑樹" },
    "fruit": { "ja": "骨董店の金柑の実", "en": "Antique Shop Kumquat Fruit", "zh": "骨董行的金柑樹果實" },
    "source": { "ja": "雪舞う骨董店と金柑の島", "en": "Snowy Antique Shop & Kumquat Island", "zh": "飄雪骨董行與金柑之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1252-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/snowy-antique-shop-and-kumquat-island.webp",
    "livlies": ["059-m-001"]
  },
  "1253-1-001": {
    "name": { "ja": "白いミニチュアテーブルセットの木", "en": "White Miniature Table Set Tree", "zh": "白色袖珍桌椅套組之樹" },
    "fruit": { "ja": "ピンクの造花のバラの実", "en": "Pink Artificial Rose Fruit", "zh": "粉紅仿真玫瑰花果實" },
    "source": { "ja": "ときめくバレンタインデートの島", "en": "Lovely Valentine's Date Island", "zh": "怦然心動情人節約會之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1253-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lovely-valentines-date-island.webp",
    "livlies": ["069-m-000"]
  },
  "1254-1-001": {
    "name": { "ja": "ブックヌックの木", "en": "Book Nook Tree", "zh": "書角模型之樹" },
    "fruit": { "ja": "ランタンベリーの実", "en": "Lantern Berry Fruit", "zh": "燈籠樹莓果實" },
    "source": { "ja": "本棚の隠れ家の島", "en": "Bookworm's Hideout Island", "zh": "書架中的小小世界之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1254-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bookworms-hideout-island.webp",
    "livlies": ["057-n-001"]
  },
  "1255-1-001": {
    "name": { "ja": "グローワームの罠の木", "en": "Glow-worm Trap Tree", "zh": "螢光蟲陷阱之樹" },
    "fruit": { "ja": "しずく型の粘液の実", "en": "Glow-worm Mucus Fruit", "zh": "水滴型黏液果實" },
    "source": { "ja": "胞子舞う幻想洞窟", "en": "Fantastical Cave of Dancing Spores", "zh": "孢子飄舞的幻想洞窟" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1255-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fantastical-cave-of-dancing-spores.webp",
    "livlies": ["045-m-002"]
  },
  "1256-1-001": {
    "name": { "ja": "カスミソウの木", "en": "Baby's Breath Tree", "zh": "滿天星之樹" },
    "fruit": { "ja": "カスミソウの花の実", "en": "Baby's Breath Flower Fruit", "zh": "滿天星花朵果實" },
    "source": { "ja": "My Precious White day", "en": "My Precious White Day", "zh": "My Precious White day" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1256-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/my-precious-white-day.webp",
    "livlies": ["070-a-000"]
  },
  "1257-1-001": {
    "name": { "ja": "きらめく金桜の木", "en": "Glistening Gold Sakura Tree", "zh": "閃耀的金色櫻花樹" },
    "fruit": { "ja": "きらめく金桜の実", "en": "Glistening Gold Sakura Fruit", "zh": "閃耀的金色櫻花果實" },
    "source": { "ja": "月夜にきらめく金桜の島", "en": "Moonlit Night Gold Sakura Island", "zh": "月夜中閃耀的金色櫻花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1257-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/moonlit-night-gold-sakura-island.webp",
    "livlies": ["060-m-001"]
  },
  "1258-1-001": {
    "name": { "ja": "紙飛行機の木", "en": "Paper Plane Tree", "zh": "紙飛機之樹" },
    "fruit": { "ja": "紙飛行機に貼ったシールの実", "en": "Paper Plane Sticker Fruit", "zh": "貼在紙飛機上的貼紙果實" },
    "source": { "ja": "あの日の教室", "en": "The Classroom on a Certain Day", "zh": "那一日的教室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1258-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-classroom-on-a-certain-day.webp",
    "livlies": ["030-n-003"]
  },
  "1259-1-001": {
    "name": { "ja": "壊された魔女の棲家の木", "en": "The Witch's House in Ruins Tree", "zh": "被毀壞的魔女木屋之樹" },
    "fruit": { "ja": "壊された魔女の棲家の実", "en": "The Witch's House in Ruins Fruit", "zh": "被毀壞的魔女木屋果實" },
    "source": { "ja": "壊された魔女の棲家", "en": "The Witch's House in Ruins", "zh": "被毀壞的魔女木屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1259-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-witchs-house-in-ruins.webp",
    "livlies": ["029-m-003"]
  },
  "1260-1-001": {
    "name": { "ja": "回る観覧車の木", "en": "Spinning Ferris Wheel Tree", "zh": "旋轉的摩天輪之樹" },
    "fruit": { "ja": "観覧車の飾りの実", "en": "Ferris Wheel Decor Fruit", "zh": "摩天輪裝飾果實" },
    "source": { "ja": "春めく遊園地の島", "en": "Springtime Amusement Park Island", "zh": "春意盎然遊樂園之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1260-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/springtime-amusement-park-island.webp",
    "livlies": ["062-n-001"]
  },
  "1272-1-001": {
    "name": { "ja": "思い出のフレームの木", "en": "Frame of Memories Tree", "zh": "回憶相框之樹" },
    "fruit": { "ja": "お祝いのバラの実", "en": "Celebratory Rose Fruit", "zh": "慶祝玫瑰果實" },
    "source": { "ja": "Cherished Wedding Garden", "en": "Cherished Wedding Garden", "zh": "Cherished Wedding Garden" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1272-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cherished-wedding-garden.webp",
    "livlies": ["077-n-000"]
  },
  "1261-1-001": {
    "name": { "ja": "光溢れる不思議な扉の木", "en": "Luminous Mysterious Door Tree", "zh": "光芒四溢的不可思議門扉之樹" },
    "fruit": { "ja": "太陽形の窓の実", "en": "Sun-shaped Window Fruit", "zh": "太陽型窗戶果實" },
    "source": { "ja": "とある扉の島", "en": "Island of a Certain Door", "zh": "通向某處的門扉之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1261-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-a-certain-door.webp",
    "livlies": ["071-n-000"]
  },
  "1263-1-001": {
    "name": { "ja": "苺の盆栽の木", "en": "Strawberry Bonsai Tree", "zh": "草莓盆栽之樹" },
    "fruit": { "ja": "いちばん美味しそうな赤い苺の実", "en": "Tastiest Red Strawberry Fruit", "zh": "看起來最美味的紅色草莓果實" },
    "source": { "ja": "苺盆栽を愛でる島", "en": "Lovable Strawberry Bonsai Island", "zh": "草莓盆栽的玩賞之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1263-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lovable-strawberry-bonsai-island.webp",
    "livlies": ["027-m-003"]
  },
  "1264-1-001": {
    "name": { "ja": "飛行船ペリステラー号の木", "en": "Peristera Airship Tree", "zh": "飛行船原鴿號之樹" },
    "fruit": { "ja": "高山野ぶどうの実", "en": "Mountain Wild Grape Fruit", "zh": "高山野葡萄果實" },
    "source": { "ja": "発見されたペリステラー号", "en": "The Discovered Peristera Airship", "zh": "被尋獲的原鴿號" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1264-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-discovered-peristera-airship.webp",
    "livlies": ["033-n-003"]
  },
  "1265-1-001": {
    "name": { "ja": "黄金植物の木", "en": "Golden Flower Tree", "zh": "黃金植物之樹" },
    "fruit": { "ja": "黄金植物の実", "en": "Golden Flower Fruit", "zh": "黃金植物果實" },
    "source": { "ja": "錬金術師と黄金植物の研究室", "en": "Alchemist and the Golden Plant Laboratory", "zh": "鍊金術師與黃金植物研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1265-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/alchemist-and-the-golden-plant-laboratory.webp",
    "livlies": ["072-m-000"]
  },
  "1266-1-001": {
    "name": { "ja": "空から降るひとすじの砂の木", "en": "Sky Sandfall Tree", "zh": "從天而降的一縷沙塵之樹" },
    "fruit": { "ja": "星形の砂の実", "en": "Star-shaped Sand Fruit", "zh": "星型沙塵果實" },
    "source": { "ja": "Faraway Desert Island", "en": "Faraway Desert Island", "zh": "Faraway Desert Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1266-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/faraway-desert-island.webp",
    "livlies": ["076-n-000"]
  },
  "1267-1-001": {
    "name": { "ja": "ネモフィラの木", "en": "Nemophila Tree", "zh": "粉蝶花之樹" },
    "fruit": { "ja": "ネモフィラの花の実", "en": "Nemophila Flower Fruit", "zh": "粉蝶花的花朵果實" },
    "source": { "ja": "青空とネモフィラの島", "en": "Blue Sky and Nemophila Island", "zh": "藍天與粉蝶花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1267-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blue-sky-and-nemophila-island.webp",
    "livlies": ["044-n-002"]
  },
  "1268-1-001": {
    "name": { "ja": "ゲーミングパッドの木", "en": "Gamepad Tree", "zh": "遊戲手把之樹" },
    "fruit": { "ja": "サイコロの実", "en": "Dice Fruit", "zh": "骰子果實" },
    "source": { "ja": "ゲーミングジャングル", "en": "Game Jungle", "zh": "遊戲叢林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1268-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/game-jungle.webp",
    "livlies": ["061-m-001"]
  },
  "1270-1-001": {
    "name": { "ja": "水草アクアリウムの木", "en": "Aquatic Plant Aquarium Tree", "zh": "水草水族箱之樹" },
    "fruit": { "ja": "水草アクアリウムの実", "en": "Aquatic Plant Aquarium Fruit", "zh": "水草水族箱的果實" },
    "source": { "ja": "水草アクアリウムのジオラマ", "en": "Aquatic Plant Aquarium Diorama", "zh": "水草水族箱的情景模型" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1270-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/aquatic-plant-aquarium-diorama.webp",
    "livlies": ["041-m-002"]
  },
  "1271-1-001": {
    "name": { "ja": "ビッグドーナツのオブジェの木", "en": "Big Donut Tree", "zh": "大甜甜圈擺飾之樹" },
    "fruit": { "ja": "大人気のいちごドーナツの実", "en": "Popular Strawberry Donut Fruit", "zh": "深受歡迎的草莓甜甜圈果實" },
    "source": { "ja": "ミニチュアドーナツショップ", "en": "Miniature Donut Shop", "zh": "袖珍甜甜圈店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1271-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-donut-shop.webp",
    "livlies": ["037-m-003"]
  },
  "1273-1-001": {
    "name": { "ja": "アトリエにある牛骨の木", "en": "Atelier's Cow Skull Tree", "zh": "工坊裡的牛骨之樹" },
    "fruit": { "ja": "モチーフ管理タグの実", "en": "Inspiration Tag Fruit", "zh": "靜物模型管理標籤果實" },
    "source": { "ja": "曇り空のアトリエ", "en": "The Cloudy Atelier", "zh": "陰天的工坊" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1273-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-cloudy-atelier.webp",
    "livlies": ["010-m-004"]
  },
  "1274-1-001": {
    "name": { "ja": "梅雨の音楽会の楽譜の木", "en": "Rainy Season Concert Score Tree", "zh": "梅雨音樂會的樂譜之樹" },
    "fruit": { "ja": "雨と奏でる楽譜の音符の実", "en": "Music Notes Played in Rain Fruit", "zh": "與雨水合奏的樂譜音符果實" },
    "source": { "ja": "雨降る音楽会の島", "en": "Rainy Concert Island", "zh": "雨時音樂會之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1274-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/rainy-concert-island.webp",
    "livlies": ["024-m-003"]
  },
  "1275-1-001": {
    "name": { "ja": "特製ソーダの木", "en": "Special Soda Tree", "zh": "特製汽水之樹" },
    "fruit": { "ja": "赤いお花とリボン飾りの実", "en": "Red Flower & Ribbon Decor Fruit", "zh": "紅色花朵與蝴蝶結裝飾果實" },
    "source": { "ja": "戌亥とこの特製ソーダ喫茶", "en": "Inui Toko's Special Soda Cafe", "zh": "Toko的特製汽水咖啡館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1275-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/inui-tokos-special-soda-cafe.webp",
    "livlies": ["078-c-000"]
  },
  "1277-1-001": {
    "name": { "ja": "バラのランプの木", "en": "Rose Lamp Tree", "zh": "玫瑰燈之樹" },
    "fruit": { "ja": "バラのランプの実", "en": "Rose Lamp Fruit", "zh": "玫瑰燈果實" },
    "source": { "ja": "壱百満天原サロメのエレガントラボ", "en": "Hyakumantenbara Salome's Elegant Lab", "zh": "Salome的優雅研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1277-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/hyakumantenbara-salomes-elegant-lab.webp",
    "livlies": ["080-c-000"]
  },
  "1276-1-001": {
    "name": { "ja": "お花で飾られた鳥かごの木", "en": "Flower Adorned Bird Cage Tree", "zh": "飾有花朵的鳥籠之樹" },
    "fruit": { "ja": "鳥かごの勿忘草の実", "en": "Forget-me-not Bird Cage Fruit", "zh": "鳥籠的勿忘草果實" },
    "source": { "ja": "町田ちまと花のサンルーム", "en": "Machita Chima's Flower Sunroom", "zh": "Chima的花朵日光房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1276-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/machita-chimas-flower-sunroom.webp",
    "livlies": ["079-c-000"]
  },
  "1278-1-001": {
    "name": { "ja": "ふわふわパンケーキの木", "en": "Fluffy Pancake Tree", "zh": "蓬鬆柔軟的鬆餅之樹" },
    "fruit": { "ja": "パンケーキのバターの実", "en": "Pancake Butter Fruit", "zh": "蓬鬆的奶油果實" },
    "source": { "ja": "パンケーキブレックファーストの島", "en": "Pancake Breakfast Island", "zh": "鬆餅早餐之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1278-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pancake-breakfast-island.webp",
    "livlies": ["058-m-001"]
  },
  "1280-1-001": {
    "name": { "ja": "フワフワな花の雲の木", "en": "Floaty Flower Cloud Tree", "zh": "軟綿綿花朵雲之樹" },
    "fruit": { "ja": "フワフワな花の実", "en": "Floaty Flower Fruit", "zh": "軟綿綿花朵果實" },
    "source": { "ja": "フワフワな花の雲の島", "en": "Mystical Floaty Flower Island", "zh": "軟綿綿花朵雲之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1280-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mystical-floaty-flower-island.webp",
    "livlies": ["073-n-000"]
  },
  "1281-1-001": {
    "name": { "ja": "勇者の剣のおもちゃの木", "en": "Hero's Sword Toy Tree", "zh": "勇者的寶劍玩具之樹" },
    "fruit": { "ja": "加護の宝石の実", "en": "Gem of Protection Fruit", "zh": "加護寶石果實" },
    "source": { "ja": "リヴリーアドベンチャーの島", "en": "Livly Adventure Island", "zh": "Livly 奇幻探險之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1281-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-adventure-island.webp",
    "livlies": ["074-n-000"]
  },
  "1282-1-001": {
    "name": { "ja": "聖なる炎を抱く神秘の玉樹", "en": "Mystical Sacred Flame Tree", "zh": "懷抱神聖火焰的神祕玉樹" },
    "fruit": { "ja": "燃え盛るような羽状の葉の実", "en": "Fiery Featherlike Leaf Fruit", "zh": "熊熊燃燒般的羽狀葉片果實" },
    "source": { "ja": "聖なる炎と不死の錬金術", "en": "The Sacred Flame and Immortal Alchemy", "zh": "神聖火焰與不死鍊金術" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1282-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-sacred-flame-and-immortal-alchemy.webp",
    "livlies": ["046-m-002"]
  },
  "1283-1-001": {
    "name": { "ja": "再生したアボカドツリー", "en": "Replanted Avocado Tree", "zh": "重新種植的酪梨樹" },
    "fruit": { "ja": "アボカドの種の実", "en": "Avocado Seed Fruit", "zh": "酪梨種子果實" },
    "source": { "ja": "窓辺のミニ菜園の島", "en": "Mini Vege Patch Island", "zh": "窗邊的迷你菜園之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1283-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/mini-vege-patch-island.webp",
    "livlies": ["064-m-001"]
  },
  "1284-1-001": {
    "name": { "ja": "不思議な小粒林檎のフラスコの木", "en": "Flasked Little Red Apple Tree", "zh": "不可思議的小顆蘋果燒瓶之樹" },
    "fruit": { "ja": "不思議な小粒林檎の実", "en": "Odd Little Red Apple Fruit", "zh": "不可思議的小顆蘋果" },
    "source": { "ja": "森にのまれた研究所", "en": "Lab Deep in the Forest", "zh": "被森林吞沒的研究所" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1284-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lab-deep-in-the-forest.webp",
    "livlies": ["075-a-000"]
  },
  "1285-1-001": {
    "name": { "ja": "人魚が愛した珊瑚のハープの木", "en": "Mermaid's Beloved Harp Tree", "zh": "人魚心愛的珊瑚豎琴之樹" },
    "fruit": { "ja": "カラフルヒトデの実", "en": "Lilac Sea Star Fruit", "zh": "繽紛海星果實" },
    "source": { "ja": "海辺のシェルマリンルーム", "en": "Seaside Shell Room", "zh": "海邊的貝殼汪洋小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1285-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/seaside-shell-room.webp",
    "livlies": ["035-m-003"]
  },
  "1286-1-001": {
    "name": { "ja": "スターライトトレインの窓の木", "en": "Starlight Train's Window Tree", "zh": "星光列車的窗戶之樹" },
    "fruit": { "ja": "星形オーナメントの実", "en": "Star Ornament Fruit", "zh": "星型裝飾果實" },
    "source": { "ja": "スターライトトレインの島", "en": "Starlight Train Island", "zh": "星光列車之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1286-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/starlight-train-island.webp",
    "livlies": ["081-n-000"]
  },
  "1287-1-001": {
    "name": { "ja": "かごいっぱいのレモンの木", "en": "Basket of Lemons Tree", "zh": "滿滿一籃的檸檬之樹" },
    "fruit": { "ja": "陽の光を浴びたレモンの実", "en": "Sun-ripened Lemon Fruit", "zh": "沐浴在陽光下的檸檬果實" },
    "source": { "ja": "Summer Lemon Party", "en": "Summer Lemon Party", "zh": "Summer Lemon Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1287-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-lemon-party.webp",
    "livlies": ["056-m-002"]
  },
  "1288-1-001": {
    "name": { "ja": "白昼夢の中の金魚鉢の木", "en": "Daydream Goldfish Bowl Tree", "zh": "白日夢裡的金魚缸之樹" },
    "fruit": { "ja": "金魚型琥珀糖の実", "en": "Goldfish Sugar Candy Fruit", "zh": "金魚型琥珀糖果實" },
    "source": { "ja": "金魚と白昼夢の庭", "en": "Garden of Goldfish and Daydreams", "zh": "金魚與白日夢之庭" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1288-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/garden-of-goldfish-and-daydreams.webp",
    "livlies": ["066-n-001"]
  },
  "1289-1-001": {
    "name": { "ja": "ミニチュア火山の木", "en": "Miniature Volcano Tree", "zh": "袖珍火山之樹" },
    "fruit": { "ja": "溢れるマグマの実", "en": "Overflowing Magma Fruit", "zh": "滿溢的岩漿果實" },
    "source": { "ja": "ミニチュア火山と恐竜の島", "en": "Miniature Volcano and Dinosaur Island", "zh": "袖珍火山與恐龍之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1289-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/miniature-volcano-and-dinosaur-island.webp",
    "livlies": ["055-m-002"]
  },
  "1291-1-001": {
    "name": { "ja": "特製ウォータードリッパーの木", "en": "Dutch Slow-Drip Coffee Tree", "zh": "特製滴漏式冷萃咖啡壺之樹" },
    "fruit": { "ja": "コールドブリュー・コーヒーの実", "en": "Cold Brew Coffee Fruit", "zh": "冷萃咖啡果實" },
    "source": { "ja": "コールドブリュー・コーヒーの島", "en": "Cold Brew Coffee Island", "zh": "冷萃咖啡之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1291-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cold-brew-coffee-island.webp",
    "livlies": ["063-m-001"]
  },
  "1292-1-001": {
    "name": { "ja": "鬼灯の木", "en": "Chinese Lantern Tree", "zh": "鬼燈之樹" },
    "fruit": { "ja": "透かし鬼灯の実", "en": "Shining Chinese Lantern Fruit", "zh": "鏤空鬼燈果實" },
    "source": { "ja": "赤き月と鬼灯の島", "en": "Blood Moon and Chinese Lantern Island", "zh": "紅月與鬼燈之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1292-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/blood-moon-and-chinese-lantern-island.webp",
    "livlies": ["082-m-000"]
  },
  "1293-1-001": {
    "name": { "ja": "ガジュマルの木", "en": "Chinese Banyan Tree", "zh": "榕樹" },
    "fruit": { "ja": "ムーンストーンの実", "en": "Moonstone Fruit", "zh": "月光石果實" },
    "source": { "ja": "月光浴バルコニー", "en": "Balcony Bathed in Moonlight", "zh": "月光浴陽台" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1293-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/balcony-bathed-in-moonlight.webp",
    "livlies": ["036-n-003"]
  },
  "1294-1-001": {
    "name": { "ja": "ヘクセンハウスの木", "en": "Gingerbread House Tree", "zh": "糖果屋之樹" },
    "fruit": { "ja": "魔女が作ったクッキーの実", "en": "Witch's Baked Cookies Fruit", "zh": "巫婆製作的餅乾果實" },
    "source": { "ja": "迷いの森とお菓子の物語", "en": "The Tale of the Lost Forest and Sweets", "zh": "迷途森林與糖果的故事" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1294-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-tale-of-the-lost-forest-and-sweets.webp",
    "livlies": ["068-n-001"]
  },
  "1295-1-001": {
    "name": { "ja": "レトロなブルーラジオの木", "en": "Blue Retro Radio Tree", "zh": "復古藍色收音機之樹" },
    "fruit": { "ja": "アンテナトッパーの実", "en": "Antenna Cap Fruit", "zh": "天線球果實" },
    "source": { "ja": "午後8時のラジオルーム", "en": "After Eight Radio Room", "zh": "晚上8點的收音機小屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1295-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/after-eight-radio-room.webp",
    "livlies": ["005-n-004"]
  },
  "1296-1-001": {
    "name": { "ja": "ラベンダーの木", "en": "Lavender Tree", "zh": "薰衣草之樹" },
    "fruit": { "ja": "ラベンダーの花の実", "en": "Lavender Flower Fruit", "zh": "薰衣草花朵果實" },
    "source": { "ja": "ラベンダー香る島", "en": "Scents of Lavender Island", "zh": "薰衣草飄香之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1296-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/scents-of-lavender-island.webp",
    "livlies": ["048-m-002"]
  },
  "1297-1-001": {
    "name": { "ja": "宇宙服の木", "en": "Astronaut Tree", "zh": "太空衣之樹" },
    "fruit": { "ja": "電波の実", "en": "Electromagnetic Wave Fruit", "zh": "電波果實" },
    "source": { "ja": "museum―宇宙館", "en": "Space Museum", "zh": "museum_宇宙館" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1297-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/space-museum.webp",
    "livlies": ["047-m-002"]
  },
  "1298-1-001": {
    "name": { "ja": "ウィスプランタンの木", "en": "Will-o'-Wisp Lantern Tree", "zh": "幽魂燈籠之樹" },
    "fruit": { "ja": "ウィスプランタンの実", "en": "Will-o'-Wisp Lantern Fruit", "zh": "幽魂燈籠果實" },
    "source": { "ja": "魔女集う秘密の森", "en": "Secret Forest Where Witches Gather", "zh": "魔女集會的祕密森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1298-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/secret-forest-where-witches-gather.webp",
    "livlies": ["083-m-000"]
  },
  "1300-1-001": {
    "name": { "ja": "神殿の水晶の木", "en": "Sanctuary's Crystal Tree", "zh": "神殿的水晶之樹" },
    "fruit": { "ja": "結晶化した花の実", "en": "Crystallized Flower Fruit", "zh": "化為結晶的花朵果實" },
    "source": { "ja": "水晶の眠る神殿の島", "en": "Sanctuary of Sleeping Crystals Island", "zh": "水晶沉眠的神殿之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1300-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sanctuary-of-sleeping-crystals-island.webp",
    "livlies": ["071-n-001"]
  },
  "1301-1-001": {
    "name": { "ja": "ジャック・オ・ランタンの木", "en": "Jack-o'-Lantern Tree", "zh": "傑克南瓜燈之樹" },
    "fruit": { "ja": "ぐるぐるキャンディの実", "en": "Twisted Candy Fruit", "zh": "漩渦花紋糖果果實" },
    "source": { "ja": "BOO! Halloween Factory", "en": "BOO! Halloween Factory", "zh": "BOO! HalloweenFactory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1301-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/boo-halloween-factory.webp",
    "livlies": ["084-m-000"]
  },
  "1302-1-001": {
    "name": { "ja": "モフモフジャケットの木", "en": "Favorite Fluffy Jacket", "zh": "毛茸茸夾克之樹" },
    "fruit": { "ja": "ボタンの目の実", "en": "Button Eye Fruit", "zh": "鈕扣眼睛果實" },
    "source": { "ja": "モンスターメイクルーム", "en": "Monster Makeup Room", "zh": "怪物化妝間" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1302-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/monster-makeup-room.webp",
    "livlies": ["067-m-001"]
  },
  "1303-1-001": {
    "name": { "ja": "赤い蝋燭の付いた燭台の木", "en": "Scarlet Candle Candelabra Tree", "zh": "附有紅蠟燭的燭台之樹" },
    "fruit": { "ja": "赤い蝋燭に灯る火の実", "en": "Ghostly Flame Fruit", "zh": "在紅蠟燭上燃起的火焰果實" },
    "source": { "ja": "悪食伯爵の饗宴の島", "en": "Bloodthirsty Count's Banquet Island", "zh": "惡食伯爵的饗宴之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1303-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bloodthirsty-counts-banquet-island.webp",
    "livlies": ["084-m-001"]
  },
  "1304-1-001": {
    "name": { "ja": "かぎ編み秋色の木", "en": "Crocheted Autumn Tree", "zh": "鉤織秋色之樹" },
    "fruit": { "ja": "かぎ編みどんぐりの実", "en": "Crocheted Acorn Fruit", "zh": "鉤織橡實果實" },
    "source": { "ja": "秋をつむぐ編み物の島", "en": "Crocheted with Fall's Thread Island", "zh": "秋意繚繞的編織之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1304-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crocheted-with-falls-thread-island.webp",
    "livlies": ["085-m-000"]
  },
  "1305-1-001": {
    "name": { "ja": "汀の彼岸花の木", "en": "Water's Edge Spider Lily Tree", "zh": "汀岸的彼岸花之樹" },
    "fruit": { "ja": "汀の彼岸花の実", "en": "Water's Edge Spider Lily Fruit", "zh": "汀岸的彼岸花果實" },
    "source": { "ja": "汀の彼岸花の島", "en": "Spider Lilies Along Water's Edge Island", "zh": "汀岸的彼岸花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1305-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spider-lilies-along-waters-edge-island.webp",
    "livlies": ["076-n-001"]
  },
  "1306-1-001": {
    "name": { "ja": "ふわふわの雲ベッドの木", "en": "Fluffy Cloud Bed Tree", "zh": "軟綿綿的雲朵床鋪之樹" },
    "fruit": { "ja": "月と星のきらめきクッションの実", "en": "Moon & Stars Cushion Fruit", "zh": "月亮與星星光彩的靠墊果實" },
    "source": { "ja": "ふんわりベッドとおやすみの島", "en": "Soft Bed on Night-Night Island", "zh": "輕柔床鋪與歇息之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1306-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/soft-bed-on-night-night-island.webp",
    "livlies": ["070-a-001"]
  },
  "1307-1-001": {
    "name": { "ja": "宇宙タコヤキ星の木", "en": "Planet Takoyaki Tree", "zh": "宇宙章魚燒星體之樹" },
    "fruit": { "ja": "宇宙タコヤキ星の実", "en": "Planet Takoyaki Fruit", "zh": "宇宙章魚燒星體果實" },
    "source": { "ja": "TAKOYAKI UNIVERSE", "en": "TAKOYAKI UNIVERSE", "zh": "TAKOYAKI UNIVERSE" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1307-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/takoyaki-universe.webp",
    "livlies": ["069-m-001"]
  },
  "1308-1-001": {
    "name": { "ja": "機関車レッドアルケミストの木", "en": "Steam Train Red Alchemist Tree", "zh": "緋紅鍊金術師號的火車頭之樹" },
    "fruit": { "ja": "機関車のヘッドライトの実", "en": "Steam Train Headlight Fruit", "zh": "火車頭的前照燈果實" },
    "source": { "ja": "汽笛響く紅き列車", "en": "Crimson Steam Train's Echoing Whistle", "zh": "汽笛鳴響的紅色列車" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1308-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crimson-steam-trains-echoing-whistle.webp",
    "livlies": ["049-m-002"]
  },
  "1309-1-001": {
    "name": { "ja": "フロストツリー", "en": "Frost Tree", "zh": "冰霜樹" },
    "fruit": { "ja": "フロストツリーの実", "en": "Frost Tree Fruit", "zh": "冰霜樹果實" },
    "source": { "ja": "精霊の宿るフロストウッド", "en": "Frosty Woods Where the Spirits Dwell", "zh": "精靈寄宿的冰霜之森" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1309-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/frosty-woods-where-the-spirits-dwell.webp",
    "livlies": ["086-m-000"]
  },
  "1310-1-001": {
    "name": { "ja": "マクラメ編みタペストリーの木", "en": "Macrame Tapestry Tree", "zh": "結繩編織掛毯之樹" },
    "fruit": { "ja": "マクラメ編みのフリンジの実", "en": "Macrame Tassel Fruit", "zh": "結繩編織流蘇果實" },
    "source": { "ja": "BOHOスタイルの窓辺", "en": "Boho Style Windowsill", "zh": "BOHO風格的窗邊" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1310-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/boho-style-windowsill.webp",
    "livlies": ["059-m-002"]
  },
  "1311-1-001": {
    "name": { "ja": "ルミナスプリズムの木", "en": "Luminous Prism Tree", "zh": "輝光稜晶之樹" },
    "fruit": { "ja": "プリズムドロップの実", "en": "Prism Teardrop Fruit", "zh": "稜晶水滴果實" },
    "source": { "ja": "Luminous Prism Island", "en": "Luminous Prism Island", "zh": "Luminous Prism Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1311-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/luminous-prism-island.webp",
    "livlies": ["072-m-001"]
  },
  "1312-1-001": {
    "name": { "ja": "ブックツリーとランプの木", "en": "Book and Lamp Tree", "zh": "書堆與檯燈之樹" },
    "fruit": { "ja": "ブックツリーのランプの実", "en": "Book and Lamp Fruit", "zh": "書堆樹的檯燈果實" },
    "source": { "ja": "物語が灯る小さな本屋", "en": "Tiny Bookshop Illuminated by Stories", "zh": "點亮故事的小小書店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1312-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/tiny-bookshop-illuminated-by-stories.webp",
    "livlies": ["077-n-001"]
  },
  "1313-1-001": {
    "name": { "ja": "クリスマスリースの木", "en": "Christmas Wreath Tree", "zh": "聖誕花圈之樹" },
    "fruit": { "ja": "リースを飾るリボンの実", "en": "Wreath Ribbon Fruit", "zh": "裝飾花圈的蝴蝶結果實" },
    "source": { "ja": "サンタクロースを待つ島", "en": "The Island that Waits for Santa", "zh": "等待聖誕老人的來訪之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1313-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-island-that-waits-for-santa.webp",
    "livlies": ["088-m-000"]
  },
  "1314-1-001": {
    "name": { "ja": "色褪せたスノードロップの木", "en": "Faded Snowdrop Tree", "zh": "褪色雪花蓮之樹" },
    "fruit": { "ja": "色褪せたスノードロップの実", "en": "Faded Snowdrop Fruit", "zh": "褪色雪花蓮果實" },
    "source": { "ja": "モノクロスノードロップの島", "en": "Monochrome Snowdrop Island", "zh": "黑白雪花蓮之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1314-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/monochrome-snowdrop-island.webp",
    "livlies": ["086-m-001"]
  },
  "1315-1-001": {
    "name": { "ja": "ラーメン屋さんの提灯の木", "en": "Ramen Shop's Lantern Tree", "zh": "拉麵店的燈籠之樹" },
    "fruit": { "ja": "ラーメン屋さんの提灯の実", "en": "Ramen Shop's Lantern Fruit", "zh": "拉麵店的燈籠果實" },
    "source": { "ja": "冬空のラーメン屋さん", "en": "Winter Ramen Shop", "zh": "冬日天空下的拉麵店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1315-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/winter-ramen-shop.webp",
    "livlies": ["046-m-003"]
  },
  "1316-1-001": {
    "name": { "ja": "咲き誇る古典菊の木", "en": "Brilliant Chrysanthemum Tree", "zh": "怒放的古典菊之樹" },
    "fruit": { "ja": "菊水の露の実", "en": "Chrysanthemum Nectar Fruit", "zh": "菊水露珠果實" },
    "source": { "ja": "菊水の盃の島 新春彩り和装2026", "en": "Cup of Chrysanthemum Nectar Island", "zh": "菊水酒碟之島 新春色彩和裝2026" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1316-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cup-of-chrysanthemum-nectar-island.webp",
    "livlies": ["087-n-000"]
  },
  "1317-1-001": {
    "name": { "ja": "舞踏会の開かれるお城の木", "en": "Grand Ball at the Castle Tree", "zh": "舉辦舞會的城堡之樹" },
    "fruit": { "ja": "お城の鐘の実", "en": "Castle's Bell Fruit", "zh": "城堡的吊鐘果實" },
    "source": { "ja": "シンデレラとガラスの靴の物語", "en": "The Tale of Cinderella & Glass Slippers", "zh": "灰姑娘與玻璃鞋的故事" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1317-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-tale-of-cinderella-and-glass-slippers.webp",
    "livlies": ["064-m-002"]
  },
  "1318-1-001": {
    "name": { "ja": "銀色の蛇口の木", "en": "Silver Tap Tree", "zh": "銀色水龍頭之樹" },
    "fruit": { "ja": "蛇口の水滴の実", "en": "Water Drop Fruit", "zh": "水龍頭的水滴果實" },
    "source": { "ja": "パチャパチャシンクの島", "en": "Splish Splash Sink Island", "zh": "拍拍水花洗手台之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1318-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/splish-splash-sink-island.webp",
    "livlies": ["054-m-002"]
  },
  "1319-1-001": {
    "name": { "ja": "スケートリンクの街灯の木", "en": "Ice Rink Streetlight Tree", "zh": "溜冰場的路燈之樹" },
    "fruit": { "ja": "導く灯りの実", "en": "Beckoning Light Fruit", "zh": "指引的燈光果實" },
    "source": { "ja": "Ice Skate Island", "en": "Ice Skate Island", "zh": "Ice Skate Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1319-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ice-skate-island.webp",
    "livlies": ["065-m-001"]
  },
  "1320-1-001": {
    "name": { "ja": "クラウドベリーのなる倒木", "en": "Fallen Cloudberry-covered Tree", "zh": "結出雲莓的倒樹" },
    "fruit": { "ja": "クラウドベリーの実", "en": "Cloudberry Fruit", "zh": "雲莓果實" },
    "source": { "ja": "クラウドベリーと精霊の森", "en": "Cloudberry & Woodland Nymph Forest", "zh": "雲莓與精靈之森" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1320-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cloudberry-and-woodland-nymph-forest.webp",
    "livlies": ["089-m-000"]
  },
  "1321-1-001": {
    "name": { "ja": "蜃気楼の塔の木", "en": "Tower of Mirages Tree", "zh": "海市蜃樓高塔之樹" },
    "fruit": { "ja": "蜃気楼にかかるもやの実", "en": "Hazy Mirage Fruit", "zh": "籠罩海市蜃樓的霧氣果實" },
    "source": { "ja": "夢現なトリックアートの島", "en": "Trick Art & Trances Island", "zh": "虛幻飄渺的錯覺藝術之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1321-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/trick-art-and-trances-island.webp",
    "livlies": ["074-n-001"]
  },
  "1322-1-001": {
    "name": { "ja": "ワイヤーランタンの木", "en": "Wire Lantern Tree", "zh": "金屬燈籠之樹" },
    "fruit": { "ja": "沈丁花のミニブーケの実", "en": "Posy of Winter Daphne Fruit", "zh": "瑞香的迷你捧花果實" },
    "source": { "ja": "夜に香る恋の花屋", "en": "Florist of Love & Midnight Perfumes", "zh": "夜裡飄香的愛戀花店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1322-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/florist-of-love-and-midnight-perfumes.webp",
    "livlies": ["090-n-000"]
  },
  "1323-1-001": {
    "name": { "ja": "大粒の苺のケーキの木", "en": "Large Strawberry Cake Tree", "zh": "大顆草莓蛋糕之樹" },
    "fruit": { "ja": "粉砂糖のかかった苺の実", "en": "Crushed Sugar Strawberry Fruit", "zh": "撒上糖粉的草莓果實" },
    "source": { "ja": "Strawberry Cafe Island", "en": "Strawberry Cafe Island", "zh": "Strawberry Cafe Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1323-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/strawberry-cafe-island.webp",
    "livlies": ["017-m-004"]
  },
  "1324-1-001": {
    "name": { "ja": "結晶のなる松の木", "en": "Crystallizing Pine Tree", "zh": "長出結晶的松樹" },
    "fruit": { "ja": "不思議な結晶の実", "en": "Mysterious Crystal Fruit", "zh": "不可思議的結晶果實" },
    "source": { "ja": "霧深い仙境の島", "en": "The Mystical Island Beyond the Mist", "zh": "雲深霧濛仙境之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1324-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-mystical-island-beyond-the-mist.webp",
    "livlies": ["053-m-002"]
  },
  "1325-1-001": {
    "name": { "ja": "春の訪れを告げる木", "en": "Spring’s Arrival Tree", "zh": "宣告春天來訪之樹" },
    "fruit": { "ja": "春の訪れを告げる花の実", "en": "Spring’s Arrival Flower Fruit", "zh": "宣告春天來訪的花朵果實" },
    "source": { "ja": "春の蝶と雪解けの洞窟", "en": "Spring’s Butterfly & the Cave of Melting Snow", "zh": "春蝶與融雪洞窟" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1325-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/springs-butterfly-and-the-cave-of-melting-snow.webp",
    "livlies": ["091-m-000"]
  },
  "1326-1-001": {
    "name": { "ja": "ペンダントネックレスの木", "en": "Necklace & Pendant Tree", "zh": "吊墜項鍊之樹" },
    "fruit": { "ja": "ペンダントトップの実", "en": "Pendant Top Fruit", "zh": "吊墜果實" },
    "source": { "ja": "とある夫人の宝石箱の島", "en": "A Lady's Jewelry Box Island", "zh": "某位夫人的珠寶盒之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1326-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-ladys-jewelry-box-island.webp",
    "livlies": ["057-n-002"]
  },
  "1327-1-001": {
    "name": { "ja": "霞む白桜の木", "en": "Veiled by Snowy Blossoms Tree", "zh": "朦朧的白櫻之樹" },
    "fruit": { "ja": "白桜に舞う光の実", "en": "Dancing Blossom's Light Fruit", "zh": "在白櫻周圍飄舞的光芒果實" },
    "source": { "ja": "白桜に霞む丘", "en": "A Hillside Veiled by Snowy Blossoms", "zh": "白櫻下的朦朧山丘" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1327-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-hillside-veiled-by-snowy-blossoms.webp",
    "livlies": ["092-n-000"]
  },
  "1328-1-001": {
    "name": { "ja": "紳士服のショーケースの木", "en": "Tailored Suit Showcase Tree", "zh": "男裝展示櫃之樹" },
    "fruit": { "ja": "さまざまなネクタイの実", "en": "Curated Necktie Fruit", "zh": "各式各樣的領帶果實" },
    "source": { "ja": "Classic Tailor Shop", "en": "Classic Tailor Shop", "zh": "Classic Tailor Shop" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1328-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/classic-tailor-shop.webp",
    "livlies": ["063-m-002"]
  },
  "1329-1-001": {
    "name": { "ja": "透き通った桜の木", "en": "Gossamer Cherry Blossom Tree", "zh": "透明櫻花樹" },
    "fruit": { "ja": "透き通った桜の実", "en": "Gossamer Cherry Blossom Fruit", "zh": "透明櫻花果實" },
    "source": { "ja": "幻想のブロッサムパレス", "en": "The Blossom Palace of Dreams", "zh": "夢幻的花開殿堂" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1329-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-blossom-palace-of-dreams.webp",
    "livlies": ["073-n-001"]
  },
  "1330-1-001": {
    "name": { "ja": "コンビニの看板の木", "en": "Store's Sign Tree", "zh": "便利商店的招牌之樹" },
    "fruit": { "ja": "コンビニロゴの実", "en": "Store's Logo Fruit", "zh": "便利商店標誌果實" },
    "source": { "ja": "ミニチュアリヴリーコンビニ", "en": "Livly Miniature Convenience Store", "zh": "袖珍Livly便利商店" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1330-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/livly-miniature-convenience-store.webp",
    "livlies": ["062-n-002"]
  },
  "1331-1-001": {
    "name": { "ja": "ボタニカルキャンドルの木", "en": "Botanical Candle Tree", "zh": "植物蠟燭之樹" },
    "fruit": { "ja": "ドライフルーツの実", "en": "Spiced Sundried Fruit", "zh": "果乾果實" },
    "source": { "ja": "Candle Laboratory", "en": "Candle Laboratory", "zh": "Candle Laboratory" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1331-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/candle-laboratory.webp",
    "livlies": ["093-n-000"]
  },
  "1332-1-001": {
    "name": { "ja": "花咲く山ワサビの木", "en": "Flowering Wild Wasabi Tree", "zh": "開花的山芥末之樹" },
    "fruit": { "ja": "山ワサビの花の実", "en": "Wild Wasabi Flower Fruit", "zh": "山芥末的花朵果實" },
    "source": { "ja": "春の山菜とせせらぎの島", "en": "Island of Spring's Wild Herbs & Streams", "zh": "春季山菜與潺潺流水之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1332-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-springs-wild-herbs-and-streams.webp",
    "livlies": ["066-n-002"]
  },
  "1333-1-001": {
    "name": { "ja": "静かな月の木", "en": "Soundless Moon Tree", "zh": "靜謐月亮之樹" },
    "fruit": { "ja": "静かな月の実", "en": "Soundless Moon Fruit", "zh": "靜謐月亮果實" },
    "source": { "ja": "とある芽吹きの島", "en": "Island of a Certain Tree Sprout", "zh": "某棵樹苗的萌芽之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1333-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-a-certain-tree-sprout.webp",
    "livlies": ["094-n-000"]
  },
  "1335-1-001": {
    "name": { "ja": "スイートピーティーポットの木", "en": "Sweet Pea Teapot Tree", "zh": "香豌豆茶壺之樹" },
    "fruit": { "ja": "スイートピーの実", "en": "Sweet Pea Fruit", "zh": "香豌豆果實" },
    "source": { "ja": "Spring Flower Picnic", "en": "Spring Flower Picnic", "zh": "Spring Flower Picnic" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1335-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/spring-flower-picnic.webp",
    "livlies": ["075-a-001"]
  },
  "1336-1-001": {
    "name": { "ja": "球型の特製フラスコの木", "en": "Special Distillation Flask Tree", "zh": "球型特製燒瓶之樹" },
    "fruit": { "ja": "光るミニフラスコの実", "en": "Glowing Mini Flask Fruit", "zh": "發光的迷你燒瓶果實" },
    "source": { "ja": "電気と錬金術の研究室", "en": "Electrical Alchemy Laboratory", "zh": "電流與鍊金術研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1336-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/electrical-alchemy-laboratory.webp",
    "livlies": ["095-m-000"]
  },
  "1337-1-001": {
    "name": { "ja": "ハニーブーケの木", "en": "Honey Bouquet Tree", "zh": "蜂蜜花束之樹" },
    "fruit": { "ja": "ハチミツべっこう飴の実", "en": "Honey Lollipop Fruit", "zh": "蜂蜜玳瑁糖果實" },
    "source": { "ja": "スウィートハニープレゼントルーム", "en": "Sweet Honey Bouquet Room", "zh": "香甜蜂蜜禮物房" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1337-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/sweet-honey-bouquet-room.webp",
    "livlies": ["039-m-003"]
  },
  "1338-1-001": {
    "name": { "ja": "ピグミーとヴォルグの柱の木", "en": "Pygmy & Volg-covered Pillar Tree", "zh": "提可咪與戰神蝙蝠的廣告柱之樹" },
    "fruit": { "ja": "ピグミーとヴォルグステッカーの実", "en": "Pygmy & Volg Sticker Fruit", "zh": "提可咪與戰神蝙蝠的貼紙果實" },
    "source": { "ja": "アニメ化妄想プロモーションの島", "en": "Imaginary Anime Promotion Island", "zh": "動畫化幻想宣傳之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1338-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/imaginary-anime-promotion-island.webp",
    "livlies": ["012-m-004"]
  },
  "1339-1-001": {
    "name": { "ja": "咲き誇るチューリップの木", "en": "Blooming Tulip Tree", "zh": "怒放的鬱金香之樹" },
    "fruit": { "ja": "咲き誇るチューリップの実", "en": "Blooming Tulip Fruit", "zh": "怒放的鬱金香果實" },
    "source": { "ja": "風に揺れるチューリップの島", "en": "Island of Swaying Tulips", "zh": "隨風搖曳鬱金香之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1339-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-swaying-tulips.webp",
    "livlies": ["096-n-000"]
  },
  "1340-1-001": {
    "name": { "ja": "白化サンゴの木", "en": "Bleached Coral Tree", "zh": "白化珊瑚之樹" },
    "fruit": { "ja": "アオトゲサンゴの実", "en": "Pink-Tipped Blue Anemone Fruit", "zh": "青棘珊瑚果實" },
    "source": { "ja": "白化サンゴの島", "en": "Bleached Coral Island", "zh": "白化珊瑚之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1340-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/bleached-coral-island.webp",
    "livlies": ["022-m-004"]
  },
  "1341-1-001": {
    "name": { "ja": "気球モビールの木", "en": "Hot Air Balloon Mobile Tree", "zh": "熱氣球掛飾之樹" },
    "fruit": { "ja": "気球モビールの実", "en": "Hot Air Balloon Mobile Fruit", "zh": "熱氣球掛飾果實" },
    "source": { "ja": "Antique Toy Island", "en": "Antique Toy Island", "zh": "Antique Toy Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1341-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/antique-toy-island.webp",
    "livlies": ["026-m-004"]
  },
  "1343-1-001": {
    "name": { "ja": "夢と現実をつなぐ木", "en": "Linked Dreams and Reality Tree", "zh": "連接夢境與現實之樹" },
    "fruit": { "ja": "夢を閉じ込めた実", "en": "Full of Dreams Fruit", "zh": "封存夢境的果實" },
    "source": { "ja": "クジラが見た夢の島", "en": "The Island from the Whale's Dreams", "zh": "鯨魚的夢境之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1343-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-island-from-the-whales-dreams.webp",
    "livlies": ["008-m-004"]
  },
  "1344-1-001": {
    "name": { "ja": "甘く香るビワの木", "en": "Sweet Scented Loquat Tree", "zh": "散發香甜氣味的枇杷樹" },
    "fruit": { "ja": "こぼれたビワの花の実", "en": "Fallen Loquat Blossom Fruit", "zh": "飄落的枇杷花果實" },
    "source": { "ja": "ビワ香るおばあちゃんの家", "en": "Warm Scents of Loquat Jam Kitchen", "zh": "枇杷飄香的奶奶家" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1344-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/warm-scents-of-loquat-jam-kitchen.webp",
    "livlies": ["038-m-003"]
  },
  "1345-1-001": {
    "name": { "ja": "月下美人の木", "en": "Queen of the Night Tree", "zh": "曇花之樹" },
    "fruit": { "ja": "月下美人の実", "en": "Queen of the Night Fruit", "zh": "曇花果實" },
    "source": { "ja": "夜半の月下美人の島", "en": "Queen of the Night Island", "zh": "子夜的曇花之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1345-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/queen-of-the-night-island.webp",
    "livlies": ["099-m-000"]
  },
  "1346-1-001": {
    "name": { "ja": "山積みの洗濯物の木", "en": "Mountain of Laundry Tree", "zh": "堆積如山的衣物之樹" },
    "fruit": { "ja": "洗濯した靴下の実", "en": "Freshly Laundered Socks Fruit", "zh": "洗好的襪子果實" },
    "source": { "ja": "週末コインランドリーの島", "en": "Weekend Laundromat Island", "zh": "週末的自助洗衣店之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1346-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/weekend-laundromat-island.webp",
    "livlies": ["076-n-002"]
  },
  "1347-1-001": {
    "name": { "ja": "紫陽花とバラのブーケの木", "en": "Hydrangea & Rose Bouquet Tree", "zh": "繡球花與玫瑰的捧花之樹" },
    "fruit": { "ja": "ボードゲームのコマの実", "en": "Board Game Piece Fruit", "zh": "桌遊的棋子果實" },
    "source": { "ja": "Wedding Board Game Party", "en": "Wedding Board Game Party", "zh": "Wedding Board Game Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1347-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/wedding-board-game-party.webp",
    "livlies": ["069-m-002"]
  },
  "1350-1-001": {
    "name": { "ja": "ガラスの小鳥と雨雫の木", "en": "Glass Birdie and Raindrop Tree", "zh": "玻璃小鳥與雨滴之樹" },
    "fruit": { "ja": "ガラスの青い花の実", "en": "Blue Glass Flower Fruit", "zh": "玻璃藍色花朵果實" },
    "source": { "ja": "リゼ・ヘルエスタと雨宿りのお茶会", "en": "Lize Helesta and the Rainy Tea Party", "zh": "Lize的雨天茶會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1350-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/lize-helesta-and-the-rainy-tea-party.webp",
    "livlies": ["029-c-000"]
  },
  "1348-1-001": {
    "name": { "ja": "愛をはかる天秤の木", "en": "The Scales of Love Tree", "zh": "衡量愛情的天秤之樹" },
    "fruit": { "ja": "赤いハート型鉱石の実", "en": "Red Heart Crystal Fruit", "zh": "紅色心型礦石果實" },
    "source": { "ja": "アンジュ・カトリーナの恋愛錬金室", "en": "Ange Katrina's Alchemy Lab of Romance", "zh": "Ange的戀愛鍊金室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1348-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/ange-katrinas-alchemy-lab-of-romance.webp",
    "livlies": ["062-c-000"]
  },
  "1349-1-001": {
    "name": { "ja": "召喚ダイカガミの木", "en": "Summoned DAIKAGAMI Tree", "zh": "召喚DAIKAGAMI之樹" },
    "fruit": { "ja": "ダイカガミハンマーの実", "en": "DAIKAGAMI Hammer Fruit", "zh": "DAIKAGAMI巨槌果實" },
    "source": { "ja": "加賀美ハヤトのホビーラウンジ", "en": "Kagami Hayato's Hobby Lounge", "zh": "Kagami的娛樂休息室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1349-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/kagami-hayatos-hobby-lounge.webp",
    "livlies": ["049-c-000"]
  },
  "1352-1-001": {
    "name": { "ja": "ライブストリームマイクの木", "en": "Live Stream Mic Tree", "zh": "實況麥克風之樹" },
    "fruit": { "ja": "ライブストリームマイクの実", "en": "Live Stream Mic Fruit", "zh": "實況麥克風果實" },
    "source": { "ja": "深夜XX時の配信部屋", "en": "Live Streamer's Room", "zh": "深夜時分的直播室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1352-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/live-streamers-room.webp",
    "livlies": ["081-n-001"]
  },
  "1353-1-001": {
    "name": { "ja": "惑星のフローターの木", "en": "Planet Floaty Tree", "zh": "行星浮具之樹" },
    "fruit": { "ja": "星形のフローターの実", "en": "Star Floaty Fruit", "zh": "星型浮具果實" },
    "source": { "ja": "Dreamy Floating Pool", "en": "Dreamy Floating Pool", "zh": "DREAMY FLOATING POOL" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1353-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/dreamy-floating-pool.webp",
    "livlies": ["070-a-002"]
  },
  "1354-1-001": {
    "name": { "ja": "大きなパイプオルガンの木", "en": "Large Pipe Organ Tree", "zh": "巨大管風琴之樹" },
    "fruit": { "ja": "パイプオルガンの音色の実", "en": "Pipe Organ's Melody Fruit", "zh": "管風琴的音色果實" },
    "source": { "ja": "祝福のパイプオルガンの島", "en": "Pipe Organ of Blessings Island", "zh": "祝福的管風琴之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1354-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/pipe-organ-of-blessings-island.webp",
    "livlies": ["100-n-000"]
  },
  "1355-1-001": {
    "name": { "ja": "ボタニカルゼリーの木", "en": "Botanical Jelly Tree", "zh": "植物果凍之樹" },
    "fruit": { "ja": "ゼリーのタグの実", "en": "Jelly Label Fruit", "zh": "果凍的標籤果實" },
    "source": { "ja": "ボタニカルゼリーラボ", "en": "Botanical Jelly Lab", "zh": "植物果凍研究室" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1355-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/botanical-jelly-lab.webp",
    "livlies": ["101-n-000"]
  },
  "1356-1-001": {
    "name": { "ja": "神秘の鉱石をいだく根の木", "en": "Entwined Root and Crystal Tree", "zh": "懷抱神祕礦石的樹根之樹" },
    "fruit": { "ja": "生命を潤す鉱石の実", "en": "Life-giving Crystal Fruit", "zh": "滋潤生命的礦石果實" },
    "source": { "ja": "地の迷宮に眠る石", "en": "Crystal that Slumbers in the Earth's Maze", "zh": "沉眠於地底迷宮的礦石" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1356-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/crystal-that-slumbers-in-the-earths-maze.webp",
    "livlies": ["083-m-001"]
  },
  "1357-1-001": {
    "name": { "ja": "ホログラムオーダーツールの木", "en": "Holographic Ordering Screen Tree", "zh": "全像投影點餐機之樹" },
    "fruit": { "ja": "ホログラムアイコンの実", "en": "Holographic Icon Fruit", "zh": "全像投影圖示果實" },
    "source": { "ja": "Cosmic Sweet Cafe", "en": "Cosmic Sweet Cafe", "zh": "Cosmic Sweet Cafe" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1357-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/cosmic-sweet-cafe.webp",
    "livlies": ["067-m-002"]
  },
  "1358-1-001": {
    "name": { "ja": "淡く光る幻想的な花の木", "en": "Wondrous Glowing Flower Tree", "zh": "發出淡淡光芒的夢幻花朵之樹" },
    "fruit": { "ja": "幻想的な花の実", "en": "Wondrous Flower Fruit" },
    "source": { "ja": "深緑の水辺の島", "en": "The Greenery Along the Shore Island", "zh": "蒼翠的水邊之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1358-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-greenery-along-the-shore-island.webp",
    "livlies": ["102-n-000"]
  },
  "1359-1-001": {
    "name": { "ja": "ボトルシップロゴ入りセイルの木", "en": "Bottled Ship Logo Sail Tree", "zh": "有著瓶中船標誌的船帆之樹" },
    "fruit": { "ja": "ボトルシップロゴの実", "en": "Bottled Ship Logo Fruit", "zh": "瓶中船標誌果實" },
    "source": { "ja": "Marine Summer Island", "en": "Marine Summer Island", "zh": "Marine Summer Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1359-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/marine-summer-island.webp",
    "livlies": ["072-m-002"]
  },
  "1360-1-001": {
    "name": { "ja": "アーチに咲く夜顔の木", "en": "Arch of Moonflowers Tree", "zh": "在拱門上綻放的月光花之樹" },
    "fruit": { "ja": "アーチに咲く夜顔の実", "en": "Arch of Moonflowers Fruit", "zh": "在拱門上綻放的月光花果實" },
    "source": { "ja": "夜顔咲く夏祭りの島", "en": "Blooming Moonflowers & Summer Festival Island", "zh": "月光花綻放的夏日祭典之島" },
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
    "name": { "ja": "洋梨の入ったコンポート皿の木", "en": "Pear-filled Compote Bowl Tree", "zh": "裝有洋梨的高腳盤之樹" },
    "fruit": { "ja": "洋梨の実", "en": "Pear Fruit", "zh": "洋梨果實" },
    "source": { "ja": "昼下がりの洋梨の島", "en": "Early Afternoons & Pears Island", "zh": "午後時分的洋梨之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1363-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/early-afternoons-and-pears-island.webp",
    "livlies": ["103-m-000"]
  },
  "1364-1-001": {
    "name": { "ja": "木漏れ日の大木", "en": "Large Streaming Sunbeam Tree", "zh": "林間陽光灑落的大樹" },
    "fruit": { "ja": "大木の若葉の実", "en": "Large Tree's New Leaf Fruit", "zh": "大樹的新葉果實" },
    "source": { "ja": "夏空のツリーハウス", "en": "Summer Sky Tree House", "zh": "夏日天空下的樹屋" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1364-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/summer-sky-tree-house.webp",
    "livlies": ["085-m-001"]
  },
  "1365-1-001": {
    "name": { "ja": "妖精の女王のカップケーキの木", "en": "Fairy Queen's Cupcake Tree", "zh": "妖精女王的杯子蛋糕之樹" },
    "fruit": { "ja": "妖精の女王の砂糖菓子の実", "en": "Fairy Queen's Sugar Candy Fruit", "zh": "妖精女王的砂糖點心果實" },
    "source": { "ja": "Fairy Cake Island", "en": "Fairy Cake Island", "zh": "Fairy Cake Island" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1365-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/fairy-cake-island.webp",
    "livlies": ["071-n-002"]
  },
  "1366-1-001": {
    "name": { "ja": "孤島に佇む古びた洋館の木", "en": "Isolated Chateau Tree", "zh": "佇立於孤島上的老舊洋樓之樹" },
    "fruit": { "ja": "洋館の窓の実", "en": "Chateau's Window Fruit", "zh": "洋樓的窗戶果實" },
    "source": { "ja": "暗雲覆う絶海の洋館", "en": "Chateau Over the Stormy Seas", "zh": "烏雲密布的孤海洋樓" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1366-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/chateau-over-the-stormy-seas.webp",
    "livlies": ["104-m-000"]
  },
  "1367-1-001": {
    "name": { "ja": "不思議な鍵の木", "en": "Wondrous Key Tree", "zh": "不可思議鑰匙之樹" },
    "fruit": { "ja": "不思議な鍵の実", "en": "Wondrous Key Fruit", "zh": "不可思議鑰匙果實" },
    "source": { "ja": "鍵と不思議な扉の物語", "en": "A Tale of Keys and Wondrous Doors", "zh": "鑰匙與不可思議門扉的故事" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1367-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/a-tale-of-keys-and-wondrous-doors.webp",
    "livlies": ["061-m-002"]
  },
  "1368-1-001": {
    "name": { "ja": "積み上がったティーカップの木", "en": "Tower of Teacups Tree", "zh": "堆高的茶杯之樹" },
    "fruit": { "ja": "お花のアイシングクッキーの実", "en": "Flower Icing Cookie Fruit", "zh": "花朵糖霜餅乾果實" },
    "source": { "ja": "ティーカップコレクターのお茶会", "en": "Teacup Collector's Tea Party", "zh": "茶杯收藏家的茶會" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1368-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/teacup-collectors-tea-party.webp",
    "livlies": ["094-n-001"]
  },
  "1369-1-001": {
    "name": { "ja": "まぼろしの樹木", "en": "Great Mythical Tree", "zh": "幻影樹木" },
    "fruit": { "ja": "まぼろしの蝶の実", "en": "Mythical Butterfly Fruit", "zh": "幻影蝴蝶果實" },
    "source": { "ja": "まぼろしの霧の森", "en": "Forest of Mythical Mists", "zh": "幻影迷霧森林" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1369-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/forest-of-mythical-mists.webp",
    "livlies": ["105-m-000"]
  },
  "1370-1-001": {
    "name": { "ja": "持ち上げたナポリタンの木", "en": "Forkful of Napolitan Tree", "zh": "叉起來的拿坡里義大利麵之樹" },
    "fruit": { "ja": "トッピングのピーマンの実", "en": "Cut Bell Pepper Fruit", "zh": "配料青椒果實" },
    "source": { "ja": "洋食屋さんのショーケースの島", "en": "Restaurant's Showcase Island", "zh": "洋食店的展示櫃之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1370-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/restaurants-showcase-island.webp",
    "livlies": ["075-a-002"]
  },
  "1372-1-001": {
    "name": { "ja": "思い出の駅舎の木", "en": "Train Station of Memories Tree", "zh": "回憶的站房之樹" },
    "fruit": { "ja": "夕陽がにじんだ駅名標の実", "en": "Sunset Station's Sign Fruit", "zh": "夕陽暈染的站牌果實" },
    "source": { "ja": "思い出の駅舎の島", "en": "Train Station of Memories Island", "zh": "回憶的站房之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1372-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/train-station-of-memories-island.webp",
    "livlies": ["043-m-003"]
  },
  "1373-1-001": {
    "name": { "ja": "古びた針山の木", "en": "Aged Pincushion Tree", "zh": "老舊針插之樹" },
    "fruit": { "ja": "小さな綿の実", "en": "Tiny Cotton Ball Fruit", "zh": "小小棉絮果實" },
    "source": { "ja": "つぎはぎの記憶の島", "en": "Island of Patched Up Memories", "zh": "縫補的記憶之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1373-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/island-of-patched-up-memories.webp",
    "livlies": ["106-m-000"]
  },
  "1375-1-001": {
    "name": { "ja": "ヒスイカズラの木", "en": "Jade Vine Tree", "zh": "碧玉藤之樹" },
    "fruit": { "ja": "ヒスイカズラの実", "en": "Jade Vine Fruit", "zh": "碧玉藤果實" },
    "source": { "ja": "ヒスイカズラの島", "en": "Jade Vine Island", "zh": "碧玉藤之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1375-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/jade-vine-island.webp",
    "livlies": ["092-n-001"]
  },
  "1376-1-001": {
    "name": { "ja": "オーガのソフビつきビルの木", "en": "Ogre Statue on Building Tree", "zh": "附有歐卡塑膠玩偶的大樓之樹" },
    "fruit": { "ja": "オーガのソフビの実", "en": "Ogre Statue Fruit", "zh": "歐卡塑膠玩偶果實" },
    "source": { "ja": "小さなフィルムスタジオの島", "en": "Tiny Film Studio Island", "zh": "小小電影製片廠之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1376-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/tiny-film-studio-island.webp",
    "livlies": ["007-m-004"]
  },
  "1377-1-001": {
    "name": { "ja": "深淵へ誘う花の木", "en": "Abyss-beckoning Flower Tree", "zh": "誘人踏入深淵的花朵之樹" },
    "fruit": { "ja": "深淵へ誘う花の実", "en": "Abyss-beckoning Flower Fruit", "zh": "誘人踏入深淵的花朵果實" },
    "source": { "ja": "混沌たる深淵の島", "en": "The Chaos Beyond the Abyss Island", "zh": "混沌深淵之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1377-1-001-P.png",
    "banner": "https://livly-guide.com/wp-content/uploads/the-chaos-beyond-the-abyss-island.webp",
    "livlies": ["107-m-000"]
  },
  "1378-1-001": {
    "name": { "ja": "魔女帽子型のキノコの木", "en": "Witch Hat Mushroom Tree", "zh": "魔女帽外型的香菇之樹" },
    "fruit": { "ja": "魔法植物の花の実", "en": "Magical Plant's Bloom Fruit", "zh": "魔法植物花朵果實" },
    "source": { "ja": "Witches' Night Party", "en": "Witches' Night Party", "zh": "Witches Night Party" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1378-1-001-P.png",
    "banner": null,
    "livlies": ["093-n-001"]
  },
  "1379-1-001": {
    "name": { "ja": "薬剤師の手帳の木", "en": "Herbalist's Notebook Tree", "zh": "藥師的筆記本之樹" },
    "fruit": { "ja": "アンティークな銀の栞の実", "en": "Antique Silver Bookmark Fruit", "zh": "古董風銀色書籤果實" },
    "source": { "ja": "薬剤師の探し物の島", "en": "The Herbalist's Lost Item Island", "zh": "藥師的尋物之島" },
    "image": "https://www.livly.com/picturebook/img/main/mono/tree/1379-1-001-P.png",
    "banner": null,
    "livlies": ["100-n-001"]
  }
};
