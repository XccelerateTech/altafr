//create a AJAX request using jquery
$(function(){
    $.ajax({
        url:"/data/data.json",
        beforeSend:function(xhr){
            console.log('getting data')
        },
        type: 'GET',
    }).done(function(data){
        console.log('This function will run if the AJAX has worked')
        console.log(data)
    }).fail(function(data){
        console.log('This message will run if the AJAX has failed')
    }).always(function(data){
        console.log('This function should always be called, no matter about success or failure.')
    });
});