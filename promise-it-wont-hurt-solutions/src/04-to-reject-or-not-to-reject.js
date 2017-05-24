var promise = new Promise(function (fulfill, reject) {
	fulfill('I FIRED')
	reject(new Error('I DID NOT FIRE'))
})

var onRejected = function(error) {
	console.log(error);
}

promise.then(console.log, onRejected)
