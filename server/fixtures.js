if (Categories.find().count() === 0) {

  Categories.insert({
    title: 'Foundations',
    file: 'foundations.md',
    icon: 'cubes',
  });

  Categories.insert({
    title: 'Mail',
    file: 'mail.md',
    icon: 'mail',
  });

  Categories.insert({
    title: 'Updates',
    file: 'updates.md',
    icon: 'refresh',
  });

  Categories.insert({
    title: 'Reports',
    file: 'reports.md',
    icon: 'bar chart',
  });

  Categories.insert({
    title: 'Epiq11.com',
    file: 'epiq11.md',
    icon: 'cloud',
  });

  Categories.insert({
    title: 'Admin',
    file: 'epiq11.md',
    icon: 'configure',
  });
}

// if (Docs.find().count() === 0) {
//   Docs.insert({
//     title: 'Client Setup',
//     file: 'client-setup.md',
//     content: '',
//     tags: ['foundations','setup'],
//     category: 'Foundations',
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Chapter 11 Basics',
//     file: 'chapter11-basics.md',
//     content: '',
//     tags: ['foundations'],
//     category: ['Foundations'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Monthly Billing Reports',
//     file: 'reports-billing.md',
//     content: '',
//     tags: ['foundations','reports'],
//     category: ['Foundations', 'Reports'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'From MSL',
//     file: 'mail-msl.md',
//     content: '',
//     tags: ['mail'],
//     category: ['Mail'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'From Creditor',
//     file: 'mail-creditor.md',
//     content: '',
//     tags: ['mail','creditor'],
//     category: ['Mail'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'From Merge2',
//     file: 'mail-merge2.md',
//     content: '',
//     tags: ['mail','merge2'],
//     category: ['Mail'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Creditor',
//     file: 'updates-creditor.md',
//     content: '',
//     tags: ['update','creditor'],
//     category: ['Updates'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Merge2',
//     file: 'updates-merge2.md',
//     content: '',
//     tags: ['update','merge2'],
//     category: ['Updates'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Dtcstock',
//     file: 'updates-dtcstock.md',
//     content: '',
//     tags: ['update','dtcstock'],
//     category: ['Updates'],
//     sharepointUrl: '',
//   });
  
//   Docs.insert({
//     title: 'Creditor',
//     file: 'reports-creditor.md',
//     content: '',
//     tags: ['report','creditor'],
//     category: ['Reports'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Merge2',
//     file: 'reports-merge2.md',
//     content: '',
//     tags: ['report','merge2'],
//     category: ['Reports'],
//     sharepointUrl: '',
//   });
  
//   Docs.insert({
//     title: 'Dtcstock',
//     file: 'reports-dtcstock.md',
//     content: '',
//     tags: ['report','dtcstock'],
//     category: ['Reports'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Development',
//     file: 'epiq11-dev.md',
//     content: '',
//     tags: ['epiq11','development'],
//     category: ['Epiq11.com'],
//     sharepointUrl: '',
//   });
  
//   Docs.insert({
//     title: 'Production',
//     file: 'epiq11-prod.md',
//     content: '',
//     tags: ['epiq11','production'],
//     category: ['Epiq11.com'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'SES Requests',
//     file: 'admin-ses.md',
//     content: '',
//     tags: ['admin','development','ses'],
//     category: ['Admin'],
//     sharepointUrl: '',
//   });

//   Docs.insert({
//     title: 'Queue Management',
//     file: 'admin-queue.md',
//     content: '',
//     tags: ['admin','queue'],
//     category: ['Foundations','Admin'],
//     sharepointUrl: '',
//   });
  
// }