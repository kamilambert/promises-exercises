const promise = new Promise((fulfill, reject) => {
	reject(new Error('Oops! An error!'))
})

const resolvedPromise = Promise.resolve({
	message: 'You are a resolved promise!'
})

const rejectedPromise = Promise.reject(new Error('Close, but no cigar!'))

const message = (value) => {
	console.log(value.message);
}

promise.catch(message)
resolvedPromise.then(message)
rejectedPromise.catch(message)
