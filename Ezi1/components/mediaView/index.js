'use strict';

app.mediaView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('mediaView');

// START_CUSTOM_CODE_mediaView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.mediaView.set('title', 'Media Player');


    var jsonMedia;

    jsonMedia = "data/media.json";

    var MediadataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: jsonMedia,
                dataType: "json"
            }
        }
    });

    app.mediaView.set('MediadataSource', MediadataSource);

    app.mediaView.set('alert', function (e) { alert(e.data.name); }); ///edit this field name for media


})();
// END_CUSTOM_CODE_mediaView