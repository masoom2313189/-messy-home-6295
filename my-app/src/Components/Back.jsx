import React from 'react';
import { IoIosArrowUp } from "react-icons/io";

const Back = () => {
  return (
    <div className="Back">
    <button><IoIosArrowUp /> BACK TO TOP</button>
    <div>
        <h1>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h1>
        <input placeholder='Enter your email address' />
        <button>SUBSCRIBE</button>
    </div>
    </div>
  )
}

export default Back;
