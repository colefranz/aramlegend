'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    riotApi = require('./server/riotApi'),
    Items = require('./server/Items'),
    finalItems = Items.finals,
    boots = Items.boots,
    Champs = require('./server/Champions').get(),

    app = module.exports.app = exports.app = express(),
    port = process.argv[2] || 3000;

// if asked for a file, look for it in app
app.use(express.static(path.join(__dirname, 'dev')));
app.use(bodyParser.json());

// if that file isn't found serve up the html as we want
// the app the handle every other route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.post('/summoners', function(req, res) {
  console.log(req.body);
  if (req.body.name === undefined) {
    res.status(400).send({msg: 'Summoner name was empty.'});

    return;
  }
   res.setHeader('Content-Type', 'application/json');

  riotApi.getSummonerId(req.body.name)
    .then(function(summoner) {
      return riotApi.getCurrentGame(summoner.id);
    })
    .then(function(currentGame) {
      generateBuilds(currentGame.participants);
      res.json(currentGame);
    }, function(status) {
      res.status(status || 500).send();
    });
});

function generateBuilds(players) {
  let blueTeam = {},
      redTeam = {};

  blueTeam.players = players.filter(function(player) {
    return player.teamId === 100;
  });

  redTeam.players = players.filter(function(player) {
    return player.teamId === 200;
  });

  // make a team Model i think
  getTeamComp(blueTeam);
  getTeamComp(redTeam);

  blueTeam.players.forEach(function(player) {
    findBestBuild(player);
  });

  redTeam.players.forEach(function(player) {
    findBestBuild(player);
  });
}

function getTeamComp(team) {
  var comp = [];

  team.players.forEach(function(player) {
    comp = comp.concat(player.champ.types);
  });

  team.comp = comp;
}

function findBestBuild(player) {
  let champTypes = player.champ.types,
      build = [],
      bootItems = groupGetGoodnessOfFit(champTypes, boots, 1), // get 1 boot
      coreItems = groupGetGoodnessOfFit(champTypes, finalItems, 5); // get 5 items

  // probably do this better - either set everything here or something else
  coreItems.map(function(item) {
    item.value = finalItems[item.item].value;
  });

  coreItems = orderItemsByValue(coreItems);

  build = bootItems.concat(coreItems);

  player.builds = riotApi.fillBuildsObject(build);
}

function groupGetGoodnessOfFit(types, options, groupSize) {
  let group = [],
      smallest = {
        fit: -1,
        index: undefined
      };

  for (let option in options) {
    let fit = getGoodnessOfFit(types, options[option]);
    if (fit > smallest.fit) {
      if (group.length === groupSize) {
        group[smallest.index] = {item: option, fit: fit};
      } else {
        group.push({item: option, fit: fit});
      }
      smallest = findSmallestFit(group);
    }
  }

  return group;
}

//TODO NEEDS OTHER TEAM DATA
function getGoodnessOfFit(types, item) {
  let iLength,
      tLength,
      matches = 0;

  if (item.users.length === 0) {
    return 1;
  }

  iLength = item.users[0].length;
  tLength = types.length;

  types.forEach(function(type) {
    if (item.users[0].indexOf(type) !== -1) {
      matches++;
    }
  });

  return (matches / iLength) + (matches / 10);
}

//TODO needs better way of handling
function orderItemsByValue(arr) {
  arr.sort(function(a, b) {
    return a.value < b.value;
  });

  return arr;
}

function findSmallestFit(arr) {
  var smallest = 10, index;

  arr.forEach(function(ele, i) {
    if (ele.fit < smallest) {
      smallest = ele.fit;
      index = i;
    }
  });
  return {
    fit: smallest,
    index: index
  };
}


app.listen(port, function() {
  console.log('Listening on ' + port);
});