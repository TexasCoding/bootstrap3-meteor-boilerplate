AuthRegisterController = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.loggingIn()) {
      this.render('Loading');
    } else {
      this.next();
    }
  },
  action: function() {
    this.render();
  },
  onAfterAction: function() {
    var title = 'Register Account' + ' | ' + SITE_TITLE;
    var description = 'register new account.';
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
