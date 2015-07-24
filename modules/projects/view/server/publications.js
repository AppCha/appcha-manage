Meteor.publish("project_by_slug", function (slug) {
  return Projects.find({'users.user_id': this.userId, slug: slug});
});
