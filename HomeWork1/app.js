
(function(){
    "use strict"
    // debugger;
    let pensionAge = Number,
        name,
        surname,
        gender,
        age,
        value = " ";
    function getName(){
        name = prompt("Введите ваше имя:");
        if(name !== null && name != "" && name != value ){
            name = name;
            console.log(name);
        }else{
            getName();
        };
    };
    function getSurname(){
        surname = prompt("Введите вашу фамилию");
        if( surname !== null && surname != "" && surname != value){
            surname = surname;
            console.log(surname);
        }else{
            getSurname();
        };
    };
    function getGender(){
        gender = prompt("Введите ваш пол: М или Ж ");
        gender = gender.toUpperCase();
        if(gender === "М"){
            pensionAge = 65;
        }else if(gender === "Ж"){
            pensionAge = 60;
        }else{
            getGender();
        };
    };
    function getAge(){
        age = prompt("Введите ваш возраст");
        if(age != "" && age !== null){
            age = Number.parseInt(age);
            if(age>pensionAge){
                pensionAge = "На пенсии: ДА";
            }else if(age<pensionAge){
                pensionAge = "На пенсии: НЕТ";
            };
        }else{
            getAge();
        }
    };
    function start(){
            getName();
            getSurname();
            getGender();
            getAge();
        alert(`\n
                        Полное Имя: ${name} ${surname}\n
                        Пол: ${gender}\n
                        ${pensionAge}`);
    };
    start();
})();