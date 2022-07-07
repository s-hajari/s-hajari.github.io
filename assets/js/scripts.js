$(function() {
	$('#easyPaginate').easyPaginate({
		paginateElement: 'div',
		elementsPerPage: 10,
		effect: 'slide',
        firstButton: false,
        lastButton: false,
        prevButtonText: "Prev",
        nextButtonText: "Next",
	});
});