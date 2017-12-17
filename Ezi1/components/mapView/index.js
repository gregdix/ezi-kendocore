'use strict';

app.mapView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('mapView');

// START_CUSTOM_CODE_mapView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.mapView.set('title', 'Ezi-Maps');
})();
// END_CUSTOM_CODE_mapView