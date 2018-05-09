
var currentLocation = new Point(0,0);

var locations = {
    bruno: new Point(37,41),
    barata: new Point(37,41),
    joao: new Point(37,41),
    francisca: new Point(17,19),
    lazer1: new Point(11,13),
    lazer2: new Point(19,23),
    lazer3: new Point(29,31),
    wc1: new Point(37,41),
    wc2: new Point(43,47),
    wc3: new Point(53,59),
    palco1: new Point(61,67),
    palco2: new Point(67,71),
    palco3: new Point(73,79),
    piteu1: new Point(83,89),
    piteu2: new Point(97,101),
    piteu3: new Point(103,107)
}

var gnav;

function navigate(p) {
    step(p);
}


//adicionar parametro que chame a funcao show quando da return para a outra pagina a dizer " Encontrou o LALA"
function step(p) {
    if (currentLocation.distanceToInt(p) == 0) {
        show('arrival', 'Bussola');
        gnav = setTimeout(function() {
            show('MenuNavegacao', 'arrival')
        }, 5000);
        return;
    }

    let r = Math.random() > 0.5 ? 1 : -1;
    $('.fa-location-arrow').animate({rotate: r});
    currentLocation.moveCloserTo(p);
    console.log(currentLocation);
    console.log(p);
    $('#distance').text(currentLocation.distanceToInt(p)+'m');
    gnav = setTimeout(function() {
        step(p);
    }, (Math.random()*500)+500);
}





function show(shown, hidden) {
    document.getElementById(hidden).style.display='none';
    document.getElementById(shown).style.display='block';
   
    return false;
  }
