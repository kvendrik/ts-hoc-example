import * as React from 'react';
import compose from '@shopify/react-compose';
import withTracking, {WithTrackingProps} from '../../utilities/withTracking';

interface Product {
  id: number;
  title: string;
}

interface Props {
  products: Product[];
}

type ComposedProps = Props & WithTrackingProps;

function ProductIndex({products, componentId, trackingId}: ComposedProps) {
  const productNodes = products.map(({id, title}: Product) => (
    <div key={id}>
      {id}: {title}
    </div>
  ));
  return (
    <div>
      TrackingID: {trackingId}. ComponentID: {componentId}. Product Index
      {productNodes}
    </div>
  );
}

// when you have multiple of these HOCs
// you're gonna wanna use "compose" which
// can combine all the HOC you need for a component

// with a single HOC
// export default withTracking<Props>({
//   id: 'super-cool-component',
// })(ProductIndex);

// when you have multiple, use compose!
// this combines them 🎉
export default compose(
  withTracking<Props>({
    id: 'super-cool-component',
  }),
)(ProductIndex);
