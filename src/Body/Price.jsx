import { useEffect, useState } from 'react';
import { NOW_TIMESTAMP, ELECTRO } from '../constants';
import { useSelector } from 'react-redux';


function Price() {
  const electricityPrice = useSelector((state) => state.electricityPrice)
  const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
  const activeEnergy = useSelector((state) => state.activeEnergy);

  const [currentPrice, setCurrentPrice] = useState(0);
  
  useEffect(() => {
    if (!electricityPrice) return;

    const current = electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP);
    setCurrentPrice(current?.price || 0);
  }, [electricityPrice])

  return (
    <>
    {/* <h2>{currentPrice}€</h2> */}
    <h2>{activeEnergy === ELECTRO ? currentPrice : parseFloat(gasCurrentPrice).toFixed(2)}€</h2>
    <div>MW/h</div>
    </>
  )
}

export default Price;