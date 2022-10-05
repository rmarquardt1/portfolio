$(document).ready(function () {
    setRow();
    rowSlide();
    $(window).resize(rowSlide);
    $(document).scroll(rowSlide);
    $('.screenshot').click(openSite);
    $('#closeSite').click(closeSite);
    
    
    
        function setRow() {
        $('.row').each(function () {
            var winH = $(window).height();
            var scrollTop = $(window).scrollTop();
            var rowOffset = $(this).offset().top;
            var distance = (rowOffset - scrollTop);
            var winW = $(window).width();
            var lrOffset = -(winW / 2 + 100);
            var rowL = $(this).find('.left');
            var rowR = $(this).find('.right');
            TweenMax.set(rowL, {left:lrOffset});
            TweenMax.set(rowR, {right:lrOffset});
            TweenMax.set('.left, .right', {visibility:'visible'});
        });
    }

    function rowSlide() {
        $('.row').each(function(){
                var winH = $(window).height();
                var winW = $(window).width();
                var lrOffset = -(winW / 2 + 100);
                var scrollTop = $(window).scrollTop();
                var rowOffset = $(this).offset().top;
                var distance = (rowOffset - scrollTop);
                var rowL = $(this).find('.left');
                var rowR = $(this).find('.right');
                if (distance < (winH * 0.7)) {
                    TweenMax.to(rowL, 0.5, {left:0});
                    TweenMax.to(rowR, 0.5, {right:0});
                } else {
                    TweenMax.to(rowL, 0.7, {left:lrOffset});
                    TweenMax.to(rowR, 0.7, {right:lrOffset});
                }
            });
    }
    
    
    
    function openSite() {
        var site = $(this).parent('.row').attr('data-site');
        
        $('body').addClass('body-overlay');
        $('.site').append('<iframe src="site1/home.html"></iframe>').show();
//        $('.site').show();
        
        
        
    }
    
    function closeSite(){
        $('.site').find('iframe').remove();
        $('.site').hide();
        $('body').removeClass('body-overlay');
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//        function setRow() {
//            $('.row').each(function () {
//                var winH = $(window).height();
//                var scrollTop = $(window).scrollTop();
//                var rowOffset = $(this).offset().top;
//                var distance = (rowOffset - scrollTop);
//                var winW = $(window).width();
//                var lrOffset = (winW / 2 + 100);
//                var rowL = $(this).find('.left');
//                var rowR = $(this).find('.right');
//                if ($(rowL).hasClass('text')) {
//                    var title = $(rowL).find('.title');
//                    var desc = $(rowL).find('.description');
//                    var divider = $(rowL).find('.divider');
//                    TweenMax.set(title, {right:lrOffset});
//                    TweenMax.set(desc, {right:lrOffset});
//                    TweenMax.set(divider, {right:lrOffset,width:lrOffset});
//                }
//                TweenMax.set(rowL, {left:-lrOffset});
//                TweenMax.set(rowR, {right:-lrOffset});
//                TweenMax.set('.left, .right', {visibility:'visible'});
//            });
//        }

    
//    function rowSlide() {
//        var time = 0;
//        $('.row').each(function () {
//            var winH = $(window).height();
//            var winW = $(window).width();
//            var lrOffset = -(winW / 2 + 100);
//            var scrollTop = $(window).scrollTop();
//            var rowOffset = $(this).offset().top;
//            var distance = (rowOffset - scrollTop);
//            var rowL = $(this).find('.left');
//            var rowR = $(this).find('.right');
//            if (distance < (winH * 0.7)) {
//                TweenMax.to(rowL, 1, {left:0});
//                TweenMax.to(rowR, 1, {right:0});
//                if ($(rowL).hasClass('text')) {
//                    var title = $(rowL).find('.title');
//                    var desc = $(rowL).find('.description');
//                    var divider = $(rowL).find('.divider');
//                    var tlDivider = new TimelineMax();
//                    tlDivider.to(divider, 0.5, {right:0})
//                    .to(divider, 0.8, {width:'100%'})
//                    var titleAnimation = TweenMax.to(title, 0.7, {right:0});
//                    var descAnimation = TweenMax.to(desc, 0.7, {right:0});
//                    titleAnimation.delay(0.5);
//                    descAnimation.delay(0.5);
//                }
//            } else {
//                TweenMax.to(rowL, 0.7, {left:lrOffset});
//                TweenMax.to(rowR, 0.7, {right:lrOffset});
//            }
//        });
//    }


});