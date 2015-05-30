
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
	
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
  Session.setDefault('value', 0);
  Template.slider.helpers({
    value: function () {
      return Session.get('value');
    }    
  });
  Template.slider.events({
    'change value': function () {
      Session.set('value', Session.get("value"));
    }  
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
