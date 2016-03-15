function btnplus(){
  document.Calculator.display.value += "+";
  document.Calculator.display= '';
}

function btnminus(){
  document.Calculator.display.value +='-';
  document.Calculator.display= ;
}

function btnmult(){
  document.Calculator.display.value +='*';
  document.Calculator.display.style='';
}

function btndiv(){
  document.Calculator.display.value +='/';
  document.Calculator.display.style='';
}

function btnclear(){
  document.Calculator.display.value +=' ';
  document.Calculator.display.style=' ';
}
