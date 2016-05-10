var HtmlFor = (function() {
  var title = function (title) {
    return  '<section id="title" class="row">' +
              '<div class="col-xs-12">' +
                '<h1 class="display-1 text-xs-center">' +
                  title.name +
                '</h1>' +
              '</div>' +
            '</section>';
  };

  var contact = function (contact) {
    return  '<section id="contact" class="row">' +
              '<div class="col-xs-2 text-xs-right title">' +
                '<h6>CONTACT</h6>' +
              '</div>' +
              '<div class="col-xs-9 content">' +
                '<div class="row">' +
                  contacts(contact) +
                '</div>' +
              '</div>' +
            '</section>';
  };

  var contacts = function (contacts) {
    var contacts_html = '';

    for (var contact in contacts) {
      contacts_html = contacts_html +
        '<div class="col-xs-6">' +
          '<a href="' + contacts[contact].href + '">' +
            contacts[contact].content +
          '</a>' +
        '</div>';
    }
    return contacts_html;
  };

  var about = function (about) {
    return  '<section id="contact" class="row">' +
              '<div class="col-xs-2 text-xs-right title">' +
                '<h6>ABOUT</h6>' +
              '</div>' +
              '<div class="col-xs-9 content">' +
                '<div class="row">' +
                  '<div class="col-xs-12">' +
                    about.content +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</section>';
  };

  return {
    title: title,
    contact: contact,
    about: about
  };
})();
