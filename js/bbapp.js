(function(){
	var app = angular.module('bank', [ ]);

	
	app.controller('BetController', function(){
		this.products = bet;

	});

	app.controller('BetReviewController', function() {
		this.bet = {};
		this.addReview = function(product) {
			this.bet.createdOn = Date.now();
			product.reviews.push(this.bet);
			this.bet = {};
		};
	});

	var bet = [
		{
			name: 'UFC21',
			stake: 10,
			description: 'Bet on fights',
			initHandleName: 'keyser',
			rctpHandleName: 'tgnip',
		
		},
		{
			name: 'UFC23',
			stake: 20,
			description: 'Bet on fights',
			initHandleName: 'tgnip',
			rctpHandleName: 'keyser',
		
		},

	];

})();