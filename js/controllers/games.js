Bngo.NewGameController = Ember.ArrayController.extend({
  createGame: function () {
    // Get the todo title set by the "New Todo" text field
    var title = this.get('newGame');
    if (!title.trim()) { return; }

    // Create the new Game model
    var game = Bngo.Game.createRecord({
      title: title,
      participants: 'John, Mary'
    });

    // Clear the "New Todo" text field
    this.set('newGame', '');

    // Save the new model
    game.save();

    this.transitionTo('loadingGame');
  },
});