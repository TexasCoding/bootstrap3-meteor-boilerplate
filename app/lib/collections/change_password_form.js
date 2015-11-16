Schema.ChangePasswordForm = new SimpleSchema({
  currentPassword: {
    type: String,
    label: "Current Password",
    min: 6
  },
  password: {
    type: String,
    label: "New Password",
    min: 6,
    custom: function() {
      if (this.value === this.field('currentPassword').value) {
        return "passwordSame";
      }
    }
  },
  passwordConfirmation: {
    type: String,
    min: 6,
    label: "New Password Confirmation",
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "passwordMissmatch";
      }
    }
  }
});
