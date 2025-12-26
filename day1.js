function filterGifts(gifts) {
  return gifts.filter(x=>!x.includes("#"))
}