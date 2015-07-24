Template.Projects_New.events({
  "submit #new-project-form ": function(e){
    var projectName = e.target.name.value;
    var project = new Project({name: projectName});

    Meteor.call("Projects.New",  project, function(e, project){
      if (e){
        console.log(e);
      } else{
        Router.go("Projects.View", {slug: project.slug} );
      }
    });
    e.preventDefault();
  }
});


Template.Projects_New.onRendered(function() {
  Meteor.setTimeout(function(){
       $("#name").focus();
  }, 0);

})
