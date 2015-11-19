/*****************************************************************************/
/* AuthLogin: Event Handlers */
/*****************************************************************************/
Template.AuthLogin.events({
  "submit #authLogin": function(event) {
    event.preventDefault();
    Session.set('loadingState', true);
    
    var email = $('[name=email]').val().toLowerCase();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(email, password, function(err) {
      Session.set('loadingState', false);
      if (err) {
        FlashMessages.clear();
        FlashMessages.sendError("Errors while logging in. Make sure email and password are correct.");
      } else {
        FlashMessages.clear();
        FlashMessages.sendSuccess("You have been logged in.");
        Router.go('StaticHome');
      }
    });


  }
});

/*****************************************************************************/
/* AuthLogin: Helpers */
/*****************************************************************************/
Template.AuthLogin.helpers({

});

/*****************************************************************************/
/* AuthLogin: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthLogin.onCreated(function() {});

Template.AuthLogin.onRendered(function() {});

Template.AuthLogin.onDestroyed(function() {});
