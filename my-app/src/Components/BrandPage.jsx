import React from 'react';
import "./style.css";


const BrandPage = () => {
  return (
    <div className='BrandPage'>
    <div>
        <button>Steals & Deals</button>
        <button>Beauty Minis Under ₹999</button>
        <button>Everyday Essentails</button>
        <button>Tranding Now</button>
        <button>Editor's Picks</button>
        <button>Top Fragrances</button>
    </div>
    <div>
        <a href="#"><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/SephoraBrandoftheweektext3310x240(1).jpg' alt='Error'/></a>
        <a href='#'><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweekdesktop.jpg' alt='Error'/></a>
    </div>
    <div>
        <div>
            <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileEye.jpg' /></a>
            <p>EYES</p>
        </div>
        <div>
            <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileLips.jpg' /></a>
            <p>LIPS</p>
        </div>
        <div>
            <a><img src='https://logan.nnnow.com/content/dam/nnnow-project/22-sep-2022/MAC_Brandoftheweek_TileFace.jpg' /></a>
            <p>FACE</p>
        </div>
    </div>
    </div>
  )
}

export default BrandPage;
