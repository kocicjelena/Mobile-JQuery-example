function updateData()
{
    $.ajax({
        url: '@Html.Raw(ajaxUrl)',
        async: false,
        beforeSend: function () { $.mobile.showPageLoadingMsg(); },
        complete: function ()
        {
            $.mobile.hidePageLoadingMsg();
            $("ul:jqmData(role='listview')").listview();
        },
        success: function (data, textStatus, jqXHR)
        {
            $('#myDiv').html(data);
            $('#myDiv').trigger("create"); // *** THIS IS THE KEY ***
        }
    });
}