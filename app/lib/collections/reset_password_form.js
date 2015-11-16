Schema.ResetPasswordForm = new SimpleSchema({
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
  }
});
