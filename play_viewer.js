var PlayViewerControl = can.Control.extend({
  render: function(plays){
    this.element.html(
      can.view('play_viewer_template', { plays: plays })
    );
  },

  "{state} change": function(){
    Play.findAll(this.options.state.serialize(), this.render.bind(this))
  }
});
