/*****************************************************************************/
/* AuthResetPassword: Event Handlers */
/*****************************************************************************/
Template.AuthResetPassword.events({
  "submit #authResetPassword": function(e, tmpl) {
    e.preventDefault();
    Session.set('loadingState', true);

    var password = $('[name=password]').val();

    Accounts.resetPassword(Session.get("RESET_PASSWORD"), password, function(err) {
      Session.set('loadingState', false);
      if (err) {
        Session.set("RESET_PASSWORD", "");
        FlashMessages.clear();
        FlashMessages.sendError('There was an error resetting your password.');
      } else {
        Session.set("RESET_PASSWORD", "");
        FlashMessages.clear();
        FlashMessages.sendInfo('Your password has been reset, and you have been logged in.');
        Router.go('UsersProfile', {
          _id: Meteor.userId()
        });
      }
    });
  }
});

/*****************************************************************************/
/* AuthResetPassword: Helpers */
/*****************************************************************************/
Template.AuthResetPassword.helpers({

});

/*****************************************************************************/
/* AuthResetPassword: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthResetPassword.onCreated(function() {
  if (Accounts._resetPasswordToken) {
    Session.set("RESET_PASSWORD", Accounts._resetPasswordToken);
  }
});

Template.AuthResetPassword.onRendered(function() {});

Template.AuthResetPassword.onDestroyed(function() {});
