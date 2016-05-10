module Resume
  def self.hector
    {
      title: {
        name: 'Hector Huertas'
      },
      contact: [
        {
          content: 'hectorhuertas@gmail.com',
          href: 'mailto:hectorhuertas@gmail.com'
        },
        {
          content: 'github.com/hectorhuertas',
          href: 'https://github.com/hectorhuertas'
        },
        {
          content: 'linkedin.com/in/ingenierohectorhuertas/en',
          href: 'https://www.linkedin.com/in/ingenierohectorhuertas/en'
        },
        {
          content: '+34 635327507',
          href: 'tel:0034635327507'
        }
      ],
      about: {
        content: 'I am a web developer with an engineering background. Studying and working around the world reinforced my communication and problem solving skills. I am an avid learner that loves challenges and am always seeking to improve the quality of my work. Always ready, I come equipped with a relentlessly positive attitude.'
      },
      skills: [
        {
          type: 'Languages',
          list: [
            'JavaScript',
            'Ruby 2.X',
            'HTML5',
            'CSS3',
            'Elixir 1.X'
          ]
        },
        {
          type: 'Frameworks',
          list: [
            'Rails 4.X',
            'Node.js',
            'Sinatra',
            'Bootstrap'
          ]
        },
        {
          type: 'Testing',
          list: [
            'BDD/TDD',
            'RSpec',
            'MiniTest',
            'VCR',
            'Capybara',
            'Selenium',
            'Mocha',
            'PhantomJS'
          ]
        },
        {
          type: 'Tools',
          list: [
            'Git',
            'PostgreSQL',
            'Redis',
            'Sidekiq',
            'Pair Programming',
            'Agile'
          ]
        },
        {
          type: 'Interests',
          list: [
            'Phoenix',
            'Ember',
            'React',
            'UX Design',
            'Elm'
          ]
        },
      ],
      code: [
        {
          title: 'Business Placer',
          production: {
            href: 'https://business-placer.herokuapp.com/',
            text: 'business­placer.herokuapp.com'
          },
          github: {
            href: 'https://github.com/hectorhuertas/business_placer',
            text: 'GitHub'
          },
          description: 'City analyst that finds the best locations for a new business. Using population and business data, it provides a geographic analysis of the less saturated neighborhoods. Built on JS and Rails, uses OAuth, Sidekiq, Redis, VCR and Yelp’s and Google Map’s API. A background worker does all the analysis and saves to the cache, so load times are always very fast.'
        }
      ]
    }

  end
end
