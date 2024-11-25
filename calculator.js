function getFirstNumber() {
  return +prompt("enter First number");
}

function getSecondNumber() {
  return +prompt("enter second number");
}

function getDividand() {
  return +prompt("enter dividand");
}

function getDivisor() {
  return +prompt("enter divisor");
}

function addition() {
  const a = getFirstNumber();
  const b = getSecondNumber();
  const message = "sum of number " + a + " and " + b + " is ";

  return message + (a + b);
}

function subtraction() {
  const a = getFirstNumber();
  const b = getSecondNumber();
  const message = "subtraction of " + b + " from " + a + " is ";

  return message + (a - b);
}

function multiply() {
  const a = getFirstNumber();
  const b = getSecondNumber();
  const message = "multiplication of " + a + " and " + b + " is ";

  return message + (a * b);
}

function percentage() {
  const a = getDividand();
  const b = getDivisor();
  const message = "percentage of " + a + " W.R.T " + b + " is ";

  return message + ((a / b) * 100);
}

function divide() {
  const a = getDividand();
  const b = getDivisor();
  const message = "division of " + a + " from " + b + " results to ";

  return message + (a / b);
}

function exponent() {
  const a = +prompt("enter base");
  const b = +prompt("enter power");
  const message = "exponent of " + a + " to the power " + b + " results to ";

  return message + Math.pow(a, b);
}

function squareRoot() {
  const number = +prompt("enter number");
  const answer = Math.sqrt(number);
  const message = "square root of number " + number + " is ";

  return message + answer;
}

function calSI(p, r, t) {
  const message = "calculated simple interest is ";
  
  return message + (p * r * t) / 100;
}

function calCI(p, r, t) {
  const message = "calculated compound interest is ";
  const compoundedAmount = p * Math.pow(1 + r / 100, t);

  return message + (compoundedAmount - p);
}

function CIOrSI(operation) {
  const p = +prompt('enter principle amount');
  const r = +prompt('enter rate of interest');
  const t = +prompt('enter time period');
  
  return operation === 'SI' ? calSI(p, r, t) : calCI(p, r, t);
}

// function APOrGP(operation) {
  
// }

function calculator(operation) {
  if (operation === "add") {
    return addition();
  }

  if (operation === "sub") {
    return subtraction();
  }

  if (operation === "multiply") {
    return multiply();
  }

  if (operation === "divide") {
    return divide();
  }

  if (operation === "percentage") {
    return percentage();
  }

  if (operation === "power") {
    return exponent();
  }

  if (operation === "sqrt") {
    return squareRoot();
  }

  if (operation === "CI" || operation === "SI") {
    return CIOrSI(operation);
  }

  // if (operation === "NAP" || operation === "NGP" || operation === "SAP" || operation === "SGP") {
  //   return APOrGP(operation);
  // }
}

function getOperation() {
  console.log('\n"add"        for addition of two numbers');
  console.log('"sub"        for subtraction of two number');
  console.log('"multiply"   for multiplication of two number');
  console.log('"divide"     for division of two number');
  console.log('"percentage" for calculating percentage');
  console.log('"power"      to calculate exponent');
  console.log('"sqrt"       for calculating square root');
  console.log('"CI"         for compound interest');
  console.log('"SI          for Simple Interest');
  // console.log('"NAP"        for nth term of Ap');
  // console.log('"SAP"        for sum of N term of Ap');
  // console.log('"NGP"        for nth term Gp');
  // console.log('"SGP"        for sum of N term of Gp\n');
  // console.log();

  const operation = prompt("what do you want to do: ");

  console.log(calculator(operation));

  const isAssignmentDone = confirm("are you done");
  
  if (!isAssignmentDone) {
    getOperation();
  }
}

getOperation();
