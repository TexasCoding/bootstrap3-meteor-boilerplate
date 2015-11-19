UsersProfileController = RouteController.extend({
  action: function() {
    this.render();
  },
  onBeforeAction: function() {
    if (!Meteor.user()) {
      FlashMessages.clear();
      FlashMessages.sendWarning("You must be logged in to access this area.");
      Router.go('AuthLogin');
    } else {
      this.next();
    }
  },
  onAfterAction: function() {
    var title = 'User Profile' + ' | ' + SITE_TITLE;
    var description = 'view user profile.';
    SEO.set({
      title: title,
      meta: {
        'description': description
      },
      og: {
        'title': title,
        'description': description
      }
    });
  }
});
