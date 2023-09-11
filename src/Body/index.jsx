import Header from './Header'
import Chart from './Chart'
import DataTable from './DataTable';
import { CHART } from '../constants'
import { useSelector } from 'react-redux';
import './body.scss'



 
function Body() {

  const dataType = useSelector((state) => state.dataType);
// const activeEnergy = useSelector((state) => state.activeEnergy);
// const gasPrice = useSelector((state) => state.gasPrice);
// const gasCurrentPrice = useSelector((state) => state.gasCurrentPrice);
  
   
  // useEffect(() => {
  //  getElectricityPrice({selectedPeriod}).then(data => {
  //   console.log('electro', data);
  //   if (!data.success) {
  //     throw data.messages[0]
  //   }
  //   dispatch(setElectricityPrice(data.data));
  //  })
  //  .catch((error) => dispatch(setErrorMessage(error)));


  //  getGasPrice({ selectedPeriod }).then(data => { 
  //   console.log('gas', data)
  //   if (!data.success) {
  //     throw data.messages[0];
  //   }
  //   dispatch(setGasPrice(data.data));
  //  })
  //  .catch((error) => dispatch(setErrorMessage(error)));
  // }, [dispatch, selectedPeriod])

  // useEffect(() => {
  //   getCurrentGasPrice().then(data => {
  //     console.log('gas', data);
  //     if (!data.success) {
  //       throw data.messages[0];
  //     }
  //     dispatch(setGasCurrentPrice(data.data[0].price));
  //   })
  //   .catch((error) => dispatch(setErrorMessage(error)));
  // }, [dispatch]);


  return (
    <>
      <Header

        />
        {dataType === CHART ? <Chart /> : <DataTable /> }
    </>
  )
};
export default Body