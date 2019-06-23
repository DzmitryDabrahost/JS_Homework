jQuery(document).ready(function($){
	$(".fa-bars").on("click", function(){
		$(".mobileMenu").slideToggle();
		$(this).toggleClass("active");
	});
});

