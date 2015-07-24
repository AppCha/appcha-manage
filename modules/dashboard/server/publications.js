Meteor.publish("dashboardProjects", function () {
  return Projects.find({'users.user_id': this.userId});
});
