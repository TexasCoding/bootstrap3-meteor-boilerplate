Meteor.publish('profileImage', function (imageId) {
  return Images.find({_id: imageId});
});
