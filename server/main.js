import { Meteor } from 'meteor/meteor';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';
import os from 'os';

Meteor.startup(() => {
  
});

Meteor.methods({
  getContent: function (file) {
    var content = Assets.getText('content/' + file);
    return content;
  },
  getFiles: function () {
    console.log('getFiles started');
    var defaultPath = '.';
    var fileList = fs.readdirSync(defaultPath);
    var filesPlus = _.map(fileList, function (file) {
      return { name: file, isDir: false }
    });

    _.each(filesPlus, function (file) {
      file.isDir = fs.statSync(file.name).isDirectory();
    });

    var dirList = _.filter(filesPlus, function (file) {
      return file.isDir;
    });
    
    var folders = _.map(_.filter(filesPlus, function (file) {
      return file.isDir;
    }), function (file) {
      return file.name;
    });
    
    var files = _.map(_.filter(filesPlus, function (file) {
      return !file.isDir;
    }), function (file) {
      return file.name;
    });

    return folders;
  }
});
