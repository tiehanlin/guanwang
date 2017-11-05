$("#bodyer01 .threeChange .ptgn").mouseenter(function(){
	var index=$(this).index();
	$(this).children('.img01').stop().hide().siblings('.img02').stop().show()
	$(this).children('.arrow').stop().fadeIn()
	$(this).siblings().children('.img02').stop().hide().siblings('.img01').stop().show()
	$(this).siblings().children('.arrow').stop().fadeOut()
	$('#bodyer01 .people').eq(index).stop().fadeIn().siblings('.people').stop().fadeOut()
})
$("#bodyer02 .threeChange .ptgn").mouseenter(function(){
	var index=$(this).index();
	$(this).children('.img01').stop().hide().siblings('.img02').stop().show()
	$(this).children('.arrow').stop().fadeIn()
	$(this).siblings().children('.img02').stop().hide().siblings('.img01').stop().show()
	$(this).siblings().children('.arrow').stop().fadeOut()
	$('#bodyer02 .people').eq(index).stop().fadeIn().siblings('.people').stop().fadeOut()
})