// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen (zoals 2021) in op. Log dit in de terminal.
// ==========================================

const yearsBefore = ['1972', '2001', '2013', '2021'];
console.log(yearsBefore);

// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies (zoals muziek luisteren en koekjes eten) in op. Log dit in de terminal.
// ==========================================

const spareTime = ['Playing guitar', 'Eating exotic foods', 'Drinking water'];
console.log(spareTime);

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Zorg er nu voor dat je de eerste waarde uit die array in de terminal logt             // geeft 3
// ==========================================

const valueNumbers = ['3', '4', '5', '7', '2'];
console.log(valueNumbers[0]);

// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje.
// Nu gaan we de waardes weer aanspreken!
// 4b. Zorg ervoor dat je de vijfde waarde uit bovenstaande array in de terminal logt       // geeft blauw
// 4c. Zorg ervoor dat je de tweede waarde uit bovenstaande array in de terminal logt       // geeft geel
// ==========================================

const colorValues = ['groen', 'geel', 'rood', 'paars', 'blauw', 'oranje'];
console.log(colorValues[4]);
console.log(colorValues[1]);

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25 en log dit in de terminal
// 5b. Overschrijf één van de items in de array dusdanig dat de cijferreeks netjes doorloopt (je mag de declaratie op de vorige regel niet aanpassen).
// 5c. Log de array in de terminal                                                          // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================

const valueNumbers2 = ['21', '22', '23', '25', '25'];
console.log('Originele reeks: ' + valueNumbers2);

valueNumbers2[3] = '24';
console.log('Aangepaste reeks: ' + valueNumbers2);

// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Overschrijf daarna de waarde bladerdeeg met lasagne bladen (je mag de declaratie op de vorige regel niet aanpassen).
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================

const recipeIngriedients = ['Bladerdeeg', 'Knoflook', 'Spinazie'];
console.log(recipeIngriedients);

recipeIngriedients[0] = 'Lasagne Bladen';
console.log(recipeIngriedients);

const recipeValue = [recipeIngriedients.length];
console.log(recipeValue);