$(document).ready(function(){
	//首页大图轮播呼吸灯JS
	$("#hxd1").fadeOut(2000);
    $("#hxd1").fadeIn(2000);
	setInterval(function(){$("#hxd1").fadeOut(2000);$("#hxd1").fadeIn(2000);} ,4000)
	
	$("#hxd2").fadeOut(2000);
    $("#hxd2").fadeIn(2000);
	setInterval(function(){$("#hxd2").fadeOut(2000);$("#hxd2").fadeIn(2000);} ,4000);
	
	$("#hxd3").fadeOut(2000);
    $("#hxd3").fadeIn(2000);
	setInterval(function(){$("#hxd3").fadeOut(2000);$("#hxd3").fadeIn(2000);} ,4000);

	$("#hxd4").fadeOut(2000);
    $("#hxd4").fadeIn(2000);
	setInterval(function(){$("#hxd4").fadeOut(2000);$("#hxd4").fadeIn(2000);} ,4000)

     //导航
	var $obj = $('.nav ul');
	$obj.find('li').on('mouseenter', function() {
		$(this).addClass("intro");
	});
	$obj.find('li').on('mouseleave', function() {
		$(this).removeClass("intro");
	})
	var flb_kd=$(window).width();//获取窗口宽度，从而控制导航下拉的显示位置
	if(flb_kd>=1900){
		$('#cpzx').find('.submenu').css("left","-345px");
		$('#nav_jjfa').find('.submenu').css("left","-450px");
		}else if(flb_kd>=1580){
		$('#zxhd').find('.submenu').css("left","-50px");
		$('#cpzx').find('.submenu').css("left","-395px");
		$('#nav_jjfa').find('.submenu').css("left","-500px");
		}else if(flb_kd>=1420){
		$('#zxhd').find('.submenu').css("left","-100px");
		$('#cpzx').find('.submenu').css("left","-445px");
		$('#nav_jjfa').find('.submenu').css("left","-550px");
		}else{
		$('#zxhd').find('.submenu').css("left","-200px");
		$('#cpzx').find('.submenu').css("left","-545px");
		$('#nav_jjfa').find('.submenu').css("left","-650px");
		}


      //导航下拉菜单
    $('#zxhd').mouseenter(function(){
       // $(this).children('.submenu').fadeToggle(500);
		$('#nav_hover_bg').stop().animate({
			height: '310px'
		}, 500);
		$(this).children('.submenu').stop().animate({
			height: '310px'
		}, 600);
    })
    $('#zxhd').mouseleave(function(){
		$('#nav_hover_bg').stop().animate({
			height: '0px'
		}, 600);
		$(this).children('.submenu').stop().animate({
			height: '0px'
		}, 500);
        //$(this).children('.submenu').css('display','none');
    })
	
	 $('#cpzx').mouseenter(function(){
       // $(this).children('.submenu').fadeToggle(500);
		$('#nav_hover_bg').stop().animate({
			height: '390px'
		}, 500);
		$(this).children('.submenu').stop().animate({
			height: '390px'
		}, 600);
    })
    $('#cpzx').mouseleave(function(){
		$('#nav_hover_bg').stop().animate({
			height: '0px'
		}, 600);
		$(this).children('.submenu').stop().animate({
			height: '0px'
		}, 500);
        //$(this).children('.submenu').css('display','none');
    })

    $('#nav_jjfa').mouseenter(function(){
       // $(this).children('.submenu').fadeToggle(500);
		$('#nav_hover_bg').stop().animate({
			height: '390px'
		}, 500);
		$(this).children('.submenu').stop().animate({
			height: '390px'
		}, 600);
    })
    $('#nav_jjfa').mouseleave(function(){
		$('#nav_hover_bg').stop().animate({
			height: '0px'
		}, 600);
		$(this).children('.submenu').stop().animate({
			height: '0px'
		}, 500);
        //$(this).children('.submenu').css('display','none');
    })

	  
	  //首页大图轮播js参数   	
	  jQuery(".aui-banner-main").slide({
		  mainCell: ".bd ul",
		  effect: "fold",
		  autoPlay: true,
		  trigger: "click",
                  interTime:5000,
		  delayTime: 700
	  });
	  
	  //首页解决法案切换js参数   	
	  $(".solution-more-slide").slide({
		  effect: 'fold'
	  });

		//首页导航固定顶部JS
		var nav=$(".head1"); //得到导航对象
		var win=$(window);
		var sc=$(document);//得到document文档对象
		$(function(){
		  win.scroll(function(){
		if(sc.scrollTop()>=45){
		  nav.addClass("head");
		  nav.removeClass("head1");
		  nav.addClass("fixednav"); 
		}else{
			nav.addClass("head1");
			nav.removeClass("head");
			nav.removeClass("fixednav");
		}
		})  
		})

});
