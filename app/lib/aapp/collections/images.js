var createProfileImage = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name())
    .resize('200', '200', '^')
    .gravity('Center')
    .crop('200', '200')
    .stream().pipe(writeStream);
};



Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {
    transformWrite: createProfileImage
  })],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
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
