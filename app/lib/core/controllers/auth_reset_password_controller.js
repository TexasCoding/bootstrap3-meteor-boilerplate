AuthResetPasswordController = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.loggingIn()) {
      this.render('Loading');
    }
    Accounts._resetPasswordToken = this.params.token;
    this.next();
  },
  action: function() {
    this.render();
  },
  onAfterAction: function() {
    var title = 'Reset Your Password' + ' | ' + SITE_TITLE;
    var description = 'reset your user password.';
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
