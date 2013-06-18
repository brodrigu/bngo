Bngo.Router.map(function () {
  this.resource('games', { path: '/' }, function () {
    // additional child routes
  });
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
