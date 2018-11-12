$(window).ready(function(){
  
	$('.more').click(function(){
   
  		$(this).parents('.post').toggleClass('reveal');
  		$(this).siblings('.overlay').toggleClass('fade');
  	})
	// expand articles
	var selection;
	$('a.filter').click(function(){
		
		$(this).addClass('active');
		$('a.filter').not(this).removeClass('active');
	
		// filters keep active and remove active class from others

		// select link with class active
		// 	take inner html
		// 	convert to lowercase
		selection = $('.active').text().toLowerCase();
		// console.log(selection)
		// if "all"
		if (selection === "all") {
		// 	// display all 
		// 	// i.e. select element "article"
		// 	// display: initial
			$("article").show();
			// notice this is element called "article" and not class name
		}

		// if "html/css/js/reading/projects"
			// select that class
			// display none
		if (selection !== "all") {

			var toShow = document.getElementsByClassName(selection);
			for (let i = 0; i < toShow.length; i++) {
				toShow[i].setAttribute("style", "display: block");
			}

			var removeIt = "." + selection;
			// this step added to get the class of the name selected
			var toHide = $('article').not(removeIt);
		
			for (let i = 0; i < toHide.length; i++) {
				toHide[i].setAttribute("style", "display: none");
			}
			// ones to remove
		}
	})

})