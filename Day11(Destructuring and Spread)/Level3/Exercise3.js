const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
  ];
  
  function convertArrayToObject(students) {
    const StudentDetails = [];
    for (let student of students) {
      const [Name, skills, scores] = student;
  
      StudentDetails.push({ name: Name, skills: skills, scores });
    }
    return StudentDetails;
  }
  