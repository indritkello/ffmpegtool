
app.controller('mainController', function($scope) {
  	
	$scope.fileName = "";
  
	$scope.start = {
		hour: 0,
		minute: 0,
		second: 0
	};

	$scope.end = {
		hour: 0,
		minute: 0,
		second: 0
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
		+ $scope.start.hour.pad(2).toString()  + ":" + $scope.start.minute.pad(2).toString() + ":" + $scope.start.second.pad(2).toString() 
		+ " -i " + $scope.input.fileName	
		+ " -c copy"
		+ " -t "
		+ $scope.end.hour.pad(2).toString()  + ":" + $scope.end.minute.pad(2).toString() + ":" + $scope.end.second.pad(2).toString()
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