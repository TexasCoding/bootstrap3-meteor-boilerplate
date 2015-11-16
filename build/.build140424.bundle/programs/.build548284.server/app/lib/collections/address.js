(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/address.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Schema.Address = new SimpleSchema({                                    // 1
  address1: {                                                          // 2
    type: String,                                                      // 3
    label: 'Address 1',                                                // 4
    regEx: /^[A-Za-z0-9 _]*$/,                                         // 5
    max: 60                                                            // 6
  },                                                                   //
  address2: {                                                          // 8
    type: String,                                                      // 9
    label: 'Address 2',                                                // 10
    regEx: /^[A-Za-z0-9 _]*$/,                                         // 11
    max: 60,                                                           // 12
    optional: true                                                     // 13
  },                                                                   //
  city: {                                                              // 15
    type: String,                                                      // 16
    label: 'City',                                                     // 17
    regEx: /^[A-Za-z _]*$/,                                            // 18
    max: 50                                                            // 19
  },                                                                   //
  state: {                                                             // 21
    type: String,                                                      // 22
    autoform: {                                                        // 23
      options: STATES_ARRAY                                            // 24
    },                                                                 //
    regEx: /^[A-Z]{2}$/                                                // 26
  },                                                                   //
  zip: {                                                               // 28
    type: String,                                                      // 29
    label: "Zip code",                                                 // 30
    regEx: /(^\d{5}$)|(^\d{5}-\d{4}$)/                                 // 31
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=address.js.map
