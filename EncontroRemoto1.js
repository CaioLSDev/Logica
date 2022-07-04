console.log ("Bio-Tec: Ticket de Solicitação de Bio-Aprimoramento Corporal")
console.log ("---------------------------------------------------------------")


var lista = ["OlhoBionico", "InfusorCerebral", "HarmonizadorPsionico", "InfusorSensorial", "MetalizadorOsseo"];
//Array, "super variável" que agrupa valores [0,1,2,3,4...]
console.log (lista[1])//resposta: infusor cerebral
if (lista.length > 1) {
console.log ("ERRO: Limite de Bio-Aprimoramento transpassado")}
else {console.log ("VÁLIDO: Bio-Aprimoramento reservado")}

var peso = 110;
if (peso <= 100) {console.log ("VÁLIDO: Bio-Aprimoramento reservado")}
else {console.log ("ERRO: Peso de Bio-Aprimoramento Inválido")}

var peca = "InfusorCerebral"
if (peca.lenght<10){console.log("ERRO: Codigo Nominal Inválido")}
else {console.log("VÁLIDO: Codigo Nominal reservado")}

console.log ("---------------------------------------------------------------")
console.log ("Certifique-se de que todos os campos estejam VÁLIDOS ao assinar")
console.log ("assinatura do ticket:___________________")