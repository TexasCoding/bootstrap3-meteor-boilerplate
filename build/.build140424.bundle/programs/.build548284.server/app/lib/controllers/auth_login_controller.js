(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/controllers/auth_login_controller.js                            //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
AuthLoginController = RouteController.extend({                         // 1
                                                                       //
  // A place to put your subscriptions                                 //
  // this.subscribe('items');                                          //
  // // add the subscription to the waitlist                           //
  // this.subscribe('item', this.params._id).wait();                   //
                                                                       //
  subscriptions: function () {},                                       // 8
                                                                       //
  // Subscriptions or other things we want to "wait" on. This also     //
  // automatically uses the loading hook. That's the only difference between
  // this option and the subscriptions option above.                   //
  // return Meteor.subscribe('post', this.params._id);                 //
                                                                       //
  waitOn: function () {},                                              // 15
                                                                       //
  // A data function that can be used to automatically set the data context for
  // our layout. This function can also be used by hooks and plugins. For
  // example, the "dataNotFound" plugin calls this function to see if it
  // returns a null value, and if so, renders the not found template.  //
  // return Posts.findOne({_id: this.params._id});                     //
                                                                       //
  data: function () {},                                                // 23
                                                                       //
  // You can provide any of the hook options                           //
                                                                       //
  onRun: function () {                                                 // 27
    this.next();                                                       // 28
  },                                                                   //
  onRerun: function () {                                               // 30
    this.next();                                                       // 31
  },                                                                   //
  onBeforeAction: function () {                                        // 33
    if (Meteor.loggingIn()) {                                          // 34
      this.render('Loading');                                          // 35
    } else {                                                           //
      this.next();                                                     // 37
    }                                                                  //
  },                                                                   //
                                                                       //
  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.                                            //
  // Example:                                                          //
  //  action: 'myActionFunction'                                       //
                                                                       //
  action: function () {                                                // 49
    this.render();                                                     // 50
  },                                                                   //
  onAfterAction: function () {},                                       // 52
  onStop: function () {}                                               // 53
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=auth_login_controller.js.map
