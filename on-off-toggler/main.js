$(document).ready(function(){
	$('div.on').css({'color' : 'white'});
	$('div.off').css({'color' : 'deepskyblue'});
	$('.off').click(function(){
		$('.background').css({'transform' : 'translate(-12% , -50%)'}).addClass('box-shadow1');
		$('.container').css({'background' : '#e7e7e7'});
		$('.box').addClass('box-shadow2');
		setTimeout(function(){
			$('div.off').css({'color' : 'white'});
			$('div.on').css({'color' : 'deepskyblue'});
			$('.background').removeClass('box-shadow1');
		},200)
	});
	$('.on').click(function(){
		$('.background').css({'transform' : 'translate(-86% , -50%)'}).addClass('box-shadow1');
		$('.container').css({'background' : 'deepskyblue'});
		$('.box').removeClass('box-shadow2');
		setTimeout(function(){
			$('div.on').css({'color' : 'white'});
			$('div.off').css({'color' : 'deepskyblue'});
			$('.background').removeClass('box-shadow1');
		},200)
	});
});