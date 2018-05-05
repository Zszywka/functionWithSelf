function Button(text1,text2) {
  this.text1 = text1 || 'Who is the best?';
  this.text2 = text2 || 'Probably you';
}

Button.prototype = {

  create: function() {
    var self = this;
    this.$element = $('<button>');
    this.$element.text(this.text1);
    this.$element.click(function() {
      alert(self.text2);
    });

    $('body').append(this.$element);
    // an alternative to the code above:
    // this.$element.appendTo($('body'));
  }
}

var button1 = new Button('Mirror mirror tell me, who is the most beautiful in the world?','You');
button1.create();

var button2 = new Button('','');
button2.create();
