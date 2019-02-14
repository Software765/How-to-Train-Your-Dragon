$(document).ready(() => {
	$(".image p").on("mouseenter", () => {
		$(".image p").css("color", "#bc9b07");
	})
	$(".image p").on("mouseleave", () => {
		$(".image p").css("color", "#e23a24");
	})

	$(".info2").hide();
	$(".info3").hide();
	$(".info4").hide();
	
	$(".title2").on("click", () => {
		$(".info2").slideToggle();
	})
	$(".title3").on("click", () => {
		$(".info3").slideToggle();
	})
	$(".title4").on("click", () => {
		$(".info4").slideToggle();
	})
});