Meteor.methods({
  'Projects.New': function(project) {
    var userId = Meteor.userId();
    if (!userId) {
      throw new Meteor.Error("not-authorized");
    }

    project.users.push({user_id: userId, role: 'owner'});
    if (project.validate()){
      project.save();
      return project;
    }

    project.throwValidationException()
  }
});
