$(window).ready(function(){
  
	$('.more').click(function(){
   
  		$(this).parents('.post').toggleClass('reveal');
  		$(this).siblings('.overlay').toggleClass('fade');
  	})
	// expand articles

	$('a.filter').click(function(){
		
		$(this).addClass('active');
		$('a.filter').not(this).removeClass('active');

	})
	// filters keep active and remove active class from others

	/*******************************
	next step to write a function that shows all articles 
	that have the same class name as the link that's active


	// select link with class active
		// take inner html
		// convert to lowercase
	// if "all"
		// display all 
		// i.e. select element "article"
		// display: initial
	// if "html/css/js/reading/projects"
		// select that class
		// display none

	*******************************/
	

})