function sumOfFactors(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== 1 && i !== num) {
          sum += num / i;
        }
      }
    }
    return sum;
  }
  
  function checkNumber(num) {
    const sum = sumOfFactors(num);
    if (sum === num) {
      console.log(num + " is a perfect number.");
    } else if (sum > num) {
      console.log(num + " is an abundant number.");
    } else {
      console.log(num + " is a deficient number.");
    }
  }
  