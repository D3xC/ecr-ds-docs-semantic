Template.comments.helpers({
  comments: function () {
    return Comments.find({docId: Session.get('activeDocId')});
  }
});