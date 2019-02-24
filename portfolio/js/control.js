var $upbtn = $("#up-btn")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 20){
		$upbtn.fadeIn();
		$upbtn.css("display", "flex");
	}else{
		$upbtn.fadeOut();
	}
})

$upbtn.on("click", function(){
	$("html,body").animate({scrollTop:0}, 900)
})

$('#tel').click(function(){
	$('#tel-modal').fadeIn();
	$('#tel').css("display", "none");
})

$('#tel-modal-close').click(function(){
	$('#tel-modal').fadeOut();
	$('#tel').css("display", "flex");
})

$('.more-btn').click(function(event){
	event.preventDefault();
	$('.content-block').append('<div class="content-img"><img src="img/2.jpg" alt="img"><div class="content"><p><strong>Gribabas.com</strong><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p></div></div><div class="content-img"><a href="https://www.youtube.com/"><img src="img/1.jpg" alt="img"><div class="content"><p><strong>Gribabas.com</strong><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p></div></div></a><div class="content-img"><img src="img/2.jpg" alt="img"><div class="content"><p><strong>Gribabas.com</strong><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p></div></div>');
})

