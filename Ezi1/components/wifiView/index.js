'use strict';

app.wifiView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('wifiView');

// START_CUSTOM_CODE_wifiView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.wifiView.set('title', 'Wifi');
})();
// END_CUSTOM_CODE_wifiView