const types = require('./Constants').types;

// can either be support dps or tank in any given set
// each champ can have multiple roles of dps, tank, or support
// some select champs can have sets with two unique roles
var champs = {
  "1": {
    "name": "Annie",
    "types": [
      [types.dps, types.ap, types.ranged, types.mana, types.cc],
      [types.support, types.ap, types.ranged, types.mana, types.cc]
    ]
  },
  "2": {
    "name": "Olaf",
    "types": [types.tank, types.dive, types.ad, types.mana, types.melee]
  },
  "3": {
    "name": "Galio",
    "types": [
      [types.tank, types.support, types.melee, types.mana, types.dive, types.cc],
      [types.support, types.melee, types.mana, types.cc]
    ]
  },
  "4": {
    "name": "Twisted Fate",
    "types": [types.ap, types.ranged, types.aa, types.mana, types.poke, types.dps, types.cc]
  },
  "5": {
    "name": "Xin Zhao",
    "types": [
      [types.ad, types.melee, types.tank, types.dive, types.lethality, types.dps],
      [types.ad, types.melee, types.dps, types.dive, types.lethality, types.mana]
    ]
  },
  "6": {
    "name": "Urgot",
    "types": [types.ad, types.mana, types.tear, types.poke, types.ranged, types.dps, types.dive, types.cc]
  },
  "7": {
    "name": "LeBlanc",
    "types": [types.ap, types.ranged, types.mana, types.dps]
  },
  "8": {
    "name": "Vladimir",
    "types": [types.ap, types.ranged, types.dive, types.dps]
  },
  "9": {
    "name": "Fiddlesticks",
    "types": [types.ap, types.ranged, types.mana, types.dive, types.cc]
  },
  "10": {
    "name": "Kayle",
    "types": [types.ap, types.ad, types.ranged, types.aa, types.mana, types.as, types.dps]
  },
  "11": {
    "name": "Master Yi",
    "types": [types.ad, types.melee, types.aa, types.as, types.dps]
  },
  "12": {
    "name": "Alistar",
    "types": [types.tank, types.support, types.melee, types.mana, types.dive, types.cc]
  },
  "13": {
    "name": "Ryze",
    "types": [types.ap, types.ranged, types.mana, types.tear, types.dive, types.cc]
  },
  "14": {
    "name": "Sion",
    "types": [types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "15": {
    "name": "Sivir",
    "types": [types.ad, types.ranged, types.aa, types.as, types.mana, types.dps, types.crit]
  },
  "16": {
    "name": "Soraka",
    "types": [types.support, types.heals, types.ranged, types.mana]
  },
  "17": {
    "name": "Teemo",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.dot]
  },
  "18": {
    "name": "Tristana",
    "types": [types.ad, types.ranged, types.aa, types.as, types.dps, types.crit]
  },
  "19": {
    "name": "Warwick",
    "types": [types.ad, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "20": {
    "name": "Nunu",
    "types": [
      [types.tank, types.mana, types.melee, types.dot, types.cc],
      [types.support, types.tank, types.mana, types.melee, types.dot, types.cc],
      [types.ap, types.melee, types.poke, types.cc, types.dot, types.dps]
    ]
  },
  "21": {
    "name": "Miss Fortune",
    "types": [
      [types.ad, types.lethality, types.ranged, types.dps, types.mana, types.dot],
      [types.ap, types.ranged, types.dps, types.mana, types.dot]
    ]
  },
  "22": {
    "name": "Ashe",
    "types": [types.ad, types.ranged, types.aa, types.as, types.mana, types.poke, types.crit, types.dps]
  },
  "23": {
    "name": "Tryndamere",
    "types": [types.ad, types.melee, types.aa, types.as, types.dps]
  },
  "24": {
    "name": "Jax",
    "types": [types.ad, types.ap, types.melee, types.aa, types.dive, types.dps, types.cc]
  },
  "25": {
    "name": "Morgana",
    "types": [
      [types.ap, types.ranged, types.mana, types.dive, types.dps],
      [types.ap, types.ranged, types.support, types.mana, types.dive]
    ]
  },
  "26": {
    "name": "Zilean",
    "types": [
      [types.ap, types.ranged, types.mana, types.tear, types.dps, types.cc],
      [types.ap, types.ranged, types.mana, types.tear, types.support, types.cc]
    ]
  },
  "27": {
    "name": "Singed",
    "types": [types.ap, types.melee, types.tank, types.mana, types.dive, types.dot]
  },
  "28": {
    "name": "Evelynn",
    "types": [types.ap, types.ad, types.melee, types.dive, types.dps]
  },
  "29": {
    "name": "Twitch",
    "types": [types.ad, types.ranged, types.aa, types.as, types.lethality, types.crit, types.dps]
  },
  "30": {
    "name": "Karthus",
    "types": [types.ap, types.ranged, types.dive, types.dps, types.dot]
  },
  "31": {
    "name": "Cho'Gath",
    "types": [
      [types.tank, types.ap, types.melee, types.mana, types.cc],
      [types.ap, types.dps, types.melee, types.mana, types.dive, types.cc]
    ]
  },
  "32": {
    "name": "Amumu",
    "types": [
      [types.tank, types.ap, types.melee, types.mana, types.cc],
      [types.ap, types.dps, types.melee, types.mana, types.dive, types.cc, types.dot]
    ]
  },
  "33": {
    "name": "Rammus",
    "types": [types.tank, types.melee, types.mana, types.dive, types.cc]
  },
  "34": {
    "name": "Anivia",
    "types": [types.ap, types.ranged, types.mana, types.dps, types.cc]
  },
  "35": {
    "name": "Shaco",
    "types": [types.ap, types.melee, types.mana, types.dive, types.dps, types.dot, types.poke, types.cc]
  },
  "36": {
    "name": "Dr. Mundo",
    "types": [types.melee, types.tank, types.dive, types.poke]
  },
  "37": {
    "name": "Sona",
    "types": [
      [types.ap, types.heals, types.ranged, types.mana, types.aa, types.poke, types.cc, types.support],
      [types.ap, types.heals, types.support, types.mana, types.aa, types.poke, types.cc]
    ]
  },
  "38": {
    "name": "Kassadin",
    "types": [types.ap, types.melee, types.aa, types.dive, types.dps]
  },
  "39": {
    "name": "Irelia",
    "types": [types.ad, types.melee, types.aa, types.dps, types.dive, types.mana, types.cc]
  },
  "40": {
    "name": "Janna",
    "types": [types.ap, types.heals, types.ranged, types.mana, types.support]
  },
  "41": {
    "name": "Gangplank",
    "types": [types.ad, types.melee, types.aa, types.dps, types.crit]
  },
  "42": {
    "name": "Corki",
    "types": [
      [types.ad, types.ranged, types.aa, types.mana, types.poke, types.dps, types.crit],
      [types.ap, types.ranged, types.mana, types.poke, types.dps],
      [types.ad, types.ap, types.ranged, types.aa, types.mana, types.poke, types.dps]
    ]
  },
  "43": {
    "name": "Karma",
    "types": [
      [types.ap, types.heals, types.ranged, types.mana, types.poke, types.support, types.dot, types.cc],
      [types.ap, types.ranged, types.mana, types.poke, types.dps, types.dot, types.cc]
    ]
  },
  "44": {
    "name": "Taric",
    "types": [types.heals, types.melee, types.tank, types.mana, types.dive, types.support]
  },
  "45": {
    "name": "Veigar",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "48": {
    "name": "Trundle",
    "types": [types.ad, types.melee, types.aa, types.tank, types.dps, types.dive, types.dot]
  },
  "50": {
    "name": "Swain",
    "types": [types.ap, types.ranged, types.mana, types.dps, types.dive, types.dot, types.cc]
  },
  "51": {
    "name": "Caitlyn",
    "types": [types.ad, types.ranged, types.aa, types.dps, types.as, types.crit]
  },
  "53": {
    "name": "Blitzcrank",
    "types": [types.ap, types.melee, types.dive, types.support, types.cc]
  },
  "54": {
    "name": "Malphite",
    "types": [
      [types.tank, types.melee, types.mana, types.dive, types.cc],
      [types.ap, types.melee, types.tank, types.dive, types.mana, types.cc]
    ]
  },
  "55": {
    "name": "Katarina",
    "types": [types.ap, types.ad, types.melee, types.dive, types.dps]
  },
  "56": {
    "name": "Nocturne",
    "types": [types.ad, types.melee, types.lethality, types.tank, types.dps, types.dive, types.dot]
  },
  "57": {
    "name": "Maokai",
    "types": [types.ap, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "58": {
    "name": "Renekton",
    "types": [types.ad, types.melee, types.tank, types.dps, types.dive, types.dot]
  },
  "59": {
    "name": "Jarvan IV",
    "types": [types.ad, types.melee, types.tank, types.dps, types.dive, types.dot]
  },
  "60": {
    "name": "Elise",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dive, types.cc]
  },
  "61": {
    "name": "Orianna",
    "types": [types.ap, types.heals, types.ranged, types.mana, types.dps]
  },
  "62": {
    "name": "Wukong",
    "types": [types.ad, types.melee, types.aa, types.tank, types.dps, types.dive, types.dot]
  },
  "63": {
    "name": "Brand",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dot, types.dps, types.cc]
  },
  "64": {
    "name": "Lee Sin",
    "types": [types.ad, types.melee, types.tank, types.dps, types.dive, types.dot]
  },
  "67": {
    "name": "Vayne",
    "types": [types.ad, types.ranged, types.as, types.aa]
  },
  "68": {
    "name": "Rumble",
    "types": [types.ap, types.melee, types.dot, types.dps, types.dive]
  },
  "69": {
    "name": "Cassiopeia",
    "types": [types.ap, types.ranged, types.mana, types.tear, types.dive, types.dps, types.dot, types.cc]
  },
  "72": {
    "name": "Skarner",
    "types": [types.ad, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "74": {
    "name": "Heimerdinger",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "75": {
    "name": "Nasus",
    "types": [types.ap, types.melee, types.mana, types.poke, types.dot, types.dps, types.cc]
  },
  "76": {
    "name": "Nidalee",
    "types": [types.ap, types.heals, types.melee, types.mana, types.poke, types.dot, types.dps, types.dive]
  },
  "77": {
    "name": "Udyr",
    "types": [types.ad, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "78": {
    "name": "Poppy",
    "types": [types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "79": {
    "name": "Gragas",
    "types": [
      [types.ap, types.melee, types.dive, types.mana, types.dps],
      [types.ap, types.melee, types.dive, types.tank, types.support, types.mana]
    ]
  },
  "80": {
    "name": "Pantheon",
    "types": [types.ad, types.melee, types.lethality, types.dps, types.mana, types.dive, types.cc]
  },
  "81": {
    "name": "Ezreal",
    "types": [types.ad, types.tear, types.mana, types.ranged, types.poke, types.aa, types.dps]
  },
  "82": {
    "name": "Mordekaiser",
    "types": [types.ap, types.ad, types.melee, types.dive, types.dps, types.dot]
  },
  "83": {
    "name": "Yorick",
    "types": [types.ad, types.melee, types.tank, types.mana, types.dive]
  },
  "84": {
    "name": "Akali",
    "types": [types.ad, types.ap, types.melee, types.aa, types.dive, types.dps]
  },
  "85": {
    "name": "Kennen",
    "types": [types.ap, types.ranged, types.dive, types.dps, types.cc]
  },
  "86": {
    "name": "Garen",
    "types": [types.ad, types.melee, types.dive, types.lethality]
  },
  "89": {
    "name": "Leona",
    "types": [types.tank, types.support, types.melee, types.mana, types.dive, types.cc]
  },
  "90": {
    "name": "Malzahar",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc, types.dot]
  },
  "91": {
    "name": "Talon",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.dps]
  },
  "92": {
    "name": "Riven",
    "types": [types.ad, types.melee, types.dive, types.lethality]
  },
  "96": {
    "name": "Kog'Maw",
    "types": [
      [types.ad, types.ranged, types.aa, types.as, types.poke, types.mana, types.crit, types.dps],
      [types.ap, types.ranged, types.mana, types.tear, types.poke, types.dps]
    ]
  },
  "98": {
    "name": "Shen",
    "types": [types.melee, types.tank, types.dive, types.cc]
  },
  "99": {
    "name": "Lux",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.heals]
  },
  "101": {
    "name": "Xerath",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "102": {
    "name": "Shyvana",
    "types": [types.ad, types.melee, types.dive]
  },
  "103": {
    "name": "Ahri",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "104": {
    "name": "Graves",
    "types": [types.ad, types.ranged, types.dive, types.lethality, types.dps]
  },
  "105": {
    "name": "Fizz",
    "types": [types.ap, types.melee, types.dive, types.aa, types.dot]
  },
  "106": {
    "name": "Volibear",
    "types": [types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "107": {
    "name": "Rengar",
    "types": [types.ad, types.melee, types.dive, types.lethality]
  },
  "110": {
    "name": "Varus",
    "types": [types.ad, types.ranged, types.lethality, types.poke, types.as, types.mana, types.dps]
  },
  "111": {
    "name": "Nautilus",
    "types": [types.ap, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "112": {
    "name": "Viktor",
    "types": [types.ap, types.ranged, types.mana, types.dps, types.cc]
  },
  "113": {
    "name": "Sejuani",
    "types": [types.ap, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "114": {
    "name": "Fiora",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.dps]
  },
  "115": {
    "name": "Ziggs",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps]
  },
  "117": {
    "name": "Lulu",
    "types": [
      [types.ap, types.heals, types.aa, types.ranged, types.mana, types.dps, types.cc],
      [types.ap, types.heals, types.ranged, types.mana, types.support, types.cc]
    ]
  },
  "119": {
    "name": "Draven",
    "types": [types.ad, types.ranged, types.lethality, types.dps]
  },
  "120": {
    "name": "Hecarim",
    "types": [types.ad, types.aa, types.melee, types.tank, types.mana, types.dive, types.cc]
  },
  "121": {
    "name": "Kha'Zix",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.dps]
  },
  "122": {
    "name": "Darius",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.tank]
  },
  "126": {
    "name": "Jayce",
    "types": [types.ad, types.tear, types.poke, types.mana, types.dps, types.lethality]
  },
  "127": {
    "name": "Lissandra",
    "types": [types.ap, types.ranged, types.mana, types.dive, types.cc, types.dps]
  },
  "131": {
    "name": "Diana",
    "types": [types.ap, types.ranged, types.aa, types.mana, types.dive, types.cc, types.dps]
  },
  "133": {
    "name": "Quinn",
    "types": [types.ad, types.ranged, types.lethality, types.dps]
  },
  "134": {
    "name": "Syndra",
    "types": [types.ap, types.ranged, types.mana, types.dps, types.cc]
  },
  "136": {
    "name": "Aurelion Sol",
    "types": [types.ap, types.ranged, types.mana, types.dive, types.poke, types.dps, types.cc]
  },
  "143": {
    "name": "Zyra",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "150": {
    "name": "Gnar",
    "types": [types.ad, types.ranged, types.dive, types.dps, types.cc]
  },
  "154": {
    "name": "Zac",
    "types": [types.melee, types.tank, types.dive, types.cc]
  },
  "157": {
    "name": "Yasuo",
    "types": [types.ad, types.melee, types.dive, types.dps, types.crit]
  },
  "161": {
    "name": "Vel'Koz",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "163": {
    "name": "Taliyah",
    "types": [types.ap, types.ranged, types.mana, types.poke, types.dps, types.cc]
  },
  "164": {
    "name": "Camille",
    "types": [types.ad, types.melee, types.aa, types.dive, types.dps, types.cc]
  },
  "201": {
    "name": "Braum",
    "types": [types.ad, types.melee, types.tank, types.mana, types.dive, types.cc, types.support]
  },
  "202": {
    "name": "Jhin",
    "types": [types.ad, types.ranged, types.lethality, types.poke, types.as, types.mana, types.dps]
  },
  "203": {
    "name": "Kindred",
    "types": [types.ad, types.ranged, types.as, types.aa, types.dps, types.heals]
  },
  "222": {
    "name": "Jinx",
    "types": [types.ad, types.ranged, types.aa, types.dps, types.as, types.crit]
  },
  "223": {
    "name": "Tahm Kench",
    "types": [types.mana, types.melee, types.support, types.tank, types.cc]
  },
  "236": {
    "name": "Lucian",
    "types": [types.ad, types.ranged, types.aa, types.as, types.mana, types.crit, types.dps]
  },
  "238": {
    "name": "Zed",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.dps]
  },
  "240": {
    "name": "Kled",
    "types": [types.ad, types.melee, types.dps, types.dive, types.cc, types.aa]
  },
  "245": {
    "name": "Ekko",
    "types": [
      [types.ap, types.melee, types.aa, types.mana, types.dive, types.cc, types.dps],
      [types.ap, types.melee, types.mana, types.dive, types.cc, types.tank]
    ]
  },
  "254": {
    "name": "Vi",
    "types": [types.ad, types.melee, types.dive, types.lethality, types.cc]
  },
  "266": {
    "name": "Aatrox",
    "types": [types.ad, types.melee, types.dive, types.dps, types.cc]
  },
  "267": {
    "name": "Nami",
    "types": [types.ap, types.heals, types.ranged, types.mana, types.cc, types.support]
  },
  "268": {
    "name": "Azir",
    "types": [types.ap, types.ad, types.ranged, types.aa, types.mana, types.as, types.dps]
  },
  "412": {
    "name": "Thresh",
    "types": [types.heals, types.mana, types.support, types.dive, types.tank, types.cc]
  },
  "420": {
    "name": "Illaoi",
    "types": [types.ad, types.melee, types.dive, types.mana, types.dps]
  },
  "421": {
    "name": "Rek'Sai",
    "types": [types.ad, types.melee, types.tank, types.dive, types.cc, types.aa]
  },
  "427": {
    "name": "Ivern",
    "types": [types.ap, types.heals, types.mana, types.support, types.tank, types.cc]
  },
  "429": {
    "name": "Kalista",
    "types": [types.ad, types.ranged, types.aa, types.as, types.mana, types.dps]
  },
  "432": {
    "name": "Bard",
    "types": [types.ap, types.heals, types.ranged, types.mana, types.support, types.aa, types.cc]
  },
  "497": {
    "name": "Rakan",
    "types": [types.ap, types.heals, types.ranged, types.mana, types.support, types.cc]
  },
  "498": {
    "name": "Xayah",
    "types": [types.ad, types.ranged, types.aa, types.dps, types.as]
  }
};

//TEMP
var key;
for (key in champs) {
  if (champs[key].types[0].constructor === Array) {
    champs[key].types = champs[key].types[0];
  }
}

exports.get = function() {
  return champs;
};