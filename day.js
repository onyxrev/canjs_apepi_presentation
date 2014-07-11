var Day = can.Model.extend({
  findAll: 'GET    /days',
  findOne: 'GET    /days/{id}',
  create:  'POST   /days',
  update:  'PUT    /days/{id}',
  destroy: 'DELETE /days/{id}'
}, {});

can.fixture("GET /days/{id}",function(request){
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
