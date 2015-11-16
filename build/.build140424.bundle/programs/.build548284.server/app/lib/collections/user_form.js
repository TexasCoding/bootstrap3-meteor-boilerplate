(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/user_form.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Schema.UserCountry = new SimpleSchema({                                // 1
  name: {                                                              // 2
    type: String,                                                      // 3
    regEx: /^[A-Za-z _]*$/,                                            // 4
    label: 'Country'                                                   // 5
  },                                                                   //
  code: {                                                              // 7
    type: String,                                                      // 8
    regEx: /^[A-Z]{2}$/                                                // 9
  }                                                                    //
});                                                                    //
                                                                       //
Schema.UserProfile = new SimpleSchema({                                // 13
  firstName: {                                                         // 14
    type: String,                                                      // 15
    label: 'First name',                                               // 16
    regEx: /^[A-Za-z _]*$/,                                            // 17
    max: 25                                                            // 18
  },                                                                   //
  lastName: {                                                          // 20
    type: String,                                                      // 21
    label: 'Last name',                                                // 22
    regEx: /^[A-Za-z _]*$/,                                            // 23
    max: 25                                                            // 24
  },                                                                   //
  address: {                                                           // 26
    type: Schema.Address,                                              // 27
    optional: false                                                    // 28
  },                                                                   //
  phone: {                                                             // 30
    type: String,                                                      // 31
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 32
    optional: true                                                     // 33
  },                                                                   //
  fax: {                                                               // 35
    type: String,                                                      // 36
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 37
    optional: true                                                     // 38
  },                                                                   //
  cell: {                                                              // 40
    type: String,                                                      // 41
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 42
    optional: true                                                     // 43
  },                                                                   //
  birthday: {                                                          // 45
    type: Date,                                                        // 46
    optional: true                                                     // 47
  },                                                                   //
  gender: {                                                            // 49
    type: String,                                                      // 50
    allowedValues: ['Male', 'Female'],                                 // 51
    optional: true                                                     // 52
  },                                                                   //
  organization: {                                                      // 54
    type: String,                                                      // 55
    optional: true                                                     // 56
  },                                                                   //
  website: {                                                           // 58
    type: String,                                                      // 59
    regEx: SimpleSchema.RegEx.Url,                                     // 60
    optional: true                                                     // 61
  },                                                                   //
  bio: {                                                               // 63
    type: String,                                                      // 64
    optional: true                                                     // 65
  },                                                                   //
  country: {                                                           // 67
    type: Schema.UserCountry,                                          // 68
    optional: true                                                     // 69
  }                                                                    //
});                                                                    //
                                                                       //
Schema.UserForm = new SimpleSchema({                                   // 73
  username: {                                                          // 74
    type: String,                                                      // 75
    unique: true,                                                      // 76
    custom: function () {                                              // 77
      if (Meteor.isClient && this.isSet) {                             // 78
        Meteor.call("accountsIsUsernameAvailable", this.value, function (error, result) {
          if (!result) {                                               // 80
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "username",                                        // 82
              type: "notUnique"                                        // 83
            }]);                                                       //
          }                                                            //
        });                                                            //
      }                                                                //
    },                                                                 //
    regEx: /^[a-zA-Z0-9]{2,25}$/                                       // 89
  },                                                                   //
  email: {                                                             // 91
    type: String,                                                      // 92
    unique: true,                                                      // 93
    custom: function () {                                              // 94
      if (Meteor.isClient && this.isSet) {                             // 95
        Meteor.call("accountsIsEmailAvailable", this.value, function (error, result) {
          if (!result) {                                               // 97
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "email",                                           // 99
              type: "notUnique"                                        // 100
            }]);                                                       //
          }                                                            //
        });                                                            //
      }                                                                //
    },                                                                 //
    regEx: SimpleSchema.RegEx.Email                                    // 106
  },                                                                   //
  password: {                                                          // 108
    type: String,                                                      // 109
    label: "Password",                                                 // 110
    min: 6                                                             // 111
  },                                                                   //
  passwordConfirmation: {                                              // 113
    type: String,                                                      // 114
    min: 6,                                                            // 115
    label: "Password Confirmation",                                    // 116
    custom: function () {                                              // 117
      if (this.value !== this.field('password').value) {               // 118
        return "passwordMissmatch";                                    // 119
      }                                                                //
    }                                                                  //
  },                                                                   //
                                                                       //
  profile: {                                                           // 124
    type: Schema.UserProfile                                           // 125
  }                                                                    //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=user_form.js.map
