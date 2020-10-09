const matchIng = [1, 2, 3, 4, 1, 2, 3, 4]



const createCard = (x) => { //create a createCard function for our cards
// const $card = $('.card') //creates new Div
// console.log($attEmpt)
// const $createH1 = $("<h1>") 
// $createH1.text(`${matchIng[x]}`)
// $('.card').prepend($createH1)
// const $newcardClass = $attEmpt.addClass('card'); //adds .card class to new div
// console.log($newcardClass)
$card = $('.card-back')
const $backcardClass = $card.addClass('card') //also adds .card-back class
// console.log($backcardClass)
$card.append($backcardClass)
// const $appendCard = $('.container').prepend($newcardClass) //append to container
// const $cardClass = $('.card').addClass('first')


}




// const matchCards = () => {
//   console.log('Ok I will check your cards', matchIng)
//   if (matchIng[0] === matchIng[4]) {
//     $('body').append(`<h2>It's a match!</h2>`);
//   } else {
//     $('body').append(`<h2>It's NOT a match!</h2>`);
//   }
//   // handOfCards = []
// }





let $cardArray = $('<div>').toArray();
console.log($cardArray);


// 	openedCards.push(this);
// 	var len = openCards.length;
// 	if (len === 2) {
// 		moveCounter();
// 		if
// 	}
// }



// let cardArray = $('.card').toArray();
// console.log(cardArray)
// const cardSelected = {         
// name: $(event.currentTarget).children().eq(0).text(),             
// type: $(event.currentTarget).children().eq(1).text()         
	
// } 
// const object = { 

// }

var timeleft = 30;
var startTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(startTimer);
    document.getElementById("countdown").innerHTML = "Time's up!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);



let $sunset = $('#sunset')
let $fish = $('#fish');
let $sunsetting = $('#sunsetting')
let $mermaids = $('#mermaids')
let $jelly = $('#jelly')
let $fishy = $('#fishy')
let $mermaid = $('mermaid')
let $jell = $('#jell')

// const matchCards = (event) => { //match eventcurrent w
// if (event.currentTarget === matchIng.innerText);
// console.log("it's a match");
// if ($sunset === $sunsetting) {
// 	console.log("match")
// }

// }

// 	for(let i = 0; i < matchIng.length; i++) {
// 			if ( == matchIng[1]) {
// 		console.log("it's a match!");
// 	$('body').append(`<h2>It's a match!</h2>`);

// 	} else  {
// 	$('body').append(`<h2>It's NOT a match!</h2>`);
// }

// 	}

// }


// const removeIndex = () => {
	
// 	$('.card').removeClass('6')
// }

//define var game, set to true 
//while game === true then define loop
//inside loop play game/match each card
// if no cards match === game ==== false 



// const $div = $('div')
// let gameStart = true;
// while (gameStart == true) {
// if ($div[0] === $div[4]) {
// 	console.log('its a match')
// } else {
// return

// 		}
// 	}



$(() => { 	

	for(let i = 0; i < 8; i++) {
	createCard(i);
	matchIng.push(i)
	console.log(matchIng)
	
	
}

// $(document).on('click', 'card', function(event){
// 	console.log(event.currentTarget.innerText)
// 	for (let i = 0; i < matchIng.length; i++) {
// 		if(event.currentTarget.innerText == matchIng[i].innerText);
		
// 	}



// for (let i = 16; i > 8; i--) {
// 		$('.card').addClass(`${matchIng[i]}`)
// 		// $('.card'[0]).removeClass('6')
// 		const $div = $('div')
// 		$($div[1]).removeClass('7 6 5 4 3 2')
// 		$($div[1]).removeClass('6 5 4 3 2')
// 		$($div[1]).removeClass('6')
// 		$
// }

	
	const $showBoard = $('#start-button').on('click', (event) => {
		$('.container').toggle();
		$('#countdown').toggle();
	});
	
	const $card = $('.card').on('click', (event) => {
		$(event.currentTarget).toggleClass('card-back');
		console.log($card);

	// startGame();

		
		// removeIndex();
	
		// createCardback(); 
	});
	// matchCards();

	})

