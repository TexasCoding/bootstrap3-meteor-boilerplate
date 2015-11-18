Handlebars.registerHelper('profileImage', function() {
  if (Meteor.user()) {
    return Images.findOne(Meteor.user().profile.image.imageId);
  }
});
