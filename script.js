$(document).ready(() => {

	$(".info2").hide();
	
	$(".title").on("click", () => {
		$(".info2").slideToggle();
	})
});