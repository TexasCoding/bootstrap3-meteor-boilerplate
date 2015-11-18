/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  usersProfileImageUpdate: function(userId, imagesURL) {
    return Meteor.users.update(userId, {
      $set: imagesURL
    });
  },
  usersProfileUpdate: function(profile) {
    return Meteor.users.update({
      _id: Meteor.userId
    }, {
      $set: {
        "profile.firstName": profile.firstName,
        "profile.lastName": profile.lastName,
        "profile.phone": profile.phone,
        "profile.fax": profile.fax,
        "profile.cell": profile.cell,
        "profile.address.address1": profile.address.address1,
        "profile.address.address2": profile.address.address2,
        "profile.address.city": profile.address.city,
        "profile.address.state": profile.address.state,
        "profile.address.zip": profile.address.zip,
      }
    });


  },
  isRegisteredEmail: function(email) {
    var user = Meteor.users.findOne({
      "emails.address": email.toLowerCase()
    });

    return user ? true : false;
  },
  accountsIsUsernameAvailable: function(username) {
    var user = Meteor.users.findOne({
      username: username
    });

    return user ? false : true;
  },
  accountsIsEmailAvailable: function(email) {
    var user = Meteor.users.findOne({
      "emails.address": email.toLowerCase()
    });

    return user ? false : true;
  }
});
