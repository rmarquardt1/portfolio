




$('document').ready(function() {
    var canvT = $('#starsTop');
    var canvM = $('#starsMiddle');
    var canvB = $('#starsBottom');
    canvStars(canvT);
    canvStars(canvM);
    canvStars(canvB);
    
    function canvStars(canvId) {
        
        var canvas;
var context;
var canvasH;
var canvasW;
var stars = [];
var fps = 50;
var numStars = 2000;
  
  // Calculate the screen size
	canvasH = $(window).height();
	canvasW = $(window).width();
	
	// Get the canvas
	canvas = canvId;
	
	// Fill out the canvas
    
    
    
	canvas.attr('height', canvasH);
	canvas.attr('width', canvasW);
	context = canvas[0].getContext('2d');
	
	// Create all the stars
	for(var i = 0; i < numStars; i++) {
		var x = Math.round(Math.random() * canvasW);
		var y = Math.round(Math.random() * canvasH);
		var length = 1 + Math.random() * 2;
		var opacity = Math.random();
		
		// Create a new star and draw
		var star = new Star(x, y, length, opacity);
		
		// Add the the stars array
		stars.push(star);
	}
	    
function animate() {
	context.clearRect(0, 0, canvasW, canvasH);
	$.each(stars, function() {
		this.draw(context);
	})
}

function Star(x, y, length, opacity) {
	this.x = parseInt(x);
	this.y = parseInt(y);
	this.length = parseInt(length);
	this.opacity = opacity;
	this.factor = 1;
	this.increment = Math.random() * .03;
}
        
Star.prototype.draw = function() {
	context.rotate((Math.PI * 1 / 10));
	
	// Save the context
	context.save();
	
	// move into the middle of the canvas, just to make room
	context.translate(this.x, this.y);
	
	// Change the opacity
	if(this.opacity > 1) {
		this.factor = -1;
	}
	else if(this.opacity <= 0) {
		this.factor = 1;
		
		this.x = Math.round(Math.random() * canvasW);
		this.y = Math.round(Math.random() * canvasH);
	}
		
	this.opacity += this.increment * this.factor;
	
	context.beginPath()
	for (var i = 5; i--;) {
		context.lineTo(0, this.length);
		context.translate(0, this.length);
		context.rotate((Math.PI * 2 / 10));
		context.lineTo(0, - this.length);
		context.translate(0, - this.length);
		context.rotate(-(Math.PI * 6 / 10));
	}
	context.lineTo(0, this.length);
	context.closePath();
	context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
	context.shadowBlur = 5;
	context.shadowColor = '#ffff33';
	context.fill();
	
	context.restore();
}


	setInterval(animate, 1000 / fps);
}
/**
 * Animate the canvas
 */
//    
//function animate() {
//	context.clearRect(0, 0, canvasW, canvasH);
//	$.each(stars, function() {
//		this.draw(context);
//	})
//}

/**
 * Star
 * 
 * @param int x
 * @param int y
 * @param int length
 * @param opacity
 */
//    
//function Star(x, y, length, opacity) {
//	this.x = parseInt(x);
//	this.y = parseInt(y);
//	this.length = parseInt(length);
//	this.opacity = opacity;
//	this.factor = 1;
//	this.increment = Math.random() * .03;
//}

/**
 * Draw a star
 * 
 * This function draws a start.
 * You need to give the contaxt as a parameter 
 * 
 * @param context
 */
//    
//Star.prototype.draw = function() {
//	context.rotate((Math.PI * 1 / 10));
//	
//	// Save the context
//	context.save();
//	
//	// move into the middle of the canvas, just to make room
//	context.translate(this.x, this.y);
//	
//	// Change the opacity
//	if(this.opacity > 1) {
//		this.factor = -1;
//	}
//	else if(this.opacity <= 0) {
//		this.factor = 1;
//		
//		this.x = Math.round(Math.random() * canvasW);
//		this.y = Math.round(Math.random() * canvasH);
//	}
//		
//	this.opacity += this.increment * this.factor;
//	
//	context.beginPath()
//	for (var i = 5; i--;) {
//		context.lineTo(0, this.length);
//		context.translate(0, this.length);
//		context.rotate((Math.PI * 2 / 10));
//		context.lineTo(0, - this.length);
//		context.translate(0, - this.length);
//		context.rotate(-(Math.PI * 6 / 10));
//	}
//	context.lineTo(0, this.length);
//	context.closePath();
//	context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
//	context.shadowBlur = 5;
//	context.shadowColor = '#ffff33';
//	context.fill();
//	
//	context.restore();
//}

});
