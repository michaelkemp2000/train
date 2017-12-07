(function(){

  var app = angular.module('betStore', []).config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{$');
		$interpolateProvider.endSymbol('$}');
	});

  app.controller('BetController', function() {
    this.products = wagers;
  });

  app.controller('BetBank', function() {
    var bets = [];
    var myBets = {};
    
    myBets.addBet = function(bet) {
        bets.push(bet);
    };

    myBets.bets = function() {
        return bets;
    };
    
    return myBets;
  });

  function MyCtrl($scope, betBank) {
    $scope.newBet = {};
    
    $scope.bet = bet;    
  }

  var wagers = [
  {
  	betlead_handle: 'wickedBishop',
  	player_handle: 'tgnip',
  	betname: 'UFC121',
  	amount: '10',
  	canShake: true,
  	confirmed: false
  },
  {
  	betlead_handle: 'shawnb',
  	player_handle: 'wickedBishop',
  	betname: 'Fishing',
  	amount: '20',
  	canShake: true,
  	confirmed: false
  },
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab == checkTab;
    };

  });

})();


