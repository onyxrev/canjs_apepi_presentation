define([
  "apepi/apepi"
], function(ApePI){
  window.numberOfPlayRequests = can.compute(0);

  can.fixture("GET /plays", function(request){
    window.numberOfPlayRequests(window.numberOfPlayRequests() + 1);

    return [
      { views: Math.ceil(Math.random() * 9999) }
    ];
  });

  can.fixture("GET /days",function(request){
    var categories = [
      "sperm whales",
      "JFK",
      "dirt",
      "the number 11",
      "the color yellow",
      "reverse mortgages",
      "bundt cake",
      "isosceles triangles"
    ];

    var numberOfCategories = Math.ceil(Math.random() * categories.length);

    return {
      categories: _.sample(categories, numberOfCategories)
    };
  });

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

  return window.apePI = new ApePI({
    debug:           true,
    debounce:        true,
    requestHandler:  can.ajax,
    debounceTimeout: 300
  });
});
