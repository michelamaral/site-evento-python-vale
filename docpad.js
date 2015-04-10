module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "2º encontro Python Vale",
      logo: "themes/yellow-swan/img/logo.png",
      description: "Grupo de usuários Python do vale!",
      date: "30 de maio de 2015",
      // If your event is free, just comment this line
      // price: "1 quilo de feijão",
      venue: "CEDEMP",
      address: "Rua Tsunessaburo Makiguti, 157, Floradas de São José",
      city: "São José dos Campos",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://even.tc/pug-vale"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/PUGVale/pug-abril"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://pythonvale.com.br/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      // 'speakers',
      // 'schedule',
      //'sponsors',
      'partners',
      'contact'
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
        time: "9h30"
      },
      {
        name: "Iuri de Silvio",
        photo: "https://avatars1.githubusercontent.com/u/105852?s=460",
        bio: "Engenheiro de Computação pelo ITA. Desenvolvedor Python há 7 anos, criador do bottle-sqlalchemy, core developer do bottle e participante em outros projetos com os principais frameworks web do Python (django, flask, bottle).",
        company: "Pricez",
        link: {
          href: "http://twitter.com/iurisilvio",
          text: "@iurisilvio"
        },
        presentation: {
          title: "Distribuição de tarefas na nuvem com Celery",
          description: "Todo sistema precisa de processamento de tarefas longas. As arquiteturas atuais permitem a utilização de vários servidores para acelerar o processamento. Essa palestra vai ensinar como fazer a distribuição de tarefas assíncronas, utilizando o Celery para gerenciar essas tarefas e as funcionalidades da cloud da Amazon para gerenciar os servidores.",
          time: "10h00"
        }
      },
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
        logo: "themes/yellow-swan/img/designa.png",
        url: "http://designa.com.br"
      },
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};