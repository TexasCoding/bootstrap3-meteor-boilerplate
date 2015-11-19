AuthChangePasswordController = RouteController.extend({
  action: function() {
    this.render();
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
