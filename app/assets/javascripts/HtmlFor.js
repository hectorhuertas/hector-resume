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

  var sectionTitle = function (title) {
    return  '<div class="col-xs-2 text-xs-right title">' +
              '<h6>' + title.toUpperCase() + '</h6>' +
            '</div>';
  };

  var contact = function (contact) {
    return  '<section id="contact" class="row">' +
              sectionTitle("contact") +
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
    return  '<section id="about" class="row">' +
              sectionTitle('about') +
              '<div class="col-xs-9 content">' +
                '<div class="row">' +
                  '<div class="col-xs-12">' +
                    about.content +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</section>';
  };

  var skills = function (skills) {
    return  '<section id="skills" class="row">' +
              sectionTitle('skills') +
              '<div class="col-xs-9 content">' +
                '<div class="row">' +
                  '<div class="col-xs-12">' +
                    skillList(skills) +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</section>';
  };

  var skillList = function (skills) {
    return skills.reduce(function(prev, curr) {
      return prev +
        '<div class="row">' +
          '<div class="col-xs-2">' +
            '<span>' + curr.type + ':</span>' +
          '</div>' +
          '<div class="col-xs-10">' +
            '<span>' + curr.list.join(', ') + '</span>' +
          '</div>' +
        '</div>';
    }, "");
  };

  return {
    title: title,
    contact: contact,
    about: about,
    skills: skills
  };
})();
