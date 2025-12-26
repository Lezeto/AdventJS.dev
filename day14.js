function findGiftPath(workshop, gift) {
  let resultado = []

  Object.keys(workshop).forEach(key => {
    if (workshop[key] === gift) {
      resultado = [key]
    }
    if(typeof(workshop[key])=="object"){
    Object.keys(workshop[key]).forEach(key1 => {
      if (workshop[key][key1] === gift) {
        resultado = [key, key1]
      }
      if(typeof(workshop[key][key1])=="object"){
      Object.keys(workshop[key][key1]).forEach(key2 => {
        if (workshop[key][key1][key2] === gift) {
          resultado = [key, key1, key2]
        }
      })}
    })}
  })

  return resultado
}