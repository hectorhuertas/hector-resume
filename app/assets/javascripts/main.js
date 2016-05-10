$(document).ready(function(){
  $.get('/api/v1/resume')
   .then(Render.resume);
});
