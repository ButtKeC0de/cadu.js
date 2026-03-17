    function ex1(){
     let soma = 0;
     let continuar = true;

     while(continuar){
        let numero = parseFloat(prompt("Digite um número (Ou zero para encerrar): "));

        //modelo antigo:soma = soma + numero;
        //modelo java:soma += numero;

        if(isNaN(numero)){
            alert("Por favor, digite um número válido!");

        }else{
            soma += numero;
        }

        continuar = confirm("Deseja adicionar mais um número?");

    }
    alert("A soma dos números é " + soma);

}

function exercicio_1(){

    console.log("Contagem regressiva para o lançamento!")
    for(let i = 10; i >=0; i-- ) {
    console.log(i);

}
{

    console.log("Lançamento realizado!")

}
}

function exercicio_2(){
    
    function mensal(){
    
    let gn_total = 0;
    let pd_total = 0;
    let mess = 1;
    let sld_total = 0;

    while(mess<=12){
        let bruto = parseFloat(prompt("Digite qual foi o ganho bruto do mês " + mess ));

        if(isNaN(bruto)){
            alert("Por favor, digite um número válido!");

        }else{
           gn_total+=bruto;
        }
        
        let gasto = parseFloat(prompt("Digite qual foi o gasto do mês " + mess ));

        if(isNaN(gasto)){
            alert("Por favor, digite um número válido!");

        }else{
           pd_total+=gasto;
        }
        
        mess++;
    } 
        alert("Seu bruto anual foi de : " + gn_total);
        alert("Seu gasto anual foi de: " + pd_total); 

        sld_total= gn_total-pd_total;

        alert("Seu saldo financeiro foi de: " + sld_total);
         
        if(sld_total>0){
            alert("Você lucrou esse ano!")

        } else{
            alert("Você teve prejuízo esse ano!")
        }
    }
 
      calculo_mensal();

}

