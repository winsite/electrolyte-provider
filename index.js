'use strict';

const ElectrolyteProvider = function() {
	this._provider = {};
};

ElectrolyteProvider.prototype.add = function(id, value) {
	value['@literal'] = true;
	this._provider[id] = value;
};

ElectrolyteProvider.prototype.provider = function() {
	return id => this._provider[id];
};

module.exports = ElectrolyteProvider;