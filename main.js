$(window).ready(function() {
/*****************************
Github results box API
*****************************/

  fetch("https://api.github.com/users/josephclander")
    .then(response => response.json())
    .then(myJson => {
	  console.log(myJson);
	  let repos = document.querySelector('#js-repositories');
		repos.innerHTML = myJson.public_repos;
	});
	
	fetch("https://api.github.com/repos/josephclander/webBlog/commits?per_page=100")
    .then(response => response.json())
    .then(myJson => {
		let commits = document.querySelector('#js-commits');
		commits.innerHTML = myJson.length;
    });

  /*****************************
Expand Articles
*****************************/

  $(".more").click(function(event) {
    event.preventDefault();
    $(this)
      .parents(".post")
      .toggleClass("reveal");
    $(this)
      .siblings(".overlay")
      .toggleClass("fade");
  });

  /*****************************
Toggle Filter List
*****************************/

  $("li.topics").click(function(event) {
    event.preventDefault();

    var x = document.getElementById("buttons");

    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  });

  /*****************************
Filter Topics
*****************************/

  var selection;
  $("a.filter").click(function(event) {
    event.preventDefault();

    $(this).addClass("active");
    $("a.filter")
      .not(this)
      .removeClass("active");

    selection = $(".active")
      .text()
      .toLowerCase();

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
      var toHide = $("article").not(selectionClass);

      for (let i = 0; i < toHide.length; i++) {
        toHide[i].setAttribute("style", "display: none");
      }
    }
  });
});
