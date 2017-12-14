'use strict';

app.profileView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('profileView');

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.profileView.set('title', 'Profile');
})();
// END_CUSTOM_CODE_contactsView