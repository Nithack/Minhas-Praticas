let day;

switch (new Date().getDay()) {
  case 0:
    day = "domingo"
    break;
  case 1:
    day = "segunda"
    break;
  case 2:
    day = "terça"
    break;
  case 3:
    day = "quarta"
    break;
  case 4:
    day = "quinta"
    break;
  case 5:
    day = "sexta"
    break;
  case 6:
    day = "sabado"
    break;
  default:
    throw new Error("Hey! We have only 7 days in the week");
}

console.log(day)