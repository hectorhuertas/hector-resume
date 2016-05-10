var Render = (function () {
  var resume = function (resume) {
    var resume_html = '';

    for (var section in resume) {
      resume_html = resume_html + HtmlFor[section](resume[section]);
    }

    $('#content').replaceWith(resume_html);
  };

  return {
    resume: resume
  };
})();
