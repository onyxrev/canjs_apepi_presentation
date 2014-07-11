define([
  "./apepi"
], function(apePI){
  return can.Model.extend({
    findOne: function(params, success, error){
      var id = params.id;
      delete(params.id);

      return apePI.addRequest({
        url:  "/categories/" + id,
        data: params
      }).then(success, error);
    }
  }, {});
});
