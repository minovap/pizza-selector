// Ingredient key map with display names
export const INGREDIENTS = {
  // Meats
  skinka: 'Skinka',
  kebab: 'Kebab',
  kottfars: 'Köttfärs',
  rakat: 'Räkor',
  tonfisk: 'Tonfisk',
  salami: 'Salami',
  bacon: 'Bacon',
  pepperoni: 'Pepperoni',
  curry: 'Curry',
  jalapeños: 'Jalapeños',
  nötkött: 'Nötkött',
  parma: 'Parma',
  italiensk_skinka: 'Italiensk skinka',
  kycklingfilé: 'Kycklingfilé',
  tigerräkor: 'Tigerräkor',
  musslor: 'Musslor',
  
  // Vegetables
  champinjoner: 'Champinjoner',
  farska_champinjoner: 'Färska champinjoner',
  ananas: 'Ananas',
  paprika: 'Paprika',
  lök: 'Lök',
  tomat: 'Tomat',
  tomater: 'Tomater',
  farska_tomater: 'Färska tomater',
  oliver: 'Oliver',
  svarta_oliver: 'Svarta oliver',
  gröna_oliver: 'Gröna oliver',
  vitlök: 'Vitlök',
  oxfile: 'Oxfilé',
  grädde: 'Grädde',
  ost: 'Ost',
  mozzarella: 'Mozzarella',
  ägg: 'Ägg',
  chili: 'Chili',
  spenat: 'Spenat',
  
  // Cheeses
  parmesan: 'Parmesan',
  gorgonzola: 'Gorgonzola',
  feta: 'Feta',
  ricotta: 'Ricotta',
  fetaost: 'Fetaost',
  västerhavsost: 'Västerhavsost',
  farska_färöst: 'Färska färöst',
  
  // Sauces & Bases
  tomat_sas: 'Tomatsås',
  'tomat&sås': 'Tomat & sås',
  creme_fraiche: 'Creme fraiche',
  rima_fraiche: 'Rima fraiche',
  bearnaisesas: 'Béarnaisesås',
  kebabsås: 'Kebabsås',
  tacosyra: 'Tacosyra',
  tacosyrakram: 'Tacosyra & kräm',
  stark_sas: 'Stark sås',
  piccoalasås: 'Piccalasås',
  vitlökssås: 'Vitlökssås',
  grön_pesto: 'Grön pesto',
  grädde_med_chili: 'Grädde med chili',
  grädde_med_italian_san_rucola: 'Grädde med italian san rucola',
  grädde_med_italian_san_chili: 'Grädde med italian san chili',
  paprika_med_bearnaisesas: 'Paprika med béarnaisesås',
  
  // Special items
  pommes: 'Pommes',
  sallad: 'Sallad',
  isbergssallad: 'Isbergssallad',
  rucola: 'Rucola',
  kronartskocka: 'Kronärtskocka',
  soltorkad_tomat: 'Soltorkad tomat',
  skiva_soltorkad_tomat: 'Skiva soltorkad tomat',
  bröd: 'Bröd',
  pitabröd: 'Pitabröd',
  inbakad: 'Inbakad',
  feferoni: 'Feferoni',
  räksallad: 'Räksallad',
  fyre_årstiderna: 'Fyra årstiderna',
  invinad: 'Invinad',
  lager_skiktis: 'Lager skiktis',
  toppad_med_sallad: 'Toppad med sallad',
  grön_pesto: 'Grön pesto'
};

// Pizza menu
export const PIZZAS = [
  {
    id: 1,
    name: 'Margherita',
    ingredients: ['tomat_sas', 'ost'],
    price: 115
  },
  {
    id: 2,
    name: 'Al Funghi',
    ingredients: ['farska_champinjoner'],
    price: 115
  },
  {
    id: 3,
    name: 'Al Tonno',
    ingredients: ['tonfisk', 'lök'],
    price: 115
  },
  {
    id: 4,
    name: 'Vesuvio',
    ingredients: ['skinka'],
    price: 115
  },
  {
    id: 5,
    name: 'Capricciosa',
    ingredients: ['skinka', 'farska_champinjoner'],
    price: 125
  },
  {
    id: 6,
    name: 'Calzone',
    ingredients: ['skinka', 'inbakad'],
    price: 125
  },
  {
    id: 7,
    name: 'Bolognese',
    ingredients: ['kottfars', 'lök'],
    price: 125
  },
  {
    id: 8,
    name: 'Bussola',
    ingredients: ['skinka', 'rakat'],
    price: 125
  },
  {
    id: 9,
    name: 'Del Opera',
    ingredients: ['skinka', 'tonfisk'],
    price: 125
  },
  {
    id: 10,
    name: 'Hawaii',
    ingredients: ['skinka', 'ananas'],
    price: 125
  },
  {
    id: 11,
    name: 'Musel',
    ingredients: ['skinka', 'bacon', 'curry'],
    price: 125
  },
  {
    id: 12,
    name: 'Riviera',
    ingredients: ['skinka', 'farska_champinjoner', 'rakat'],
    price: 125
  },
  {
    id: 13,
    name: 'Marinara',
    ingredients: ['musslor', 'rakat'],
    price: 135
  },
  {
    id: 14,
    name: 'Campanella',
    ingredients: ['salami', 'lök'],
    price: 135
  },
  {
    id: 15,
    name: 'Vegetariana',
    ingredients: ['lök', 'paprika', 'farska_tomater', 'farska_champinjoner', 'oliver', 'ricotta'],
    price: 135
  },
  {
    id: 16,
    name: 'Atalanata',
    ingredients: ['oxfile', 'farska_champinjoner', 'tomater', 'paprika_med_bearnaisesas'],
    price: 135
  },
  {
    id: 17,
    name: 'Piccola Con Carne',
    ingredients: ['oxfile', 'jalapeños', 'lök', 'paprika_med_bearnaisesas'],
    price: 135
  },
  {
    id: 18,
    name: 'Bella Napoli',
    ingredients: ['skinka', 'gorgonzola'],
    price: 135
  },
  {
    id: 19,
    name: 'Gyrosspizza',
    ingredients: ['pitabröd', 'pepperoni', 'farska_tomater', 'piccoalasås'],
    price: 135
  },
  {
    id: 20,
    name: 'Kebabpizza',
    ingredients: ['nötkött', 'pepperoni', 'farska_tomater', 'piccoalasås'],
    price: 135
  },
  {
    id: 21,
    name: 'Kebabpizza Special',
    ingredients: ['paprika', 'vitlökssås', 'kebabsås', 'feferoni', 'tacosyra'],
    price: 135
  },
  {
    id: 22,
    name: 'Gyrosspizza Special',
    ingredients: ['tomat&sås', 'vitlökssås', 'feferoni', 'lök'],
    price: 135
  },
  {
    id: 23,
    name: 'Calzone Special',
    ingredients: ['inbakad', 'skinka', 'rakat', 'farska_champinjoner'],
    price: 145
  },
  {
    id: 24,
    name: 'Picirina',
    ingredients: ['inbakad', 'skinka', 'jalapeños', 'farska_färöst'],
    price: 145
  },
  {
    id: 25,
    name: 'Provencale',
    ingredients: ['räksallad', 'lök', 'farska_tomater', 'vitlök'],
    price: 145
  },
  {
    id: 26,
    name: 'Quattro Stagioni',
    ingredients: ['fyre_årstiderna', 'skinka', 'rakat', 'champinjoner', 'musslor', 'oliver', 'kronartskocka'],
    price: 145
  },
  {
    id: 27,
    name: 'Udal',
    ingredients: ['räksallad', 'lök', 'paprika', 'champinjoner', 'bearnaisesas', 'invinad'],
    price: 155
  },
  {
    id: 31,
    name: 'Acapulco',
    ingredients: ['oxfile', 'farska_champinjoner', 'lök', 'vitlök', 'jalapeños', 'tacosyra', 'tacosyrakram', 'grädde'],
    price: 140
  },
  {
    id: 32,
    name: 'Azteka',
    ingredients: ['skinka', 'lök', 'jalapeños', 'tacosyra', 'vitlök', 'tacosyrakram', 'grädde'],
    price: 140
  },
  {
    id: 33,
    name: 'Alicante',
    ingredients: ['pepperoni', 'lök', 'jalapeños', 'tacosyra', 'vitlök', 'tacosyrakram', 'grädde'],
    price: 140
  },
  {
    id: 34,
    name: 'Fiorence',
    ingredients: ['mozzarella', 'lager_skiktis', 'kronartskocka', 'soltorkad_tomat', 'ägg', 'ricotta'],
    price: 165
  },
  {
    id: 35,
    name: 'Di Parma',
    ingredients: ['parma', 'champinjoner', 'chili', 'tomat', 'vitlök', 'rucola'],
    price: 165
  },
  {
    id: 36,
    name: 'Tony Montana',
    ingredients: ['italiensk_skinka', 'paprika', 'champinjoner', 'pepperoni', 'lök', 'vitlök', 'rucola'],
    price: 175
  },
  {
    id: 37,
    name: 'La Chef di Parma',
    ingredients: ['parma', 'lök', 'tomat', 'champinjoner', 'paprika', 'chili', 'grädde', 'vitlök', 'rucola'],
    price: 175
  },
  {
    id: 38,
    name: 'Di Giovanni',
    ingredients: ['mozzarella', 'oxfile', 'kronartskocka', 'champinjoner', 'grön_pesto', 'ricotta'],
    price: 175
  },
  {
    id: 39,
    name: 'Kyckling Special',
    ingredients: ['kycklingfilé', 'pepperoni', 'salami', 'paprika', 'chili', 'vitlök', 'rucola'],
    price: 175
  },
  {
    id: 40,
    name: 'Florentina',
    ingredients: ['mozzarella', 'fetaost', 'lök', 'tomat', 'spenat', 'lök', 'soltorkad_tomat', 'ricotta'],
    price: 175
  },
  {
    id: 41,
    name: 'Nonna',
    ingredients: ['oxfile', 'grön_pesto', 'farska_champinjoner', 'grädde', 'piccoalasås', 'tomat', 'chili', 'fetaost'],
    price: 175
  },
  {
    id: 42,
    name: 'Milano',
    ingredients: ['gorgonzola', 'parmesan', 'oliver', 'rucola', 'skiva_soltorkad_tomat', 'grädde_med_chili'],
    price: 175
  },
  {
    id: 43,
    name: 'Juventus',
    ingredients: ['farska_champinjoner', 'parmesan', 'grädde_med_italian_san_rucola'],
    price: 175
  },
  {
    id: 44,
    name: 'Milanese',
    ingredients: ['västerhavsost', 'ägg', 'rima_fraiche', 'toppad_med_sallad'],
    price: 175
  },
  {
    id: 45,
    name: 'Bianca Tigra',
    ingredients: ['tigerräkor', 'oliver', 'vitlök', 'grädde_med_italian_san_chili'],
    price: 175
  }
];

// Sanity check function
export function validatePizzas() {
  const ingredientKeys = Object.keys(INGREDIENTS);
  const errors = [];
  
  PIZZAS.forEach(pizza => {
    pizza.ingredients.forEach(ingredient => {
      if (!ingredientKeys.includes(ingredient)) {
        errors.push({
          pizza: pizza.name,
          missingIngredient: ingredient
        });
      }
    });
  });
  
  if (errors.length > 0) {
    console.error('❌ Missing ingredients found:');
    errors.forEach(error => {
      console.error(`  Pizza "${error.pizza}" references missing ingredient: "${error.missingIngredient}"`);
    });
    throw new Error(`Validation failed: ${errors.length} missing ingredient(s) found. Check console for details.`);
  }
  
  console.log('✅ All pizzas validated successfully!');
  return true;
}

// Run validation on import
validatePizzas();
