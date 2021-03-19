$(document).ready(function(){
	let team_list_html = ""
	// get json data
	$.ajax({
		type:"GET",
		url:"team_india.json",
		data:"",
		dataType:"json",
		success: function(data){
			$.each(data, function(index, element){
				console.log(index)
				console.log(element.title)
				// append list items
				team_list_html += "<li class='rounded media p-4 m-4 border-info border text-dark text-center align-self-center'>"+
                    "<img src='assets/img/"+element.icon+"' class='rounded mr-3 align-self-center img-fluid' alt=''>"+
                    "<div class='media-body'>"+
                      "<h5 class='mt-0 mb-1'>"+element.title+"</h5>"+
                      "<p class='d-none'>"+element.description+"</p>"+
                    "</div>"+
                  "</li>"
				$("#team_players").html("") //clean div
				$("#team_players").html(team_list_html)
				//set focus to first element
				$('#team_players').find("li:first").addClass("bg-info shadow-lg")
			})

		}
	})
// document keyevents
$(this).keydown( function(e){
	//e.preventDefault();
	if (e.keyCode == 40 ){ //key down code
		console.log("keydown")
		if($("#team_players li.bg-info").length!=0) {
                var curr_target = $('#team_players').find("li.bg-info").next();
                $("html , body").animate({
					scrollTop: $("#team_players").find("li.bg-info").offset().top-100
				}, 100)
                $("#team_players li.bg-info").removeClass("bg-info shadow-lg");
                curr_target.focus().addClass("bg-info shadow-lg");
            }
            else {
                $('#team_players').find("li:first").focus().addClass("bg-info shadow-lg");
                $("html , body").animate({
					scrollTop: $("#team_players").find("li.bg-info").offset().top-100
				}, 100)
            }
	}
	if(e.keyCode == 13){  // the enter key code
		if($("#team_players").is(":visible")){
			let curr_player = $('#team_players').find("li.bg-info")
		  	console.log($(curr_player).find("img").attr("src"))
		  	$("#team_players").hide()
		  	$("#team_ind").find("h2").text($(curr_player).find("h5").text())
		  	$("#team_ind").find("p").text($(curr_player).find("p").text())
		  	$("#team_ind").find("img").attr("src",$(curr_player).find("img").attr("src"))
		  	$("#team_ind").show()
		}
	  }
})
$(this).keyup( function(e){
	//e.preventDefault();
	if (e.keyCode == 38 ){ //key up code
		console.log("keyup")
		if($("#team_players li.bg-info").length!=0) {
                var curr_target = $('#team_players').find("li.bg-info").prev();
                $("#team_players li.bg-info").removeClass("bg-info shadow-lg");
                curr_target.focus().addClass("bg-info shadow-lg");
                $("html , body").animate({
					scrollTop: $("#team_players").find("li.bg-info").offset().top-100
				}, 100)
            }
            else {
                $('#team_players').find("li:first").focus().addClass("bg-info shadow-lg");
                $("html , body").animate({
					scrollTop: $("#team_players").find("li.bg-info").offset().top-100
				}, 100)
            }
	}
	if(e.keyCode == 8){ // backspace key code
		$("#team_ind").hide()
		$("#team_players").show()
		$("html , body").animate({
			scrollTop: $("#team_players").find("li.bg-info").offset().top-100
		}, 200)
	}
})

})

