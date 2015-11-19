StaticContactController = RouteController.extend({
  action: function() {
    this.render();
  },
  onAfterAction: function() {
    var title = 'Contact Us' + ' | ' + SITE_TITLE;
    var description = 'contact us page.';
    SEO.set({
      title: title,
      meta: {
        'description': description
      },
      og: {
        'title': title,
        'description': description
      }
    });
  }
});
