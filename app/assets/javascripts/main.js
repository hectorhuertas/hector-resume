$(document).ready(function(){
  $.get('/api/v1/resume')
   .then(renderResume);
});

function renderResume(resume) {
  var resume_html = HtmlFor['title'](resume.title);
  var resume_html = resume_html + HtmlFor['contact'](resume.contact);
  $('body').append(resume_html);
}
