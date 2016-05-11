# Hector Huertas Resume

Author: Hector Huertas

[Live on Heroku](https://hector-resume.herokuapp.com/)

[JSON Resume](https://hector-resume.herokuapp.com/api/v1/resume)

## Overview

This is an special html version of my resume. Instead of being a static page, the resume is rendered by loading a JSON version of the resume through an AJAX call. Once the JSON resume is recovered, it is parsed an appended to the html with jQuery.

## Deployment

To run a local version of the website run the following commands:

  1. `$ bundle install`

  2. `$ rake db:create`

  3. `$ rails server`

Now you could access the HTML resume at `http://localhost:3000/` and the resume JSON at `http://localhost:3000/api/v1/resume`
