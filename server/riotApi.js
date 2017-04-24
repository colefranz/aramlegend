(function(exports) {
'use strict';
  var key = 'a684fb39-3d45-4c4a-af78-677164fabd9a',
      https = require('https'),
      q = require('Q'),
      Items = require('./Items'),
      Champions = require('./Champions').get(),
      champData,
      getChampImageUrl,
      itemData,
      getItemImageUrl,
      version;

  (function getChampData() {
    return getUrl('https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/champion?champData=image,tags,partype&dataById=true&api_key=' + key);
  })().then(function(res) {
    champData = res.data;
    getChampImageUrl = createImageUrlFunction(champData);
    version = res.version;
    writeItemDataToFile();
  });

  (function getItemData() {
    return getUrl('https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/item?itemListData=image,maps&api_key=' + key);
  })().then(function(res) {
    itemData = res.data;
    getItemImageUrl = createImageUrlFunction(itemData);
  });

  exports.getCurrentGame = function(id, region) {
    return getUrl('https://na.api.riotgames.com/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/' + id + '?api_key=' + key)
      .then(function(currentGame) {
        currentGame.participants.forEach(function(participant) {
          participant.champ = {
            icon: getChampImageUrl(participant.championId),
            name: champData[participant.championId].name,
            splash: getChampSplashUrl(participant.championId),
            types: Champions[participant.championId].types
          };
        });

        return currentGame;
      });
  };

  exports.getSummonerId = function(name, region) {
    return getUrl('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + name + '?api_key=' + key);
  };

  exports.fillBuildsObject = function(build) {
    return build.map(function(obj) {
      let item = itemData[obj.item];

      return {
        id: obj.item,
        icon: getItemImageUrl(obj.item),
        name: item.name,
        description: item.description
      };
    });
  }

  function createImageUrlFunction(data) {
    return function(id) {
      let name = data[id].image.full,
          group = data[id].image.group;

      return 'http://ddragon.leagueoflegends.com/cdn/' + version + '/img/' + group + '/' + name;
    };
  }

  function getChampSplashUrl(id) {
    var name = champData[id].key;

    return 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + name + '_0.jpg';
  }

  function getUrl(url) {
    let deferred = q.defer();

    https.get(url, function(res) {
      if (res.statusCode !== 200) {
        deferred.reject(res.statusCode);
      }

      let rawData = '';

      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        try {
          deferred.resolve(JSON.parse(rawData));
        } catch (e) {
          deferred.reject(e.message);
        }
      });
    });

    return deferred.promise;
  }

  function writeItemDataToFile() {
    let fs = require('fs'),
        data = {};

    for (let item in champData) {
        data[item] = {
          name: champData[item].name,
          types: []
        };
    }
    fs.writeFile('test.json', JSON.stringify(data, null, 2));
  }

  // (function () {
  //   let fs = require('fs'),
  //       finalItems = Items.finalItems,
  //       test= {};

  //   for (let item in finalItems) {
  //     test[item] = finalItems[item];
  //     console.log(test[item]);
  //     test[item].users = [];
  //     test[item].versus = [];
  //   }
  //   console.log(test);
  //   fs.writeFile('2.json', JSON.stringify(test, null, 2));
  // })();
})(exports);