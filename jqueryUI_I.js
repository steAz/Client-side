$(document).ready(function () {
    $("#Text").hide();

    $("#textToggle").toggle(
		function () {
		    $("#Text").show("slow");
		    $("#Text").effect("highlight", {}, 2000);
		},
		function () {
		    $("#Text").hide();
		}
	);
});
