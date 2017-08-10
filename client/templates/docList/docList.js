Template.docList.helpers({
  icon: function () {
    var category = Categories.findOne({ _id: Session.get('activeCategoryId') });
    var icon = category ? category.icon : 'build';
    return 'icon ' + icon;
  },
  sideMenuTitle: function () {
    return Session.get('menuTitle');
  },
  docItems: function () {
    return Docs.find({ category: Session.get('menuTitle') });
  },
  navbarItems: function () {
    return Categories.find();
  }
});

Template.docList.onCreated(function () {
  Session.set('menuTitle', 'Foundations');
  Session.set('activeCategoryId', 'BTgtuwSkJtW72grLs');
  Session.set('icon', 'icon configure');
});

Template.docList.events({
  'click .ui.dropdown'(event) {
    // $('.ui.dropdown').dropdown('show');
  },
  'click .menu-item'(event) { 
    event.preventDefault();
    var categoryId = $(event.target).attr('id');
    var category = Categories.findOne({ _id: categoryId });
    var menu = category ? category.title : 'Foundations';
    Session.set('menuTitle', menu);
    Session.set('activeCategoryId', categoryId);
    $('.ui.dropdown').dropdown('hide');
  },
  'click .doc-list-item'(event) {
    event.preventDefault();
    Session.set('activeDocId',event.target.attributes.id.value);
  }
});