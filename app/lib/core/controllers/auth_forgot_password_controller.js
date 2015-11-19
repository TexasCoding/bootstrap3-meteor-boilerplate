AuthForgotPasswordController = RouteController.extend({
  action: function() {
    this.render();
  },
  onAfterAction: function() {
    var title = 'Forgot Password' + ' | ' + SITE_TITLE;
    var description = 'forgot users password.';
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
