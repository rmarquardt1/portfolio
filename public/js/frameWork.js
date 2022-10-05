$(document).ready(function () {

        TweenMax.set('.pen', {scale:0});
    
    showcase();
    
    /////////////////////////// Showcase ////////////////////////////////////


    function showcase() {

        TweenMax.set('.float', {
            transformPerspective: 950,
            transformStyle: "preserve-3d",
        });
        TweenMax.set('.top', {
            transformOrigin: "center bottom -700px",
            force3D: true
        });
        TweenMax.set('.bottom', {
            transformOrigin: "center top -700px",
            force3D: true
        });

        var tlStartT;
        var tlStartB;
        var intT = 0;
        var intB = 0;
        var intTop = -2700;
        var intBottom = -2700;
        var z = 20;
        var tlArrayT = [];
        var tlArrayB = [];


        $('.top').each(function () {
            var a = $(this);
            intT += 300;
            setTimeout(function () {
                tlStartT = new TimelineMax({
                    onComplete: topRotate
                });
                z -= 1;
                tlStartT.to(a, 0.3, {
                        left: 0,
                        right: 0,
                        ease: Power0.easeNone
                    })
                    .to(a, 1, {
                        rotationY: 294,
                        ease: Power0.easeNone
                    })
                    .to(a, 0, {
                        backfaceVisibility: 'hidden',
                        zIndex: z
                    })
            }, intT);

            function topRotate() {
                intTop += 2700;
                setTimeout(function () {
                    var tl = new TimelineMax({
                        repeat: -1
                    });
                    $(a).addClass('done');
                    tlArrayT.push(tl);
                    tl.to(a, 15, {
                        rotationY: 430,
                        ease: Power0.easeNone
                    });
                }, intTop);
            }
        });
        
        

        $('.bottom').each(function () {
            var a = $(this);
            intB += 300;
            setTimeout(function () {
                tlStartB = new TimelineMax({
                    onComplete: bottomRotate
                });
                z -= 1
                tlStartB.to(a, 0.3, {
                        left: 0,
                        right: 0,
                        ease: Power0.easeNone
                    })
                    .to(a, 1, {
                        rotationY: 294,
                        ease: Power0.easeNone
                    })
                    .to(a, 0, {
                        backfaceVisibility: 'hidden',
                        zIndex: z
                    })
            }, intB);

            function bottomRotate() {
                intBottom += 2700;
                setTimeout(function () {
                    var tl = new TimelineMax({
                        repeat: -1
                    });
                    $(a).addClass('doneB');
                    tlArrayB.push(tl);
                    tl.to(a, 15, {
                        rotationY: 430,
                        ease: Power0.easeNone
                    });
                }, intBottom);
            }
        });




        $('.top').hover(
            function () {
                var count = $('.top').length;
                var doneCount = $('.done').length;
                $(this).addClass('hovering');
                $(".float:not(.hovering)").each(function () {
                    var overlay = $(this).before().children('.float-overlay');
                    TweenMax.to(overlay, 0.5, {
                        background: 'rgba(0,0,0,0.5)'
                    });
                });
                
                
                
//                if (count == doneCount) {
//                    for (var i = 0; i < tlArrayT.length; i++) {
//                        tlArrayT[i].timeScale(0.35);
//                    }
//                }
            },
            function () {
                var count = $('.top').length;
                var doneCount = $('.done').length;
                $(this).removeClass('hovering');
                TweenMax.to('.float-overlay', 0.5, {
                    background: 'rgba(0,0,0,0)'
                });
                if (count == doneCount) {
                    for (var i = 0; i < tlArrayT.length; i++) {
                        tlArrayT[i].timeScale(1);
                    }
                }
            }
        );




        $('.bottom').hover(
            function () {
                var count = $('.bottom').length;
                var doneCount = $('.doneB').length;
                $(this).addClass('hovering');
                $(".float:not(.hovering)").each(function () {
                    var overlay = $(this).before().children('.float-overlay');
                    TweenMax.to(overlay, 0.5, {
                        background: 'rgba(0,0,0,0.5)'
                    });
                });
//                if (count == doneCount) {
//                    for (var i = 0; i < tlArrayB.length; i++) {
//                        tlArrayB[i].timeScale(0.35);
//                    }
//                }
            },
            function () {
                var count = $('.bottom').length;
                var doneCount = $('.doneB').length;
                $(this).removeClass('hovering');
                TweenMax.to('.float-overlay', 0.5, {
                    background: 'rgba(0,0,0,0)'
                });
                if (count == doneCount) {
                    for (var i = 0; i < tlArrayB.length; i++) {
                        tlArrayB[i].timeScale(1);
                    }
                }
            }
        );

        
        
        
        
        
        
        

        $('.float').click(floatOpen);
        TweenMax.to('.float-overlay', 0, {
                    background: 'rgba(0,0,0,0)'
                });
        function floatOpen() {
            var pen = $(this).find('.float-overlay').attr('data-pen');
            if (pen == 'particle-beam') {
                var url = 'http://codepen.io/rmarquardt/pen/zowNym/';
                var urlName = 'Particle Beam Animation';
                var hash = 'zowNym';
            }
            if (pen == 'initials') {
                var url = 'http://codepen.io/rmarquardt/pen/QGbbLY/';
                var urlName = 'Initials';
                var hash = 'QGbbLY';
            }
            if (pen == 'icon-set') {
                var url = 'http://codepen.io/rmarquardt/pen/pNzppo/';
                var urlName = 'Icon Set';
                var hash = 'pNzppo';
            }
            if (pen == 'title-web') {
                var url = 'http://codepen.io/rmarquardt/pen/KNgLwN/';
                var urlName = 'Animated Drawing Text';
                var hash = 'KNgLwN';
            }
            if (pen == 'ring') {
                var url = 'http://codepen.io/rmarquardt/pen/LbOMdB/';
                var urlName = 'Ring';
                var hash = 'LbOMdB';
            }
            if (pen == 'bird') {
                var url = 'http://codepen.io/rmarquardt/pen/oYMwKO/';
                var urlName = 'Flying Bird';
                var hash = 'oYMwKO';
            }
            if (pen == 'equalizer') {
                var url = 'http://codepen.io/rmarquardt/pen/mRKKOZ/';
                var urlName = 'Graphic Equalizer';
                var hash = 'mRKKOZ';
            }
            if (pen == 'thermometer') {
                var url = 'http://codepen.io/rmarquardt/pen/MbRzZX/';
                var urlName = 'Thermometer with Slider';
                var hash = 'MbRzZX';
            }
            if (pen == 'sunrays') {
                var url = 'http://codepen.io/rmarquardt/pen/vyqGGJ/';
                var urlName = 'Sun Rays';
                var hash = 'vyqGGJ';
            }
            if (pen == 'morph') {
                var url = 'http://codepen.io/rmarquardt/pen/JbOVWM/';
                var urlName = 'Logo Morph';
                var hash = 'JbOVWM';
            }
            
            
            
            
            
            var count = $('.bottom').length;
            var doneCount = $('.doneB').length;
            var item = $(this);
            var itemImg = $(this).children('img');
            var h = $(window).height() * 0.8;
            TweenMax.to('.work-body', 1, {backgroundColor:'rgba(0,0,0,0.5)'});
                 $('.pen').append('<a id="itemClose">Close</a>');
                $('.pen').append('<p data-height="' + h + '" data-theme-id="dark" data-slug-hash="' + hash + '" data-default-tab="html,result" data-user="rmarquardt" data-embed-version="2" data-pen-title="Particle Beam Animation" class="codepen">See the Pen <a href="' + url + '">' + urlName + '</a> by Randall Marquardt (<a href="http://codepen.io/rmarquardt">@rmarquardt</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>');
                setTimeout(function () {
                    TweenMax.to('.pen', 0.5, {scale:1, ease:Quad.easeInOut});
                    TweenMax.to('#itemClose', 0.5, {opacity:1});
                }, 1000);
                $('#itemClose').click(function () {
                    $(this).remove();
                    TweenMax.to('.work-body', 1, {backgroundColor:'rgba(0,0,0,0)'});
                    TweenMax.to('.pen', 0.5, {scale:0, ease:Quad.easeInOut});
                    setTimeout(function () {
                      $('.cp_embed_wrapper').remove();
                    }, 500);
                });
        }
        

        ray();
        setInterval(ray, 3000);

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
                tl.to(this, 3, {
                    height: rayH,
                    rotation: newAng,
                    ease: Power0.easeNone
                })
            })
        }

    }
    

    /////////////////// Cube ///////////////////////////////////////

    function itemOpen() {

        var winH = $(window).height();
        var showcase = $('.showcase');
        var preview = $('.preview');
        var view = $(this).attr('data-view');

        if (view == 'code1') {
            var codeView = '<p data-height="' + winH + '" data-theme-id="dark" data-slug-hash="zowNym" data-default-tab="html,result" data-user="rmarquardt" data-embed-version="2" data-pen-title="Particle Beam Animation" class="codepen">See the Pen <a href="http://codepen.io/rmarquardt/pen/zowNym/">Particle Beam Animation</a> by Randall Marquardt (<a href="http://codepen.io/rmarquardt">@rmarquardt</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>'
        }
        if (view == 'code2') {
            var codeView = '<p data-height="' + winH + '" data-theme-id="0" data-slug-hash="KNgLwN" data-default-tab="html,result" data-user="rmarquardt" data-embed-version="2" data-pen-title="SVG Animated Drawing Text" class="codepen">See the Pen <a href="https://codepen.io/rmarquardt/pen/KNgLwN/">SVG Animated Drawing Text</a> by Randall Marquardt (<a href="http://codepen.io/rmarquardt">@rmarquardt</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>'
        }
        if (view == 'code3') {
            var codeView = '<p data-height="' + winH + '" data-theme-id="0" data-slug-hash="QGbbLY" data-default-tab="html,result" data-user="rmarquardt" data-embed-version="2" data-pen-title="QGbbLY" class="codepen">See the Pen <a href="https://codepen.io/rmarquardt/pen/QGbbLY/">QGbbLY</a> by Randall Marquardt (<a href="http://codepen.io/rmarquardt">@rmarquardt</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>'
        }
        if (view == 'code4') {
            var codeView = '<p data-height="' + winH + '" data-theme-id="0" data-slug-hash="pNzppo" data-default-tab="html,result" data-user="rmarquardt" data-embed-version="2" data-pen-title="GreenSock Animated Icon Set (SVG)" class="codepen">See the Pen <a href="https://codepen.io/rmarquardt/pen/pNzppo/">GreenSock Animated Icon Set (SVG)</a> by Randall Marquardt (<a href="http://codepen.io/rmarquardt">@rmarquardt</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>'
        }

        $('.preview').append(codeView);
        $('.preview').css({
            'top': winH,
            'height': winH
        });
        setTimeout(function () {
            $('.return').fadeIn();
        }, 1500)
        TweenMax.to(showcase, 1.5, {
            y: -1000
        });
        TweenMax.to(preview, 1.5, {
            y: '-' + winH
        });
    }


    function itemClose() {
        var winH = $(window).height();
        var showcase = $('.showcase');
        var preview = $('.preview');
        $('.return').fadeOut();
        TweenMax.to(showcase, 1.5, {
            y: 0
        });
        TweenMax.to(preview, 1.5, {
            y: 0
        });
        setTimeout(function () {
            $('.cp_embed_wrapper').remove();
        }, 1500)
    }

    
    
    
    
    
    
    

});