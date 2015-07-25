Template.MainNav.onRendered(function() {
  $(".nav-dropdown-button").dropdown({
    constrain_width: false
  });
});

Template.MainNav.helpers({
  gravatar: function() {
    if (!Meteor.user()) return "";
    var email = Meteor.user().emails[0].address;
    var options = {
      secure: true,
    };
    var md5Hash = Gravatar.hash(email);
    var url = Gravatar.imageUrl(email, options);
    return url;
  },
  profileName: function() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
    } else {
      return "";
    }
  }
});

Template.MainNav.events({
  "click .sign-out": function(e) {
    AccountsTemplates.logout();
    return false;
  }
})
