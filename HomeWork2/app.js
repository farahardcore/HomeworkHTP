(function () {
    "use strict";
    let students = [];
    const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function getData(text, fullName) {
        fullName = prompt(text);
        if (fullName !== "" & fullName !== null) {
            students.push({
                name: fullName
            });
            console.log(students);
            getData("Введите Имя Фамилию ученика");
        } else {
            getScores(`Введите оценки ${students.name}  (Через пробел)`);
        }
    };

    function getScores(text, scores) {
        scores = prompt(text);
        scores = scores.split(" ").map(Number);
        console.log(scores);
        let check = scores.every(num => DIGITS.includes(num));
        if (check == true) {
            students.push({
                scores: scores
            });
            completeData();
        } else {
            getScores(`Введите оценки ${students.name}  (Через пробел)`);
        }
    };

    function completeData(newData) {
        for (let i = 0; i < students.length; i++) {
            newData = Object.assign(students[i], students[i + 1]);
            console.log(newData);
            students.splice(0, 2, newData);
            console.log(students);
            return newData;
        }
    };
    function GPA(){
        for(let i = 0; i<students[i][scores];i++){
            console.log(students.scores);
        }
    }
    getData("Введите Имя Фамилию ученика");
    console.log(students.scores);
    console.log(students);
    // let students = [],
    //     name = "farid",
    //     surname = "dsadad";
    // students.name = name;
    // students["surname"] = surname;
    // students["scores"] = [];
    // console.log(students);
})();