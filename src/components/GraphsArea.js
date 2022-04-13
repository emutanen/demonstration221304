import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const GraphsArea = () => {
  return (
    <div className='ui segment'>
      <Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>
        <SparklinesLine color='blue' />
      </Sparklines>
    </div>
  );
};

export default GraphsArea;
