$(window).ready(function(){
  
	$('.more').click(function(){
   
  		$(this).parents('.post').toggleClass('reveal');
  		$(this).siblings('.overlay').toggleClass('fade');
  	})

})