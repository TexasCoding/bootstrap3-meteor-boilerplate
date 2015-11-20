Schema.UserUpdateForm = new SimpleSchema({
  username: {
    type: String,
    unique: true,
    custom: function() {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("accountsIsUsernameAvailable", this.value, function(error, result) {
          if (!result) {
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "username",
              type: "notUnique"
            }]);
          }
        });
      }
    },
    regEx: /^[a-zA-Z0-9]{2,25}$/
  },
  email: {
    type: String,
    unique: true,
    custom: function() {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("accountsIsEmailAvailable", this.value, function(error, result) {
          if (!result) {
            Schema.UserForm.namedContext("authRegister").addInvalidKeys([{
              name: "email",
              type: "notUnique"
            }]);
          }
        });
      }
    },
    regEx: SimpleSchema.RegEx.Email
  },
  password: {
    type: String,
    label: "Password",
    min: 6
  },
  passwordConfirmation: {
    type: String,
    min: 6,
    label: "Password Confirmation",
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "passwordMissmatch";
      }
    }
  },

  profile: {
    type: Schema.UserProfile
  }
});
