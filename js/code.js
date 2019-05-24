//初始化播放器
const ap = new APlayer
({
	container: document.getElementById('aplayer'),
	audio: 
	[{
		name: 'River Flows in You',
		artist: 'Yiruma',
		url: 'media/River Flows in You.mp3',
		cover: 'media/R_cover.jpg',
		theme: '#000'
	 },
	 {
		name: 'SET A FIRE',
		artist: '青木カレン',
		url: 'media/SET A FIRE.mp3',
		cover: 'media/S_cover.jpg',
		theme: '#000'
	}]
});
//切換顏色,圖片
function check(n)
{
	var t=$("#left .img:first").css("background-image");
	var c=n+".gif";
	if(t.match(c)!=c)
	{
		$("#left .img:first").css({"zindex":"5","opacity":"0"});
		$("#left .img:last").css({"background-image":"url(img/"+n+".gif)","zindex":"6","opacity":"1"});
	}
}
function undo()
{
	$("#left .img:first").css({"zindex":"6","opacity":"1"});
	$("#left .img:last").css({"zindex":"5","opacity":"0"});
}
var color=$("#menu").css("background-color");  
var c=color.match(/(\d(\.\d+)?)+/g);
var rgb= new Array();
rgb[0]="237,161,171";
rgb[1]="64,153,203";
rgb[2]="182,195,190";
rgb[3]="102,204,255";
rgb[4]="51,204,153";
function b_undo()
{
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+c+",1.00)");
	$("#aplayer").css("background-color","rgba("+c+",0.4)");
}
//Home
$("#menu>.home").hover(function()
{
	$(this).css("color","#0A5D72");
	check(1);
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+rgb[0]+",1.00)");
	$("#aplayer").css("background-color","rgba("+rgb[0]+",0.4)");
},function()
{
	$(this).css("color","#000");
	undo();
	b_undo();
});
//Mercurius,About
$("#menu>.name,#top>.list>.about>a").hover(function()
{
	$(this).css("color","#0A5D72");
	check(0);
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+rgb[1]+",1.00)");
		$("#aplayer").css("background-color","rgba("+rgb[1]+",0.4)");
},function()
{
	$(this).css("color","#000");	
	undo();
	b_undo();
});
//News,Read
$("#menu>.news,#top>.list>.read>a").hover(function()
{
	$(this).css("color","#0A5D72");
	check(2);
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+rgb[2]+",1.00)");
	$("#aplayer").css("background-color","rgba("+rgb[2]+",0.4)");
},function()
{
	$(this).css("color","#000");	
	undo();
	b_undo();
});
//Gallery,Favorite
$("#menu>.gallery,#top>.list>.favorite>a").hover(function()
{
	$(this).css("color","#0A5D72");	
	check(3);
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+rgb[3]+",1.00)");
	$("#aplayer").css("background-color","rgba("+rgb[3]+",0.4)");
},function()
{
	$(this).css("color","#000");	
	undo();
	b_undo();
});
//Calculator
$("#top>.list>.calculator>a").hover(function()
{
	$(this).css("color","#0A5D72");	
	check(4);
	$("#menu,#top li,#top .bar,#d-bar").css("background-color","rgba("+rgb[4]+",1.00)");
	$("#aplayer").css("background-color","rgba("+rgb[4]+",0.4)");
},function()
{
	$(this).css("color","#000");	
	undo();
	b_undo();
});
//Aplayer
$("#aplayer").hover(function()
{
	$(this).css("background-color","rgba("+c+",0.7)");
},function()
{
	$(this).css("background-color","rgba("+c+",0.4)");
});
//返回頂端
$(window).scroll(function(){if ($(window).scrollTop()>50)
{
	$("#return").fadeIn(400);
}
else
{
	$("#return").fadeOut(400);
}
});
$("#return").click(function()
{
	$('body,html').animate({scrollTop:0},400);
	return false;
});
$("#return").hover(function()
{
	$(this).css("background-image","url(img/back_b.png)");
},function()
{
	$(this).css("background-image","url(img/back_a.png)");
});