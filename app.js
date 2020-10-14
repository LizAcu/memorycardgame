// const matchIng = [1, 2, 3, 4, 1, 2, 3, 4]
let handOfCards = []
let matchedCards = []



const playHand = () => {
	if (handOfCards.length === 2) {
		console.log('checking', handOfCards)
		matchCards()
	} else {
		handOfCards.push($(event.currentTarget)[0].classList[0]);
		console.log($(event.currentTarget))
		if (handOfCards.length === 2) {
			playHand()
		}
	}
}



let matches = 0
let nonMatch = 0

const matchCards = () => {
	console.log('I will check your cards!', handOfCards)
	console.log(handOfCards[0])
	console.log(handOfCards[1])

	if (handOfCards[0] === handOfCards[1]) {
		matches++
		let selector = '.' + handOfCards[0]
		$(selector).remove()

		$('#matches')[0].innerText = `You've got ` + matches + ` total matches!`


		console.log($('#matches'))
		$('body').append(`<h2>It's a match!</h2>`)
	} else {
		$('body').append(`<h2>It's NOT a match!</h2>`)
		nonMatch++
		console.log(nonMatch)
	}
		if (nonMatch === 3) {
			gameLose()
		


	}
	handOfCards = []
}


const gameLose = () => {
	 
     document.location.reload(true);
     alert("You lost the game, press start to play again.")
   }

    handOfCards = []

 




$(() => {



	const $showBoard = $('#start-button').on('click', (event) => {
	$('.container').toggle();
	$('#countdown').toggle();
	$('.match-container').toggle();
	let timeleft = 30;
	let startTimer = setInterval(function(){
		if(timeleft <= 0){
    	  clearInterval(startTimer);
    	  document.getElementById("countdown").innerHTML = "Time's up!";
  	    } else {
          document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
	}, 1000);
	});
	

	const $card = $('.card').on('click', (event) => {
		if (handOfCards.length === 0) {
			$('.card').addClass('card-back')
		}
		$(event.currentTarget).toggleClass('card-back');
		playHand()
	})
	

});