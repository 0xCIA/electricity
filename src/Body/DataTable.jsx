import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import { NOW_TIMESTAMP, ELECTRO, GAS } from '../constants';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';



function DataTable() {
  const electricityPrice = useSelector((state) => state.electricityPrice)
  const activeEnergy = useSelector((state) => state.activeEnergy);
  const gasPrice = useSelector((state) => state.gasPrice)
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (!electricityPrice || !gasPrice) return;

    const energy = {
      [ELECTRO]: {
        data: electricityPrice,
        format: 'HH',
        main: 'ee',
      },
      [GAS]: {
        data: gasPrice,
        format: 'DD ',
        main: 'common',
      }
    };
    
    const mainData = energy[activeEnergy].data;
    const main = energy[activeEnergy].main
    const data = mainData[main]
    // const data = energy[activeEnergy].data[energy[activeEnergy].main]
    .map((_, index) => {
      return {
        ee: energy[activeEnergy].data.ee[index],
        lv: energy[activeEnergy].data.lv[index],
        fi: energy[activeEnergy].data.fi[index],
        lt: energy[activeEnergy].data.lt[index],
        date: mainData[main][index]
      }
    });
    setTableData(data);
  }, [electricityPrice, gasPrice, activeEnergy])

  // const rowIndex = tableData.findIndex(({ ee }) => moment.unix(ee.timestamp).format('DD HH') === NOW_TIMESTAMP)
  return ( 
    <Container className='priceTable'>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Estonia</th>
          <th>Finland</th>
          <th>Latvia</th>
          <th>Lithuania</th>
        </tr>
      </thead>
      <tbody>
        
        {tableData.map(({ee, lv, fi, lt, date}, index) =>
        <tr key={index} className={NOW_TIMESTAMP === ee?.timestamp ? "active-row" : ''}>
          <td>{index}</td>
          <td>{moment.unix(date.timestamp).format('DD.MM.YYYY HH:mm')}</td>
          <td>{ee?.price}</td>
          <td>{fi?.price}</td>
          <td>{lv?.price}</td>
          <td>{lt?.price}</td>
        </tr>
        
        )}
      </tbody>
    </Table>
    </Container>
  );
}


export default DataTable;