const fs = require('fs');
const cart = require('./cart');

const actions = {
	add: cart.add,
	change: cart.change
}

let handler = (req, res, action, file) => {
	fs.readFile(file, 'utf-8', (err, data) => {
		console.log(file);
		if(err){
			res.sendStatus(404, JSON.stringify({result: 0, text: err}))
		} else {
			let newCart = actions[action](JSON.parse(data), req);
			fs.writeFile('server/db/userCart.json', newCart, (err) => {
				if(err){
					res.send('{"result": 0}');
				} else {
					res.send('{"result": 1}');
				}
			})
		}
	});
}
module.exports = handler;
