var textarea;

var fnc=function(){
	$("#expand-li1a").css('color', 'darkseagreen');	
	$("#expand-li2a").css('color', 'darkseagreen');	
	$("#expand-liupenna").css('color', 'darkseagreen');	
	$("#expand-liumicha").css('color', 'darkseagreen');	
};

$(document).ready(function(){
	fnc();
});

var li1a_counter = 0;
var li2a_counter = 0;
var liupenna_counter = 0;
var liumicha_counter = 0;

$(function (){
    $('#cat-pic').click(function(event){
       $('#cat-pic').attr('src', "pic/cat1.png"); 
       setTimeout(function(){
           $('#cat-pic').attr('src',"pic/cat.png");
       }, 3500);
    });

    $('#li1a').click(function(event){
			 if (li1a_counter%2 == 0) {
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
 			 if (li2a_counter%2 == 0) {
		     $('#li2b').css('visibility', 'visible'); 
         $('#li2b').css('height', '100%'); 
			 }
			 else {
			   $('#li2b').css('visibility', 'hidden'); 
         $('#li2b').css('height', '0px');	
			 }
			 li2a_counter = li2a_counter + 1;
    });

    $('#li-upenn-a').click(function(event){
 			 if (liupenna_counter%2 == 0) {
		     $('#li-upenn-b').css('visibility', 'visible'); 
         $('#li-upenn-b').css('height', '100%'); 
			 }
			 else {
			   $('#li-upenn-b').css('visibility', 'hidden'); 
         $('#li-upenn-b').css('height', '0px');	
			 }
			 liupenna_counter = liupenna_counter + 1;
    });

    $('#li-umich-a').click(function(event){
 			 if (liumicha_counter%2 == 0) {
		     $('#li-umich-b').css('visibility', 'visible'); 
         $('#li-umich-b').css('height', '100%'); 
			 }
			 else {
			   $('#li-umich-b').css('visibility', 'hidden'); 
         $('#li-umich-b').css('height', '0px');	
			 }
			 liumicha_counter = liumicha_counter + 1;
    });



		$("#expand-li1a").mouseover(function(){
			$("#expand-li1a").css('color', 'white');
		});

		$("#expand-li1a").mouseout(function(){
			$("#expand-li1a").css('color', 'darkseagreen');	
		});
	
		$("#expand-li2a").mouseover(function(){
			$("#expand-li2a").css('color', 'white');
		});

		$("#expand-li2a").mouseout(function(){
			$("#expand-li2a").css('color', 'darkseagreen');	
		});
	
		$("#expand-liupenna").mouseover(function(){
			$("#expand-liupenna").css('color', 'white');
		});

		$("#expand-liupenna").mouseout(function(){
			$("#expand-liupenna").css('color', 'darkseagreen');	
		});
		
		$("#expand-liumicha").mouseover(function(){
			$("#expand-liumicha").css('color', 'white');
		});

		$("#expand-liumicha").mouseout(function(){
			$("#expand-liumicha").css('color', 'darkseagreen');	
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
		$(this).trigger("enterKey");
	});
	$("#search-bar").click(function(e){
		$("#guess").html("");
	});
});


