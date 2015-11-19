UsersProfileEditController = RouteController.extend({
  action: function() {
    this.render();
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
