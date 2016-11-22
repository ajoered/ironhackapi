$(document).on('ready', function (){

	$('#button').on('click', getCharacters);
	$('.js-form').on('submit', postCharacters);

	function getCharacters() {
		
	    $.ajax({
	    	type: "GET",
	    	url: "https://ironhack-characters.herokuapp.com/characters",
	    	success: showCharacters,
	    	error: handleError 
    	});
	}

	function postCharacters(event) {
    	event.preventDefault();

    	var newCharacter = {
    	    name: $('#name').val(),
    		occupation: $('#occupation').val(),
    		weapon: $('#weapon').val()
		};	

		$.ajax({
	    	type: "POST",
	    	url: "https://ironhack-characters.herokuapp.com/characters",
	    	data: newCharacter,
	    	success: getCharacters,
	    	error: handleError 
    	});
	}

	function showCharacters(response) {
		console.log("Success!");
		var charactersArray = response;

		charactersArray.forEach(function (char){
			var html = `<li> ${char.name}:<br>Occupation: ${char.occupation}<br>Weapon: ${char.weapon}</li><br>`
			$('#ul').append(html);
		});
    };

	function handleError (error) { 
	    console.log('Error!');
	    console.log(error.responseText);
	};
});

