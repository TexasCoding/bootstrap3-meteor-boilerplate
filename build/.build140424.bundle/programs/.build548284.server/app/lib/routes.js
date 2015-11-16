(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/routes.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
  layoutTemplate: 'MasterLayout',                                      // 2
  loadingTemplate: 'Loading',                                          // 3
  notFoundTemplate: 'NotFound'                                         // 4
});                                                                    //
                                                                       //
Router.route('/', {                                                    // 8
  name: 'StaticHome',                                                  // 9
  controller: 'StaticHomeController',                                  // 10
  where: 'client'                                                      // 11
});                                                                    //
                                                                       //
Router.route('/about', {                                               // 14
  name: 'StaticAbout',                                                 // 15
  controller: 'StaticAboutController',                                 // 16
  where: 'client'                                                      // 17
});                                                                    //
                                                                       //
Router.route('/contact', {                                             // 20
  name: 'StaticContact',                                               // 21
  controller: 'StaticContactController',                               // 22
  where: 'client'                                                      // 23
});                                                                    //
                                                                       //
Router.route('/login', {                                               // 26
  name: 'AuthLogin',                                                   // 27
  controller: 'AuthLoginController',                                   // 28
  where: 'client'                                                      // 29
});                                                                    //
                                                                       //
Router.route('/register', {                                            // 32
  name: 'AuthRegister',                                                // 33
  controller: 'AuthRegisterController',                                // 34
  where: 'client'                                                      // 35
});                                                                    //
                                                                       //
Router.route('/users/:_id/profile', {                                  // 38
  name: 'UsersProfile',                                                // 39
  controller: 'UsersProfileController',                                // 40
  where: 'client'                                                      // 41
});                                                                    //
                                                                       //
Router.route('/users/:_id/profile/edit', {                             // 44
  name: 'UsersProfileEdit',                                            // 45
  controller: 'UsersProfileEditController',                            // 46
  where: 'client'                                                      // 47
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
