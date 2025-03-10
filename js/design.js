$(document).ready(function(){
	$("button#close_tags").click(function(){
		$(this).toggleClass("change");
	});
	$(window).scroll(function(){
		var x = $(this).scrollTop();
		if(x >= 650){
			$(".img-customer").addClass("Toright");
			$(".paragraph-anim").addClass("Toleft");
		}
		else{
			$(".img-customer").removeClass("Toright");
			$(".paragraph-anim").removeClass("Toleft");
		}
	});
	$(window).scroll(function(){
		var  y = $(this).scrollTop();
		if(y >= 320){
			$(".bgopacity").addClass("top-navbar-j");
		}else{
			$(".bgopacity").removeClass("top-navbar-j");
		}
	});
	$(".custome-line").click(function(){
		var attributes = $(this).attr('data-filter');
		if(attributes==='All'){
			$(".filter").show(300);
		} else{
			$(".filter").not("."+attributes).hide(300);
			$(".filter").filter("."+attributes).show(300);
		}
	});
	$(window).scroll(function(){
		var x = $(this).scrollTop();
		console.log(x);
		if(x >= 3950){
			$(".card-1").addClass("animsh");
			$(".card-2").addClass("animsh-1");
			$(".card-3").addClass("animsh-2");
		}
		else
		{
			$(".card-1").removeClass("animsh");
			$(".card-2").removeClass("animsh-1");
			$(".card-3").removeClass("animsh-2");
		}
	});
});