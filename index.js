function distanceFromHqInBlocks (blocksNo) {
  if (blocksNo>42) 
  {
    return blocksNo-42
       } else 
  
  {
    return 42-blocksNo
  }
    }

function distanceFromHqInFeet (blocksNo) {
  //we call here the first function to pass the blocksNo and *264
  return distanceFromHqInBlocks(blocksNo)*264;
}
//here we calculate distance uptown/downtown, not from river to river.
function distanceTravelledInFeet (fromPickup,toHq) {
  if (fromPickup< toHq)
  {
    return (toHq- fromPickup )*264;
  } else
  {
    return (fromPickup  -toHq)*264;
  }
}
//distance 400 and 2000 feet price is 2 cent (400 are free!)2000 and 2500 25 Dollar.over 2500 cannot travel that far
function calculatesFarePrice (fromPickup, toHq) {
  const disInFoot = distanceTravelledInFeet(fromPickup, toHq)

  if (disInFoot <= 400) {
    return disInFoot* 0;
  } 
  else if (disInFoot > 400 && disInFoot <= 2000)
  {
    
  return 0.02 * disInFoot;
  } 
  else if (disInFoot > 2000 && disInFoot < 2500) 
  {
    return 25;
  }
  else
  {
    return "cannot travel that far";
  }
}