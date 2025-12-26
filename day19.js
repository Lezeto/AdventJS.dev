function revealSantaRoute(routes) {
  let largo=routes.length;
  let route={};
  let routeLista=[routes[0][0]]
  for (let i=0; i<largo; i++){
    route[routes[i][0]]=routes[i][1];
  }
  let countries= Object.keys(route);
  for (let i=0; i<largo; i++){
    routeLista.push(route[routeLista[i]])
  }

  return routeLista.filter(x=> x!= null);
}