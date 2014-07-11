require([
  "./master"
], function(MasterControl) {
  $(document).ready(function(){
    var $body = $("body");
    new MasterControl($body);
  });
});
