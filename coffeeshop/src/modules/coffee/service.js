import { HttpClient } from '../httpClient/index'

class CoffeeService extends HttpClient {
    constructor() {
        super('https://isko88.github.io')
    }

    getCoffee() {
        return this.get('coffee.json')
    }
}
export const coffeeService = new CoffeeService();