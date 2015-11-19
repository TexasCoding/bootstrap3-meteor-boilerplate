Meteor.publish('profileImage', function(imageId) {
  return Images.find({
    _id: imageId
  });
});

Meteor.publish("adminUsers", function(userId) {
  if (Roles.userIsInRole(userId, ['site-admin'], Roles.GLOBAL_GROUP)) {
    return Meteor.users.find({}, {
      fields: {
        username: 1,
        emails: 1,
        createdAt: 1,
        profile: 1,
        roles: 1
      }
    });
  } else {
    throw new Meteor.Error('Access not permitted!');
  }
});

Meteor.publish("adminRoles", function(userId) {
  if (Roles.userIsInRole(userId, ['site-admin'], Roles.GLOBAL_GROUP)) {
    return Meteor.roles.find({});
  } else {
    throw new Meteor.Error('Access not permitted!');
  }
});
