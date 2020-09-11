$(document).ready(function(){
	$('.alert').click(function(){
		alert("Hello!!!!");
	});

	$('.hide').click(function(){
		$('p').hide();
	});

	$('.show').click(function(){
		$('p').show(2000);
	});
	$('.tgl').click(function(){
		$('p').toggle('slow');
	});

	// fadeOut
	$('.f_out').click(function(){
		$('h4').fadeOut();
	});

	// fadeIn
	$('.f_in').click(function(){
		$('h4').fadeIn();
	});

	$('.f_tgl').click(function(){
		$('h4').fadeToggle();
	});
	$('.f_to').click(function(){
		$('h4').fadeTo(1000, 0.5);
	});

	$('.main').click(function(){
		$('.sub').slideToggle();
	});
});