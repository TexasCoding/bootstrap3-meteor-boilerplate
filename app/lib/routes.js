Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


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
