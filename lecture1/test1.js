function Man(name, age){
    this.name = name;
    this.age = age;
    this.live = function(){
        console.log(this.name +' : '+this.age);
        };
    return this;
    }

function Student(){
    this.study = function(){
        console.log('study');
    };

    this.duckType = function(){
        return 'Student';
    };
}

Student.prototype = new Man();

var study = new Student();
var man = new Man();
        
function duckType(myObject){
    if(myObject.hasOwnProperty('study')){
        return 'Student';
    } else {
        return 'Man';
    }
}

console.log(duckType(man));
console.log(duckType(study));

console.log(man.duckType.apply(man, []));
console.log(study.duckType.apply(study, []));
