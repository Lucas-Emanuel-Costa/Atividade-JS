document.getElementById('formularioAprovacao').addEventListener('submit', function(event) {
   
    event.preventDefault();

   
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const faltas = Number(document.getElementById('faltas').value);
    
    const aulas_totais = 40;
    const media = (nota1 + nota2) / 2;
    const limiteFaltas = aulas_totais * 0.25;

    const resultadoDiv = document.getElementById('resultado');

    if (faltas >= limiteFaltas) {
        resultadoDiv.textContent = "Reprovado por faltas!";
        resultadoDiv.style.color = 'red';
    } else {
        if (media >= 7) {
            resultadoDiv.textContent = "Parabéns! Você foi aprovado!";
            resultadoDiv.style.color = 'green';
        } else if (media >= 5) {
            resultadoDiv.textContent = "Você está na final.";
            resultadoDiv.style.color = '#FFA500'; 
        } else {
            resultadoDiv.textContent = "Reprovado por nota!";
            resultadoDiv.style.color = 'red';
        }
    }
});