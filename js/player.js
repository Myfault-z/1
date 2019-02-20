$(function(){
    var timer,
    timerIndex = -1,// 时钟索引配合时间事件的if  控制每个时钟的频率
    // 存放主时钟的回调函数
    timerFnArray = [];
    
    // 添加有关时钟的回调函数
    timerFnArray.push(progressBar);
    // 页面主时钟 启动
    timer = setInterval(function () {
        timerIndex += 1;
        timerIndex = timerIndex % 100;
        // 执行所有需要时钟执行的函数
        for (var i = 0; i < timerFnArray.length; i++) {
            timerFnArray[i]();
        }
    }, 200);
    
    // 返回
    $('#back').on('tap',function(){
        window.history.go(-1)
    })

    // 评论区图标切换
    $('.comment-list i').tap(function(){
        var index = $('.comment-list i').index(this);
        var iIndex = $('.comment-list i').get(index);
        $(iIndex).toggleClass('active');
    });

    // 主导航切换
    $('.navBtn').tap(function(){
        var index = $('.navBtn').index(this);
        var btnIndex = $('.navBtn').get(index);
        var switchIndex = $('.switch').get(index);
        // var mianLi = $('.')
        $(btnIndex).addClass('active').siblings().removeClass('active');
        $(switchIndex).addClass('on').siblings().removeClass('on');
    });

    // 底部图标切换
    $('.footerBtn i').tap(function(){
        var index = $('.footerBtn i').index(this);
        var iconIndex = $('.footerBtn i').get(index);
        $(iconIndex).toggleClass('active');
    });


    // 进度条js
    function progressBar() {
        if (timerIndex % 5 != 0) {
            return;
        }
        $('#circle').css('left',$('#bar2').css('width'));
    };

    
    
});
// 页面卸载之前清楚时钟
window.onunload = function(){
    clearInterval(timer);
}