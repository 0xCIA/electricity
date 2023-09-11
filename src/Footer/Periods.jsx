import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { PERIODS } from '../constants'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPeriod } from '../services/stateService';


function Periods({ setShowSideBar }) {
  
  const dispatch = useDispatch();
  const selectedPeriod = useSelector((state) => state.selectedPeriod);
  const activeEnergy = useSelector((state) => state.activeEnergy);


  return (
<>
    <Container className="text-center my-5">
      {PERIODS.map(({ label, value }) =>
        <Button
          className="mx-1"
          key={value}
          variant="outline-dark"
          active={selectedPeriod === value}
          onClick={() => dispatch(setSelectedPeriod(value))}
        >
         {value} {label[activeEnergy]}
        </Button> 
      )}
      <Button
        className="mx-3"
        variant="primary"
        onClick={() => dispatch(setShowSideBar(true))}
      >Custom</Button>
    </Container>
    </>
  )
}

export default Periods;