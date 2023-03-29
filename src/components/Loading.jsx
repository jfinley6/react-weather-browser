import React from 'react'
import { SpinnerCircularFixed } from "spinners-react";

function Loading() {
  return (
    <div className='w-full flex justify-center mt-4'>
      <SpinnerCircularFixed
        size={100}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </div>
  );
}

export default Loading