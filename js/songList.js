$(function(){

    $('#back').on('tap',function(){
        window.history.go(-1)
    })

    $('.musicLyr i').on('tap',function(){
        var index = $('.musicLyr i').index(this);
        var iIndex = $('.musicLyr i').get(index);
        $(iIndex).toggleClass('active');
        
    });
});