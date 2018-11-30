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

function calculatesFarePrice (fromPickup, toHq) {
  const distance = distanceTravelledInFeet(fromPickup, toHq);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * distance;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}