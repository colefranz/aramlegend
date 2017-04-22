const items =  {
  "1001": "Boots of Speed",
  "1004": "Faerie Charm",
  "1006": "Rejuvenation Bead",
  "1011": "Giant's Belt",
  "1018": "Cloak of Agility",
  "1026": "Blasting Wand",
  "1027": "Sapphire Crystal",
  "1028": "Ruby Crystal",
  "1029": "Cloth Armor",
  "1031": "Chain Vest",
  "1033": "Null-Magic Mantle",
  "1036": "Long Sword",
  "1037": "Pickaxe",
  "1038": "B. F. Sword",
  "1042": "Dagger",
  "1043": "Recurve Bow",
  "1051": "Brawler's Gloves",
  "1052": "Amplifying Tome",
  "1053": "Vampiric Scepter",
  "1054": "Doran's Shield",
  "1055": "Doran's Blade",
  "1056": "Doran's Ring",
  "1057": "Negatron Cloak",
  "1058": "Needlessly Large Rod",
  "1083": "Cull",
  "2003": "Health Potion",
  "2009": "Total Biscuit of Rejuvenation",
  "2010": "Total Biscuit of Rejuvenation",
  "2015": "Kircheis Shard",
  "2031": "Refillable Potion",
  "2033": "Corrupting Potion",
  "2047": "Oracle's Extract",
  "2050": "Explorer's Ward",
  "2051": "Guardian's Horn",
  "2052": "Poro-Snax",
  "2053": "Raptor Cloak",
  "2054": "Diet Poro-Snax",
  "2138": "Elixir of Iron",
  "2139": "Elixir of Sorcery",
  "2140": "Elixir of Wrath",
  "3001": "Abyssal Scepter",
  "3003": "Archangel's Staff",
  "3004": "Manamune",
  "3006": "Berserker's Greaves",
  "3009": "Boots of Swiftness",
  "3010": "Catalyst of Aeons",
  "3020": "Sorcerer's Shoes",
  "3022": "Frozen Mallet",
  "3024": "Glacial Shroud",
  "3025": "Iceborn Gauntlet",
  "3026": "Guardian Angel",
  "3027": "Rod of Ages",
  "3028": "Chalice of Harmony",
  "3030": "Hextech GLP-800",
  "3031": "Infinity Edge",
  "3033": "Mortal Reminder",
  "3034": "Giant Slayer",
  "3035": "Last Whisper",
  "3036": "Lord Dominik's Regards",
  "3040": "Seraph's Embrace",
  "3042": "Muramana",
  "3043": "Muramana",
  "3044": "Phage",
  "3046": "Phantom Dancer",
  "3047": "Ninja Tabi",
  "3048": "Seraph's Embrace",
  "3050": "Zeke's Harbinger",
  "3052": "Jaurim's Fist",
  "3053": "Sterak's Gage",
  "3056": "Ohmwrecker",
  "3057": "Sheen",
  "3060": "Banner of Command",
  "3065": "Spirit Visage",
  "3067": "Kindlegem",
  "3068": "Sunfire Cape",
  "3069": "Talisman of Ascension",
  "3070": "Tear of the Goddess",
  "3071": "The Black Cleaver",
  "3072": "The Bloodthirster",
  "3074": "Ravenous Hydra",
  "3075": "Thornmail",
  "3077": "Tiamat",
  "3078": "Trinity Force",
  "3082": "Warden's Mail",
  "3083": "Warmog's Armor",
  "3085": "Runaan's Hurricane",
  "3086": "Zeal",
  "3087": "Statikk Shiv",
  "3089": "Rabadon's Deathcap",
  "3091": "Wit's End",
  "3092": "Frost Queen's Claim",
  "3094": "Rapid Firecannon",
  "3096": "Nomad's Medallion",
  "3097": "Targon's Brace",
  "3098": "Frostfang",
  "3100": "Lich Bane",
  "3101": "Stinger",
  "3102": "Banshee's Veil",
  "3105": "Aegis of the Legion",
  "3107": "Redemption",
  "3108": "Fiendish Codex",
  "3109": "Knight's Vow",
  "3110": "Frozen Heart",
  "3111": "Mercury's Treads",
  "3112": "Guardian's Orb",
  "3113": "Aether Wisp",
  "3114": "Forbidden Idol",
  "3115": "Nashor's Tooth",
  "3116": "Rylai's Crystal Scepter",
  "3117": "Boots of Mobility",
  "3123": "Executioner's Calling",
  "3124": "Guinsoo's Rageblade",
  "3133": "Caulfield's Warhammer",
  "3134": "Serrated Dirk",
  "3135": "Void Staff",
  "3136": "Haunting Guise",
  "3139": "Mercurial Scimitar",
  "3140": "Quicksilver Sash",
  "3142": "Youmuu's Ghostblade",
  "3143": "Randuin's Omen",
  "3144": "Bilgewater Cutlass",
  "3145": "Hextech Revolver",
  "3146": "Hextech Gunblade",
  "3147": "Duskblade of Draktharr",
  "3151": "Liandry's Torment",
  "3152": "Hextech Protobelt-01",
  "3153": "Blade of the Ruined King",
  "3155": "Hexdrinker",
  "3156": "Maw of Malmortius",
  "3157": "Zhonya's Hourglass",
  "3158": "Ionian Boots of Lucidity",
  "3165": "Morellonomicon",
  "3174": "Athene's Unholy Grail",
  "3184": "Guardian's Hammer",
  "3190": "Locket of the Iron Solari",
  "3191": "Seeker's Armguard",
  "3196": "The Hex Core mk-1",
  "3197": "The Hex Core mk-2",
  "3198": "Perfect Hex Core",
  "3200": "Prototype Hex Core",
  "3211": "Spectre's Cowl",
  "3222": "Mikael's Crucible",
  "3285": "Luden's Echo",
  "3301": "Ancient Coin",
  "3302": "Relic Shield",
  "3303": "Spellthief's Edge",
  "3341": "Sweeping Lens (Trinket)",
  "3363": "Farsight Alteration",
  "3364": "Oracle Alteration",
  "3401": "Face of the Mountain",
  "3422": "Head of Kha'Zix",
  "3455": "Head of Kha'Zix",
  "3504": "Ardent Censer",
  "3508": "Essence Reaver",
  "3599": "The Black Spear",
  "3671": "Enchantment: Warrior",
  "3672": "Enchantment: Cinderhulk",
  "3673": "Enchantment: Runic Echoes",
  "3675": "Enchantment: Bloodrazor",
  "3680": "Frosted Snax",
  "3681": "Super Spicy Snax",
  "3682": "Espresso Snax",
  "3683": "Rainbow Snax Party Pack!",
  "3742": "Dead Man's Plate",
  "3748": "Titanic Hydra",
  "3751": "Bami's Cinder",
  "3800": "Righteous Glory",
  "3801": "Crystalline Bracer",
  "3802": "Lost Chapter",
  "3812": "Death's Dance",
  "3814": "Edge of Night",
  "3901": "Fire at Will",
  "3902": "Death's Daughter",
  "3903": "Raise Morale"
};

const types = {
  'none': 'none',
  'ap': 'ap',
  'ad': 'ad',
  'heals': 'heals',
  'ranged': 'ranged',
  'melee': 'melee',
  'aa': 'aa',
  'tank': 'tank',
  'mana': 'mana',
  'poke': 'poke',
  'tear': 'tear',
  'as': 'as',
  'dive': 'dive',
  'dps': 'dps',
  'crit': 'crit',
  'support': 'support',
  'lethality': 'lethality',
  'dot': 'dot',
  'cc': 'cc'
};

const boots = {
  "3006": {
    "name": "Berserker's Greaves",
    "value": 1,
    "users": [
      [types.as]
    ],
    "versus": []
  },
  "3020": {
    "name": "Sorcerer's Shoes",
    "value": 1,
    "users": [
      [types.ap]
    ],
    "versus": []
  },
  "3047": {
    "name": "Ninja Tabi",
    "value": 1,
    "users": [],
    "versus": [
      types.ad, types.aa, types.as
    ]
  },
  "3111": {
    "name": "Mercury's Treads",
    "value": 1,
    "users": [],
    "versus": [
      types.ap, types.cc
    ]
  },
  "3158": {
    "name": "Ionian Boots of Lucidity",
    "value": 1,
    "users": [
      [types.support]
    ],
    "versus": []
  },

}

const final =  {
  "3001": {
    "name": "Abyssal Scepter",
    "value": 0.8,
    "users": [
      [types.ap],
      [types.ap, types.tank]
    ],
    "versus": [types.ap]
  },
  "3022": {
    "name": "Frozen Mallet",
    "value": 0.3,
    "users": [
      [types.ad],
      [types.ad, types.tank]
    ],
    "versus": [types.dps]
  },
  "3025": {
    "name": "Iceborn Gauntlet",
    "value": 0.5,
    "users": [
      [types.tank, types.mana]
    ],
    "versus": [types.ad]
  },
  "3027": {
    "name": "Rod of Ages",
    "value": 0.5,
    "users": [
      [types.ap, types.tank, types.dive]
    ],
    "versus": [types.dps]
  },
  "3031": {
    "name": "Infinity Edge",
    "value": 0.5,
    "users": [
      [types.crit, types.dps]
    ],
    "versus": []
  },
  "3033": {
    "name": "Mortal Reminder",
    "value": 0.3,
    "users": [
      [types.ad, types.ranged, types.dps]
    ],
    "versus": [types.tank, types.heal]
  },
  "3036": {
    "name": "Lord Dominik's Regards",
    "value": 0.3,
    "users": [
      [types.ad, types.ranged, types.dps]
    ],
    "versus": [types.tank]
  },
  "3046": {
    "name": "Phantom Dancer",
    "value": 0.2,
    "users": [
      [types.ad, types.ranged, types.crit, types.dps]
    ],
    "versus": []
  },
  "3050": {
    "name": "Zeke's Harbinger",
    "value": 0.1,
    "users": [
      [types.none]
    ],
    "versus": []
  },
  "3053": {
    "name": "Sterak's Gage",
    "value": 0.3,
    "users": [
      [types.ad]
    ],
    "versus": [types.dps]
  },
  "3060": {
    "name": "Banner of Command",
    "value": 0.1,
    "users": [
      [types.none]
    ],
    "versus": []
  },
  "3065": {
    "name": "Spirit Visage",
    "value": 0.8,
    "users": [
      [types.tank, types.dive]
    ],
    "versus": [types.ap]
  },
  "3068": {
    "name": "Sunfire Cape",
    "value": 0.9,
    "users": [
      [types.tank, types.dive]
    ],
    "versus": [types.ad]
  },
  "3070": {
    "name": "Tear of the Goddess",
    "value": 1,
    "users": [
      [types.tear]
    ],
    "versus": []
  },
  "3071": {
    "name": "The Black Cleaver",
    "value": 0.5,
    "users": [
      [types.ad]
    ],
    "versus": []
  },
  "3072": {
    "name": "The Bloodthirster",
    "value": 0.4,
    "users": [
      [types.ad, types.ranged, types.dps]
    ],
    "versus": []
  },
  "3074": {
    "name": "Ravenous Hydra",
    "value": 0.3,
    "users": [
      [types.ad, types.dps, types.melee]
    ],
    "versus": []
  },
  "3075": {
    "name": "Thornmail",
    "value": 0.3,
    "users": [
      [types.tank]
    ],
    "versus": [types.ad]
  },
  "3078": {
    "name": "Trinity Force",
    "value": 0.5,
    "users": [
      [types.dps, types.melee, types.ad]
    ],
    "versus": []
  },
  "3083": {
    "name": "Warmog's Armor",
    "value": 0.4,
    "users": [
      [types.tank]
    ],
    "versus": []
  },
  "3085": {
    "name": "Runaan's Hurricane",
    "value": 0.7,
    "users": [
      [types.ad, types.dps, types.ranged]
    ],
    "versus": []
  },
  "3087": {
    "name": "Statikk Shiv",
    "value": 0.5,
    "users": [
      [types.ad, types.dps, types.crit]
    ],
    "versus": []
  },
  "3089": {
    "name": "Rabadon's Deathcap",
    "value": 0.5,
    "users": [
      [types.ap, types.dps],
      [types.ap, types.support]
    ],
    "versus": []
  },
  "3091": {
    "name": "Wit's End",
    "value": 0.3,
    "users": [
      [types.none]
    ],
    "versus": [types.ap]
  },
  "3094": {
    "name": "Rapid Firecannon",
    "value": 0.5,
    "users": [
      [types.ad, types.dps, types.crit, types.ranged]
    ],
    "versus": []
  },
  "3100": {
    "name": "Lich Bane",
    "value": 0.6,
    "users": [
      [types.ap, types.aa, types.dps]
    ],
    "versus": []
  },
  "3102": {
    "name": "Banshee's Veil",
    "value": 0.5,
    "users": [
      [types.tank, types.dive]
    ],
    "versus": [types.ap]
  },
  "3107": {
    "name": "Redemption",
    "value": 0.8,
    "users": [
      [types.support, types.mana],
      [types.heals, types.support]
    ],
    "versus": []
  },
  "3109": {
    "name": "Knight's Vow",
    "value": 0.3,
    "users": [
      [types.support, types.tank]
    ],
    "versus": []
  },
  "3110": {
    "name": "Frozen Heart",
    "value": 0.5,
    "users": [
      [types.tank, types.mana, types.dive]
    ],
    "versus": [types.ad]
  },
  "3115": {
    "name": "Nashor's Tooth",
    "value": 0.5,
    "users": [
      [types.ap, types.as, types.aa]
    ],
    "versus": []
  },
  "3116": {
    "name": "Rylai's Crystal Scepter",
    "value": 0.5,
    "users": [
      [types.poke, types.ap, types.dps]
    ],
    "versus": []
  },
  "3124": {
    "name": "Guinsoo's Rageblade",
    "value": 0.3,
    "users": [
      [types.ap, types.dps, types.as, types.aa]
    ],
    "versus": []
  },
  "3135": {
    "name": "Void Staff",
    "value": 0.4,
    "users": [
      [types.ap, types.dps]
    ],
    "versus": []
  },
  "3139": {
    "name": "Mercurial Scimitar",
    "value": 0.3,
    "users": [
      [types.ad, types.dps, types.ranged]
    ],
    "versus": [types.cc, types.ap]
  },
  "3142": {
    "name": "Youmuu's Ghostblade",
    "value": 0.4,
    "users": [
      [types.ad, types.dps, types.dive, types.lethality]
    ],
    "versus": []
  },
  "3143": {
    "name": "Randuin's Omen",
    "value": 0.5,
    "users": [
      [types.tank, types.dive]
    ],
    "versus": [types.ad, types.crit]
  },
  "3146": {
    "name": "Hextech Gunblade",
    "value": 0.8,
    "users": [
      [types.ad, types.ap]
    ],
    "versus": []
  },
  "3147": {
    "name": "Duskblade of Draktharr",
    "value": 0.5,
    "users": [
      [types.ad, types.dps, types.lethality]
    ],
    "versus": []
  },
  "3151": {
    "name": "Liandry's Torment",
    "value": 0.8,
    "users": [
      [types.ap, types.poke, types.dps],
      [types.ap, types.dot]
    ],
    "versus": []
  },
  "3152": {
    "name": "Hextech Protobelt-01",
    "value": 0.5,
    "users": [
      [types.ap, types.dive, types.dps]
    ],
    "versus": []
  },
  "3153": {
    "name": "Blade of the Ruined King",
    "value": 0.8,
    "users": [
      [types.ad, types.dps, types.ranged]
    ],
    "versus": []
  },
  "3156": {
    "name": "Maw of Malmortius",
    "value": 0.4,
    "users": [
      [types.ad]
    ],
    "versus": [types.ap]
  },
  "3157": {
    "name": "Zhonya's Hourglass",
    "value": 0.5,
    "users": [
      [types.ap, types.dive, types.dps]
    ],
    "versus": [types.ad, types.lethality]
  },
  "3165": {
    "name": "Morellonomicon",
    "value": 1,
    "users": [
      [types.ap, types.dps, types.ranged, types.poke, types.mana],
      [types.ap, types.support, types.mana]
    ],
    "versus": []
  },
  "3174": {
    "name": "Athene's Unholy Grail",
    "value": 0.6,
    "users": [
      [types.ap, types.heals, types.support, types.mana]
    ],
    "versus": [types.ap]
  },
  "3190": {
    "name": "Locket of the Iron Solari",
    "value": 0.8,
    "users": [
      [types.support],
      [types.tank, types.support]
    ],
    "versus": []
  },
  "3222": {
    "name": "Mikael's Crucible",
    "value": 0.2,
    "users": [
      [types.heals, types.support, types.mana]
    ],
    "versus": []
  },
  "3285": {
    "name": "Luden's Echo",
    "value": 0.7,
    "users": [
      [types.ap, types.poke, types.dps]
    ],
    "versus": []
  },
  "3504": {
    "name": "Ardent Censer",
    "value": 0.5,
    "users": [
      [types.heals, types.support, types.ap, types.mana]
    ],
    "versus": []
  },
  "3508": {
    "name": "Essence Reaver",
    "value": 0.5,
    "users": [
      [types.mana, types.ad, types.crit, types.ranged, types.dps]
    ],
    "versus": []
  },
  "3742": {
    "name": "Dead Man's Plate",
    "value": 0.4,
    "users": [
      [types.tank]
    ],
    "versus": [types.ad]
  },
  "3748": {
    "name": "Titanic Hydra",
    "value": 0.5,
    "users": [
      [types.ad, types.tank, types.dive, types.melee, types.dps]
    ],
    "versus": []
  },
  "3800": {
    "name": "Righteous Glory",
    "value": 0.4,
    "users": [
      [types.tank, types.mana, types.dive, types.support]
    ],
    "versus": []
  },
  "3814": {
    "name": "Edge of Night",
    "value": 0.4,
    "users": [
      [types.ad, types.lethality, types.dps]
    ],
    "versus": [types.ap]
  }
};

const adc = [3006, 3085, 3031, 3094, 3072, 3033];

Object.defineProperty(exports, 'adc', {
    value: adc
});

Object.defineProperty(exports, 'finalItems', {
    value: final
});