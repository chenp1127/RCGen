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
    ItemDescription: 'Thick crusted pizza with 2 types of cheese',
    Recipe: '1: Move oven rack to lowest position. Heat oven to 450°. Grease 12-inch pizza pan. Stir baking mix and water until soft dough forms. 2: Pat dough in pizza pan, using fingers dipped in baking mix; pinch edge, forming 1/2-inch rim. Spread pizza sauce over crust. Sprinkle with cheese. 3: Bake 12 to 15 minutes or until crust is brown and cheese is bubbly.',
    Category: 'Western',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'pizza dough', value: 'pizza dough', price: '2.0' },
          { id: 'pizza sauce', value: 'pizza sauce', price: '1.0' },
          { id: 'mozerella cheese', value: 'mozerella cheese', price: '1.8' },
          { id: 'provolone cheese', value: 'provolone cheese', price: '2.5' },
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
    Recipe: "1: Melt the butter in a large pan over medium-high heat, then add the chicken breasts. Season with the salt, pepper, oregano, and basil. Cook 8-10 minutes, or until the chicken is fully cooked. Remove the chicken from the pan and set aside. \n2: Make the sauce: In the same pan over medium heat, melt the butter, then add the garlic. Cook until the garlic begins to soften. Stir in half of the flour at a time until incorporated. Gradually pour in the milk, stirring between additions, and cook until fully incorporated and the sauce begins to thicken. Season with the salt, pepper, oregano, and basil. Add the Parmesan cheese and stir until melted. \n3: In a large bowl, pour the sauce over cooked penne pasta, then add the chicken and toss well to combine. Add the parsley and Parmesan and toss again.",
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
    ItemPrice: (9).toFixed(2),
    Category: 'Western',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'romaine lettuce', value: 'romaine lettuce', price: '1.0' },
          { id: 'croutons', value: 'croutons', price: '0.8' },
          { id: 'caesar sauce', value: 'caesar sauce', price: '1.8' },
          { id: 'parmesan cheese', value: 'parmesan cheese', price: '1.5' },
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
    ItemPrice: (8).toFixed(2),
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
    ItemPrice: (8).toFixed(2),
    Category: 'Local',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'pork', value: 'pork', price: '2.5' },
          { id: 'tomato sauce', value: 'tomato sauce', price: '1.0' },
          { id: 'pineapple', value: 'pineapple', price: '0.5' },
          { id: 'cucumber', value: 'cucumber', price: '0.5' },
        ],
      },
    ],
  },
  
  {
    id: 'charkwayteow',
    ItemImg: Charkwayteow,
    ItemName: 'Char Kway Teow',
    ItemDescription:
      'Fried thick noodles local style',
    ItemPrice: (8).toFixed(2),
    Category: 'Local',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'kway teow', value: 'kway teow', price: '1.0' },
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
          { id: 'beansprouts', value: 'beansprouts', price: '0.8' },
          { id: 'prawn', value: 'prawn', price: '2.5' },
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
      'Indian basmati rice with braised mutton',
    ItemPrice: (8).toFixed(2),
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'basmati rice', value: 'basmati rice', price: '1.0' },
          { id: 'mutton', value: 'mutton', price: '2.0' },
          { id: 'indian spices', value: 'indian spices', price: '1.8' },
          { id: 'onion', value: 'onion', price: '0.5' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'white rice', value: 'white rice', price: '1.0' },
          { id: 'coconut milk', value: 'coconut milk', price: '0.8' },
          { id: 'sambal sauce', value: 'sambal sauce', price: '1.2' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Indian-muslim',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'maggi noodles', value: 'maggi noodles', price: '0.8' },
          { id: 'bok choy', value: 'bok choy', price: '0.5' },
          { id: 'egg', value: 'egg', price: '1.2' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Mediterranean',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'chicken', value: 'chicken', price: '2.0' },
          { id: 'pita bread', value: 'pita bread', price: '1.5' },
          { id: 'greek yoghurt', value: 'greek yoghurt', price: '1.8' },
          { id: 'olives', value: 'olives', price: '0.8' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Mediterranean',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'beef cubes', value: 'beef cubes', price: '2.5' },
          { id: 'capsicum', value: 'capsicum', price: '0.5' },
          { id: 'onion', value: 'onion', price: '0.5' },
          { id: 'barbecue sauce', value: 'barbecue sauce', price: '1.8' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'kimchi', value: 'kimchi', price: '1.5' },
          { id: 'tofu', value: 'tofu', price: '0.5' },
          { id: 'onion', value: 'onion', price: '0.5' },
          { id: 'glass noodles', value: 'glass noodles', price: '0.8' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'buckweed noodles', value: 'buckweed noodles', price: '1.0' },
          { id: 'prawn', value: 'prawn', price: '2.5' },
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
          { id: 'tempura batter', value: 'tempura batter', price: '0.8' },
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
    ItemPrice: (8).toFixed(2),
    Category: 'Asian',
    attributes: [
      {
        id: 'ingredients',
        name: 'ingredients',
        attributeOptions: [
          { id: 'dumpling wrappers', value: 'dumpling wrappers', price: '1.0' },
          { id: 'scallions', value: 'scallions', price: '0.8' },
          { id: 'soy sauce', value: 'soy sauce', price: '2.0' },
        ],
      },
    ],
  },
  
] 