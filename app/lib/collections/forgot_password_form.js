Schema.ForgotPasswordForm = new SimpleSchema({
  email: {
    type: String,
    custom: function() {
      if (Meteor.isClient && this.isSet) {
        Meteor.call("isRegisteredEmail", this.value, function(error, result) {
          if (!result) {
            Schema.ForgotPasswordForm.namedContext("authForgotPassword").addInvalidKeys([{
              name: "email",
              type: "notVaildEmail"
            }]);
          }
        });
      }
    },
    regEx: SimpleSchema.RegEx.Email
  }
});
