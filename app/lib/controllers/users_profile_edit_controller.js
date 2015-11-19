UsersProfileEditController = RouteController.extend({
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
    var title = 'Edit Profile' + ' | ' + SITE_TITLE;
    var description = 'Edit user profile';
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
