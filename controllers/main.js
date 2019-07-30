
app.controller('mainController', function($scope) {
  $scope.fileName = "none";
  
  $scope.start = {
	  hour: 0,
	  minute: 1,
	  second: 0
  };
    
  $scope.getCommandLine = function() {
	  	  
	  return "ffmpeg -s " + $scope.start.hour.toString() + ":" + $scope.start.minute.toString() + " " + $scope.fileName;
  }
  
  $scope.copyToClipboard = function(selector) {
	var copyTextarea = document.querySelector(selector);
	
	copyTextarea.focus();
	copyTextarea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
	}
  }
  
});