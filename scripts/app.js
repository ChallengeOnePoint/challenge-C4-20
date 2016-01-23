(function(app) {
  'use strict';

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .state('map', {
        url: '/map',
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map',
        params: {
          private: false
        }
      });
  });

  // Lancement de l'app
  app.run(function($rootScope, $http) {
    // ...
  });

  // https://uncorkedstudios.com/blog/multipartformdata-file-upload-with-angularjs
  app.service('blogData', function () {
    return [
      {
        "title":"Monster 821",
        "author":"Lancelot",
        "publicationDate":"21/01/15",
        "description":"Le moteur Testastretta 11° de 112 cv avec le rugissement incomparable Ducati. La technologie évoluée des Modes de Conduite. Le Ducati Safety Pack pour un contrôle maximal. Des prestations sportives et une conception italienne pour une moto à la personnalité unique. Monster 821 : incontestablement Monster.",
        "media":"imgs/ducati.jpg"
      },
      {
        "title":"La Maserati Quattroporte 2014",
        "author":"AFPrelaxnews",
        "publicationDate":"8/11/2012",
        "description":"Maserati annonce qu’une nouvelle version de sa Quattroporte, plus moderne et sportive, sera présentée au Salon de Détroit, du 19 au 27 janvier prochain.La nouvelle version de la berline de grand tourisme reprendra les atouts du modèle précédent, mais avec un style plus contemporain et sportif. Elle disposera en outre d’une toute nouvelle motorisation, de dernière génération.",
        "media":"imgs/maserati.jpg"
      },
      {
        "title":"Porsche Pajun : la baby-Panamera",
        "author":"AFPrelaxnews",
        "publicationDate":"15/05/12",
        "description":"Porsche affronte Mercedes-Benz sur son propre territoire avec un projet de berline de luxe, d’après plusieurs sources.\n« Pajun » constituera la réponse de Porsche à la Mercedes Classe-E, et témoigne de la diversification en cours du célèbre constructeur de bolides.\nLa Pajun sera plus compacte que la Panamera quatre portes et son prix sera compris entre 65.000 et 100.000€. Le modèle devrait être commercialisé d’ici 2017\nCe nouveau projet témoigne de la stratégie de diversification entreprise par le constructeur allemand, qui a confirmé cette année le lancement prochain de la Macan, un SUV compact qui entrera en concurrence directe avec la Mercedes-Benz GLK et la Range Rover Evoque.\nCette semaine, les premières images de la Macan ont été publiées en Allemagne. Elles montrent un véhicule dont les lignes évoquent la Cayenne.\nLa Macan devrait être commercialisée avant la fin de l’année, et elle constituera le cinquième modèle de la gamme des 911 après la série Boxster/Cayman, la Panamera et la Cayenne SUV.\nTagsPorschePorsche Panameravoiture de luxe",
        "media":""
      },
      {
        "title":"Les meilleurs nouveaux hôtels de la planète",
        "author":"Adélaïde",
        "publicationDate":"21/04/13",
        "description":"Le magazine Conde Nast Traveler vient de publier sa liste annuelle des nouveaux hôtels les plus en vue, en s’appuyant sur les choix de sa rédaction.\nCette « Hot List » réunit 121 établissements qui ont ouvert leurs portes récemment, répartis sur quatre continents. Les critères de sélection sont le service, la nourriture, l’atmosphère et les aménagements à disposition des clients.",
        "media":""
      },
      {
        "title":"Un distributeur de caviar installé aux États-Unis",
        "author":"Julien",
        "publicationDate":"18/11/12",
        "description":"Envie de caviar à deux heures du matin ? La Californie dispose désormais d’un distributeur, destiné aux plus fortunés qui, pris d’un petit creux, auraient envie de caviar et de blinis plutôt que de barres chocolatées et de chips.\nBeverly Hills Caviar a installé un distributeur de snacks de luxe au Burbank Town Center Mall. Ce dernier dispose de tous les ingrédients nécessaires à un en-cas gourmet. On y trouve en effet rien moins que des truffes, escargot, blinis, bottarga, huiles, sels de luxe, assiettes et cuillers en nacre et boîtes cadeaux.\nTagscaviar",
        "media":""
      },
      {
        "title":"Vivez une éclipse solaire en jet privé avec Bollinger",
        "author":"Adélaïde",
        "publicationDate":"17/02/2015",
        "description":"Du 14 janvier au 18 février 2015, Champagne Bollinger propose à ses fans de participer à un jeu concours sur sa page Facebook.\nAccessible en France et à l’international, l’application du jeu permet aux internautes de répondre à trois questions sur l’histoire et l’héritage de la Maison.\nUn unique gagnant, tiré au sort parmi les bonnes réponses, se verra offrir la possibilité de vivre un moment exceptionnel en compagnie de la marque : un vol à bord d’un jet privé pour observer depuis la stratosphère une éclipse totale du soleil !",
        "media":""
      },
      {
        "title":"Un whisky pur malt en l’honneur des Rolling Stones",
        "author":"Julien",
        "publicationDate":"25/07/13",
        "description":"Le groupe Suntory Liquors Ltd. s’apprête à lancer, le 30 octobre, un whisky pur malt pour célébrer le 50e anniversaire de la formation des Rolling Stones.",
        "media":"whisky.jpg"
      },
      {
        "title":"Minecraft : Des fous, recréent tout le Los Santos de GTA 5, la vidéo",
        "author":"Romain Mahut",
        "publicationDate":"21/01/2016",
        "description":"S'ils proposent tous deux un monde ouvert, Minecraft et GTA V sont deux titres aux concepts radicalement opposés. Cela n'a pourtant pas empêché de donner envie à des joueurs de Minecraft de mettre une grosse touche du titre de Rockstar dans celui de Mojang.",
        "media":"videos/minecraft.mp4"
      },
      {
        "title":"GTA V : Un mod pour hacker comme dans Watch Dogs, la vidéo",
        "author":"Camille Allard",
        "publicationDate":"11/1/2016",
        "description":"Les joueurs de GTA V sur PC le savent bien : grâce aux divers mods vous pouvez transformer votre jeu de mille et une façons. Aujourd'hui, on vous présente un mod inspiré de Watch Dogs, qui permet carrément de hacker la ville de Los Santos !",
        "media":"https://youtu.be/W0eqpRWjIs0"
      },
      {
        "title":"Star Wars: Episode VIII’ Delayed Until End of 2017",
        "author":"Alex Stedman",
        "publicationDate":"6/1/2015",
        "description":"“Star Wars” fans will have to wait a little longer for “Episode VIII,” with Disney moving the release date from May 26, 2017, to Dec. 15, 2017.\nThe studio also shifted the date for the release of “Pirates of the Caribbean: Dead Men Tell No Tales” to May 26, 2017, previously set for July 7, 2017.\n“Star Wars: The Force Awakens” is continuing to smash box office records since its release on Dec. 18. It’s currently the highest-grossing movie in U.S. history, and is also the third highest-grossing movie worldwide, with its current global cume standing at $1.88 billion.\n“Episode VIII” is currently in pre-production and will begin principal photography in London next month. Rian Johnson is taking the reins from J.J. Abrams, who helmed “The Force Awakens,” to write and direct the upcoming sequel.\nKathleen Kennedy and Ram Bergman will produce “Episode VIII.” Abrams, Tom Karnowski and Jason McGatlin will exec produce. Daisy Ridley, John Boyega and Oscar Isaac, »",
        "media":""
      },
      {
        "title":"#Exclu : Uber veut désormais s’ouvrir aux taxis",
        "author":"Anais Richardin",
        "publicationDate":"20/01/2016",
        "description":"C’est sur la scène de la MaddyKeynote que Thibaud Simphal, general manager France Uber a ainsi évoqué cette nouvelle stratégie rebondissant sur les récentes déclarations d’Emmanuel Macron. Invité au micro de Jean Jacques Bourdin le 20 janvier, ce dernier a en effet  déclaré que les licences de taxis ne valaient plus rien et a encouragé les taxis à  « innover, voyez si vous pouvez développer des partenariats avec des hôtels, des aéroports, des centrales de réservations.. »\nLes taxis saisiront-ils cette nouvelle opportunité ? Dans d’autres pays, comme les États-Unis, l’Angleterre ou l’Allemagne, une option Uber Taxi existe déjà dans l’application mais les conditions d’application seront bien différentes en France. Les taxis pourront ainsi faire le choix de porter l’une ou l’autre casquette au moment de prendre une course.\n« Lorsqu’Uber est arrivé en France, nous avons proposé aux taxis de nous rejoindre », explique Thibaud Simphal. Aujourd’hui, il leur est désormais possible d’exercer les deux activités en parallèle, sans avoir à renoncer, et donc à revendre leur licence. « Nous comptons déjà parmi nos chauffeurs des taxis qui ont revendu leur licence, désormais ils peuvent faire les deux, ils sont donc gagnants, mais les modalités sont encore à définir […] on encourage toutes les plateformes qui existent, pas seulement Uber mais nos concurrents, Chauffeur-Privé, SnapCar, etc. à faire la même chose ». Alors que Le Monde annonçait ce 20 janvier que les dirigeants de Heetch, concurrent de ce qui existait autrefois sous le nom d’UberPop, étaient poursuivis en correctionnelle pour « complicité d’exercice illégal de la profession de taxi« , cette annonce va-t-elle changer la donne, ou au contraire, échauffer encore plus esprits ?",
        "media":"uber.jpg"
      },
      {
        "title":"#FrenchTech : Lyon Start Up lance un appel à projets pour la troisième édition de son programme",
        "author":"Anais Richardin",
        "publicationDate":"19/01/2016",
        "description":"Chaque année, Lyon Start Up accompagne 200 startups. Pour sa troisième édition, Lyon Start Up lance un appel à projets, ouvert jusqu’au 31 janvier 2016, pour sélectionner les 100 projets qui seront accompagnées par le dispositif. ",
        "media":"videos/startup.mp4"
      },
      {
        "title":"Google : Un orage provoque des pertes de données",
        "author":"Bertrand Mahieu",
        "publicationDate":"20/08/2015",
        "description":"Après quelques petites rumeurs, Google a bien dû avouer qu’il avait perdu quelques données lors d’une série d’éclairs successifs durant la journée du 13 août 2015, sur son site proche de Mons.\nUn orage, une pincée de tonnerre et quelques décharges électriques ont donc suffit à perturber les lectures/écritures des données sur les disques durs. Résultat ? 0,000001 % des disques durs ont subit une perte totale et irrémédiables de leur données. Un disque dur sur un million est donc impliqué.",
        "media":""
      },
      {
        "title":"Silent Hill : Konami n’a honte de rien",
        "author":"Adélaïde",
        "publicationDate":"6/10/2014",
        "description":"Décidément, Konami déploie une stratégie incompréhensible et assez maladroite ces derniers temps. Après avoir tout bonnement annulé le regretté Silent Hills issu de l’incroyable collaboration de Kojima et de Del Toro (nous pleurons encore au sein de la rédaction), après avoir été au centre des polémiques concernant ses conditions de travail inacceptables, voilà que la firme nippone dévoile aux yeux de tous le prochain épisode de sa série phare Silent Hill. Attendez avant de danser, lisez bien les lignes qui vont suivre, je peux vous assurer qu’il y a aucune raison d’être heureux de cette annonce.\nEn effet, à la stupeur de tous, le prochain Silent Hill sera un pachislot, une machine à sous. Il faut préciser que ce genre de jeu de hasard est très populaire au Japon. Silent Hill version pachislot est prévu uniquement au Pays du Soleil Levant pour le mois d’octobre. Konami s’est associé avec le célèbre constructeur japonais Takasago pour l’occasion et on a même droit à un trailer. On peut y voir que la machine reprend surtout l’ambiance de Silent Hill 2, considéré comme le meilleur de la saga par beaucoup de joueurs. Le jeu va-t-il prendre les allures d’un jeu mobile pour chez nous ? On est en droit de se poser la question mais aucune information n’a été donnée à l’heure actuelle, il va donc falloir attendre. En parlant de patience, on n’est pas prêt de voir un vrai épisode de Silent Hill dans les mois à venir, l’avenir de la saga semble tumultueuse. On se laisse avec le fameux trailer. Comme d’habitude, si vous souhaitez plus d’information sur le titre, visitez le site officiel de Konami.",
        "media":"https://youtu.be/YXyY9FJUHW0"
      },
      {
        "title":"Tricy, l’application française qui risque bien de faire de l’ombre à Snapchat",
        "author":"LeGeekChic",
        "publicationDate":"2/12/2015",
        "description":"« T’es où ? » et « Tu fais quoi ? » sont sûrement les deux questions que l’on pose le plus souvent à nos amis à travers nos téléphones. Tricy y apporte une réponse originale et ludique, à travers une application qui risque bien de faire de l’ombre à Snapchat.  \nTrois jeunes Bordelais animés par l’envie de créer et d’entreprendre, ont souhaité concevoir un produit fun mais utile, et c’est ainsi qu’est née l’idée de Tricy, une application qui permet d’envoyer des photos à vos proches en temps réel, à travers des salons privés de discussion.\nEn un instant, Tricy permet de découvrir avec simplicité et légèreté ce que font vos proches, qu’ils se trouvent à des milliers de kilomètres ou dans la même soirée. S’il se dit parfois que la technologie éloigne les gens, elle est ici mise au service des relations sociales en connectant instantanément les moments de tout le monde.",
        "media":"https://youtu.be/0AOmvFtDOF0"
      }
    ];
  });

})(angular.module('BlogApp', ['ui.router', 'ngMaterial']));
