/*****************************************************************************/
/* AuthChangePassword: Event Handlers */
/*****************************************************************************/
Template.AuthChangePassword.events({
  "submit #authChangePassword": function(e, tmpl) {
    e.preventDefault();
    Session.set('loadingState', true);
    var currentPassword = $('[name=currentPassword]').val();
    var newPassword = $('[name=password]').val();
    var newPasswordRepeated = $('[name=passwordConfirmation]').val();

    Accounts.changePassword(currentPassword, newPassword, function(error) {
      Session.set('loadingState', false);
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
/* AuthChangePassword: Helpers */
/*****************************************************************************/
Template.AuthChangePassword.helpers({
  userEmail: function() {
    return Meteor.user().emails[0].address;
  }
});
