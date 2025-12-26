function drawGift(size, symbol) {
  if (size<2) {return ""}
  let texto="";
  texto+=symbol.repeat(size)+"\n";
  for (let i=1; i<size-1; i++){texto+=symbol+" ".repeat(size-2)+symbol+"\n"}
  texto+=symbol.repeat(size);
  return texto;
}