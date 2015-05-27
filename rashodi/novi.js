$( document ).on( "pageinit", function() {
    $( document ).one( "click", "#add_and_refresh", function () {
        var newRows = "<tr><th>6</th><td><a href=\"\" data-rel=\"external\">to </a></td><td></td><td></td><td></td></tr>";
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