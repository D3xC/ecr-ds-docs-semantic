Template.navbar.helpers({
  navbarItems: function () {
    return Categories.find();
  },
  activeItem: function (item) {
    return Session.get('menuTitle') === item ? 'active' : '';
  },
  activeCategory: function () {
    return Session.get('menuTitle');
  }
});

Template.navbar.events({
  'click .menu-item'(event) { 
    event.preventDefault();
    var menu = event.target.text;
    Meteor.call('setSideMenu', menu);
    Session.set('activeCategoryId', event.target.attributes.id.value);
  },
  'click .main-menu'(event) {
    event.preventDefault();
    $('.main-sidebar').sidebar('toggle');
  }
});

Template.navbar.onCreated(function () { 
  Session.set('menuTitle', 'Foundations');
  Session.set('activeCategoryId', 'BTgtuwSkJtW72grLs');
  Session.set('icon', 'icon configure');
});