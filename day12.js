function elfBattle(elf1, elf2) {
  let elf1HP=3;
  let elf2HP=3;
  for (let i=0; i<elf1.length; i++){
    if(elf1[i]==="A"){
      if (elf2[i]==="A"){elf1HP--; elf2HP--}
      if (elf2[i]==="F"){elf1HP-=2; elf2HP--}
    }
    if(elf1[i]==="B"){
      if(elf2[i]==="F"){elf1HP-=2}
    }
    if(elf1[i]==="F"){
      if(elf2[i]==="A"){elf1HP--; elf2HP-=2}
      if(elf2[i]==="B"){elf2HP-=2}
      if(elf2[i]==="F"){elf1HP-=2; elf2HP-=2}
    }

    if (elf1HP<=0 && elf2HP>0){return 2}
    if (elf1HP>0 && elf2HP<=0){return 1}
    if(elf1HP<=0 && elf2HP<=0){return 0}
  }
  
  if(elf1HP===elf2HP){return 0}
  if(elf1HP>elf2HP){return 1} else {return 2}
}