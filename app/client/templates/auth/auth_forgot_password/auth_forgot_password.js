/*****************************************************************************/
/* AuthForgotPassword: Event Handlers */
/*****************************************************************************/
Template.AuthForgotPassword.events({
  "submit #authForgotPassword": function(e, tmpl) {
    e.preventDefault();

    var email = $('[name=email]').val().toLowerCase();


    // You will probably want more robust validation than this!
    if (email) {
      var verify = Accounts.forgotPassword({email: email});
      console.log(verify);
      FlashMessages.clear();
      FlashMessages.sendInfo('Sent a reset password link to ' + email + '.');
    } else {
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
