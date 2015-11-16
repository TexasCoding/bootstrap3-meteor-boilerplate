/*****************************************************************************/
/* AuthResetPassword: Event Handlers */
/*****************************************************************************/
Template.AuthResetPassword.events({
  "submit #authResetPassword": function(e, tmpl) {
    e.preventDefault();

    var password = $('[name=password]').val();

    var token = Router.current().params.token;

    Accounts.resetPassword(token, password, function(err) {
      if (err) {
        FlashMessages.clear();
        FlashMessages.sendError('There was an error resetting your password.');
      } else {
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
Template.AuthResetPassword.onCreated(function() {});

Template.AuthResetPassword.onRendered(function() {});

Template.AuthResetPassword.onDestroyed(function() {});
