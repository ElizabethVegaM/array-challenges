// areValidCredentials

const areValidCredentials = (name, password) => {
  if(name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
};


// computeAverageLengthOfWords

const arr = ["LALALALALA", "KEKEKEKEKEKEKE"];

const computeAverageLengthOfWords = arr.reduce((previousValue, currentValue) => {
  return (previousValue.length + currentValue.length) / arr.length;
});


// getNthElement

const getNthElement = (array, n) => array[n];


// filterOddElements

const arr = [69, 10, 6, 8, 22];

const filterOddElements = arr.filter(index => index % 2 === 1);


// computeSumOfAllElements

const arr = [4, 5, 10, 9];

const computeSumOfAllElements = arr.reduce((previousValue, currentValue) => previousValue + currentValue);


// convertScoreToGrade

const  convertScoreToGrade = (score) => {
  if(score >= 90 && score <= 100) {
    return 'A';
  } else if(score >= 80 && score <= 89) {
    return 'B';
  } else if(score >= 70 && score <= 79) {
    return 'C';
  } else if(score >= 60 && score <= 60) {
    return 'D';
  } else if(score >= 0 && score <= 59) {
    return 'F';
  } else {
    return 'PUNTUACION INVALIDA';
  }
};


// calculateBillTotal

const calculateBillTotal = (preTaxAndTipAmount) => preTaxAndTipAmount * 1.245;


// convertDoubleSpaceToSingle

const convertDoubleSpaceToSingle = (str) => str.split('  ').join(' ');
