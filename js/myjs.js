var textarea;

var fnc=function(){
	var color = $("#marker").css("color");
	if (color=="rgb(0, 0, 0)") {
		$("#marker").css("color", "darkseagreen");
	}
	else  {
		$("#marker").css("color", "black");	
	}
	setTimeout(fnc, 1000);
};

$(document).ready(function(){
	fnc();
});

var l11a_counter = 0;

$(function (){
    $('#cat-pic').click(function(event){
       $('#cat-pic').attr('src', "pic/cat1.png"); 
       setTimeout(function(){
           $('#cat-pic').attr('src',"pic/cat.png");
       }, 3500);
    });

    $('#li1a').click(function(event){
			 if ($(li1a_counter%2 == 0)) {
				 $('#li1b').css('visibility', 'visible'); 
         $('#li1b').css('height', '100%');
			 } 
			 else {
			   $('#li1b').css('visibility', 'hidden'); 
         $('#li1b').css('height', '0px');
			 }
			 li1a_counter = li1a_counter+1;
    });
    $('#li2a').click(function(event){
       $('#li2b').css('visibility', 'visible'); 
       $('#li2b').css('height', '100%'); 
    });




    $('#cat-pic').mouseover(function(){
       $('#cat-pic').css('cursor', "pic/cursor_write.gif"); 
    });

	$('#search_bar').on('keyup', function(event) {
  		if (event.keyCode == 13) { 
    			event.preventDefault();
			console.log("good bye!!!\n");
 		}
	});
		
	$("#web").mouseover(function(){
		$("#guess").html("my fan fictions and fan arts.");
	});

	$("#web").mouseout(function(){
		$("#guess").html("");	
	});
	
	$("#music").mouseover(function(){
		$("#guess").html("my favorite music.");
	});

	$("#music").mouseout(function(){
		$("#guess").html("");	});

	$("#research").mouseover(function(){
		$("#guess").html("my research webpage.");
	});

	$("#research").mouseout(function(){
		$("#guess").html("");	});

	$("#photo").mouseover(function(){
		$("#guess").html("photos of my favorite stuffs.");
	});

	$("#photo").mouseout(function(){
		$("#guess").html("");	});


	$("#search-bar").bind("enterKey", function(e){
		
/*		console.log(textarea);
		if (textarea=='web\n'){
			window.location.href="http://kate0115.net/blog";
		}
*/	});
	$("#search-bar").keyup(function(e){
		textarea = document.getElementById("search-bar").value;
		console.log(textarea);			
		if (textarea=='blog'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://kate0115.net/diary";
		}
		if (textarea=='fanwork'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://kate0115.net/web";
		}
		if (textarea=='research'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://www.seas.upenn.edu/~zyuxuan/";
		}
		if (textarea=='photo'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://kate0115.net/photo";
		}
		if (textarea=='music'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://kate0115.net/music";

		}
	    if (textarea=='mastodon'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://seaofog.com/@kate0115";
		}
		if (textarea=='github'){
			$("#guess").html("please wait for web to redirect ...");
			window.location.href="https://github.com/zyuxuan0115";
		}
		$(this).trigger("enterKey");
	});
	$("#search-bar").click(function(e){
		$("#guess").html("");
	});
});


