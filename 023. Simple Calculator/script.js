const result = document.querySelector('.result');
const operator = document.querySelector('.selectOp');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const submit = document.querySelector('#btn');

console.log(result)

submit.addEventListener('click', () => {
  console.log(operator.value)
  switch (operator.value) {
    case 'plus':
      result.innerHTML = Number(num1.value) + Number(num2.value);
      break;
    case 'min':
      result.innerHTML = Number(num1.value) - Number(num2.value);
      break;
    case 'multi':
      result.innerHTML = Number(num1.value) * Number(num2.value);
      break;
    case 'div':
      result.innerHTML = (Number(num1.value) / Number(num2.value)).toFixed(3);
      break
  }
})