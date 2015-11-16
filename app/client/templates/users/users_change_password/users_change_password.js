/*****************************************************************************/
/* UsersChangePassword: Event Handlers */
/*****************************************************************************/
Template.UsersChangePassword.events({
  "submit #usersChangePassword": function(e, tmpl) {
    e.preventDefault();

    var currentPassword = $('[name=currentPassword]').val();
    var newPassword = $('[name=password]').val();
    var newPasswordRepeated = $('[name=passwordConfirmation]').val();

    Accounts.changePassword(currentPassword, newPassword, function(error) {
      if (error) {
        FlashMessages.clear();
        FlashMessages.sendError('There was an error: ' + error.reason);
      } else {
        FlashMessages.clear();
        FlashMessages.sendInfo('Your password has been changed.');
        Router.go('UsersProfile', {
          _id: Meteor.userId()
        });
      }
    });


  }
});

/*****************************************************************************/
/* UsersChangePassword: Helpers */
/*****************************************************************************/
Template.UsersChangePassword.helpers({
  userEmail: function() {
    return Meteor.user().emails[0].address;
  }
});

/*****************************************************************************/
/* UsersChangePassword: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersChangePassword.onCreated(function() {});

Template.UsersChangePassword.onRendered(function() {});

Template.UsersChangePassword.onDestroyed(function() {});
