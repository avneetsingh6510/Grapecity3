let students = [
  { name: 'Alice', age: 22, scores: [78, 85, 92] },
  { name: 'Bob', age: 20, scores: [88, 90, 76] },
  { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

function analyzeStudents(students) {
  let topStudent = "";
  let highestAverage = 0;

  students.forEach(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0);
    let average = total / student.scores.length;

    console.log(student.name + " Average:", average.toFixed(2));

    if (average > highestAverage) {
      highestAverage = average;
      topStudent = student.name;
    }
  });

  console.log(`Top Student: ${topStudent} with an average score of ${highestAverage.toFixed(2)}`);
}

analyzeStudents(students);