define([
  "./apepi"
], function(apePI){
  return  can.Model.extend({
    findAll: function(params, success, error){
      return apePI.addRequest({
        url:  "/plays",
        data: params
      }).then(success, error);
    }
  }, {});
});
