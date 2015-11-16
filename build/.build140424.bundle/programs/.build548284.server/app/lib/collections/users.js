(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/users.js                                            //
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
    max: 25,                                                           // 18
    optional: false                                                    // 19
  },                                                                   //
  lastName: {                                                          // 21
    type: String,                                                      // 22
    label: 'Last name',                                                // 23
    regEx: /^[A-Za-z _]*$/,                                            // 24
    max: 25,                                                           // 25
    optional: false                                                    // 26
  },                                                                   //
  address: {                                                           // 28
    type: Schema.Address,                                              // 29
    optional: false                                                    // 30
  },                                                                   //
  phone: {                                                             // 32
    type: String,                                                      // 33
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 34
    optional: true                                                     // 35
  },                                                                   //
  fax: {                                                               // 37
    type: String,                                                      // 38
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 39
    optional: true                                                     // 40
  },                                                                   //
  cell: {                                                              // 42
    type: String,                                                      // 43
    regEx: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,       // 44
    optional: true                                                     // 45
  },                                                                   //
  birthday: {                                                          // 47
    type: Date,                                                        // 48
    optional: true                                                     // 49
  },                                                                   //
  gender: {                                                            // 51
    type: String,                                                      // 52
    allowedValues: ['Male', 'Female'],                                 // 53
    optional: true                                                     // 54
  },                                                                   //
  organization: {                                                      // 56
    type: String,                                                      // 57
    optional: true                                                     // 58
  },                                                                   //
  website: {                                                           // 60
    type: String,                                                      // 61
    regEx: SimpleSchema.RegEx.Url,                                     // 62
    optional: true                                                     // 63
  },                                                                   //
  bio: {                                                               // 65
    type: String,                                                      // 66
    optional: true                                                     // 67
  },                                                                   //
  country: {                                                           // 69
    type: Schema.UserCountry,                                          // 70
    optional: true                                                     // 71
  }                                                                    //
});                                                                    //
                                                                       //
Schema.User = new SimpleSchema({                                       // 75
  username: {                                                          // 76
    type: String,                                                      // 77
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 81
  },                                                                   //
  emails: {                                                            // 83
    type: Array,                                                       // 84
    // For accounts-password, either emails or username is required, but not both. It is OK to make this
    // optional here because the accounts-password package does its own validation.
    // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
    optional: true                                                     // 88
  },                                                                   //
  "emails.$": {                                                        // 90
    type: Object                                                       // 91
  },                                                                   //
  "emails.$.address": {                                                // 93
    type: String,                                                      // 94
    regEx: SimpleSchema.RegEx.Email                                    // 95
  },                                                                   //
  "emails.$.verified": {                                               // 97
    type: Boolean                                                      // 98
  },                                                                   //
  createdAt: {                                                         // 100
    type: Date,                                                        // 101
    autoValue: function () {                                           // 102
      if (this.isInsert) {                                             // 103
        return new Date();                                             // 104
      } else if (this.isUpsert) {                                      //
        return {                                                       // 106
          $setOnInsert: new Date()                                     // 107
        };                                                             //
      } else {                                                         //
        this.unset();                                                  // 110
      }                                                                //
    }                                                                  //
  },                                                                   //
  updatedAt: {                                                         // 114
    type: Date,                                                        // 115
    autoValue: function () {                                           // 116
      if (this.isUpdate) {                                             // 117
        return new Date();                                             // 118
      }                                                                //
    },                                                                 //
    denyInsert: true,                                                  // 121
    optional: true                                                     // 122
  },                                                                   //
  profile: {                                                           // 124
    type: Schema.UserProfile,                                          // 125
    optional: true                                                     // 126
  },                                                                   //
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {                                                          // 129
    type: Object,                                                      // 130
    optional: true,                                                    // 131
    blackbox: true                                                     // 132
  },                                                                   //
  // Add `roles` to your schema if you use the meteor-roles package.   //
  // Option 1: Object type                                             //
  // If you specify that type as Object, you must also specify the     //
  // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.     //
  // Example:                                                          //
  // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);     //
  // You can't mix and match adding with and without a group since     //
  // you will fail validation in some cases.                           //
  roles: {                                                             // 142
    type: Object,                                                      // 143
    optional: true,                                                    // 144
    blackbox: true                                                     // 145
  }                                                                    //
});                                                                    //
                                                                       //
Meteor.users.attachSchema(Schema.User);                                // 149
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=users.js.map
