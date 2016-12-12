(function(module){
  var archivesController = {};

  archivesController.index = function() {
    archivesView.initArchivesPage();
  };

  module.archivesController = archivesController;
})(window);
