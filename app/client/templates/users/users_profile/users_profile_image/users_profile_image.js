/*****************************************************************************/
/* UsersProfileImage: Event Handlers */
/*****************************************************************************/
Template.UsersProfileImage.events({
  "change .btn-file": function(e, t) {
    var fileName = $('[name=profileImage]').get(0).files[0].name;

    console.log(fileName);

    $('#viewProfileImage').val(fileName);
  },
  "submit #usersProfileImage": function(e, t){
    e.preventDefault();

    
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
