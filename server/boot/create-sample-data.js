module.exports = function(app) {
  var User = app.models.Account,
    Thing = app.models.UserThing;

  User.create([
    {username: 'bob', email: 'bob@loop.com', password: 'bob'},
    {username: 'sam', email: 'sam@loop.com', password: 'sam'}
  ], function (err, users) {
    Thing.create([
      {name: 'Gagdet', userId: users[0].id},
      {name: 'Gizmo', userId: users[1].id}
    ], function (err, things) {
      console.log('created sample data');
      console.log('users', users);
      console.log('things', things);

    });
  })
};
