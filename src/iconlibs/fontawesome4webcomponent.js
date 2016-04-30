JSONEditor.defaults.iconlibs.fontawesome4webcomponent = JSONEditor.AbstractIconLib.extend({
  mapping: {
    collapse: 'caret-square-o-down',
    expand: 'caret-square-o-right',
    "delete": 'times',
    edit: 'pencil',
    add: 'plus',
    cancel: 'ban',
    save: 'save',
    moveup: 'arrow-up',
    movedown: 'arrow-down'
  },
  icon_prefix: 'fa:',
  getIcon: function(key) {
    var iconclass = this.getIconClass(key);

    if(!iconclass) return null;
//    <iron-icon on-click="handleClick" id='icon2' icon="fa:database"></iron-icon>
    var i = document.createElement('iron-icon');
    i.setAttribute('icon',iconclass);
    return i;
  }  
});
