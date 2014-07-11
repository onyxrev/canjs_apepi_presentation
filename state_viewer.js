var StateViewerControl = can.Control.extend({
  init: function(){
    this.numberOfStateChanges = can.compute(0);

    this.render();
    this.memoize();
  },

  render: function(){
    this.element.html(
      can.view('state_viewer_template', {
        numberOfStateChanges: this.numberOfStateChanges
      })
    );
  },

  memoize: function(){
    this.options.$state = this.element.find("#state");
  },

  "{state} change": function(){
    this.numberOfStateChanges(this.numberOfStateChanges() + 1);

    this.options.$state.text(
      JSON.stringify( this.options.state.serialize() )
    );
  }
});
