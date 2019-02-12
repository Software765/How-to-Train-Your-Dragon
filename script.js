$(document).ready(() => {
	$(".image p").on("mouseenter", () => {
		$(".image p").css("color", "#bc9b07");
	})
	$(".image p").on("mouseleave", () => {
		$(".image p").css("color", "#e23a24");
	})

	$(".info2").hide();
	
	$(".title").on("click", () => {
		$(".info2").slideToggle();
	})
});