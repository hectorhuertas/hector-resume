module Resume
  def self.hector
    {
      title: {
        name: 'Hector Huertas'
      },
      contact: [
        {
          text: 'hectorhuertas@gmail.com',
          href: 'mailto:hectorhuertas@gmail.com'
        },
        {
          text: 'github.com/hectorhuertas',
          href: 'https://github.com/hectorhuertas'
        },
        {
          text: 'linkedin.com/in/ingenierohectorhuertas/en',
          href: 'https://www.linkedin.com/in/ingenierohectorhuertas/en'
        },
        {
          text: '+34 635327507',
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
        },
        {
          title: 'Snake Tron',
          production: {
            href: 'http://hectorhuertas.github.io/snake-tron/',
            text: 'hectorhuertas.github.io/snake-tron'
          },
          github: {
            href: 'https://github.com/hectorhuertas/game-time',
            text: 'GitHub'
          },
          description: 'Snake and Tron crossover built on JavaScript. Features well organized code, performant collision detection and an optional AI for the second player. I was responsible for the collision detection, unit testing and AI.'
        },
        {
          title: 'Hire My Tribe',
          production: {
            href: 'http://hiremytribe.herokuapp.com/',
            text: 'hiremytribe.herokuapp.com'
          },
          github: {
            href: 'https://github.com/stevepentler/Hire-My-Tribe',
            text: 'GitHub'
          },
          description: 'Freelance developers marketplace, promoting team recruitment. Contractor can browse profiles or use the team builder engine, a genetic algorithm that weighs a budget and a given set of skills, to find the best fit. My main responsibilities were the implementation of controllers and models as well as integration testing. Pair programming was paramount in the completion of this project.'
        }
      ],
      experience: [
        {
          header: 'Production Manager, Global Ends, Murcia, Spain',
          date: '09/2014 -­ 04/2015',
          description: 'Production scheduling in an easy­open lids factory'
        },
        {
          header: 'Construct 2 Mobile Game Programming, Freelance',
          date: '01/2014 ­- 09/2014',
          description: 'Founder & Programmer at mirthfulstudios.com'
        },
        {
          header: 'SAP Consultant, Capgemini, Valencia, Spain',
          date: '07/2013 -­ 01/2014',
          description: 'Design & Implementation of production planning related SAP solutions'
        },
        {
          header: 'Representative, Marfa Tessile SL, Hangzhou, China',
          date: '08/2011 ­- 02/2012',
          description: 'Textile industry. Regional accounting and business relationships'
        }
      ],
      education: [
        {
          header: 'Turing School of Software & Design at Denver, USA',
          date: '10/2015 ­- 04/2016',
          description: 'Certificate in Web Application Development with JavaScript, Ruby and Rails'
        },
        {
          header: 'Universidad Politécnica de Valencia at Valencia, Spain',
          date: '10/2008 -­ 05/2013',
          description: 'Master’s in Industrial Management Engineering'
        },
        {
          header: 'Universidad Politécnica de Valencia at Valencia, Spain',
          date: '10/2004 ­- 09/2008',
          description: 'Bachelor’s in Mechanical Engineering'
        },
      ]
    }
  end
end
