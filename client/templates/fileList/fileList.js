Template.fileList.helpers({
  files: function () {
    console.log(Session.get('files'));
    return Session.get('files');
  }
});

Template.fileList.onCreated(function () {
  Meteor.call('getFiles', function (error, result) {
    if (error) console.log(error);
    Session.set('files', result || []);
  });
});