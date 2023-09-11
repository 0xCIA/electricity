import Badge from 'react-bootstrap/Badge';
import { NOW_TIMESTAMP, LOW_PRICE_ELECTRO } from '../constants';
import { useSelector } from 'react-redux';

function PriceInfo() {
  const electricityPrice = useSelector((state) => state.electricityPrice);
  
  
  const current = electricityPrice?.ee.find(item => item.timestamp === NOW_TIMESTAMP);
  

  return (
    <>
    <h3>Price is:</h3>
    <div className="m-50">
    {current?.price < LOW_PRICE_ELECTRO ? 
    <Badge bg="success" className="p-2 w-25 mb-2">Low</Badge> :
    <Badge bg="danger" className="p-2 w-25 mb-2">High</Badge>}
    </div>
    </>
  )
}

export default PriceInfo;

