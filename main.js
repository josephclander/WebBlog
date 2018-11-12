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

		selection = $('.active').text().toLowerCase();

		if (selection === "all") {

			$("article").show();
			// notice this is element called "article" and not class name
		}

		if (selection !== "all") {

			var toShow = document.getElementsByClassName(selection);
			for (let i = 0; i < toShow.length; i++) {
				toShow[i].setAttribute("style", "display: block");
			}

			var selectionClass = "." + selection;
			// this step added to get the class of the name selected
			var toHide = $('article').not(selectionClass);
		
			for (let i = 0; i < toHide.length; i++) {
				toHide[i].setAttribute("style", "display: none");
			}
			
		}
	})

})