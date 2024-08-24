function calculateLuckyNumber(birthdate) {
  const birthdateString = birthdate.toString();
  let sum = 0;
  for (let i = 0; i < birthdateString.length; i++) {
    sum += parseInt(birthdateString[i]);
  }
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
  }
  return sum;
}