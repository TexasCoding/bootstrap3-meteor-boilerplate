/*****************************************************************************/
/* AdminUsers: Event Handlers */
/*****************************************************************************/
Template.AdminUsers.events({
    "click .delete": function (e, tmpl) {
        e.preventDefault();

        var userId = this._id;

        bootbox.confirm("Are you sure you want to delete user with id <b>" + userId + "</b>?", function (result) {
            if (result) {
                Meteor.call("adminUsersDelete", userId, function (error, result) {
                    if (error) {
                        FlashMessages.clear();
                        FlashMessages.sendError('Error deleting user.' + error);
                    }
                    if (result) {
                        FlashMessages.clear();
                        FlashMessages.sendSuccess('User with id <b>' + userId + '</b> has been deleted.');
                    }
                });
            }
        });
    }
});

/*****************************************************************************/
/* AdminUsers: Helpers */
/*****************************************************************************/
Template.AdminUsers.helpers({
    users: function () {
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
