//bài 1
class Person {
    constructor(name) {
      this.name = name;
    }
  
    User() {
      console.log(` ${this.name}.`);
    }
  }
  
  const user = new Person("Minh Nhí");
  user.User(); 
  
//bài 2
class Shape{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    move(x,y){
        this.x = x;
        this.y = y;
    }
}

let shape =new Shape(0,0)
shape.move(3,4)
console.log(shape);
//bài 3

class Clock{
    constructor({template}){
            this.template = template;
            this.timer = null;
    }

      render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(timer);
    };
  
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
}
// function Clock({ template }) {
  
//     let timer;
  
//     function render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     this.stop = function() {
//       clearInterval(timer);
//     };
  
//     this.start = function() {
//       render();
//       timer = setInterval(render, 1000);
//     };
  
//   }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
//bài 4
var person = {
    firstname: "Albert",
    lastname: "Einstein",
    setLastName: function(lastname) {
      this.lastname = lastname;
    },
    setFirstName: function(firstname) {
      this.firstname = firstname;
    },
    getFullName: function() {
      return `${this.firstname} ${this.lastname}`;
    }
  };
  
  person.setLastName('Đoàn');
  person.setFirstName('Minh Nhí');
  console.log(person.getFullName());
