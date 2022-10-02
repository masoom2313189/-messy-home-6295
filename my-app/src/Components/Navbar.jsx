import React from 'react';
import "./style.css";
import { IoLocationOutline } from 'react-icons/io5';
import { TbBookDownload } from 'react-icons/tb';
import { AiFillStar} from 'react-icons/ai';
import { RiLuggageCartFill } from 'react-icons/ri';
import { MdLoyalty } from 'react-icons/md';
import { FiSearch, FiHeart } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
    <div className='Top'>
    <img src='https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png' />
    <a style={{color:"gray"}}>|</a>
    <a><IoLocationOutline style={{color:"#f3428e"}} /> Store Locator</a>
    <a><AiFillStar style={{color:"purple"}} /><AiFillStar style={{color:"orange"}} /><AiFillStar style={{color:"#f3428e"}} /></a>
    <a style={{width:"30%"}}>Get 10% OFF on your first purchase. Use Code: BEAUTY10</a>
    <a><AiFillStar style={{color:"#f3428e"}} /><AiFillStar style={{color:"orange"}} /><AiFillStar style={{color:"purple"}} /></a>
    <a><TbBookDownload style={{color:"#f3428e"}}/> Get APP</a>
    <a style={{color:"gray"}}>|</a>
    <a><RiLuggageCartFill style={{color:"#f3428e"}}/> Track Order</a>
    <a style={{color:"gray"}}>|</a>
    <a><MdLoyalty style={{color:"#f3428e"}}/> Loyalty</a>
    </div>
    <div className='logo'>
    <div>
      <FiSearch style={{color: "#f3428e"}}/>
      <input placeholder='Search SEPHORA'/>
    </div>
    <div>
        <img src='https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png'/>
    </div>
    <div>
      <a><FiHeart style={{color: "#f3428e"}}/></a>
      <a style={{color:"gray"}}>|</a>
      <a><BsHandbag style={{color: "#f3428e"}}/></a>
      <a style={{color:"gray"}}>|</a>
      <a href='#'><FaRegUser style={{color: "#f3428e"}} /> Login</a>
    </div>
    </div>
    </div>
  )
}

export default Navbar;