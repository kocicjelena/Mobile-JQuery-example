$('.price').blur(function () {
    var sum = 0;
    $('.price').each(function() {
        sum += Number($(this).val());
    });

    // here, you have your sum
});​​​​​​​​​
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Sum of all TextBox values using jQuery</title>
    <script type="text/javascript"
    src="http://ajax.microsoft.com/ajax/jQuery/jquery-1.4.2.min.js">
    </script>
    <script type="text/javascript">
        $(function() {
            $("#addAll").click(function() {
                var add = 0;
                $(".amt").each(function() {
                    add += Number($(this).val());
                });
                $("#para").text("Sum of all textboxes is : " + add);
            });
        });
    </script>
</head>
<body>
    <input id="Text1" class="amt" type="text" /><br />
    <input id="Text2" class="amt" type="text" /><br />
    <input id="Text3" class="amt" type="text" /><br />  
    <input id="addAll" type="button" value="Sum all Textboxes" /><br />
    <p id="para" />
</body>
</html>
========
<table>
    <tr>
        <th>item #</th>
        <th>item name</th>
        <th>item cost</th>
    </tr>
    <tr>
        <td>123A</td>
        <td>widget</td>
        <td>
            <input class="inputtotal" value="10" />
        </td>
    </tr>
    <tr>
        <td>A309E</td>
        <td>bauble</td>
        <td>
            <input class="inputtotal" value="32" />
        </td>
    </tr>
    <tr>
        <td>246</td>
        <td>sprocket</td>
        <td>
            <input class="inputtotal" value="15" />
        </td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>
            <input id="total" />
        </td>
    </tr>
</table>
var theTotal = 0;
$(".inputtotal").each(function () {
    theTotal += parseInt($(this).val());
});
$("#total").val(theTotal);