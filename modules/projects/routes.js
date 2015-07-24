Router.route('/projects/new', function() {
  this.render("Projects_New");
}, {
  name: 'Projects.New'
});


Router.route('/projects/:slug', function() {
  var slug = this.params.slug;
  this.subscribe("project_by_slug", slug).wait();

  if (this.ready()) {
    this.render("Projects_View");
  }


}, {
  name: "Projects.View"
});
