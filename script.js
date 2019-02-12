$(document).ready(() => {
	console.log("The homepage has loaded")

	$(".info2").hide();
	$(".title").on("click", () => {
		$(".info2").slideToggle();
	});
});