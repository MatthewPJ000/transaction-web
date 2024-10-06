import React, { useState } from 'react';
import './ModalExample.css'; // Import your custom CSS

const ModalExample = () => {
 

  return (
    <div>
     
      {/* Button to Open the Modal */}
      <button className="btn btn-primary">
        Connect
      </button>
      <button className="btn btn-primary" >
        Deposit
      </button>
      <button className="btn btn-primary">
        Withdraw
      </button>

    </div>
  );
};

export default ModalExample;