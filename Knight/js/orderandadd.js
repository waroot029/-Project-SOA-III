//--------------------------- ADD
$(function () {
    
    $('#alert').hide();

    $('#add').click(function () {

        var formdata = {
            Name: $('#name').val(),
            description: $('#desc').val(),
            photo: $('#photo').val(),
            price: $('#price').val(),
            weight: $('#weight').val()
      
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'https://soaproductapi.herokuapp.com/products',
                type: 'POST',
                data: formdata
            }).then(function (data) {

                $('#alert').show();
                $('#name').val('');
                $('#desc').val('');
                $('#photo').val('');
                $('#price').val('');
                $('#weight').val('');
                console.log('Added');

            });
        });
    });
});

//----------------------------------- Show
$(function () {
    $.ajax({

        //CP1. Complete Ajax Code to GET ALL pin data 
        url: 'https://soaproductapi.herokuapp.com/products',
        method: 'GET'

    }).then(function (data) {

        addNewRow(data)
    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
               var cols = '<tr><td>' + data[i].id + '</td><td>' + '<img src="'+data[i].photo+'" style="width:150px;height:150px;">' + '</td><td>' + data[i].name + '</a></td><td>'+ data[i].description + '</a></td><td>' + data[i].price + '</td><td>' + data[i].weight + '</td><td>' + '<a href="index2.html?id=' + data[i].id +'">Edit</a>' + '</td></tr>';
            $('#productlist').append(cols);




        }

    }

});

//----------------------------------------------

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

//---------------------------------------------------------------------------------------- Edit Delete 
$(function () {

    $('#alert').hide();

    var pid = getUrlParameter('id');

    $.ajax({

        
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products/" + pid,

    }).then(function (data) {

        $('#photo').val(data.photo);
        $('#name').val(data.name);
        $('#desc').val(data.description);
        $('#price').val(data.price);



    });

    $('#saveni').click(function () {

        var formdata = {
            photo: $('#photo').val(),
            name: $('#name').val(),
            description: $('#desc').val(),
            price: $('#price').val(),
        }

        console.log(formdata);

        $.ajax({

            //CP4. Complete Ajax code to UPDATE the selected pin (pinid)  
            type: 'PUT',
            url: "https://soaproductapi.herokuapp.com/products/" + pid,
            data: formdata,


        }).then(function (data) {

            $('#alert').show();
            console.log('Edited');
            console.log(data);

        }).then(function (data) {

            window.location.href = 'index.html';

        });

    });

    $('#delete').click(function () {

        $.ajax({

            //CP5. Complete Ajax code to DELETE the selected pin (pinid)  
            type: 'DELETE',
            url: "https://soaproductapi.herokuapp.com/products/" + pid,


        }).then(function (data) {

            window.location.href = 'index.html';

        });
    });
});

//----------------------------------------------------------------------------------------- ดึงมาโชว์ใน edit

$(function () {
    $.ajax({
        type: 'GET',
        url: "https://soaproductapi.herokuapp.com/products"
        

    }).then(function (data) {

        addNewRow(data);

    });

    function addNewRow(data) {

        for (var i = 0; i < data.length; i++) {
            var row = '<tr><td><img src=" '+ data[i].photo +' " width="100px" height="100px">' + '</td><td>' + data[i].name + '</td><td>' 
            + data[i].description + '</td><td>' + data[i].price + 
            ' &nbsp; </td><td><a href="Edited.html?id=' + data[i].id +'">Edit</a>' + '</td></tr>';
            $('#Editni').append(row);
        }     
    }

});


//---------------------------------------------------- add order

$(function () {
    
    $('#alert').hide();

    $('#add').click(function () {

        var formdata = {
            Name: $('#name').val(),
            description: $('#desc').val(),
            photo: $('#photo').val(),
            price: $('#price').val(),
            weight: $('#weight').val()
      
        }

        console.log(formdata);


        $(function () {

            $.ajax({

                //CP2. Complete Ajax Code to INSERT new pin data 
                url: 'https://soaproductapi.herokuapp.com/products',
                type: 'POST',
                data: formdata
            }).then(function (data) {

                $('#alert').show();
                $('#name').val('');
                $('#desc').val('');
                $('#photo').val('');
                $('#price').val('');
                $('#weight').val('');
                console.log('Added');
            }).then(function (data) {

                window.location.href = 'index.html';
    
            });
        });
    });
});