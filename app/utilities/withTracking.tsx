import * as React from 'react';

export interface WithTrackingProps {
  componentId: string;
  trackingId: string;
}

interface Settings {
  id: string;
}

function withTracking<ComponentProps>(settings: Settings) {
  // we do a bunch of stuff to make tracking work here
  // this HOC add a trackingId that we can use for whatever in our fake app

  // in here we have the settings and can start confiuring everything

  function addWithTracking(WrappedComponent: React.SFC<any>) {
    // in here we get the component and can do anything else
    // we need to do before we create out wrapper component
    return (props: ComponentProps) => (
      <WrappedComponent trackingId="123" componentId={settings.id} {...props} />
    );
  }

  return addWithTracking;
}

export default withTracking;
