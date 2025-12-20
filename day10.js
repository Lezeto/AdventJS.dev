function maxDepth(s) {
  // Code here
  let sumaCorchetes=0;
  let maxSumaCorchetes=0;
  for(let i=0; i<s.length;i++){
    if(s[i]==="["){sumaCorchetes++} else {sumaCorchetes--}
    if (sumaCorchetes>maxSumaCorchetes){maxSumaCorchetes=sumaCorchetes}
    if(sumaCorchetes<0){return -1}
  }
  if(sumaCorchetes!==0){return -1}
  return maxSumaCorchetes;
}