$(document).ready(function(){
  $.get('/api/v1/resume')
   .then(renderResume);
});

function renderResume(resume) {
  console.log(resume);
  $('h1').text(resume.title.name);
  var resume_html = ""

  $('body').append(resume_html)
}
