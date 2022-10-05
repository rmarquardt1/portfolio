/*-------------------------------------------
 	function for autocomplete in 
 	search boxes.
-------------------------------------------*/
$(window).on('load', function() {

	$(".search-box").each(function(index) {
		var $this = $(this);
		$(this).autocomplete({
			source : function(request,response) {
				$.ajax({
					url : $this.closest("form").children(".searchPostUrl").val(),
					dataType : "json",
					data : {searchTerm : request.term},
					success : function(data) {
						response($.map(data.suggestions,function(row) {
//							console.log("row:"+row);
//							console.log(row);
							return {
								label : row['value'],
								value : row['value']
							};
						}));
					}
				});
			},
			minLength : 3,
			delay : 10,
			appendTo : $this.closest("form")
		}).data("ui-autocomplete")._renderItem = function(ul, item) {
			return $("<li></li>")
				.data("item.autocomplete", item)
				.append("<a>" + item.label + "</a>")
				.appendTo(ul);
		};
	});
});
/*-------------------------------------------
	function for validation in 
	search boxes.
-------------------------------------------*/
$(document).ready(function() {
	
	$('.simplesearchform').submit(function()  
      { 
//		console.log("validating");
//		console.log($(this));
//		console.log($(this).children());
		// cleaning
		var status=true;
  		$(this).find('label.error').each(function(i){
            $(this).hide();
	    });			
  		$(this).find('p.error').each(function(i){
            $(this).removeClass('error');
            $(this).removeClass('valid');
            $(this).addClass('valid');
	    });			
		
  		// required validation
  		$(this).find('.required').each(function(i){
//  			console.log("validating required");  			
  			var p = $(this).parent('p');

//  			console.log("this.val="+$(this).val());  			
  			if (!p.hasClass('error') && ($(this).val() == null || $(this).val().trim() == '' || $(this).val() == $(this).attr('placeholder'))) {
   			    p.removeClass('valid');
  			    p.addClass('error');
  			    p.find('label.error').show();
  			    status=false;
  			}
    	});	  		
//  		console.log("returning "+status);
  		return status;
      });
	
});