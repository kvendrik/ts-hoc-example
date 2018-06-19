import * as React from 'react';
import {render} from 'react-dom';

import ProductIndex from './components/ProductIndex';

const products = [
  {
    id: 1,
    title: 'Fruit',
  },
  {
    id: 2,
    title: 'Car',
  },
];

render(<ProductIndex products={products} />, document.getElementById('app'));
