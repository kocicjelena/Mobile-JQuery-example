$( document ).on( "pageinit", function() {
    $( document ).one( "click", "#add_and_refresh", function () {
        var newRows = "<tr><th>hemija</th><td><input id='amthemija' class='amt1' type='text' /></td><td><input id='amtstruja' class='amtfeb' type='text' /> </td><td><input id='amtstruja' class='amtmart' type='text' /></td><td><input id='amthemija' class='amtapril' type='text' /></td><td><input id='amthemija' class='amtmaj' type='text' /> </td><td><input id='amthemija' class='amtjun' type='text' /></td><td><input id='amthemija' class='amtjul' type='text' /></td><td><input id='amthemija' class='amtavg' type='text' /></td><td><input id='amthemija' class='amtsep' type='text' /> </td><td><input id='amthemija' class='amtokt' type='text' /></td><td><input id='amthemija' class='amtnov' type='text' /></td><td><input id='amthemija' class='amtdec' type='text' /></td><td><input type='button' id='hemija' value='hemija' /></td></tr>";
        $( "table#table-column-toggle tbody" )
            // Append the new rows to the body
            .append( newRows )
            // Call the refresh method
            .closest( "table#table-column-toggle" )
            .table( "refresh" )
            // Trigger if the new injected markup contain links or buttons that need to be enhanced
            .trigger( "create" );
        // We disable the button to make clear that in this demo we have only one set of rows to inject
        $( "#add_and_refresh" ).button( "disable" );
    });
});