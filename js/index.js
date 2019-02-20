$(function(){
    $("#title").tap(function(){
        if($('#list').css('display') != 'none'){
            $('#musicList').addClass('active');
            $('#list').css('display','none');
        }else{
            $('#musicList').removeClass('active');
            $('#list').css('display','block');
        }
    });
})