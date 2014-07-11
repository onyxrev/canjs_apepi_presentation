define([], function(){
  return can.Control.extend({
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

    "input.day keyup": function(el, ev){
      var day = el.val();

      if (!day) return;

      this.options.state.attr({
        day: day
      });
    }
  });
});
