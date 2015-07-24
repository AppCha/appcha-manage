Meteor.startup(function(){
  if (Projects.find().count() === 0){
    console.log('!!!!!!!!! need to seed some projects!');
  }
});
