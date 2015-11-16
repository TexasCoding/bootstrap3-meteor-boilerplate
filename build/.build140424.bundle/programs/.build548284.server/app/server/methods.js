(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// server/methods.js                                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
/*****************************************************************************/
/*  Server Methods */                                                  //
/*****************************************************************************/
                                                                       //
Meteor.methods({                                                       // 5
  usersProfileUpdate: function (profile) {                             // 6
                                                                       //
    return Meteor.users.update({                                       // 8
      _id: Meteor.userId                                               // 9
    }, {                                                               //
      $set: {                                                          // 11
        profile: {                                                     // 12
          firstName: profile.firstName,                                // 13
          lastName: profile.lastName,                                  // 14
          phone: profile.phone,                                        // 15
          fax: profile.fax,                                            // 16
          cell: profile.cell,                                          // 17
          address: {                                                   // 18
            address1: profile.address.address1,                        // 19
            address2: profile.address.address2,                        // 20
            city: profile.address.city,                                // 21
            state: profile.address.state,                              // 22
            zip: profile.address.zip                                   // 23
          }                                                            //
        }                                                              //
      }                                                                //
    });                                                                //
  },                                                                   //
  accountsIsUsernameAvailable: function (username) {                   // 31
    var user = Meteor.users.findOne({                                  // 32
      username: username                                               // 33
    });                                                                //
                                                                       //
    return user ? false : true;                                        // 36
  },                                                                   //
  accountsIsEmailAvailable: function (email) {                         // 38
    var user = Meteor.users.findOne({                                  // 39
      "emails.address": email                                          // 40
    });                                                                //
                                                                       //
    return user ? false : true;                                        // 43
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=methods.js.map
