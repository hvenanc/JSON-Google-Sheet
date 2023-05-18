function gerarJson() {
  
  var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var uc = planilha.getLastColumn();
  var ultimaLinha = planilha.getLastRow();


var primeiraLinha = [];

for (var i = 1; i <= uc; i++) {

primeiraLinha.push(planilha.getRange(1,i).getValue());

}

var arrayDeObjetos = [];

for (var j = 2; j <= ultimaLinha; j++ ) {

var subojeto = {};

for(var k = 1; k <= uc; k++) {
  subojeto[primeiraLinha[k-1]] = planilha.getRange(j,k).getValue();
  
  }

arrayDeObjetos.push(subojeto);

}

var mostrarJson = JSON.stringify(arrayDeObjetos);
Logger.log(mostrarJson);

}
