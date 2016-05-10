var HtmlFor = (function() {
  var title = function (title) {
    return '<h1 class="display-1 text-xs-center">'+ title.name+'</h1>';
  };

  var contact = function (contact) {
    return '<h1 class="display-1 text-xs-center">'+ contact.email.content+'</h1>';
  };


  return {
    title: title,
    contact: contact
  };
})();
