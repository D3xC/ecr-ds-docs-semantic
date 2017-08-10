import marked from 'marked'; 
Template.doc.helpers({
  activeDoc: {
    title: function () { 
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      return doc ? doc.title : 'Get Started';
    },
    source: function () {
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      var url = doc ? doc.sharepointUrl || 'http://epicenter.epiqsystems.com/cr/dataservices/Shared%20Documents/Forms/AllItems.aspx' : 'http://epicenter.epiqsystems.com/cr/dataservices/Shared%20Documents/Forms/AllItems.aspx';      
      return url;
    },
    content: function () {
      var doc = Docs.findOne({ _id: Session.get('activeDocId') });
      return doc ? marked(doc.content) : marked('__Get Started__');
    }
  }
});