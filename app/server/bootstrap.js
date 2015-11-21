Meteor.startup(function() {
  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('reset_password/' + token);
  };
  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    url = url.replace('#/', '');
    return "Click this link to reset your password: " + url;
  };

  if(!Meteor.users.findOne({username: 'admin'})){
    // CREATE ADMIN USER
    var adminUser = {
      username: 'admin',
      email: 'admin@example.com',
      password: 'secret',
      profile: {
        firstName: 'Admin',
        lastName: 'User',
        phone: '(000) 000-0000',
        fax: '(000) 000-0000',
        cell: '(000) 000-0000',
        image: {
          imageId: ''
        },
        address: {
          address1: '123 Some Adress',
          address2: 'Suite 1',
          city: 'Nowhere',
          state: 'NY',
          zip: '00093'
        }
      }
    };

    var adminId;

    adminId = Accounts.createUser(adminUser);

    Roles.addUsersToRoles(adminId, ["site-admin"], Roles.GLOBAL_GROUP);
  }

  // FAKER USERS
  if (Meteor.users.find().count() < 10) {

    // CREATE 25 REGULAR USERS
    _.each(_.range(10), function() {


      var user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: 'secret',
        profile: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          phone: faker.phone.phoneNumberFormat(),
          fax: faker.phone.phoneNumberFormat(),
          cell: faker.phone.phoneNumberFormat(),
          image: {
            imageId: ''
          },
          address: {
            address1: faker.address.streetAddress(),
            address2: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode()
          }
        }
      };

      var userId;

      userId = Accounts.createUser(user);

      Roles.addUsersToRoles(userId, ["site-user"], Roles.GLOBAL_GROUP);

    });
  }



});
