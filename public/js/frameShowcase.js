$(document).ready(function () {
    
    
    TweenMax.set('.temp-svg', {scale:0.6});
    TweenMax.set('#htmlTemp, #cssTemp, #jsTemp, #jqueryTemp, #gsapTemp, #sqlTemp', {y:-400});
//    TweenMax.set('#cssTemp', {x:218, y:-380});
    
    TweenMax.set('.logo-text', {opacity:0});
    TweenMax.set('.description', {opacity:0});
    
    TweenMax.set('.line1, .line2, .line3, .line4, .line5, .line6', {scaleY:0, transformOrigin:'0% 0%'});
    TweenMax.set('.box1, .box2, .box3, .box4, .box5, .box6', {scaleY:0, transformOrigin:'0% 0%'});
    
    
    TweenMax.set('#htmlLogo', {scale:10});
    TweenMax.set('#cssLogo', {scale:10});
    TweenMax.set('#jsLogo', {scale:10});
    TweenMax.set('#sqlLogo', {scale:10});
    TweenMax.set('#jqueryLogo', {scale:10});
    TweenMax.set('#gsapLogo', {scale:10});
    TweenMax.set('#gHtml', {
        display: 'none'
    }); 
    TweenMax.set('#gCss', {
        display: 'none'
    });
    TweenMax.set('#gJs', {
       display: 'none'
    });
    TweenMax.set('#gJquery', {
       display: 'none'
    });
    TweenMax.set('#gSql', {
        display: 'none'
    });
    MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
    
    
    morph();
    
    
    
    
    //setTimeout(morph, 2000);
    
    TweenMax.set('#groupHtml', {scaleY:0,transformOrigin:'0% 100%'});
    TweenMax.set('#groupCss', {scaleY:0,transformOrigin:'0% 100%'});
    TweenMax.set('#groupJs', {scaleY:0,transformOrigin:'0% 100%'});
    TweenMax.set('#groupJquery', {scaleY:0,transformOrigin:'0% 100%'});
    TweenMax.set('#groupGsap', {scaleY:0,transformOrigin:'0% 100%'});
    TweenMax.set('#groupSql', {scaleY:0,transformOrigin:'0% 100%'});
    
    
//    setTimeout(function(){
//        $('.temp-svg').fadeIn();
//    }, 10000);

//    $('#tempRange').on('input change',function(){
//      var n = $(this).val();
//      var temp = n * .01
//      TweenMax.to('#g5587', 1, {scaleY:temp});
//    });
    
    

    function morph() {
        console.log('function morph ran');
        TweenMax.set('#gHtml', {
            display: 'block'
        });
        var tl = new TimelineMax();
        var html5Array = [];
        var cssArray = [];
        var jsArray = [];
        var jqueryArray = [];
        var sqlArray = [];
        $('#gHtml path').each(function () {
            html5Array.push(this);
        });
        $('#gCss path').each(function () {
            cssArray.push(this);
        });
        $('#gJs path').each(function () {
            jsArray.push(this);
        });
        $('#gJquery path').each(function () {
            jqueryArray.push(this);
        });
        $('#gSql path').each(function () {
            sqlArray.push(this);
        });
        for (var i = 0; i < html5Array.length; i++) {
            var tl = new TimelineMax();
            var shape1 = html5Array[i];
            var shape2 = cssArray[i];
            var shape3 = jsArray[i];
            var shape4 = jqueryArray[i];
            var shape5 = sqlArray[i];
            var color2 = cssArray[i].style.fill;
            var color3 = jsArray[i].style.fill;
            var color4 = jqueryArray[i].style.fill;
            var color5 = sqlArray[i].style.fill;
//            tl.to('#svgLogo', 1.5, {opacity:1})
//            .to(shape1, 0.8, {morphSVG: { shape: shape2},svgOrigin: "450 50", fill: color2},  '+=0.3')
//            .to(shape1, 0.8, { morphSVG: { shape: shape3},scale: 1,svgOrigin: "450 50", fill: color3,x: -73,y: 110}, '+=0.3')
//            .to(shape1, 0.8, { morphSVG: { shape: shape5},fill: color5,y: 250,x: 50}, '+=0.3')
//            .to(shape1, 0.8, {morphSVG: {shape: shape4},scale: 0.6,fill: color4,y: 70,x: -105 }, '+=0.3')
//            .to(shape1, 0.8, {morphSVG: {shape: shape4},scale: 0.6,fill: color4,y: 70,x: -105 }, '+=0.3')
//            .to('#svgLogo', 0.5, {scale:0}, '-=0.5')
            
            
            
            
            
//            .to('#htmlLogo', 0.7, {x:-440, y:-80, opacity:1, scale:0.8})
//            .to('#cssLogo', 0.7, {x:-251, y:-80, opacity:1, scale:1}, '-=0.3')
//            .to('#jsLogo', 0.7, {x:-85, y:-80, opacity:1, scale:1}, '-=0.3')
//            .to('#sqlLogo', 0.7, {x:85, y:-80, opacity:1, scale:1}, '-=0.3')
//            .to('#jqueryLogo', 0.7, {x:250, y:-80, opacity:1, scale:1}, '-=0.3')
//            .to('#gsapLogo', 0.7, {x:410, y:-80,opacity:1, scale:1}, '-=0.3')
//            .to('.temp-svg', 0.5, {opacity:1}, '+=0.3')
           
            
            
            
            
            tl.to('#htmlLogo', 0.7, {opacity:1, scale:0.7}, '+=0.5')
            .to('#cssLogo', 0.7, {opacity:1, scale:0.7}, '-=0.3')
            .to('#jsLogo', 0.7, {opacity:1, scale:0.7}, '-=0.3')
            .to('#jqueryLogo', 0.7, {opacity:1, scale:0.7}, '-=0.3')
            .to('#gsapLogo', 0.7, {opacity:1, scale:0.95}, '-=0.3')
            .to('#sqlLogo', 0.7, {opacity:1, scale:0.85}, '-=0.3')
            
            .to('.logo-text', 0.5, {opacity:1})
            .to('.description', 0.5, {opacity:1})
            
            .to('.temp-svg', 0, {opacity:1}, '+=0.3')
            .to('#htmlTemp', 1, {y:0, ease: Bounce.easeOut}, '+=0.1')
            .to('#cssTemp', 1, {y:0, ease: Bounce.easeOut}, '-=0.9')
            .to('#jsTemp', 1, {y:0, ease: Bounce.easeOut}, '-=0.9')
            .to('#jqueryTemp', 1, {y:0, ease: Bounce.easeOut}, '-=0.9')
            .to('#gsapTemp', 1, {y:0, ease: Bounce.easeOut}, '-=0.9')
            .to('#sqlTemp', 1, {y:0, ease: Bounce.easeOut}, '-=0.9')
            .to('#groupHtml', 1, {scaleY:0.75}, '+=0.3')
            .to('#groupCss', 1, {scaleY:0.7}, '-=1')
            .to('#groupJs', 1, {scaleY:0.6}, '-=1')
            .to('#groupJquery', 1, {scaleY:0.75}, '-=1')
            .to('#groupGsap', 1, {scaleY:0.5}, '-=1')
            .to('#groupSql', 1, {scaleY:0.6}, '-=1')
            
            
            .to('.line1, .line3, .line5', 0.5, {scaleY:1})
            .to('.box1, .box3, .box5', 0.5, {scaleY:1})
            
            .to('.line2, .line4, .line6', 0.5, {scaleY:1}, '-=0.3')
            .to('.box2, .box4, .box6', 0.5, {scaleY:1})
            
            
            
//            .to('.line1', 0.5, {scaleY:1})
//            .to('.box1', 0.5, {scaleY:1})
//            
//            .to('.line2', 0.3, {scaleY:1})
//            .to('.box2', 0.3, {scaleY:1})
//            
//            .to('.line3', 0.3, {scaleY:1})
//            .to('.box3', 0.3, {scaleY:1})
//            
//            .to('.line4', 0.3, {scaleY:1})
//            .to('.box4', 0.3, {scaleY:1})
//            
//            .to('.line5', 0.3, {scaleY:1})
//            .to('.box5', 0.3, {scaleY:1})
//            
//            .to('.line6', 0.3, {scaleY:1})
//            .to('.box6', 0.3, {scaleY:1})
            
        }
    }
    
    
    var canvas1 = document.getElementById("temp1");
    var canvas2 = document.getElementById("temp2");
    
    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");

    function drawMultiRadiantCircle(xc, yc, r, radientColors) {
        var partLength = (2 * Math.PI) / radientColors.length;
        var start = 0;
        var gradient = null;
        var startColor = null,
            endColor = null;
        for (var i = 0; i < radientColors.length; i++) {
            startColor = radientColors[i];
            endColor = radientColors[(i + 1) % radientColors.length];
            // x start / end of the next arc to draw
            var xStart = xc + Math.cos(start) * r;
            var xEnd = xc + Math.cos(start + partLength) * r;
            // y start / end of the next arc to draw
            var yStart = yc + Math.sin(start) * r;
            var yEnd = yc + Math.sin(start + partLength) * r;

            ctx1.beginPath();
            ctx2.beginPath();

            gradient1 = ctx1.createLinearGradient(xStart, yStart, xEnd, yEnd);
            gradient1.addColorStop(0, startColor);
            gradient1.addColorStop(1, endColor);
            ctx1.strokeStyle = gradient1;
            ctx1.arc(xc, yc, r, start, start + partLength);
            ctx1.lineWidth = 10;
            ctx1.lineCap="round";
            ctx1.stroke();
            ctx1.closePath();
            
            gradient2 = ctx2.createLinearGradient(xStart, yStart, xEnd, yEnd);
            gradient2.addColorStop(0, startColor);
            gradient2.addColorStop(1, endColor);
            ctx2.strokeStyle = gradient2;
            ctx2.arc(xc, yc, r, start, start + partLength);
            ctx2.lineWidth = 10;
            ctx2.lineCap="round";
            ctx2.stroke();
            ctx2.closePath();
            
            start += partLength;
        }
    }
    
    
    
    
    
       var someColors = [];
    someColors.push('#19b4fe');
    someColors.push('#19b4fe');
    someColors.push('#8c709d');
    someColors.push('#FF0004');
    someColors.push('#FF0004');
    someColors.push('');

    
    
    TweenMax.set('.knob', {rotation:240});
    $('.knob').click(function(){
        var knob = $(this);
        TweenMax.to(knob, 1, {rotation:480, ease: Power0.easeNone})
    })
    
    



    
    
    


 




drawMultiRadiantCircle(60, 60, 50, someColors);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});