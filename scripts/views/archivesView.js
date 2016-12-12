(function(module) {
  //creates empty archivesView object
  var archivesView = {};
  //Method shows home sections and hides sibling sections
  archivesView.initArchivesPage = function() {
    $('#archives').fadeIn('fast').siblings().hide();
  };
  module.archivesView = archivesView;
})(window);
