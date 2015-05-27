$.ajax({
    type: "POST",
    url: "http://localhost:8070/5/potrebnidokumenti/Data.xml",
    data: "[<vf></vf>]",
    cache: false,
    dataType: "xml",
    success: function(data) {
        console.log(data);
    }
});