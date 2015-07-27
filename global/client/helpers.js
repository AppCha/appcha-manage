Template.registerHelper("project", function() {
  return Projects.findOne({slug: Router.current().params.slug});
});
