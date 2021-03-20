$(document).ready(function(){
	// get json data
	$.ajax({
		type:"GET",
		url:"team_india.json",
		data:"",
		dataType:"jsonp",
		success: function(response_data, ajax_fetch=true){
			render_teamplayers(response_data)
		},
		error: function(xhr, status, error){
			if(xhr.status == 0 || xhr.status == 200){
				render_teamplayers(team_india_json, ajax_fetch=false)
			}else{
				let errorMessage = xhr.status+ ":" +xhr.statusText
				alert(errorMessage)
			}
		}
	})
// document keyevents
$(this).keydown( function(e){
	//e.preventDefault();
	if (e.keyCode == 40 ){ //key down code
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

let team_india_json = [
  {
    'id': '1',
    'title': 'Virat Kohli',
    'icon': 'virat_kohli.jpg',
    'description': 'Virat Kohli is an Indian cricketer and the current captain of the India national team. A right-handed top-order batsman, Kohli is regarded as one of the best contemporary batsmen in the world.'
  },
  {
    'id': '2',
    'title': 'Rohit Sharma',
    'icon': 'rohit_sharma.jpg',
    'description': 'Rohit Gurunath Sharma is an Indian international cricketer who plays for Mumbai in domestic cricket and captains Mumbai Indians in the Indian Premier League as a right-handed batsman and an occasional right-arm off break bowler. '
  },
  {
    'id': '3',
    'title': 'Rishabh Pant',
    'icon': 'rishabh_pant.jpg',
    'description': 'Rishabh Rajendra Pant is a professional Indian cricketer who plays as middle order wicket-keeper batsman for India, Delhi, and the Delhi Capitals in the Indian Premier League.'
  },
  {
    'id': '4',
    'title': 'K. L. Rahul',
    'icon': 'k_l_rahul.jpg',
    'description': 'Kannur Lokesh Rahul is an Indian international cricketer who plays for Karnataka in domestic cricket and captains Kings XI Punjab in the Indian Premier League.'
  },
  {
    'id': '5',
    'title': 'Hardik Pandya',
    'icon': 'hardik_pandya.jpg',
    'description': 'Hardik Himanshu Pandya is an Indian international cricketer who plays for Baroda in domestic cricket and Mumbai Indians in the Indian Premier League. He is an all-rounder who bats right-handed and bowls right-arm fast-medium. '
  },
  {
    'id': '6',
    'title': 'Jasprit Bumrah',
    'icon': 'jasprit_bumrah.jpg',
    'description': 'Jasprit Jasbirsingh Bumrah is an Indian international cricketer, who plays for the Indian national cricket team in all formats of the game.'
  },
  {
    'id': '7',
    'title': 'Ravindra Jadeja',
    'icon': 'ravindra_jadeja.jpg',
    'description': 'Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who plays as a left-handed middle-order batsman and slow left-arm orthodox bowler. '
  },
  {
    'id': '8',
    'title': 'Yuzvendra Chahal',
    'icon': 'yuzvendra_chahal.jpg',
    'description': 'Yuzvendra Singh Chahal is an Indian cricketer and former chess player who represents India in both One Day Internationals and Twenty20 Internationals, and has also represented India internationally in chess at youth levels.'
  },
  {
    'id': '9',
    'title': 'Washington Sundar',
    'icon': 'washington_sundar.jpg',
    'description': 'Washington Sundar is an Indian international cricketer. He is a left handed batsman and right-arm off-spinner. He has played for the India national under-19 cricket team as a batsman.'
  },
  {
    'id': '10',
    'title': 'Axar Patel',
    'icon': 'axar_patel.jpg',
    'description': 'Axar Rajeshbhai Patel, also spelled as Akshar Patel, is an Indian international cricketer. He plays for Gujarat in domestic cricket and for the Delhi Capitals in the Indian Premiere League. '
  }
]

})

function render_teamplayers(response_data,ajax_fetch){
	let team_list_html = ""
	if (!ajax_fetch) {
		$("<div class='text-muted err-txt col-lg-12 text-center'>Ajax request blocked by CORS, loading data from jsonArray</div>").insertBefore("#team_players") 
	}
	$.each(response_data, function(index, element){
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

$('body').on('click', '#team_players li', function(){
	$("#team_players li.bg-info").removeClass("bg-info shadow-lg");
	let curr_player = $(this)
	$(this).focus().addClass("bg-info shadow-lg");
  	$("#team_players").hide()
  	$("#team_ind").find("h2").text($(curr_player).find("h5").text())
  	$("#team_ind").find("p").text($(curr_player).find("p").text())
  	$("#team_ind").find("img").attr("src",$(curr_player).find("img").attr("src"))
  	$("#team_ind").show()
})
$('body').on('click','.team_players', function(){
	$("#team_ind").hide()
	$("#team_players").show()
	$("html , body").animate({
		scrollTop: $("#team_players").find("li.bg-info").offset().top-100
	}, 200)
})

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    $(".team_players").trigger("click")
  }
  
});