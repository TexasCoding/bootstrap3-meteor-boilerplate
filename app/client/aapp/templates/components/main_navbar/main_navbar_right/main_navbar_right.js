/*****************************************************************************/
/* MainNavbarRight: Event Handlers */
/*****************************************************************************/
Template.MainNavbarRight.events({
  "click .logout": function(event, template) {
    event.preventDefault();

    Meteor.logout();
    FlashMessages.clear();
    FlashMessages.sendInfo('You have been logged out.');
    Router.go('StaticHome');
  }
});
