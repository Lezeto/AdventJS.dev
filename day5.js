function timeUntilTakeOff(fromTime, takeOffTime) {
  let ano1=fromTime.slice(0,4);
  let mes1=fromTime.slice(5,7);
  let dia1=fromTime.slice(8,10);
  let hora1=fromTime.slice(11,13);
  let minuto1=fromTime.slice(14,16);
  let segundo1=fromTime.slice(17,19);

  let ano2=takeOffTime.slice(0,4);
  let mes2=takeOffTime.slice(5,7);
  let dia2=takeOffTime.slice(8,10);
  let hora2=takeOffTime.slice(11,13);
  let minuto2=takeOffTime.slice(14,16);
  let segundo2=takeOffTime.slice(17,19);

  let fechaString1=ano1+"-"+mes1+"-"+dia1+"T"+hora1+":"+minuto1+":"+segundo1+"Z";
  let fechaString2=ano2+"-"+mes2+"-"+dia2+"T"+hora2+":"+minuto2+":"+segundo2+"Z";

  let fechaObjeto1= new Date(fechaString1);
  let fechaObjeto2= new Date(fechaString2);

  let timeStamp1= fechaObjeto1.getTime();
  let timeStamp2= fechaObjeto2.getTime();

  let diferenciaSegundos=(timeStamp2-timeStamp1)/1000;
  return diferenciaSegundos;

}