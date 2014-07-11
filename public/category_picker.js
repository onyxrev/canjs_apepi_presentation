define([
  "./day",
  "./category"
], function(Day, Category){
  return can.Control.extend({
    init: function(element, options){
      options.state.attr({
        category: null
      });
    },

    render: function(categories){
      this.element.html(
        can.view('category_picker_template', { categories: categories })
      );
    },

    "{state} day change": function(state, event, attr, type, newDay, oldDay){
      var self = this;

      Day.findOne({ id: newDay }, function(day){
        self.render(day.categories);
      });
    },

    ".category change": function(el, ev){
      var categoryName = $(ev.currentTarget).val();

      this.options.state.attr({
        category: categoryName
      });
    },

    "{state} category change": function(state, event, attr, type, newCategory, oldCategory){
      var self = this;

      if (!newCategory) return;

      Category.findOne({ id: newCategory }, function(category){
        self.options.state.attr({
          limit: category.limit
        });
      });
    }
  });
});
