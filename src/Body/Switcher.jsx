import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { ELECTRO, GAS } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveEnergy } from '../services/stateService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Switcher() {
  const dispatch = useDispatch();
  const activeEnergy = useSelector((state) => state.activeEnergy);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname.includes('gas')) {
      dispatch(setActiveEnergy(GAS));
    } else {
      dispatch(setActiveEnergy(ELECTRO));
    }
  }, [pathname, dispatch]);

  return (
    <ButtonGroup size="sm" className="d-flex align-items-end">
      <Button
        className='text-capitalize'
        variant="outline-dark"
        onClick={() => navigate('/electro')}
        // onClick={() => dispatch(setActiveEnergy(ELECTRO))}
        active={activeEnergy === ELECTRO}>{ELECTRO}</Button>

      <Button
        className='text-capitalize'
        variant="outline-dark"
        onClick={() => navigate('/gas')}
        // onClick={() => dispatch(setActiveEnergy(GAS))}
        active={activeEnergy === GAS}>{GAS}</Button>
    </ButtonGroup>
  )
}

export default Switcher;