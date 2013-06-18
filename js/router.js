Bngo.Router.map(function () {
  this.resource('games', { path: '/' }, function () {
    // additional child routes
  });

  this.route('newGame');
  this.route('joinGame');
});

Bngo.GamesRoute = Ember.Route.extend({
  model: function () {
    return Bngo.Game.find();
  }
});

Bngo.GamesIndexRoute = Ember.Route.extend({
  model: function () {
    return Bngo.Game.find();
  }
});

Bngo.NewGameRoute = Ember.Route.extend({
  model: function () {
    return Bngo.Game.find();
  }
});

Bngo.JoinGameRoute = Ember.Route.extend({
  model: function () {
    return Bngo.Game.find();
  }
});
