/*****************************************************************************/
/* UsersProfileImage: Event Handlers */
/*****************************************************************************/
Template.UsersProfileImage.events({
  "change #profileImage": function(e, t) {
    e.preventDefault();

    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function(err, fileObj) {
        if (err) {
          FlashMessages.clear();
          FlashMessages.sendError(err.reason);
        } else {
          var userId = Meteor.userId();
          var imagesURL = {
            "profile.image.imageId": fileObj._id
          };

          Meteor.call("usersProfileImageUpdate", userId, imagesURL, function(err, res) {
            if (err) {
              FlashMessages.clear();
              FlashMessages.sendError(err.reason);
            }
            if (res) {
              FlashMessages.clear();
              FlashMessages.sendSuccess('Your profile image has been updated.');
            }
          });
        }
      });
    });

  }
});

/*****************************************************************************/
/* UsersProfileImage: Helpers */
/*****************************************************************************/
Template.UsersProfileImage.helpers({});

/*****************************************************************************/
/* UsersProfileImage: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersProfileImage.onCreated(function() {});

Template.UsersProfileImage.onRendered(function() {});

Template.UsersProfileImage.onDestroyed(function() {});
