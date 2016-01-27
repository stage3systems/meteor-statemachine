Package.describe({
  name: "stage3systems:statemachine",
  summary: "Javascript State Machine packaged for meteor",
  version: "2.3.5",
  git: "https://github.com/stage3systems/meteor-statemachine.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files([
    'lib/prefix.js',
    'lib/javascript-state-machine/state-machine.js',
    'lib/suffix.js'
  ], ['client', 'server']);
});
