var $          = require('jquery');
var ModuleEdit = require('views/module-edit');

/**
 * Highlight Module.
 * Extends default moudule,
 * custom different template.
 */
var StatsModuleEditView = ModuleEdit.extend({
	template: $( '#tmpl-mpb-module-edit-stats' ).html(),
});

module.exports = StatsModuleEditView;