$(document).ready(function() {

$("#sally-container").click(function() {
	$("#popup-container").fadeIn();
});

$("#close").click(function() {
	$("#popup-container").fadeOut();
});

$("#popup-overlay").click(function() {
	$("#popup-container").fadeOut();
});

$(".trail-logo").hover(function () {
	if (!$(this).hasClass("selected")) {
	$(this).addClass("selected");
 }
 	else $(this).removeClass("selected");
});

$(".schedule-event").hover(function () {
	if (!$(this).hasClass("schedule-event-hover")) {
	$(this).addClass("schedule-event-hover");
 }
 	else $(this).removeClass("schedule-event-hover");
});

$(".leaf-container").hover(function () {
	if (!$(this).hasClass("leaf-container-hover")) {
	$(this).addClass("leaf-container-hover");
 }
 	else $(this).removeClass("leaf-container-hover");
});


$("#geology").click(function() {
	$("#container-geology").fadeIn();
});

$(".close2").click(function() {
	$("#container-geology").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-geology").fadeOut();
});

$("#treenursery").click(function() {
	$("#container-treenursery").fadeIn();
});

$(".close2").click(function() {
	$("#container-treenursery").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-treenursery").fadeOut();
});

$("#birding").click(function() {
	$("#container-birding").fadeIn();
});

$(".close2").click(function() {
	$("#container-birding").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-birding").fadeOut();
});

$("#aquatics").click(function() {
	$("#container-aquatics").fadeIn();
});

$(".close2").click(function() {
	$("#container-aquatics").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-aquatics").fadeOut();
});

$("#museum").click(function() {
	$("#container-museum").fadeIn();
});

$(".close2").click(function() {
	$("#container-museum").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-museum").fadeOut();
});

$("#naturalresources").click(function() {
	$("#container-naturalresources").fadeIn();
});

$(".close2").click(function() {
	$("#container-naturalresources").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-naturalresources").fadeOut();
});

$("#astronomy").click(function() {
	$("#container-astronomy").fadeIn();
});

$(".close2").click(function() {
	$("#container-astronomy").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-astronomy").fadeOut();
});

$("#electives").click(function() {
	$("#container-electives").fadeIn();
});

$(".close2").click(function() {
	$("#container-electives").fadeOut();
});

$(".popup-overlay2").click(function() {
	$("#container-electives").fadeOut();
});


});
