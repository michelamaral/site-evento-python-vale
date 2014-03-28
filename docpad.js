module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Python Vale",
      description: "Grupo de usuários Python do vale!",
      date: "12 de Abril de 2014",
      // If your event is free, just comment this line
      //price: "1 quilo de feijão",
      venue: "Unesp - Faculdade de Odontologia",
      address: "Avenida Engenheiro Francisco José Longo, 777 - Jardim São Dimas",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registre-se agora!",
        link: "http://even.tc/pug-vale"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/PUGVale/pug-abril"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Palestrantes",
      schedule: "Agenda",
      //sponsors: "Patrocinadores",
      partners: "Patrocinadores",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in",
        time: "14h00"
      }/*,
      {
        name: "Giovane Liberato",
        photo: "https://avatars3.githubusercontent.com/u/2964631?s=400",
        bio: "Giovane Liberato, 21 anos. Estudante da FATEC-SJC e desenvolvedor de software. Atualmente trabalha com Python, Javascript, AngularJS e Google App Engine.",
        company: "QMágico",
        link: {
          href: "http://about.me/giovaneliberato#show_twitter_7",
          text: "@giovaneliberato"
        },
        presentation: {
          title: "A arte de converter Javeiros para serem Pythonistas.",
          description: "Converta Javeiros com poucas linhas de código.",
          time: "14h20"
        }
      },
     
      {
        name: "Denis Costa",
        photo: "https://pbs.twimg.com/profile_images/1938184395/ca2b5813ded9633f64cf1e276dd0e9dd.jpeg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "15h00"
        }
      },
      {
        name: "Renzo Nuccitelli",
        photo: "http://agilevale.com.br/images/speakers/speaker-renzo-nuccitelli.png",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "15h20"
        }
      },
      {
        name: "Intervalo",
        time: "16h20"
      },
      {
        name: "Palestra 4",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "16h40"
        }
      },
      
      {
        name: "Palestra 5",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "17h20"
        }
      },
      
      {
        name: "Palestra 6",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "",
          description: "",
          time: "18h00"
        }
      }*/
    ],

    /* List of Sponsors
    sponsors: [
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa-logo.png",
        url: "http://designa.com.br"
      },
      {
        name: "ZNC Sistemas",
        logo: "themes/yellow-swan/img/znc-logo.png",
        url: "http://designa.com.br"
      }
    ],*/

    // List of Partners
    partners: [
      {
        name: "Designa",
        logo: "themes/yellow-swan/img/designa-logo.png",
        url: "http://designa.com.br"
      },
      /*{
        name: "ZNC Sistemas",
        logo: "themes/yellow-swan/img/znc-logo.png",
        url: "http://designa.com.br"
      },
      {
        name: "Red Hat",
        logo: "themes/yellow-swan/img/redhat-logo.png",
        url: "http://br.redhat.com/"
      },
      
      */
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};