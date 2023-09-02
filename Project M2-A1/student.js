var students = [];

var student = {
    name: 'Jane Smith',
    birthyear: 2002,
    course: 'IFT 458',
    grade:90,
    active : true,
    age: function calculate(){
        return 2022 - this.birthyear;
    }

    }


var student2 = {
    name: 'Andy Moore',
    birthyear: 2000,
    course: 'IFT 458',
    grade:100,
    active : false,
    age: function(){
        if(this.active){
            return 2022 - this.birthyear;
        }
        else{
            return 0;
        }
    }
    
    }

students.push(student);
students.push(student2);

console.log(students);
//console.log(student['name']);
//console.log(student.name);
//console.log(student2.age());
//console.log(student.age());
students.forEach((item)=> console.log(item.age()));