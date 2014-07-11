var Category = can.Model.extend({
  findOne: "GET /categories/{id}"
}, {});

can.fixture("GET /categories/{id}",function(request){
  var categories = {
    "sperm whales": {
      limit: 1
    },

    "dirt": {
      limit: 99
    },

    "JFK": {
      limit: 1
    },

    "the number 11": {
      limit: 11
    },

    "the color yellow": {
      limit: 9000
    },

    "reverse mortgages": {
      limit: 0
    },

    "bundt cake": {
      limit: 3
    },

    "isosceles triangles": {
      limit: 17
    }
  };

  return categories[request.data.id];
});
