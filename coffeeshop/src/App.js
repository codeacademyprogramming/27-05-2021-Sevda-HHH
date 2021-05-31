import * as React from 'react'
import './App.scss';
import { useDispatch } from 'react-redux'
import { getCoffee } from '../src/modules/coffee/actions/index'
import { CoffeePage } from './modules/coffee/components/index'
import { getOrders } from './modules/orders/actions';

function App() {

  localStorage.setItem("orders", "alksn")
  const dispatch = useDispatch()
  React.useEffect(() => {
    getCoffee(dispatch)
    getOrders(dispatch)

  }, [dispatch])

  return (
    <CoffeePage />
  );
}

export default App;
