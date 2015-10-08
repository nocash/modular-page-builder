var $          = require('jquery');
var ModuleEdit = require('views/module-edit');

/**
 * Highlight Module.
 * Extends default moudule,
 * custom different template.
 */
var HighlightModuleEditView = ModuleEdit.extend({
	template: $( '#tmpl-mpb-module-edit-blockquote' ).html(),
});

module.exports = HighlightModuleEditView;