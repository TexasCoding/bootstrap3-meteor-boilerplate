Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

if (Meteor.isServer) {
  Images.allow({
    insert: function(userId, doc) {
      return true;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function(userId, doc) {
      return false;
    },
    download: function() {
      return true;
    }
  });

  Images.deny({
    insert: function(userId, doc) {
      return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function(userId, doc) {
      return true;
    },
    download: function() {
      return false;
    }
  });
}
