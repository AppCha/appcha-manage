Router.configure({
  layoutTemplate: "Layout.Base"
});

Router.onBeforeAction(function(){
  replaceBodyClass();
  this.next();
});

var replaceBodyClass = function(){
  $('body').removeClass();
  $('body').addClass("page-"+Router.current().route.getName().replace(".", "-").toLowerCase());
};
