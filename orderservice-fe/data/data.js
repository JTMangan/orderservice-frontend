let hostname = "http://orderservice-production-9c58.up.railway.app";

let findAllOrders = () => {
 return fetch(hostname + '/orders')
        .then(x => x.json());
};

let saveOrder = (order) => {
    return fetch(hostname + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            total: order.total,
            shippingAddress: {
                state: order.shippingState,
                city: order.shippingCity,
                postalCode: order.shippingPostalCode
            },
            items: [{
                name: order.name,
                quantity: order.quantity,
                price: order.price
            }],
            payment: {
                method: order.method,
                number: order.number,
                billingAddress: {
                    state: order.billingState,
                    city: order.billingCity,
                    postalCode: order.billingPostalCode
                }
            }
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;