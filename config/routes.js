var users = require('../app/controllers/users_controller');
var hills = require('../app/controllers/hills_controller');

module.exports = function(app) {
	function restrict(req, res, next) {
	  if (req.loggedIn) {
	  	next();
	  } else {
	    req.session.error = 'Access denied!';
		console.log("\n" + '***************************************');
		console.log(req.session.error);
		console.log('***************************************' + "\n");
	    res.redirect('/users/login');
	  }
	}

	// Resources for Hills
	app.get('/hills' 	 	    ,           hills.index);
	app.get('/hills/new'        ,           hills.new);
	app.get('/hills/:id/edit'       ,           hills.edit);
	app.post('/hills/create'    ,           hills.create);
	app.post('/hills/destroy'   , restrict, hills.destroy);
	app.get('/hills/:id'      , 			hills.show);
	app.get('/'		  	 	    , 			users.index);

}