var DaySelectorControl = can.Control.extend({
  init: function(element, options){
    options.state.attr({
      day: 1
    });

    this.render();
  },

  render: function(){
    this.element.html(
      can.view('day_selector_template', {})
    );
  },

  "input.day change": function(el, ev){
    var day = el.val();

    this.options.state.attr({
      day: day
    });
  }
});
