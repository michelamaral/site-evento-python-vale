module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "PYTHON VALE",
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
        time: "9h30"
      },
      {
        name: "Iuri de Silvio",
        photo: "https://avatars1.githubusercontent.com/u/105852?s=460",
        bio: "",
        company: "",
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
     
      {
        name: "Giovane Liberato",
        photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1.0-1/p160x160/10003497_730736450292110_2095235144_n.jpg",
        bio: "Giovane Liberato, 21 anos. É formando na Fatec SJC e atualmente trabalha na Startup de EdTech QMágico, utilizando Python, Google App Engine, Django e AngularJs",
        company: "QMágico",
        link: {
          href: "http://about.me/giovaneliberato",
          text: "@giovaneliberato"
        },
        presentation: {
          title: "Python 4 Grownups: O primeiro passo depois do hello world",
          description: "A intenção desta palestra é mostrar aos iniciantes em python como escrever código de uma maneira mais elegante e pythonista.. o objetivo principal é indicar aos programadores iniciantes qual o caminho para sair do básico e evoluir na linguagem. Apresento frameworks, facilidades da biblioteca padrão, funções built-ins, dunder methods e outras coisas que vão fazer seu código ficar mais pythonista.",
          time: "10h40"
        }
      },
      {
        name: 'Márcio Ramos',
        photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/t1.0-1/c13.52.166.166/s160x160/554715_10151036510938981_339501766_n.jpg",
        bio: "Márcio Ramos é aluno do quarto ano de engenharia de computação no ITA. No segundo ano, começou a sua paixão por Python e hoje sonha em ser um cientista maluco que possa usar python como ferramenta.",
        company: "ITA. Former: Geekie.",
        link: {
          href: "http://www.facebook.com/marrciovr",
          text: "@marrciovr"
        },
        presentation: {
          title: "Python científico",
          description: 'Python é uma linguagem muito forte para ciência. Há diversas bibliotecas que facilitam desde tarefas rotineiras como trabalhar com matrizes (numpy) e plotar gráficos (matplotlib) até usar técnicas avançadas de inteligência artificial (Scikit-learn). A ideia da palestra é ir além de "o que existe?", e entrar no "como faz?" usando uma sessão interativa de IPython.',
          time: "11h20"
        }
      },
      {
        name: "Almoço",
        time: "12h00"
      },
      {
        name: "Danilo Bellini",
        photo: "https://avatars0.githubusercontent.com/u/2096474?s=460",
        bio: "Danilo Bellini é, pela USP, engenheiro eletricista, bacharel em música e mestre em ciência da computação. Como desenvolvedor, colaborou em projetos open source como openModeller, py.test e simplekv, além de ter criado a biblioteca AudioLazy para DSP (Digital Signal Processing) em Python. Auxilia Coding Dojos em São Paulo, para os quais elaborou o dose.py, GUI de semáforo para TDD agnóstica de linguagem.",
        company: "",
        link: {
          href: "http://twitter.com/danilobellini",
          text: "@danilobellini"
        },
        presentation: {
          title: "Sweet Child[ren] o' AudioLazy!",
          description: "Música, áudio e DSP (Digital Signal Processing) em Python com a biblioteca AudioLazy! Vai rolar música ao vivo! =)",
          time: "13h30"
        }
      },
      
      {
        name: "Robson Júnior",
        photo: "https://avatars1.githubusercontent.com/u/123325?s=460",
        bio: "",
        company: "QMágico",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Tema a confirmar",
          description: "",
          time: "14h10"
        }
      },      

      {
        name: "Reginaldo Silva",
        photo: "http://ubercomp.com/img/reginaldo.jpg",
        bio: "Reginaldo Silva, engenheiro formado pelo ITA, é um entusiasta da computação, tendo interesses em linguagens de programação, segurança da informação, inteligência artificial e redes sociais complexas, tema de seu mestrado. Atualmente trabalha como pesquisador de segurança em aplicações web.",
        company: "Ubercomp",
        link: {
          href: "https://twitter.com/reginaldojsf",
          text: "@reginaldojsf"
        },
        presentation: {
          title: "Como ser invadido em Django: plugins e casos de mau uso",
          description: "A palestra abordará temas gerais sobre segurança que surgem (ou deveriam surgir) durante o desenvolvimento de uma aplicação em Django. Por exemplo, enquanto o framework principal é bem seguro, existem algumas armadilhas. Já entre os plugins, podem ser encontrados nos mais variados níveis de qualidade e segurança.",
          time: "14h50"
        }
      },

      {
        name: "Intervalo",
        time: "15h30"
      },

      {
        name: "William Siqueira",
        photo: "http://i.imgur.com/S2G5SEi.jpg",
        bio: 'Formado na FATEC de São José dos Campos, tem cerca de 5 anos de experiência na área de TI. Trabalhou com ABAP, Business Objects, Linguagem C e atualmente é Analista de Suporte na Red Hat atuando no suporte de ferramentas JBoss.',
        company: "Red Hat",
        link: {
          href: "https://twitter.com/William_Antonio",
          text: "@william_antonio"
        },
        presentation: {
          title: "Novidades do Java 8 pra pythonista nenhum botar defeito",
          description: 'A programação Java fica menos dolorosa e mais fácil com a adição de expressões lambdas no Java 8. A nova versão da plataforma ainda traz outras melhorias como melhor integração com javascript, métodos estáticos e "default" em interfaces e JavaFX como parte da API padrão e não mais uma biblioteca a parte. Nessa apresentação vamos mostrar como aplicações "corriqueiras" podem ser re-escritas usando expressões Lambdas além de brevemente discutir as outras novas características dessa nova versão da plataforma Java.',
          time: "16h10"
        }
      },
      {
        name: "Renzo Nuccitelli",
        photo: "http://cdn.call4paperz.com.s3.amazonaws.com/uploads/user/photo/10623/thumb_speaker-renzo-nuccitelli.png",
        bio: "Engenheiro de Computação formado pelo ITA, Instrutor Python Pro, especialista em Google App Engine, usa Python desde 2009. Adora dar aulas, palestrar e participar de eventos da comunidade; conhecer novas pessoas e novas ideias.",
        company: "Python Pro",
        link: {
          href: "https://twitter.com/renzonuccitec",
          text: "@renzonuccitec"
        },
        presentation: {
          title: "App Engine e Python: você programe e o Google escala!",
          description: "Que tal construirmos uma aplicação REST/WEB durante a palestra, incluindo acesso a banco e deploy? É justamente isso que sera feito utilizando Python e App Engine, a Plataforma como Serviço (PaaS) do Google. ",
          time: "16h50"
        }
      },
      
      {
        name: "Thiago Avelino",
        photo: "https://avatars1.githubusercontent.com/u/31996?s=460 ",
        bio: "Software Engineer na UP! e Matematico pela IME/USP, especialista desenvolvimento assíncrono, sistemas distribuídos e parsers, atuante na comunidade open source, sendo core desenvolvedor de projetos como Bottle, Django, MongoDB, Riak, MongoEngine e outros... ",
        company: "UP Essência",
        link: {
          href: "https://twitter.com/avelino0",
          text: "@avelino0"
        },
        presentation: {
          title: "OpenMining: software open source de BI escrito em Python",
          description: "O mercado de Business Intelligence (BI) hoje roda entorno do Pentaho (que por sinal é uma ótima suite de software), a curva de aprendizado para aprender trabalhar com a suite do Pentaho é muito grande, principalmente a criação de dashboard (pagina onde é visualizado os relatórios). Vamos fazer um overview de como o OpenMining funciona e como é feito o processamento de grandes informações.",
          time: "17h30"
        }
      }
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