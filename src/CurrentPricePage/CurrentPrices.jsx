import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NOW_TIMESTAMP } from '../constants'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CurrentPrices() {
  const electricityPrice = useSelector((state) => state.electricityPrice)
  const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
  const [currentPrice, setCurrentPrice] = useState(0)

  useEffect(() => {
    if (!electricityPrice) {
      return
    }
    const current = electricityPrice.ee.find(item => item.timestamp === NOW_TIMESTAMP)
    setCurrentPrice(current?.price || 0)
  }, [electricityPrice])

  return (
    <div className='d-flex flex-column justify-content-center m-5 gap-5 align-items-center'>
      <div className='d-flex gap-5'>
        <div>
          <h4 className=''>Electricity</h4>
          <h3>{currentPrice}€<br/>MW/h</h3>

        </div>
        <div>
          <h4 className=''>Gas</h4>
          <h3>{parseFloat(gasCurrentPrice).toFixed(2)}€<br/>MW/h</h3>
        </div>
      </div>
      <div>
        <Link to={'/currentprice/km'}>
          <Button className='btn btn-dark'>Add Tax</Button>
        </Link>
      </div>
    </div>

  )
}

export default CurrentPrices;