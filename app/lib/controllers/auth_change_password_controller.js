AuthChangePasswordController = RouteController.extend({
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
    var title = 'Change Your Password' + ' | ' + SITE_TITLE;
    var description = 'change your users password.';
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
