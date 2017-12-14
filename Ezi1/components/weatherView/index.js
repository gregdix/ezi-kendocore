'use strict';

app.weatherView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('weatherView');

// START_CUSTOM_CODE_contactsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.weatherView.set('title', 'Weather');
  
    
     var jsonUrlToLoad2;
    
      jsonUrlToLoad2 = "data/weather.json";

         var WeatherdataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: jsonUrlToLoad2,
                        dataType: "json"
                    }
                }
            });
    
         app.weatherView.set('WeatherdataSource', WeatherdataSource);
    
         app.weatherView.set('alert', function (e) { alert(e.data.name); });
    
        
})();
// END_CUSTOM_CODE_contactsView