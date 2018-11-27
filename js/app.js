var app = angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function($scope) {
  
  $scope.nextId = 1; 
  // the id makes sure there are no duplicate objects. 
  // when creating a new character, assign id to nextId
  // then increment nextId
  
  $scope.charList = [
    {
      "id" : 0, 
      "charName" : "", 
      "playerName" : "",
      "initiative" : "",
      "hp" : "",
      "sp" : "",
      "notes" : ""
    }
  ];

  $scope.add = function() {
    $scope.charList.push(
      {
        "id" : $scope.nextId, 
        "charName" : "", 
        "playerName" : "",
        "initiative" : "",
        "hp" : "",
        "sp" : "",
        "notes": ""
      }
    );
    $scope.nextId ++;
  };
  
  $scope.clearInit = function() {
    $scope.charList.forEach(function (char) {
      char.initiative = "";
    });
  };
  
  $scope.clearNotes = function() {
    $scope.charList.forEach(function (char) {
      char.notes = "";
    });
  };

  $scope.moreHp = function(char) {
    char.hp ++;
  };
  $scope.lessHp = function(char) {
    char.hp --;
  };
  
  $scope.moreSp = function(char) {
    char.sp ++;
  };
  $scope.lessSp = function(char) {
    char.sp --;
  };

  $scope.remove = function(item) { 
    var index=$scope.charList.indexOf(item);
    $scope.charList.splice(index,1);     
  };

  $scope.duplicate = function(item) { 
    
    $scope.newChar = 
      {
        "id" : $scope.nextId, 
        "charName" : item.charName, 
        "playerName" : item.playerName,
        "initiative" : item.initiative,
        "hp" : item.hp,
        "sp" : item.sp,
        "notes" : ""
      };
    
    $scope.nextId ++;
    
    $scope.charList.push($scope.newChar);    
  };
  
});
