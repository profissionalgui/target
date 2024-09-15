function inverterString(str) {
    return str.split('').reverse().join('');
  }
  
  const minhaString = "Hello, World!";
  const stringInvertida = inverterString(minhaString);
  console.log(stringInvertida);