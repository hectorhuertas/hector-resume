$(document).ready(function(){
  $.get('/api/v1/resume')
   .then(renderResume);
});

function renderResume(resume) {
  $('h1').text(resume.name);
}
