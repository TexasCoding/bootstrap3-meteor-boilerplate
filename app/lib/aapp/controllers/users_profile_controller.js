UsersProfileController = RouteController.extend({
  action: function() {
    this.render();
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
