/*****************************************************************************/
/* AdminUsers: Event Handlers */
/*****************************************************************************/
Template.AdminUsers.events({
});

/*****************************************************************************/
/* AdminUsers: Helpers */
/*****************************************************************************/
Template.AdminUsers.helpers({
  users: function(){
    return Meteor.users.find({});
  }
});

/*****************************************************************************/
/* AdminUsers: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminUsers.onCreated(function () {
});

Template.AdminUsers.onRendered(function () {
});

Template.AdminUsers.onDestroyed(function () {
});
