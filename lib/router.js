Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', { name: 'dashboard' });
Router.route('/documents', { name: 'documents' });
Router.route('/requests', { name: 'requests' });
Router.route('/slack', { name: 'slack' });
Router.route('/filesystem', { name: 'filesystem' });