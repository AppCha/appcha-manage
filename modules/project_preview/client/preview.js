Template.Project_Preview.onRendered(function() {
  $('.tooltipped').tooltip({
    delay: 1
  });

  // var updatePreviewHeight = function() {
  //   var targetHeight = $(window).height() - 171;
  //   if ($('.project-preview').height() < targetHeight){
  //     $('.project-preview').height(targetHeight);
  //   }
  // }
  //
  //
  // updatePreviewHeight();
  // $(window).on('resize' , function(){
  //   updatePreviewHeight();
  // });
});

Template.Project_Preview.helpers({

  project: function() {
    return Projects.findOne({slug: Router.current().params.slug});
  },
  activePreviewView: function() {
    if (Router.current().params.query.previewing) {
      switch (Router.current().params.query.previewing) {
        case "tablet":
          return "Preview_Tablet";
          break;
        default:
          return "Preview_Mobile";
      }
    }
    return "Preview_Mobile";
  },
  mobileActive: function() {
    if (Router.current().params.query.previewing) {
      switch (Router.current().params.query.previewing) {
        case "tablet":
          return "";
          break;
        default:
          return "active";
      }
    }
    return "active";
  },
  tabletActive: function() {
    if (Router.current().params.query.previewing) {
      switch (Router.current().params.query.previewing) {
        case "tablet":
          return "active";
          break;
        default:
          return "";
      }
    }
    return "";
  }
})
