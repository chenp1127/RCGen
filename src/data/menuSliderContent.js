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


const menuSliderCategories = [
    {
        name: 'western',
        id: 'western',
    },
    {
        name: 'local',
        id: 'local',
    },
    {
        name: 'indian-muslim',
        id: 'indian-muslim',
    },
]
const menuSliderProducts = [
    {
        id: 'cheese-pizza',
        ItemImg: Cheesepizza,
        ItemName: 'Cheese Pizza',
        ItemDescription: 'Thick crusted pizza with 3 types of cheese',
        category: 'western',
    },
    {
        id: 'chickenalfredopasta',
        ItemImg: Chickenalfredopasta,
        ItemName: 'Chicken Alfredo Pasta',
        ItemDescription: 'Cream based chicken linguine with herbs',
        category: 'western',
    },
    {
        id: 'caesarsalad',
        ItemImg: Caesarsalad,
        ItemName: 'Caesar Salad',
        ItemDescription: 'Green salad served with croutons and parmesan',
        category: 'western',
    },
    {
        id: 'fishbeehoonsoup',
        ItemImg: Fishbeehoonsoup,
        ItemName: 'Fish Bee Hoon Soup',
        ItemDescription: 'Sliced fish cooked in warm soup with thin rice noodles',
        category: 'local',
    },

    {
        id: 'sweetandsourpork',
        ItemImg: Sweetandsourpork,
        ItemName: 'Sweet and Sour Pork',
        ItemDescription: 'Fried pork cubes glazed with tangy tomato based sauce',
        category: 'local',
    },
    {
        id: 'charkwayteow',
        ItemImg: Charkwayteow,
        ItemName: 'Char Kway Teow',
        ItemDescription: 'Fried thick noodles in dark sauce with prawns and crunchy beansprouts',
        category: 'local',
    },
    {
        id: 'muttonbiryani',
        ItemImg: Muttonbiryani,
        ItemName: 'Mutton Biryani',
        ItemDescription: 'Indian basmati rice in fragrant herbs paired with braised mutton',
        category: 'indian-muslim',
    },
    {
        id: 'nasiayambakar',
        ItemImg: Nasiayambakar,
        ItemName: 'Nasi Ayam Bakar',
        ItemDescription: 'Grilled chicken with coconut rice and sweet chili sauce',
        category: 'indian-muslim',
    },
    {
        id: 'maggigoreng',
        ItemImg: Maggigoreng ,
        ItemName: 'Maggi Goreng',
        ItemDescription: 'Fried springy noodles with bok choy and chicken',
        category: 'indian-muslim',
    },
]

export { menuSliderProducts, menuSliderCategories };