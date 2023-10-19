//western
import Cheesepizza from '../assets/images/western/cheesepizza.jpg'
import Chickenalfredopasta from '../assets/images/western/chickenalfredopasta.jpeg'
import Caesarsalad from '../assets/images/western/caesarsalad.jfif'

//local
import Charkwayteow from '../assets/images/local/charkwayteow.jfif'
import Sweetandsourpork from '../assets/images/local/sweetandsourpork.jfif'
import Fishbeehoonsoup from '../assets/images/local/fishbeehoonsoup.jpg'

//indianmuslim
import Muttonbiryani from '../assets/images/indian/muttonbiryani.jpg'
import Nasiayambakar  from '../assets/images/indian/nasiayambakar.jfif'
import Maggigoreng from '../assets/images/indian/maggigoreng.jfif'

//mediterranean
import Greekyoghurtpita from '../assets/images/mediterranean/greekyoghurtpita.jfif'
import Beefkebab from '../assets/images/mediterranean/turkishbeefkebab.jpg'

//asian
import Kimchijiggae from '../assets/images/asian/kimchijiggae.jpg'
import Temmpuraprawnsoba from '../assets/images/asian/tempuraprawnsoba.jpg'
import Congyoubing from '../assets/images/asian/congyoubing.jfif'

export const allProductsData = [
  //western
  {
    id: 'cheese-pizza',
    ItemImg: Cheesepizza,
    ItemName: 'Cheese Pizza',
    ItemDescription: 'Thick crusted pizza with 3 types of cheese',
    Recipe: "1.  Grease 12-inch pizza pan. Stir pizza dough baking mix and water until soft dough forms."
          + "\n2.  Add in yeast to the dough mixture and let it rise for about 10 minutes."
          + "\n3.  Pat dough mixture in pizza pan, using fingers dipped in water; pinch edge, forming 1/2-inch rim. Spread pizza sauce over crust. Sprinkle with provolone and mozerella cheese."
          + "\n4.  Move oven rack to lowest position and heat to 180°C. Bake 12 to 15 minutes or until crust is brown and cheese is bubbly."
          + "\n5.  Remove from oven. Sprinkle grated parmesan on the pizza and it is ready to be served.",
    CookingTime: '25',
    Category: 'Western',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'pizza dough', value: 'pizza dough', price: '2.0' },
          { id: 'yeast', value: 'yeast', price: '0.3'},
          { id: 'pizza sauce', value: 'pizza sauce', price: '1.0' },
          { id: 'mozerella', value: 'mozerella', price: '1.8' },
          { id: 'provolone', value: 'provolone', price: '2.5' },
          { id: 'parmesan', value: 'parmesan', price: '1.5' },
        ],
      },
    ],
    //ItemPrice: (attributes.attributeOptions.price).toFixed(2),
  },
  {
    id: 'chickenalfredopasta',
    ItemImg: Chickenalfredopasta,
    ItemName: 'Chicken Alfredo Pasta',
    ItemDescription: 'Cream based chicken linguine with herbs',
    Recipe: "1.  Melt the butter in a large pan over medium-high heat, then add the chicken. Season with the oregano and garlic."
          + "\n2.  Cook the chicken for 8-10 minutes, or until it is fully cooked. Remove the chicken from the pan and set aside."
          + "\n3.  To make the sauce, melt the butter in the same pan over medium heat, then add the garlic. Cook until the garlic begins to soften. Stir in half of the flour at a time until incorporated. Gradually pour in the milk, stirring between additions, and cook until fully incorporated and the sauce begins to thicken. Add the Parmesan cheese and stir until melted."
          + "\n4.  In a large bowl, pour the sauce over cooked linguine, then add the chicken and toss well to combine. Add the parsley and Parmesan and toss again.",
    CookingTime: '30',
    //ItemPrice: (2).toFixed(2),
    Category: 'Western',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'linguine', value: 'linguine', price: '1.0' },
          { id: 'heavy cream', value: 'heavy cream', price: '0.8' },
          { id: 'parmesan cheese', value: 'parmesan cheese', price: '1.5' },
          { id: 'butter', value: 'butter', price: '0.8' },
          { id: 'parsley', value: 'parsley', price: '0.3'},
          { id: 'flour', value: 'flour', price: '1.2'},
          { id: 'milk', value: 'milk', price: '1.0'},
          { id: 'oregano', value: 'oregano', price: '0.8'},
          { id: 'garlic', value: 'garlic', price: '0.2'},
        ],
      },
    ],
  },
  {
    id: 'caesarsalad',
    ItemImg: Caesarsalad,
    ItemName: 'Caesar Salad',
    ItemDescription:
      'Green salad served with croutons and parmesan',
    //ItemPrice: (9).toFixed(2),
    Recipe: "1.  In a medium bowl, whisk together squezed lemon juice and caesar sauce."
          + "\n2.  In a pot, bring water to boil and add the eggs. Boil the eggs for 10 minute or unti hard boiled. Remove from pot and soak in ice water. Let the eggs cool and slice thinly."
          + "\n3.  Chop the lettuce and olives and mix in the sauce, together with hard boiled eggs and croutons. Sprinkle parmesan cheese. Serve cold.",
    CookingTime: '15',
    Category: 'Western',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'lettuce', value: 'lettuce', price: '1.0' },
          { id: 'egg', value: 'egg', price: '1.0' },
          { id: 'croutons', value: 'croutons', price: '0.8' },
          { id: 'lemon', value: 'lemon', price: '0.5'},
          { id: 'caesar sauce', value: 'caesar sauce', price: '1.8' },
          { id: 'parmesan', value: 'parmesan', price: '1.5' },
          { id: 'olives', value: 'olives', price: '0.8' },
        ],
      },
    ],
  },
  //local
  {
    id: 'fishbeehoonsoup',
    ItemImg: Fishbeehoonsoup,
    ItemName: 'Fish Bee Hoon Soup',
    ItemDescription:
      'Sliced fish cooked in warm soup with thin rice noodles',
    Recipe: "1.  Add oil to a pot and let it heat a bit. Add the ginger, lemongrass and sauté for few sec. Add chopped fish and continue to sauté for few mins."
          + "\n2.  Pour in rice wine and water and bring it to a boil. Add bok choy, tomato and tofu and cook the soup."
          + "\n3.  Add the bee hoon into the soup and cook for 2-3 minutes, or until bee hoon turns soft. Garnish with scallions and it is ready to serve.",
    //ItemPrice: (8).toFixed(2),
    CookingTime: '15',
    Category: 'Local',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'sliced fish', value: 'sliced fish', price: '3.0' },
          { id: 'bee hoon', value: 'bee hoon', price: '0.5' },
          { id: 'ginger', value: 'ginger', price: '0.8' },
          { id: 'rice wine', value: 'rice wine', price: '1.5' },
          { id: 'bok choy', value: 'bok choy', price: '0.5' },
          { id: 'lemongrass', value: 'lemongrass', price: '0.2'},
          { id: 'tofu', value: 'tofu', price: '0.5' },
          { id: 'scallions', value: 'scallions', price: '0.2'},
          { id: 'tomato', value: 'tomato', price: '0.7' },
        ],
      },
    ],
  },

  {
    id: 'sweetandsourpork',
    ItemImg: Sweetandsourpork,
    ItemName: 'Sweet and Sour Pork',
    ItemDescription:
      'Fried pork cubes glazed with tangy tomato based sauce',
    //ItemPrice: (8).toFixed(2),
    Recipe: "1.  Mix Pork with Marinade. Preheat oven to 80°C/175°F and place rack on tray - to keep pork warm."
          + "\n2.  Pour enough oil into a large saucepan or small pot so it's 2.5cm / 1 inch deep. Heat to 180°C/350°F. Coat pork with flour, and fry in batches for 3 minutes until golden. Keep warm in oven."
          + "\n3.  To stir fry, heat oil in a very large skillet over high heat. Add garlic, ginger and onion, stir for 1 1/2 minutes. Add capsicum and stir for 2 minutes. Add Sauce & pinapple, then let it come to a rapid simmer. Simmer for 2 minutes until it thickens."
          + "\n4.  Add pork, then quickly toss to coat for 10 seconds. Pour onto serving plate, and garnish with sesame seeds. Serve immediately.",
    CookingTime: '45',
    Category: 'Local',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'pork', value: 'pork', price: '2.5' },
          { id: 'ginger', value: 'ginger', price: '0.8'},
          { id: 'cucumber', value: 'cucumber', price: '0.5' },
          { id: 'onion', value: 'onion', price: '0.5'},
          { id: 'sweet and sour sauce', value: 'sweet and sour sauce', price: '1.0' },
          { id: 'pineapple', value: 'pineapple', price: '0.5' },
          { id: 'garlic', value: 'garlic', price: '0.2'},
          { id: 'sesame seeds', value: 'sesame seeds', price: '0.3' },
          { id: 'oil', value: 'oil', price: '2.0'},
          { id: 'flour', value: 'flour', price: '1.2'},
        ],
      },
    ],
  },
  
  {
    id: 'charkwayteow',
    ItemImg: Charkwayteow,
    ItemName: 'Char Kway Teow',
    ItemDescription:
      'Fried thick noodles in dark sauce with prawns and crunchy beansprouts',
    //ItemPrice: (8).toFixed(2),
    Recipe: "1.  Heat lard and 1 tbsp oil in a wok or very large heavy based skillet over high heat. Swirl around the wok."
          + "\n2.  When it starts smoking, add prawns. Cook for 30 seconds. Add garlic, stir for 10 seconds."
          + "\n3.  Add noodles, then using both hands on the handle, toss 4 times until coated with oil (or gently fold using a spatula + wooden spoon). Add bean sprouts and scallion, toss or gently fold a few times."
          + "\n4.  Push everything to one side, add remaining 1 tbsp oil. Add egg and cook, moving it around until mostly set - about 1 minute. Use wooden spoon to chop it up roughly."
          + "\n5.  Pour soy sauce over noodles, then toss to disperse Sauce through the noodles. Pause between tosses to give the noodles a chance to caramelise on the edges. Serve immediately.",
    CookingTime: '20',
    Category: 'Local',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'kway teow', value: 'kway teow', price: '1.0' },
          { id: 'prawn', value: 'prawn', price: '2.5' },
          { id: 'scallions', value: 'scallions', price: '0.2'},
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
          { id: 'egg', value: 'egg', price: '1.0' },
          { id: 'beansprouts', value: 'beansprouts', price: '0.8' },
          { id: 'oil', value: 'oil', price: '2.0'},
        ],
      },
    ],
  },

  //indianmuslim
  {
    id: 'muttonbiryani',
    ItemImg: Muttonbiryani,
    ItemName: 'Mutton Biryani',
    ItemDescription:
      'Indian basmati rice in fragrant herbs paired with braised mutton',
    Recipe: "1.  Heat oil in a pan. Add in sliced onions and fry onions till golden brown. Set aside the fried onion and onion oil."
          + "\n2.  Use onion oil and indian spcies to marinate mutton, together with masala powder and chili."
          + "\n3.  Cook the basmati rice with tumeric powder and coconut milk until it is 50% cook."
          + "\n4.  Add the marinated mutton into the pot and mix evenly. Top with fried onions and parsley."
          + "\n5.  Once the time is up, remove the biryani from heat and set aside for 10 mins. Open the lid, fluff up the rice. Serve hot.",
    CookingTime: '45',
    //ItemPrice: (8).toFixed(2),
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'basmati rice', value: 'basmati rice', price: '1.0' },
          { id: 'mutton', value: 'mutton', price: '2.0' },
          { id: 'onion', value: 'onion', price: '0.5' },
          { id: 'indian spices', value: 'indian spices', price: '1.8' },
          { id: 'masala', value: 'masala', price: '0.3'},
          { id: 'tumeric', value: 'tumeric', price: '0.2'},
          { id: 'coconut milk', value: 'coconut milk', price: '0.8' },
          { id: 'oil', value: 'oil', price: '2.0'},
          { id: 'parsley', value: 'parsley', price: '0.3'},
        ],
      },
    ],
  },
  {
    id: 'nasiayambakar',
    ItemImg: Nasiayambakar,
    ItemName: 'Nasi Ayam Bakar',
    ItemDescription:
      'Grilled chicken with rice and sweet chili sauce',
      Recipe: "1.  Preheat a large pot with cooking oil. Add garlic and stir fry for 30 seconds. Add the chicken pieces and continue to stir until the chicken turn opaque and cooked through. Dish the chicken out and set aside."
            + "\n2.  In the same pot, add in lemongrass and stir fry until fragrant. Add rice and pour in the coconut milk. Bring to a gentle simmer and cover the pot and let it cook for the next 20 minutes. Turn off heat, and let it sit for another 10 minutes. Uncover and check on the rice. It should be fluffy and cooked through."
            + "\n3.  Serve chicken with sambal sauce and add banana leaves for extra fragrance.",
    CookingTime: '50',
    //ItemPrice: (8).toFixed(2),
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'white rice', value: 'white rice', price: '1.0' },
          { id: 'coconut milk', value: 'coconut milk', price: '0.8' },
          { id: 'sambal', value: 'sambal', price: '1.2' },
          { id: 'chili padi', value: 'chili padi', price: '0.3'},
          { id: 'lemongrass', value: 'lemongrass', price: '0.2'},
          { id: 'banana leaves', value: 'banana leaves', price: '0.1'},
          { id: 'cucumber', value: 'cucumber', price: '0.5' },
        ],
      },
    ],
  },
  {
    id: 'maggigoreng',
    ItemImg: Maggigoreng ,
    ItemName: 'Maggi Goreng',
    ItemDescription:
      'Fried springy noodles with bok choy and chicken',
    //ItemPrice: (8).toFixed(2),
    Recipe: "1.  Heat oil, break in eggs, scramble, remove and keep aside. In the same oil. saute shallots and garlic. Add curry powder and quickly stir."
          + "\n2.  Pour in sweet and light soy sauce. Stir; add maggi mee, Maggi seasoning (from mee packet), onions and bok choy."
          + "\n3.  Quickly stir over high heat for 2 to 3 minutes. Dish out and serve with calamansi lime, cucumber and chilli padi slices.",
    CookingTime: '10',
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'maggi noodles', value: 'maggi noodles', price: '0.8' },
          { id: 'bok choy', value: 'bok choy', price: '0.5' },
          { id: 'egg', value: 'egg', price: '1.0' },
          { id: 'onion', value: 'onion', price: '0.5'},
          { id: 'lime', value: 'lime', price: '0.2'},
          { id: 'chili padi', value: 'chili padi', price: '0.3'},
          { id: 'oil', value: 'oil', price: '2.0'},
        ],
      },
    ],
  },

  //mediterranean
  {
    id: 'greekyoghurtpita',
    ItemImg: Greekyoghurtpita ,
    ItemName: 'Greek Yoghurt Pita',
    ItemDescription:
      'Greek flatbread with chicken slices and yoghurt dressing',
    Recipe: "1.  In a medium sized bowl add the greek yogurt. Gradually add in the flour. Mix after each addition. When a dough ball starts to form turn the dough out onto a work surface (ex. clean kitchen counter)."
          + "\n2.  Knead the dough for 5 – 10 minutes or until a smooth elastic dough forms. Shape the dough into a circle and place back in the bowl. Cover with a lint free towel or plastic wrap. Let the dough rest for 15 minutes."
          + "\n3.  Roll the dough out into a long and slice into 5 – 6 even pieces. Roll out each piece into a thin pita shape. Note: the dough will puff up while cooking so roll it out as thin as possible."
          + "\n4.  Heat a medium sized frying pan with no oil or butter. Cooking one pita at a time, add a pita to the pan. Once the pita starts to bubble up, approximately 2-3 minutes, use tongs or a spatula to flip the pita bread."
          + "\n5.  Pan fry chicken and season with rosemary and dill. After chicken is fully cooked, add in greek yoghurt and freshly squeexed lemon juice as dressing."
          + "\n6.  Wrap chicken with pita bread and garnish with chopped olives, diced tomatoes and lettuce. Sprinkle parmesan cheese.",
    CookingTime: '35',
    //ItemPrice: (8).toFixed(2),
    Category: 'Mediterranean',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'flour', value: 'flour', price: '1.2'},
          { id: 'greek yoghurt', value: 'greek yoghurt', price: '1.8' },
          { id: 'olives', value: 'olives', price: '0.8' },
          { id: 'rosemary', value: 'rosemary', price: '0.5' },
          { id: 'dill', value: 'dill', price: '0.5' },
          { id: 'lettuce', value: 'lettuce', price: '1.0' },
          { id: 'tomato', value: 'tomato', price: '0.7' },
          { id: 'parmesan', value: 'parmesan', price: '1.5' },
          { id: 'lemon', value: 'lemon', price: '0.5'},
        ],
      },
    ],
  },
  {
    id: 'beefkebab',
    ItemImg: Beefkebab ,
    ItemName: 'Turkish Beef Kebab',
    ItemDescription:
      'Turkish grilled beef skewers',
    Recipe: "1.  Cut beef into 3/4-inch cubes. In a bowl, marinate beef with 1 tablespoon oil, cumin and pepper."
          + "\n2.  Rinse capsicum and remove seeds and ribs. Cut into 2-cm (3/4-inch) wide pieces. Chop onions to similar size pieces."
          + "\n3.  Thread beef cubes onto wooden skewers, with alternating pieces of capsicums and onions."
          + "\n4.  Heat 1 tablespoon oil in a roasting pan over low heat. Sauté onions and garlic until softened, about 4 minutes."
          + "\n5.  Use oil to coat grill pan and cook until skewers until browned, about 1 minute per side.",
    CookingTime: '20',
    //ItemPrice: (8).toFixed(2),
    Category: 'Mediterranean',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'beef', value: 'beef', price: '2.5' },
          { id: 'capsicum', value: 'capsicum', price: '0.5' },
          { id: 'onion', value: 'onion', price: '0.5' },
          { id: 'cumin', value: 'cumin', price: '0.8' },
          { id: 'black pepper', value: 'black pepper', price: '1.5' },
          { id: 'garlic', value: 'garlic', price: '0.2'},
          { id: 'oil', value: 'oil', price: '2.0'},

        ],
      },
    ],
  },


  //Asian
  {
    id: 'kimchijiggae',
    ItemImg: Kimchijiggae ,
    ItemName: 'Kimchi Jiggae',
    ItemDescription:
      'Korean kimchi stew served with tofu and onion',
    Recipe: "1.  Put the anchovies, radish, onions, and dried kelp in a sauce pan. Add the water and boil for 20 minutes over medium high heat. Lower the heat to low for another 5 minutes. Strain."
          + "\n2.  Place the kimchi and kimchi brine in a shallow pot. Add pork and onion. Add anchovy stock and chili padi and bring the soup to a boil. Cover and cook for 10 minutes over medium high heat."
          + "\n3.  Open and mix in the seasonings with a spoon. Lay the tofu over top. Cover and cook another 5 to 10 minutes over medium heat."
          + "\n4.  Add glass noodles and let the stew simmer for about 5 minutes. Garnish with scallions and serve hot.",
    CookingTime: '50',
    //ItemPrice: (8).toFixed(2),
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'kimchi', value: 'kimchi', price: '1.5' },
          { id: 'anchovy', value: 'anchovy', price: '1.8' },
          { id: 'glass noodles', value: 'glass noodles', price: '0.8' },
          { id: 'tofu', value: 'tofu', price: '0.5' },
          { id: 'pork', value: 'pork', price: '2.5' },
          { id: 'onion', value: 'onion', price: '0.5' },
          { id: 'dried kelp', value: 'dried kelp', price: '0.8' },
          { id: 'radish', value: 'radish', price: '0.8' },
          { id: 'chili padi', value: 'chili padi', price: '0.3'},
          { id: 'scallions', value: 'scallions', price: '0.2'},
        ],
      },
    ],
  },
  {
    id: 'tempuraprawnsoba',
    ItemImg: Temmpuraprawnsoba ,
    ItemName: 'Tempura Prawn Soba',
    ItemDescription:
      'Cold buckweed noodles with deep fried prawn',
    Recipe: "1.  To make the sauce, add ¼ cup sake to a medium saucepan and bring it to a boil over medium-high heat. Let the alcohol evaporate for a few seconds. Add ½ cup soy sauce and ½ cup mirin. Add 1 piece of dried kelp and 1 cup dried bonito flakes. Bring it to a boil and simmer on low heat for 5 minutes. Turn off the heat and let it cool completely. Strain the residue."
          + "\n2.  Boil water in a medium pot. Add dried buckwheat noodles to the boiling water, distributing them around the pot in a circular pattern to separate the noodles from each other. Stir the noodles occasionally so they do not stick to each other."
          + "\n3.  Drain the soba noodles in a sieve and rinse them under cold running water with your hands to get rid of the excess starch and prevent them from sticking to each other. Then, transfer the noodles to a large bowl of iced water. Chill the noodles for 30 seconds, drain well, and set aside."
          + "\n4.  To prepare the prawns, remove prawns head and take out shell by cutting it with a scissor, only keep its tail portion intact. Then make a slit with a knife along its back where the vein is going through and take the vein out. Next, make 5-6 slits on the inner side of each prawn with the help of a knife, and press it down with the flat portion of the knife to break all of its veins which will help to keep the prawns straight while frying."
          + "\n5.  Mix tempura flour with beaten eggs and ice. Dry the wet prawns on the kitchen towel or paper towel gently before coating it with the mixture."
          + "\n6.  Put the prawn into the hot oil and shake each prawn in the oil for 5 to 6 secs by holding its tail. Then leave its tail in the oil too. Let it fry for few seconds then turn it to get the other side done. Take the shrimp out of the pan once it turns into a nice golden colour. Leave excess oil to drip."
          + "\n7.  Serve the cold soba noodles with the cold dipping sauce and prawn tempura on the side.",
    //ItemPrice: (8).toFixed(2),
    CookingTime: '25',
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'buckweed noodles', value: 'buckweed noodles', price: '1.0' },
          { id: 'oil', value: 'oil', price: '2.0'},
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
          { id: 'prawn', value: 'prawn', price: '2.5' },
          { id: 'mirin', value: 'mirin', price: '1.8' },
          { id: 'sake', value: 'sake', price: '3.5' },
          { id: 'dried kelp', value: 'dried kelp', price: '0.8' },
          { id: 'tempura flour', value: 'tempura flour', price: '0.8' },
          { id: 'bonito flakes', value: 'bonito flakes', price: '1.5' },
          { id: 'egg', value: 'egg', price: '1.0' },
        ],
      },
    ],
  },
  {
    id: 'congyoubing',
    ItemImg: Congyoubing ,
    ItemName: 'Cong You Bing',
    ItemDescription:
      'Fried scallion pancakes chinese style',
    Recipe: "1.  In a bowl, stir and mix flour and hot water with chopsticks until there is no more loose flour. Then combine by hand to form a rough-looking dough. Cover the dough tightly with a piece of cling film. This is to prevent the moisture from evaporating since it is a warm dough. Leave to rest for 15 minutes."
          + "\n2.  While waiting for the dough to rest, prepare the filling ingredients. Chop scallions into fine pieces. In a small bowl, mix oil with a little flour, five spice powder, cumin and szechuan pepper to make the filling mixture."
          + "\n3.  With a rolling pin, press the dough, then gently push it in all directions to flatten it into a thin rectangle piece. Use the back of a spoon or a brush to evenly spread the filling mixture over the dough. Sprinkle the chopped scallions on top."
          + "\n4.  From the shorter side of the dough, loosely roll the dough into a rope. Then cut it into sections. Stand up one piece with the cut side facing up. Press with your fingers then roll it flat with the rolling pin."
          + "\n5.  Pan fry the pancakes, by heating oil in a frying pan/skillet over high heat until hot. Put in the pancake, and adjust to medium-high heat. Then cover the pan with a tight lid."
          + "\n6.  When the first side becomes golden brown, flip over to cook the other side. Remember to always keep the cover on to prevent the pancakes from losing moisture. Pancakes are done if both sides reaches even golden brown consistency. Serve immediately.",
    CookingTime: '25',
    //ItemPrice: (8).toFixed(2),
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'flour', value: 'flour', price: '1.2'},
          { id: 'scallions', value: 'scallions', price: '0.2' },
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
          { id: 'five spice powder', value: 'five spice powder', price: '1.0' },
          { id: 'cumin', value: 'cumin', price: '0.8' },
          { id: 'oil', value: 'oil', price: '2.0'},
          { id: 'szechuan pepper', value: 'szechuan pepper', price: '1.0' },
        ],
      },
    ],
  },
  
] 