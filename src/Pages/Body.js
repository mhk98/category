import React from 'react';
import cbanner from '../images/cbanner.png'

const Body = () => {
    return (
        <div>
            <div class="carousel max-w-2xl max-h-md mx-auto">
  <div id="item1" class="carousel-item w-full">
    <img src={cbanner} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={cbanner} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={cbanner} class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src={cbanner} class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs"></a> 
  <a href="#item2" class="btn btn-xs"></a> 
  <a href="#item3" class="btn btn-xs"></a> 
  <a href="#item4" class="btn btn-xs"></a>
</div>
        </div>
    );
};

export default Body;