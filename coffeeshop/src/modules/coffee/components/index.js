import * as React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './NavBar'
import { CoffeeCards } from './CoffeeCards'

export function CoffeePage() {
    const coffeeState = useSelector(state => state.coffee)
    console.log(coffeeState)
    return (
        <>
            <NavBar></NavBar>
            <CoffeeCards coffee={coffeeState}></CoffeeCards>
        </>
    )
}


