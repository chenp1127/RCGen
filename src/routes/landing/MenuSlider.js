import React from 'react'
import { motion } from "framer-motion";
import MenuSliderProducts from './MenuSliderProducts'
import MenuSliderCategories from './MenuSliderCategories'
import Homecook from '../../assets/images/homecook.jpeg'
import { menuSliderCategories, menuSliderProducts } from '../../data/menuSliderContent';
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'


export default class MenuSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      activeCategory: 'western',
      allProducts: [],
      allCategories: [],
    }
    this.getAllProducts = this.getAllProducts.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.getProductsByCategory = this.getProductsByCategory.bind(this)
  }
  allCategoriesData = new Promise((resolve, reject) => {
    if (true) {
      resolve(menuSliderCategories)
      return
    }
    reject('error, check the code!')
  })
  allProductsData = new Promise((resolve, reject) => {
    if (true) {
      resolve(menuSliderProducts)
      return
    }
    reject('error, check the code!')
  })
  getCategories() {
    try {
      const result = this.allCategoriesData
      this.setState({ allCategories: result })
    } catch (error) {
      console.log(error)
    }
  }
  getAllProducts() {
    try {
      const result = this.allProductsData
      this.setState({ allProducts: result })
      // this.setState({activeCategory: "pizza"})
    } catch (error) {
      console.log(error)
    }
  }
  changeCategory(newCategory) {
    this.setState({ activeCategory: newCategory })
    this.getProductsByCategory(newCategory)
  }
  getProductsByCategory(category) {
    let separateCategoriesByname = []
    //Separate arrays by category names

    const separateCategories = menuSliderProducts.reduce(function (
      singleCategory,
      singleItem,
    ) {
      separateCategoriesByname = Object.keys(singleCategory)

      if (!singleCategory[singleItem.category])
        singleCategory[singleItem.category] = singleItem
      else
        singleCategory[singleItem.category] = Array.isArray(
          singleCategory[singleItem.category],
        )
          ? singleCategory[singleItem.category].concat(singleItem)
          : [singleCategory[singleItem.category]].concat(singleItem)

      return singleCategory
    },
      {})

    const productsOfCategories = Object.keys(separateCategories).map(
      (e) => separateCategories[e],
    )

    let singleCategoryArray = []
    productsOfCategories.map((category) => {
      return singleCategoryArray.push(category)
    })

    //Change products by category
    separateCategoriesByname.forEach((cate) => {
      if (cate === category) {
        return this.setState({ allProducts: separateCategories[category] })
      }
    })
  }
  componentDidMount() {
    this.getAllProducts()
    this.getProductsByCategory(this.state.activeCategory)
  }

  render() {
    const { allProducts } = this.state
    return (
      <article className="section-8">
        <motion.div
          className="section-8"
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 300 }}
          transition={{ duration: 2 }}
        >
          <img
            className="menu-slider-hero"
            src={Homecook}
            alt={'Home Cook'}
          />
          <section className="dish-slider  flex-container flex-column txt-center">
            <section className="dish-categories flex-container flex-column">
              <ul>
                {menuSliderCategories.map((category) => (
                  <MenuSliderCategories
                    key={category.id}
                    category={category}
                    changeCategory={this.changeCategory}
                  />
                ))}
              </ul>
            </section>
            <section className="menu-slider-products">
              {allProducts.map((singleProduct) => {
                return (
                  <MenuSliderProducts
                    key={singleProduct.id}
                    singleProduct={singleProduct}
                  />
                )
              })}
              <Link
              onClick={ResetLocation}
              to="/menu"
              className="active-button-style txt-white"
              >
                More Recipes
              </Link>
            </section>
            
          </section>
          
        </motion.div>
        
      </article>
    )
  }
}
