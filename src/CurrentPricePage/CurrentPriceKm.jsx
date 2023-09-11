import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NOW_TIMESTAMP } from '../constants'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function CurrentPriceKm() {
  const electricityPrice = useSelector((state) => state.electricityPrice)
  const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
  const [currentElectricity, setCurrentElectricity] = useState(null)

  useEffect(() => {
    if (!electricityPrice) {
      return
    }
    const current = electricityPrice.ee.find((item) => item.timestamp === NOW_TIMESTAMP)
    setCurrentElectricity(current?.price || null)
  }, [electricityPrice])
  return (
    <div className='d-flex flex-column justify-content-center m-5 gap-5 align-items-center'>
      <div className='d-flex gap-5'>
        <div>
          <h4 className=''>Electricity</h4>
          {/* <h3>{currentElectricity * 1.2 }€<br/>MW/h</h3> */}
          <h3>{parseFloat(currentElectricity).toFixed(1) * 1.2}€<br/>MW/h</h3>

        </div>
        <div>
          <h4 className=''>Gas</h4>
          <h3>{parseFloat(gasCurrentPrice).toFixed(2) * 1.2}€<br/>MW/h</h3>
        </div>
      </div>
      <div>
        <Link to={'/currentprice'}>
          <Button className='btn btn-dark'>Delete Tax</Button>
        </Link>
      </div>
    </div>

  )
}

export default CurrentPriceKm;