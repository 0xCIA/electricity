import moment from 'moment';

export const ELECTRO = 'electricity';
export const GAS = 'gas';
export const CHART = 'chart';
export const TABLE = 'table';
export const NOW_TIMESTAMP = moment().startOf('hour').unix()
export const LOW_PRICE_ELECTRO = 120 ;
const label = { 
  [ELECTRO]: 'days',
  [GAS]: 'months',
};
export const PERIODS = [
  {
    label,
    value: 1,
  },
  {
    label,
    value: 2,
  },
  // {,,,
  //   label: '3d',
  //   value: 3,
  // },
  // {
  //   label: '4d',
  //   value: 4,
  // },
  // {
  //   label: '6d',
  //   value: 6,
  // },
  // {
  //   label: '8d',
  //   value: 8
  // }
]