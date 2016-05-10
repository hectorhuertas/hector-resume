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
                  contactList(contact) +
                '</div>' +
              '</div>' +
            '</section>';
  };

  var contactList = function (contacts) {
    return contacts.reduce(function (prev, curr) {
      return prev +
        '<div class="col-xs-6">' +
          '<a href="' + curr.href + '">' +
            curr.content +
          '</a>' +
        '</div>';
    }, "");
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


  var code = function (code) {
    return  '<section id="code" class="row">' +
              sectionTitle('code') +
              '<div class="col-xs-9 content">' +
                codeList(code) +
              '</div>' +
            '</section>';
  };

  var codeList = function (projects) {
    return projects.reduce(function(prev, curr) {
      return prev +
        '<div class="project">' +
          '<span>' +
            '<span class="project-title">' + curr.title + '</span> - ' +
            '<a href="' + curr.production.href + '">' + curr.production.text + '</a> - ' +
            '<a href="' + curr.github.href + '">' + curr.github.text + '</a>' +
          '</span>' +
          '<p>' + curr.description + '</p>' +
        '</div>';
    }, "");
  };


  var experience = function (experience) {
    return  '<section id="experience" class="row">' +
              sectionTitle('experience') +
              '<div class="col-xs-9 content">' +
                experienceList(experience) +
              '</div>' +
            '</section>';
  };

  var experienceList = function (experiences) {
    return experiences.reduce(function(prev, curr) {
      return prev +
        '<div class="row data">' +
          '<div class="col-xs-9">' +
            '<span>' + curr.header + '</span>' +
          '</div>' +
          '<div class="col-xs-3 text-xs-right">' +
            '<span>' + curr.date + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="row">' +
          '<div class="col-xs-10 col-xs-offset-1">' +
            '<span>' + curr.description + '</span>' +
          '</div>' +
        '</div>';
    }, "");
  };

  return {
    title: title,
    contact: contact,
    about: about,
    skills: skills,
    code: code,
    experience: experience
  };
})();
