'use strict';

app.remoteView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('remoteView');

// START_CUSTOM_CODE_remoteView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.remoteView.set('title', 'News');
})();
// END_CUSTOM_CODE_remoteView