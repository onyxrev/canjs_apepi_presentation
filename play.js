var Play = can.Model.extend({
  findAll: "GET /plays"
}, {});

can.fixture("GET /plays", function(request){
  return [
    { views: Math.ceil(Math.random() * 9999) }
  ];
});
