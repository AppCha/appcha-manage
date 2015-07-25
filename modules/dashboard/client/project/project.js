Template.Dashboard_Project.helpers({
  statusString: function() {
    switch (this.status) {
      case "development":
        return "In Development";
        break;
      default:
        return "Unkown";
    }
  }
})
