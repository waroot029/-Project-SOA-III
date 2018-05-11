$(function () {
    $.ajax({

        url: 'http://servicelogistics20180505020236.azurewebsites.net/Api/Logistics',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><a href="edit.html?id=' + data[i].Logistic_id + '">' + data[i].Delivery_status + '</a></td><td>' + data[i].Address + '</td><td>' + data[i].Amount + '</td><td>' + data[i].Delivery_Date + '</td><td>' + data[i].Delivery_type + '</td><td>'+ 
            data[i].Expected_date+'</td><td>'  + data[i].Order_id + '</td><td>' + data[i].Payment_id + '</td><td>' + data[i].Price + '</td><td>' + data[i].User_id + '</td> </tr>';
            $('#logisticlist').append(row);
        }
        
    }

});