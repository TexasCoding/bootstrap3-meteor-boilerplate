/*****************************************************************************/
/* UsersProfileImage: Event Handlers */
/*****************************************************************************/
Template.UsersProfileImage.events({
  "change #profileImage": function(e, t) {
    e.preventDefault();



    FS.Utility.eachFile(e, function(file) {
      Images.insert(file, function(err, fileObj) {
        if (err) {
          FlashMessages.clear();
          FlashMessages.sendError(err.reason);
        } else {
          Session.set('loadingState', true);
          var userId = Meteor.userId();
          var imagesURL = {
            "profile.image.imageId": fileObj._id
          };

          Meteor.call("usersProfileImageUpdate", userId, imagesURL, function(err, res) {
            Session.set('loadingState', false);
            if (err) {
              FlashMessages.clear();
              FlashMessages.sendError(err.reason);
            }
            if (res) {
              Session.set('loadingState', false);
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
