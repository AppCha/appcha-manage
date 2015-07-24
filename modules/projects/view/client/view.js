Template.Projects_View.helpers({
  project: function() {
    return Projects.findOne({slug: Router.current().params.slug});
  }
})
