var fs			= require('fs'),
	YAML		= require('yamljs'),
	parseString	= require('xml2js').parseString,
	data_path	= __dirname + '/../data';

module.exports.index = function (req, res) {
	var xml = data_path + '/2014/06/20140608.xml';
	fs.readFile(xml, function (e, data) {
		parseString(data, function (e, daily) {
			var config = YAML.load(data_path + '/config.yml');
			res.locals({
				'daily': daily.TaiTrainList,
				'config': config
			});
			res.render('index');
		});
	});
}

module.exports.config = function (req, res) {
	var config = YAML.load(data_path + '/config.yml');
	res.json(config);
}