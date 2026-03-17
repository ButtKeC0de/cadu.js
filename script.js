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

function exercicio_3(){

    let numero = [];
    let auxil = 0 ;
    let troca = true;

    for(let i = 1; i<=4; i++){

        let numeros = Number (prompt("Digite o número inteiro " + i));

        while(!Number.isInteger(numeros)){
            numeros = Number(prompt("Digite um número inteiro válido!"))
        }

        numero.push(numeros);

    }

  

        while(troca){

            troca= false;

                   for(let i=0; i< numeros.length - 1; i++){

                      if (numero[i] < numero[i+1]){

                       auxil = numero[i];
                       numero[i] = numero[i+1];
                       numero[i+1] = auxil;
                       troca = true;

                  }
             }

        }

     alert("Numeros digitados: " + numero.join(", "));

    }

function exercicio_4(){

    let numeros = Number(prompt("Me diga um número inteiro "));

    while(!Number.isInteger(numeros)){
         numeros = Number(prompt("Digite um número inteiro válido!"));
    }


    if(numero %2 ===0 ){
  
        numeros=numeros+1;
        console.log(numeros + " agora é ímpar");

    } else {
    
        numeros=numeros-1;
        console.log(numero + " agora é par");

    }

    

}

function exercicio_5(){

    let letra = prompt("Digite uma letra: ");

   
    if(letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra ==="o" || letra === "O" || letra ==="u" || letra === "U" ){
 
        console.log("A letra '" + letra + "' é uma vogal");
    } else{

        console.log("A letra '" + letra + "' é uma consoante");
    }


}

function exercicio_7(){

    let continua= true;

    function sabor_sorvete(){

       const sabor = {

        a: {nome: "Chocolate", preco: 1.50},
        b: {nome: "Morango", preco: 2.50},
        c: {nome: "Creme", preco: 2.50},
        d: {nome: "Manga", preco: 3.20},
        e: {nome: "Melancia", preco: 3.40},
        f: {nome: "Vanilla Ice", preco: 3.00},
        g: {nome: "Céu Azul", preco: 3.60},
        h: {nome: "Brownie", preco: 4.00},
        i: {nome: "Hawaiano", preco: 5.00}

       };

       while(continua){
        

       let codigo_sabo = prompt("Olá, qual é o código do sabor que você deseja?").toLowerCase();

       if(sabor[codigo_sabo]){    
        alert("Sabor: " + sabor[codigo_sabor].nome + "\nPreço: R$ " + sabor[codigo_sabor].preco);
       } else{
        alert ("Digite um código válido!");
       }

      continuar = confirm("Deseja ver outro código?");
    
          }
       }
       sabor_sorvete();
    }


function exercicio_8(){

    let a = Number(prompt("Digite o primeiro numero inteiro :"));

    while(!Number.isInteger(a)){
        a = Number(prompt("Digite um número inteiro valido :"));

    }

    let b = Number(prompt("Digite o segundo número inteiro :"));

    while(!Number.isInteger(b)){
        b = Number(prompt("Digite um número inteiro válido! :"));

    }

    console.log(" A diferença deles é ", a-b);
    console.log(" O dobro da primeira somado ao triplo da segunda é ", (2*a) + (3*b));
    console.log(" A multiplicação delas são ", a*b);

    let diferenca = a - b ;
    let dobro = 2 * a;
    let triplo = 3 * b;
    let soma = dobro + triplo;
    let multi = a*b;

    alert(" A diferença deles é " + diferenca);
    alert(" O dobro da primeira somado ao triplo da segunda é " + soma);
    alert(" A multiplicação delas são " + multi);




}


function exercicio_9(){

    let numero = [];
    let auxil = 0 ;

    for(let i=0; i<=1; i++){

        let numeros = Number (prompt( "Digite um número inteiro " ));
    
       while(!Number.isInteger(numeros)){
        numeros = Number (prompt( "Digite um número inteiro válido! " ));
    }

        numero.push(numero);
    }

    console.log("Os números são " +  numero.join (", "));

    for(let i=0; i< numero.length - 1; i++){

                      if (numero[i] < numero[i+1]){

                       auxil = numero[i];
                       numero[i] = numero[i+1];
                       numero[i+1] = auxil;

                  }
             }


    console.log("Os números em ordem é " +  numero.join (", "));
    alert("Os números em sequência é " + numero.join (", "))
    

   


}



function exercicio_10(){

    const funcionarios = {
        nomes : prompt("Digite o nome do funcionário: "),
        sld_bruto : Number(prompt ("Digite o salario bruto do funcionario: ")),
        des: 0.08, 

    }

    funcionarios.salario_desconto = funcionarios.sld_bruto * funcionarios.des,
    funcionarios.salario_total =  funcionarios.sld_bruto - funcionarios.salario_desconto,

    alert("Nome: " + funcionarios.nomes + "\nSalário bruto: R$" + funcionarios.sld_bruto + "\nValor desconto: R$" + funcionarios.salario_desconto + "\nSálario líquido R$" + funcionarios.salario_total);

}



function exercicio_11(){

   const funcionarios = {
        nome : prompt("Digite o nome do funcionário: "),
       sld_bruto : Number(prompt ("Digite o salario bruto do funcionario: ")),

    }; 

    if(funcionarios.sld_bruto<=1000){
      funcionarios.des= 0.08;
       
    } else if(funcionarios.sld_bruto>1000 && funcionarios.sld_bruto<1500){
        funcionarios.desconto= 0.085;
        

    }else if (funcionarios.sld_bruto>1500){
        funcionarios.desconto= 0.09;
       
    }

        funcionarios.salario_desconto = funcionarios.sld_bruto * funcionarios.desconto;
        funcionarios.salario_total =  funcionarios.sld_bruto - funcionarios.salario_desconto;
    

    alert("Nome: " + funcionarios.nome + "\nSalário bruto: R$" + funcionarios.salario_bruto.toFixed(2) + "\nTaxa de desconto: " + (funcionarios.desconto*100) + "%"  + "\nValor desconto: R$" + funcionarios.salario_desconto.toFixed(2)  + "\nSálario líquido R$" + funcionarios.salario_total.toFixed(2));
  

}