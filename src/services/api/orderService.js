import { orders } from '@/services/mockData/orders.json'

class OrderService {
  async create(orderData) {
    await this.delay(400)
    
    const newOrder = {
      Id: Math.max(...orders.map(o => o.Id), 0) + 1,
      ...orderData,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    }
    
    orders.push(newOrder)
    return { ...newOrder }
  }

  async getById(id) {
    await this.delay(200)
    const order = orders.find(o => o.Id === parseInt(id))
    if (!order) {
      throw new Error('Order not found')
    }
    return { ...order }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export default new OrderService()