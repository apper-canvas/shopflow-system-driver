import { products } from '@/services/mockData/products.json'

class ProductService {
  async getAll() {
    await this.delay(300)
    return [...products]
  }

  async getById(id) {
    await this.delay(200)
    const product = products.find(p => p.Id === parseInt(id))
    if (!product) {
      throw new Error('Product not found')
    }
    return { ...product }
  }

  async getByCategory(category) {
    await this.delay(300)
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase())
  }

  async getFeatured() {
    await this.delay(250)
    return products.filter(p => p.featured).slice(0, 8)
  }

  async getTrending() {
    await this.delay(250)
    return products.filter(p => p.rating >= 4.5).slice(0, 6)
  }

  async search(query) {
    await this.delay(200)
    const searchTerm = query.toLowerCase()
    return products.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    )
  }

  async getCategories() {
    await this.delay(150)
    const categories = [...new Set(products.map(p => p.category))]
    return categories
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export default new ProductService()