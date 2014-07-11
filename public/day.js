define([
  "./apepi"
], function(apePI){
  return can.Model.extend({
    findOne: function(params, success, error){
      return apePI.addRequest({
        url:  "/days",
        data: params
      }).then(success, error);
    }
  }, {});
});
