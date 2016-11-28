ApplicationRouter = Backbone.Marionette.AppRouter.extend({
	routes : {
		"" : "home",
		"home" : "home",
		"program" : "program",
		"papers" : "papers",
		"keynote" : "keynote",
		"posters" : "posters"
	},

	deselectPills : function() {
		$('ul.sidebar li').removeClass('active');
	},

	selectPill : function(pill) {
		this.deselectPills();
		$(pill).addClass('active');
	},

	home : function() {
		this.selectPill('ul.sidebar li.home');
		MyApp.contentRegion.show(new ContentHomeView());
	},

	keynote : function() {
		this.selectPill('ul.sidebar li.keynote');
		MyApp.contentRegion.show(new ContentKeynoteView());
	},

	program : function() {
		this.selectPill('ul.sidebar li.program');
		MyApp.contentRegion.show(new ContentProgramView());
	},

	papers : function() {
		this.selectPill('ul.sidebar li.papers');
		MyApp.contentRegion.show(new ContentPapersView());
	},

	posters : function() {
		this.selectPill('ul.sidebar li.posters');
		MyApp.contentRegion.show(new ContentPostersView());
	}
});
