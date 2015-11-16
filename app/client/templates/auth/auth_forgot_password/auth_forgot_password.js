/*****************************************************************************/
/* AuthForgotPassword: Event Handlers */
/*****************************************************************************/
Template.AuthForgotPassword.events({
  "submit #authForgotPassword": function(e, tmpl) {
    e.preventDefault();
    Session.set('loadingState', true);
    var email = $('[name=email]').val().toLowerCase();

    if (email) {
      Accounts.forgotPassword({
        email: email
      });
      Session.set('loadingState', false);
      FlashMessages.clear();
      FlashMessages.sendInfo('Sent a reset password link to <b>' + email + '</b>.');
    } else {
      Session.set('loadingState', false);
      FlashMessages.clear();
      FlashMessages.sendError('Please enter a valid email address.');
    }
  }
});

/*****************************************************************************/
/* AuthForgotPassword: Helpers */
/*****************************************************************************/
Template.AuthForgotPassword.helpers({});

/*****************************************************************************/
/* AuthForgotPassword: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthForgotPassword.onCreated(function() {});

Template.AuthForgotPassword.onRendered(function() {});

Template.AuthForgotPassword.onDestroyed(function() {});
