
let outputscreen = document.getElementById('output-screen');
let expression = '';

function display(value) {
  expression += value;
  outputscreen.value = expression;
}

function clearDisplay() {
  expression = '';
  outputscreen.value = '';
}

function del() {
  expression = expression.slice(0, -1);
  outputscreen.value = expression;
}

function Calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    outputscreen.value = result;
  } catch (error) {
    outputscreen.value = 'Error';
  }
}
