let dayOfTWeek = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sabado",  
}
let printDayOfWeek = ()=>{
  console.log(
    "Day of Week is: ", dayOfTWeek[new Date().getDay()]
  )
}
printDayOfWeek()