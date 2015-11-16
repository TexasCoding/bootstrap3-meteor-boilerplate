(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/template_helpers.js                                             //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Handlebars.registerHelper('loadingState', function () {                // 1
    return Session.get("loadingState");                                // 2
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=template_helpers.js.map
