document.getElementById('formularioAprovacao').addEventListener('submit', function(event) {
    event.preventDefault();

    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const faltas = Number(document.getElementById('faltas').value);
    
    const aulas_totais = 40; 
    const media = (nota1 + nota2) / 2;
    const limiteFaltas = aulas_totais * 0.25;
    const presenca = ((aulas_totais - faltas) / aulas_totais) * 100;

    let situacao = "";
    let notaFinal = media;
    let notaRecuperacao = "-"; 
    if (faltas > limiteFaltas) {
        situacao = "Reprovado por faltas!";
    } else {
        if (media >= 7) {
            situacao = "Parabéns! Você foi aprovado!";
        } else if (media >= 5) {
            
            notaRecuperacao = 6.0; 
            notaFinal = (media + notaRecuperacao) / 2; 

            situacao = (notaFinal >= 5) 
                ? "Aprovado após a recuperação."
                : "Reprovado mesmo após recuperação.";
        } else {
            situacao = "Reprovado por nota!";
        }
    }

    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Número de aulas do semestre:</strong> ${aulas_totais}</p>
        <p><strong>Número de faltas do aluno:</strong> ${faltas}</p>
        <p><strong>Percentual de presença:</strong> ${presenca.toFixed(2)}%</p>
        <p><strong>Primeira nota:</strong> ${nota1}</p>
        <p><strong>Segunda nota:</strong> ${nota2}</p>
        <p><strong>Nota complementar (recuperação):</strong> ${notaRecuperacao}</p>
        <p><strong>Situação final do aluno:</strong> ${situacao}</p>
    `;
});