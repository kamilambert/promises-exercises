const attachTitle = (title) => {
	return `DR. ${title}`
}

const fulfilledPromise = Promise.resolve('MANHATTAN')

fulfilledPromise
	.then(attachTitle)
	.then(console.log)
