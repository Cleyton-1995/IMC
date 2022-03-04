function calculator() {
    let weight = document.querySelector(" .peso");
    let valueWeight = weight.value;

    if(valueWeight == "") {
        alert("Qual seu peso?");
        weight.focus();
        return
    }

    let height = document.querySelector(" .altura");
    let valueHeight = height.value;

    if(valueHeight == "") {
        alert("Qual sua altura?");
        height.focus();
        return
    }

    let imc = valueWeight / (valueHeight * valueHeight);





    if(imc < 18.5) {
        let classification = `Abaixo do Peso`;
        let resultIMC = `${imc.toFixed(2)} kg/m2(${classification})`;
        
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "50px";
        boxOfContent.style.paddingTop = "30px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    
    } else if (imc >= 18.5 && imc <= 24.9) {
        let classification = `Peso Ideal`;
        let resultIMC  = `${imc.toFixed(2)} kg/m2(${classification})`;
       
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "50px";
        boxOfContent.style.paddingTop = "30px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    } else if (imc >= 25 && imc <= 29.9) {
        let classification = ` Sobrepeso`;
        let resultIMC  = `${imc.toFixed(2)} kg/m2(${classification})`;
       
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "50px";
        boxOfContent.style.paddingTop = "30px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    } else if (imc >= 30 && imc <= 34.9) {
        let classification = `Obesidade Grau 1`;
        let resultIMC  = `${imc.toFixed(2)} kg/m2(${classification})`;
       
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "60px";
        boxOfContent.style.paddingTop = "50px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    } else if (imc >= 35 && imc <= 39.9) {
        let classification = `Obesidade Grau 2`;
        let resultIMC  = `${imc.toFixed(2)} kg/m2(${classification})`;
       
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "60px";
        boxOfContent.style.paddingTop = "50px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    } else {
        let classification = `Obesidade Grau 3 ou Obesidade Mórbisda`;
        let resultIMC  = `${imc.toFixed(2)} kg/m2(${classification})`;
       
        let boxOfContent = document.querySelector(" .content");
        boxOfContent.style.paddingBottom = "50px";
        boxOfContent.style.paddingTop = "30px";

        let result = document.querySelector(" .resultado");
        result.innerHTML = resultIMC;
    }
}
