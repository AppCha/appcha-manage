Router.route("/", function() {




  // if (this.ready()) {
    this.render("Dashboard_Home", {
      data: {
        projects: Projects.find().fetch()
      }
    });
}, {
  name: "Dashboard.Home"
})
