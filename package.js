Package.describe({
    name: 'jedirandy:cloudinary',
    version: '1.2.4',
    documentation: 'README.md',
    git: 'https://github.com/jedirandy/meteor-cloudinary.git',
    summary: 'Cloudinary NPM, Cloudinary jQuery plugin package for Meteor'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use('jquery', 'client');
    api.addFiles([
    	'lib/jquery.ui.widget.js', 
    	'lib/jquery.iframe-transport.js',
    	'lib/jquery.fileupload.js',
    	'lib/jquery.cloudinary.js',
    	], 'client');
    api.addFiles(['cloudinary.js'], 'server');
    api.export('cloudinary', 'server');
});

Npm.depends({
    'cloudinary': '1.2.4'
});
