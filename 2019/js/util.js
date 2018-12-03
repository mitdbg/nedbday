var loadTemplate = function(templateNames, callback) {
	var deferreds = [];
	$.each(templateNames, function(index, templateName) {
		deferreds.push($.get('./templates/' + templateName + '.tmpl',
				function(data) {
					$('head').append(
							'<script id="template_' + templateName
									+ '" type="text/template">' + data
									+ '<\/script>');
				}));
	});
	$.when.apply(null, deferreds).done(callback);
};

var toggleVisibility = function(target_selector) {
console.log('target_selector=', target_selector);
	var $target = $(target_selector);console.log($target, $target.is(':hidden'));
	if ($target.is(':hidden')) {
		$target.show("slow");
	} else {
		$target.hide("slow");
	}
};