$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$("#buttonLogin").on('click', function(){
	$("#loginPage").text("Success")
});
