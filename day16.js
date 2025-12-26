function packGifts(gifts, maxWeight) {
  let trineos=0;
  let trineo=0;
  if(gifts.length==0){return 0}
  for (let i=0; i<gifts.length; i++){
    if (gifts[i]>maxWeight){return null}
    if (trineo+gifts[i]<=maxWeight){trineo+=gifts[i]} else{
      trineos++;
      trineo=gifts[i];
    }
  }
  return trineos+1
}
