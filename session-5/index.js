function getGrade(total) {
  if (total >= 90) {
    return "A+";
  } else if (total >= 80 && total < 90) {
    return "A";
  } else if (total >= 70 && total < 80) {
    return "B";
  } else if (total >= 60 && total < 70) {
    return "C";
  } else if (total >= 50 && total < 60) {
    return "D";
  } else if (total >= 40 && total < 50) {
    return "E";
  } else if (total >= 30 && total < 40) {
    return "F";
  } else return "Fail";
}

console.log(getGrade(44));
