
app.controller('mainController', function($scope) {
  	
	$scope.fileName = "";
  
    $scope.start = {
        time: new Date()
	};

	$scope.end = {
        time: new Date()
	};

	$scope.input = {
		fileName: ""
	};

	$scope.output = {
		fileName: ""
	};	
    
	$scope.getCommandLine = function() {
		// ffmpeg -ss hh:mm:ss -i input.mp4 -c copy -t hh:mm:ss -bsf:a aac_adtstoasc output.mp4
		return "ffmpeg" 
            + " -ss "
            + $scope.start.time.getHours() + ":" + $scope.start.time.getMinutes() + ":" + $scope.start.time.getSeconds() 
		+ " -i " + $scope.input.fileName	
		+ " -c copy"
		+ " -t "
            + $scope.end.time.getHours() + ":" + $scope.end.time.getMinutes() + ":" + $scope.end.time.getSeconds()
		+ " -bsf:a aac_adtstoasc "
		+ $scope.output.fileName
		;
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