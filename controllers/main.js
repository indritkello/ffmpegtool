
app.controller('mainController', function($scope) {
	  
	$scope.automaticOutputFilename = false;
  
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
            + $scope.start.time.getHours().pad(2) + ":" + $scope.start.time.getMinutes().pad(2) + ":" + $scope.start.time.getSeconds().pad(2) 
			+ " -i " + $scope.input.fileName	
			+ " -c copy"
			+ " -t "
       	    + $scope.end.time.getHours().pad(2) + ":" + $scope.end.time.getMinutes().pad(2) + ":" + $scope.end.time.getSeconds().pad(2)
			+ " -bsf:a aac_adtstoasc "
			+ $scope.output.fileName
		;
	}
  
	$scope.inputFilenameChanged = function() {
		if ($scope.automaticOutputFilename) {
			$scope.refreshOutputFilename();
		}
	}

	$scope.refreshOutputFilename = function() {
		
		let inputFilename = getFilenameWithoutExtension($scope.input.fileName);
		let inputExtension = getExtension($scope.input.fileName);

		$scope.output.fileName = inputFilename + "_output" + inputExtension;
	}

	function getFilenameWithoutExtension(path) {
		let index = path.lastIndexOf('.');
		if (index > -1) {
			return path.substring(0, index);
		}
		return '';
	}

	function getExtension(path) {
		let index = path.lastIndexOf('.');
		if (index > -1) {
			return path.substring(index);
		}
		return '';
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