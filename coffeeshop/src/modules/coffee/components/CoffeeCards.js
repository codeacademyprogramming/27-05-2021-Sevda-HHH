import React from 'react'

export function CoffeeCards({ coffee }) {
    const newData = coffee.data
    console.log(newData)
    const handleAddOrder = (id) => {
        console.log(id)
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {coffee.data.map(product => {
                        return <div class="card mt-4 mx-1 col-lg-3 col-md-6 " >
                            <img src={product.img} class="card-img-top p-1" height="250vh" alt="Coffee" />
                            <div class="card-body row">
                                <div className="d-flex justify-content-between">
                                    <h5 class="card-title">{product.name}</h5>
                                    <div class="card-title"><b>{product.price} AZN </b></div>
                                </div>
                                <ul class="card-text list-unstyled">{product.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
                                <a href="#" onClick={() => handleAddOrder(product.id)} class="btn btn-light">Order </a>
                            </div>
                        </div>
                    })}

                </div>
            </div>

        </>
    )
}

