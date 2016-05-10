$(document).ready(function(){
  $.get('/api/v1/resume')
   .then(renderResume);
});

function renderResume(resume) {
  var resume_html = '';

  for (var section in resume) {
    resume_html = resume_html + HtmlFor[section](resume[section]);
  }

  $('body').append(resume_html);
}
