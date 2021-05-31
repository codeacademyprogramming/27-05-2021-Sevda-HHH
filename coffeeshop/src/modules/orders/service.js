class OrderService {
    async getOrder() {
        let orders = JSON.parse(localStorage.getItem("orders"))
        if (orders) {
            return await orders
        } else {
            return await null
        }
    }
}

export const orderService = new OrderService();