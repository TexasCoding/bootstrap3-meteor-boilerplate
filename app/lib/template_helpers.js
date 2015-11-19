UI.registerHelper('profileImage', function() {
  if (Meteor.user()) {
    return Images.findOne(Meteor.user().profile.image.imageId);
  }
});

UI.registerHelper('loadingState', function() {
  if (Session.get('loadingState'))
    return true;
});

var DateFormats = {
  short: "MM-DD-YYYY",
  long: "dddd DD.MM.YYYY HH:mm"
};

UI.registerHelper("formatDate", function(datetime, format) {
  if (moment) {
    // can use other formats like 'lll' too
    format = DateFormats[format] || format;
    return moment(datetime).format(format);
  } else {
    return datetime;
  }
});
