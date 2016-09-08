angular
    .module('trackFilling')
    .controller('trackFillingCtrl', trackFillingCtrl);


function trackFillingCtrl($scope) {
    var i = 0; //variavel para simular numero questão
    var position = 0; // posição inicial advanceStep



    // ############ Array para Testes ##########################################
    $scope.stages = [{
        choice: "md-primary"
    },{
        choice: "md-warn"
    }

    ];

    $scope.track = [{
        id: "",
        icon: "date_range",
        text: "(VIFC6) 06. No mês passado, qual foi aproximadamente sua renda familiar líquida? Considere a soma dos rendimentos, já com descontos, de todas as pessoas que contribuem regularmente para as despesas de sua casa. Escolha a opção que melhor corresponde à sua faixa de renda.",
        time: "",
        grade:""

    }, {
        id: "",
        icon: "looks_one",
        text: "As próximas perguntas se referem à sua vida familiar. Vamos começar com algumas perguntas sobre sua situação conjugal e filhos",
        time: "",
        grade:""
    }, {
        id: "",
        icon: "exposure_zero",
        text: "(VIFC2)02. Seu cônjuge/companheiro(a) é: (LEIA AS ALTERNATIVAS)",
        time: "",
        grade:""
    }, {
        id: "",
        icon: "radio_button_checked",
        text: "Agora vamos falar um pouco sobre as pessoas que moram atualmente com o(a) Sr(a). Vamos incluir também crianças e bebês.",
        time: "",
        grade:""
    }, {
        id: "",
        icon: "check_box",
        text: "03. Quantos dias por semana o(a) Sr(a) faz atividades físicas fortes no seu tempo livre? Por ex.: correr, fazer ginástica de academia, pedalar em ritmo rápido, praticar esportes competitivos, etc.",
        time: "",
        grade:""
    }, {
        id: "6",
        icon: "text_format",
        text: "05. Quantos dias por semana o(a) Sr(a) faz atividades físicas médias fora as caminhadas no seu tempo livre? Por ex.: nadar ou pedalar em ritmo médio, praticar esportes por diversão, etc.",
        time: "",
        grade:""
    }, {
        id: "7",
        icon: "email",
        text: "07. Quantos dias por semana o(a) Sr(a) usa a bicicleta para ir de um lugar a outro?",
        time: "",
        grade:""
    }, {
        id: "8",
        icon: "access_time",
        text: "CCEM6",
        time: "",
        grade:""
    }, {
        id: "9",
        icon: "phone",
        text: "CCEM6",
        time: "",
        grade:""
    }, {
        id: "10",
        icon: "message",
        text: "CCEM6",
        time: "",
        grade:""
    }, {
        id: "11",
        icon: "image",
        text: "CCEM7",
        time: "",
        grade:""
    }];
    // ##########################################################################
  //  $scope.track = [];

    $scope.createStep = function(icon, nQuestion, id, grade) {
        var d = new Date();

        $scope.track.push({
            icon: icon,
            text: nQuestion + i,
            id: " ",
            grade:" "
        });
        ++i;
    };

    $scope.advanceStep = function(choice) {
      var d = new Date();
      surveyTime = d.getHours() + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2);

      $scope.track.splice(0, $scope.track[position].grade = choice);
      $scope.track.splice(0, $scope.track[position].time = surveyTime);
        ++position;
    };


}
