$(document).ready(function () {
    
    var audioTyping = document.createElement('audio');
    audioTyping.setAttribute('src', 'sfx/typing2.mp3');

    var audioChalk = document.createElement('audio');
    audioChalk.setAttribute('src', 'sfx/chalk.mp3');

    var audioThunder = document.createElement('audio');
    audioThunder.setAttribute('src', 'sfx/thunder2.mp3');
    
    var iLightning;
    
    $('#soundOn').click(mute);
    soundBars();
    
    function mute() {
        var check = audioTyping.muted;
        console.log(check);
        if (check == false) {
            audioTyping.muted = true;
            audioChalk.muted = true;
            audioThunder.muted = true;
        } else {
            audioTyping.muted = false;
            audioChalk.muted = false;
            audioThunder.muted = false;
        }
    }
    
    function soundBars() {
        TweenMax.set('.equalizer', {
        scale: 0.8
        })
        setInterval(function () {
            $('.bar').each(function () {
                var bar = $(this);
                var speed = Math.random() * 1 + .2;
                //setInterval(function(){
                var move = Math.random() * 30;
                TweenMax.to(bar, speed, {
                        width: move,
                        ease: SteppedEase.config(10)
                    })
                    //}, interval)
            });
        }, 100)
    }
    
    function typingSfx() {
        audioTyping.play();
        setTimeout(function () {
            audioTyping.pause();
        }, 3200)
    }

    function chalkSfx() {
        audioChalk.play();
        setTimeout(function () {
            audioChalk.pause();
        }, 5000)
    }

    function teleType() {
        $('.type-text').teletype({
            text: ['Randall Marquardt'],
            preserve: true,
            loop: 1,
            cursor: '_',
            callbackType: function (letter, current, teletype) {
                typingSfx();
            },
            callbackFinished: function () {
                $('.teletype-cursor').remove();
                audioTyping.pause();
            }
        })
    }

    function titleDraw() {
        setTimeout(function () {
            chalkSfx();
        }, 4700);
        var letterPaths = $('path');
        var tlTitle = new TimelineMax({
            delay: 6
        });
        tlTitle.set($('path'), {
            visibility: 'hidden'
        });
        tlTitle.staggerFromTo(letterPaths, 0.05, {
            drawSVG: 0
        }, {
            drawSVG: '100%',
            visibility: 'visible',
            ease: Power0.easeNone
        }, 0.05)
        .to('.navigation', 1, {opacity:1}, '+=0.3');
    }
    
   setTimeout(teleType, 2000);
    setTimeout(function () {
        $('.body-overlay').fadeOut(3000);
        $('.navigation').fadeIn(3000);
    }, 10500);
 
    
    function lightning() {
        var yArray = [];
        var xArray = [];
        var xStart = Math.random() * 1000;
        var bolt1pathD = 'm ' + xStart + ',5';
        var times = 200;
        for (var i = 0; i < times; i++) {

            if (i == 20 || i == 40 || i == 60 || i == 80) {
                var pX = (Math.random() * 10) + 5;
                var pY = (Math.random() * 100) - 50;
            } else {
                var pX = Math.floor((Math.random() * 10) + 5);
                var pY = Math.floor((Math.random() * 16) - 8);
            }
            xArray.push(pX);
            yArray.push(pY);
        }
        var xArrayLength = xArray.length;
        for (var i = 0; i < xArrayLength; i++) {
            var x = xArray[i];
            var y = yArray[i];
            bolt1pathD += ' ' + x + ',' + y;
        }
        $('#bolt1 path').attr('d', bolt1pathD);

        var lRotation = Math.random() * 360;
        TweenMax.to($('#svgLightning'), 0, {
            rotation: lRotation
        });
        audioThunder.play();
        $('#svgLightning').fadeIn(200);
        setTimeout(function () {
            $('#svgLightning').fadeOut(500);
        }, 200);
    }

    function flash() {
        $('.flash-bg').fadeIn(50);
        setTimeout(function () {
            $('.flash-bg').fadeOut(100);
        }, 300);
    }

    function setLightning() {
        iLightning = setInterval(function () {
                lightning();
                flash();
            }, 7000);
    }
                 
    function home() {
        titleDraw();
        $('.clouds1, .clouds2, .clouds3, .clouds4, .clouds5').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function (e) {
            $(this).css('left', '-1500px');
        });
         //$('.body-overlay').hide();
        TweenMax.set($('path'), {
            stroke: '#fff'
        });
        $('.clouds').each(function () {
            var str = $(this).css('animation-duration');
            var a = str.replace('s', '');
            var speed = (parseInt(a) * 0.3) + 's';
            $(this).css('animation-duration', speed);
        });
        setTimeout(setLightning, 3500);
    }
    
    home();
    
    
    
        

    function ray() {
            $('.ray').each(function () {
                var sty = window.getComputedStyle(this, null);
                var xform = sty.getPropertyValue('transform');
                var values = xform.split('(')[1],
                    values = values.split(')')[0],
                    values = values.split(',');
                var a = values[0];
                var b = values[1];
                var c = values[2];
                var d = values[3];
                var scale = Math.sqrt(a * a + b * b);
                var sin = b / scale;
                var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                if (angle == 0) {
                    angle = 1
                }
                if (angle > 359) {
                    var newAng = 350
                }
                if (angle < 0) {
                    var newAng = angle + Math.round(Math.random() * 10 - 5) + 360;
                } else {
                    var newAng = angle + Math.round(Math.random() * 10 - 5);
                }
                if (newAng > 359) {
                    var newAng = 350
                }
                var rayH = Math.round(Math.random() * 30);
                var o = Math.random() * 1;
                var tl = new TimelineMax();
                tl.to(this, 6, {
                    height: rayH,
                    rotation: newAng,
                    ease: Power0.easeNone
                })
            })
        }

    function rayRotate() {
        var r = -10;
        $('.ray').each(function () {
            r += 18;
            TweenMax.set($(this), {
                rotation: r
            });
        });
    }
    rayRotate();
    
    $('.nav-inner a').click(navClick);
    
    
    
    
    
    
    
    function navClick() {
        var frameId = $(this).attr('id');
        var frame = '<iframe src="frame_' + frameId + '.html"></iframe>';
        
        
        var homeDisplay = document.getElementById("homeScreen").style.display;
        //console.log(homeDisplay);
         if ($('.showcase').find('iframe').length) {
            $('.showcase').find('iframe').remove();
        }
        if (homeDisplay != 'none') {
            clearInterval(iLightning);
            $('.name-container').fadeOut(500);
            $('.clouds').fadeOut(3000);
           $('.navigation').addClass('navigation-top');
           TweenMax.set('.navigation', {y:-60});
           $('.home').fadeOut(3000);
           $('.blue-sky').fadeIn(3000);
            $('.showcase').fadeIn(3000);
            ray();
            setInterval(ray, 3000);
            setTimeout(function(){
                $('.showcase').append(frame);
            }, 3000);
           setTimeout(function(){
               TweenMax.to('.navigation', 0.5, {y:0});
           }, 4000);  
        }
        else {
            if (frameId == 'home') {
                $('.navigation').hide();
                $('.navigation').removeClass('navigation-top');
                
                $('.navigation').fadeIn(1000);
                $('.name-container').fadeIn(1000);
                $('.clouds').fadeIn(3000);
                $('.blue-sky').fadeOut(3000);
                $('.showcase').fadeOut(3000);
                $('.home').fadeIn(3000);
                setLightning() 
            }
            else {
                setTimeout(function(){
                    
                    
                    
                    
                    $('.showcase').append(frame);
                }, 1000);
            }
        } 
    }
 

    
    
    
    
    
    //$('#qualifications').click(sunset);




    function sunset() {
        clearInterval(iLightning);
        var home = $('.home').css('display');
        if (home == 'block') {
            $('.nav-inner').hide();
            $('.clouds').each(function () {
                $(this).fadeOut(3000);
            });
            $('.blue-sky').hide();
            $('.qualifications').fadeIn(3000);
            $('.home').fadeOut(3000);
            setTimeout(morph, 4000);
            TweenMax.to('.nav-inner a', 3, {
                color: '#ffffff'
            });
            function sunPosition() {
                var y1 = $('.ray-container').height() - 100;
                var x1 = $('.ray-container').width() * .8;
                var y2 = $('.ray-container').height() * .4;
                var x2 = $('.ray-container').width() * .6;
                TweenMax.set('.sun', {
                    x: -x1,
                    y: y1
                });
            }
            $('.sunset').fadeIn(5000);
            $('.ray').hide();
            sunPosition();
            $(window).resize(sunPosition);
        } else {
            TweenMax.to('.showcase-cloud1', 3, {
                opacity: 0.3
            });
            TweenMax.to('.nav-inner a', 3, {
                color: '#ffffff'
            });
            var y1 = $('.ray-container').height() - 100;
            var x1 = $('.ray-container').width() * .8;
            var y2 = $('.ray-container').height() * .4;
            var x2 = $('.ray-container').width() * .6;
            TweenMax.to('.sun, .ray-container', 5, {
                bezier: {
                    curviness: 2,
                    values: [{
                        x: -x2,
                        y: y2
                    }, {
                        x: -x1,
                        y: y1
                    }],
                    ease: Power0.easeNone
                }
            });
            TweenMax.to('.sun', 5, {
                backgroundColor: '#FFFF00',
                boxShadow: '0px 0px 40px 30px #FFFF00'
            });
            $('.day').fadeOut(5000);
            $('.ray').fadeOut(4000);
            $('.sunset').fadeIn(5000);
        }
    }
    
    
  
    
    
    
    
    

});