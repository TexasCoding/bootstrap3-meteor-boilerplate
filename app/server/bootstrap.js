Meteor.startup(function() {
  Accounts.urls.resetPassword = function (token) {
        return Meteor.absoluteUrl('reset_password/' + token);
    };
  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    url = url.replace('#/', '');
    return "Click this link to reset your password: " + url;
  };
});
