/*****************************************************************************/
/* AdminDashboard: Event Handlers */
/*****************************************************************************/
Template.AdminDashboard.events({
});

/*****************************************************************************/
/* AdminDashboard: Helpers */
/*****************************************************************************/
Template.AdminDashboard.helpers({
  usersCount: function(){
    return Meteor.users.find({}).count();
  },
  rolesCount: function(){
    return Meteor.roles.find({}).count();
  }
});

/*****************************************************************************/
/* AdminDashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminDashboard.onCreated(function () {
});

Template.AdminDashboard.onRendered(function () {
});

Template.AdminDashboard.onDestroyed(function () {
});
