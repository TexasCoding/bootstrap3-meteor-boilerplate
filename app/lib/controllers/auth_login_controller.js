AuthLoginController = RouteController.extend({

  onBeforeAction: function() {
    if (Meteor.user()) {
      Router.go('StaticHome');
    }
    else if (Meteor.loggingIn()) {
      this.render('Loading');
    } else {
      this.next();
    }
  },
  action: function() {
    this.render();
  },
  onAfterAction: function() {
    var title = 'Login' + ' | ' + SITE_TITLE;
    var description = 'login to your account.';
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
