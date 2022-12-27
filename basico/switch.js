let dia = 6;
let diaNome = '';

switch(dia) {

  case 6:
  case 7:
    diaNome = 'Fim de semana';
    break;
    default:
      diaNome = 'Dia de semana'
}
document.getElementById('dia').innerHTML = "Hoje é "+diaNome;

/* Solução alternativa sem o switch

const dia = 3;
const diasDaSemana = ['segunda', 'terça', 'quarta', 'quinta','sexta','sábado','domingo'];
const nomeDoDia = diasDaSemana[dia];
document.getElementById('dia').innerHTML = "Hoje é "+nomeDoDia;
*/