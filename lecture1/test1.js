// Constructor functions
function Man(name, age){
    this.name = name;
    this.age = age;
    return this;
    }
    
Man.prototype.live = function() {
        console.log(this.name +' : '+this.age);
    };

var Student = function(name, age) {    
    Man.call(this, name, age);
    duckType(this);
};

Student.prototype = new Man();

Student.prototype.study = function() {
    console.log('study');
};

// Object.create() method
var Man = {
  constructor: function(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  live: function() {
    console.log(this.name +' : '+this.age);
  }
};

var Student = Object.create(Man);

Student.study = function() {
  console.log('study');
};



function duckType(myObject){
    if(myObject.hasOwnProperty('study')){
        return 'Student';
    } else {
        return 'Man';
    }
}

function duckType(person) {
  return person.study ? 'Student' : 'Man';
}

function duckType() {
  return this.study ? 'Student' : 'Man';
}