function SaveBook() {
             var bookData = {
                 "BookId": 0,
                 "ISBN": "32334833425543",
                 "Title": "WCF RESTful Service by Example"
             };
             $.ajax({
                 type: "POST",
                 url: "http://localhost:8070/5/potrebnidokunti/proba/1.json",
                 data: JSON.stringify(bookData),
                 contentType: "application/json; charset=utf-8",
                 dataType: "json",
                 processData: true,
                 success: function (data, status, jqXHR) {
                     alert("success..." + data);
                 },
                 error: function (xhr) {
                     alert(xhr.responseText);
                 }
             });
         }

