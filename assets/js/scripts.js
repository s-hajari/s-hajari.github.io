$(function() {
	$('#easyPaginate').easyPaginate({
		paginateElement: 'div',
		elementsPerPage: 5,
		effect: 'slide',
        firstButton: false,
        lastButton: false,
        prevButtonText: "Prev",
        nextButtonText: "Next",
	});
});