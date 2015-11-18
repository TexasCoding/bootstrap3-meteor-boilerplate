Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function() {
    if (Meteor.user()) {
      Meteor.subscribe("profileImage", Meteor.user().profile.image.imageId);
    }
  },
  action: function() {
    if (!this.ready()) {
      this.render('Loading');
    }
  }

});

/**
 * STATIC
 */
Router.route('/', {
  name: 'StaticHome',
  controller: 'StaticHomeController',
  where: 'client'
});

Router.route('/about', {
  name: 'StaticAbout',
  controller: 'StaticAboutController',
  where: 'client'
});

Router.route('/contact', {
  name: 'StaticContact',
  controller: 'StaticContactController',
  where: 'client'
});

/**
 * Auth
 */
Router.route('/login', {
  name: 'AuthLogin',
  controller: 'AuthLoginController',
  where: 'client'
});

Router.route('/register', {
  name: 'AuthRegister',
  controller: 'AuthRegisterController',
  where: 'client'
});

Router.route('/forgot_password', {
  name: 'AuthForgotPassword',
  controller: 'AuthForgotPasswordController',
  where: 'client'
});

Router.route('/reset_password/:token', {
  name: 'AuthResetPassword',
  controller: 'AuthResetPasswordController',
  where: 'client'
});

Router.route('/:_id/change_passwword', {
  name: 'AuthChangePassword',
  controller: 'AuthChangePasswordController',
  where: 'client'
});


/**
 * USERS
 */
Router.route('/users/:_id/profile', {
  name: 'UsersProfile',
  controller: 'UsersProfileController',
  where: 'client'
});

Router.route('/users/:_id/profile/edit', {
  name: 'UsersProfileEdit',
  controller: 'UsersProfileEditController',
  where: 'client'
});
