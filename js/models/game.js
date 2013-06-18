Bngo.Game = DS.Model.extend({
  title: DS.attr('string'),
  participants: DS.attr('string'),
  isActive: DS.attr('boolean'),
});

Bngo.Game.FIXTURES = [
  {
    id: 1,
    title: 'Team Meeting',
    participants: 'Pieter, Mac, Marcus',
    isActive: true
  },
  {
    id: 2,
    title: 'UI Team Tactical',
    participants: 'Brad, Dave, Sushant',
    isActive: false
  }
];