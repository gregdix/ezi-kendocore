'use strict';

app.twitterView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('twitterView');

// START_CUSTOM_CODE_twitterView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.twitterView.set('title', 'Twitter');
})();
// END_CUSTOM_CODE_twitterView