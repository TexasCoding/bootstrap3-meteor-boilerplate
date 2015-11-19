Meteor.startup(function() {
  return SEO.config({
    title: SITE_TITLE,
    meta: {
      'description': SITE_DESCRIPTION
    },
    og: {
      'image': SITE_OG_IMAGE
    }
  });
});
