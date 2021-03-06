'use strict';

app.contactsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('contactsView');

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.contactsView.set('title', 'Contacts');
    
   // var dataSource = new kendo.data.DataSource({
   //     data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
        
   // });
    
     var jsonUrlToLoad;
    
      jsonUrlToLoad = "data/contacts.json";

         var ContactsdataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: jsonUrlToLoad,
                        dataType: "json"
                    }
                }
            });
    
    app.contactsView.set('ContactsdataSource', ContactsdataSource);
    
    app.contactsView.set('alert', function (e) { alert(e.data.name); });
    
        
})();
// END_CUSTOM_CODE_contactsView