define([
  "./day_selector",
  "./category_picker",
  "./play_viewer",
  "./state_viewer"
], function(
  DaySelectorControl,
  CategoryPickerControl,
  PlayViewerControl,
  StateViewerControl
){
  return can.Control.extend({
    init: function(element, options){
      this.memoize();

      this.initState();

      this.initDaySelector();
      this.initCategoryPicker();
      this.initPlayViewer();
      this.initStateViewer();

      this.on();
    },

    memoize: function(){
      $.extend(this.options, {
        $daySelector:    this.element.find(".day-selector-control"),
        $stateViewer:    this.element.find(".state-viewer-control"),
        $playViewer:     this.element.find(".play-viewer-control"),
        $categoryPicker: this.element.find(".category-picker-control")
      });
    },

    initState: function(){
      this.options.state = new can.Map();
    },

    initDaySelector: function(){
      this.options.daySelectorControl = new DaySelectorControl(this.options.$daySelector, {
        state: this.options.state
      });
    },

    initCategoryPicker: function(){
      this.options.categoryPickerControl = new CategoryPickerControl(this.options.$categoryPicker, {
        state: this.options.state
      });
    },

    initPlayViewer: function(){
      var self = this;

      $.each(this.options.$playViewer, function(i, $el){
        new PlayViewerControl($el, {
          state: self.options.state
        });
      });
    },

    initStateViewer: function(){
      this.options.stateViewerControl = new StateViewerControl(this.options.$stateViewer, {
        state: this.options.state
      });
    }
  });
});
