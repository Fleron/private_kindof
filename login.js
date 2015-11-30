
$(document).ready(function(){
    var $username = $('username');
    var $pwd = $('pwd');
    var $textDisp = $('firstNameDisp');
    $.ajax({
        type: 'GET',
        url: 'http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=iou_get',
        dataType: "json",
        async: true,
        success: function(result){
            $.each(result, function(i, data){
                $textDisp.append('name: ' + data)
            });
        },
        error: function(){
            alert('error loading')
        }
    });

});
