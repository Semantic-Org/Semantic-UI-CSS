var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
  version : '1.9.3',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-CSS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.addFiles([
    'semantic.css',
    'semantic.js'
  ], 'client');

});
