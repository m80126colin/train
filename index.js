var express		= require('express'),
	path		= require('path'),
	controller	= require('./controller');

express()
.set('views', path.join(__dirname, 'view'))
.set('view engine', 'ejs')
.use(express.logger('dev'))
.use('/public', express.static(__dirname + '/public'))
.get('/', controller.index)
.get('/config', controller.config)
.listen(4000);