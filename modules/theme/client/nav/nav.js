Template.MainNav.onRendered(function(){
  $(".nav-dropdown-button").dropdown();
});

Template.MainNav.helpers({
  profileName: function() {
    return Meteor.user().emails[0].address;
  }
});
