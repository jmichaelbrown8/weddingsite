function countdown()
	{
		var end = new Date(2013, 07, 10, 16, 30, 0, 0);
		var today = new Date();
		var diff = end.getTime() - today.getTime();
		var diff = diff/1000;
		//don't care about milliseconds
		
		var seconds = Math.floor(diff % 60);
		var minutes = Math.floor((diff/60) % 60);
		var hours = Math.floor((diff/3600) % 24);
		var days = Math.floor((diff/(3600*24))); 
		
		var text = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds!";
		var ele = $('#countdown');
		ele.text(text);
		setTimeout(function(){countdown()},1000);
	}

$('.date').click(function(){window.open("http://www.google.com/calendar/event?action=TEMPLATE&text=Claire%20and%20J.%20Michael's%20Wedding&dates=20130810/20130811&details=&location=McLean%20House%20in%20West%20Linn&trp=false&sprop=&sprop=name:","_blank")});
$('.location').click(function(){window.open("http://maps.google.com/maps?sugexp=chrome,mod%3D8&um=1&ie=UTF-8&q=Mclean+house+west+linn&fb=1&gl=us&hq=Mclean+house&hnear=0x549571591d560d1f:0x456efa935d1ffe9d,West+Linn,+OR&cid=0,0,6496951830215166631&sa=X&ei=PPwlUO4IquqLAtjygfAJ&ved=0CE4QrwswAA","_blank")});
$('.bucket').children().click(function(event)
	{
		console.log(event.target);
		if(event.target.nodeName == "A")
			return;
		var this_bucket = $(event.target).closest('.bucket');
		if(this_bucket.children('.content:visible').length)
			this_bucket.children('.content').slideUp();
		else
			this_bucket.children('.content').slideDown();
	});
$('.bucket').click(function(event)
	{
		console.log(event.target);
		var this_bucket = $(event.target);
		if(this_bucket.children('.content:visible').length)
			this_bucket.children('.content').slideUp();
		else
			this_bucket.children('.content').slideDown();
	});
$(document).ready(function()
	{
		countdown();
		$('.countdown').show();
	});