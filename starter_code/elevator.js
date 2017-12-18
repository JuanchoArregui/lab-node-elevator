const Person = require('./person.js');

class Elevator {

  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.request   = [];
    this.direction = "up";
    this.movement;

  }

  start() {
    this.movement = setInterval(() => this.update(), 1000);
  }

  stop() {
    clearInterval(this.movement)
  }

  update() {
    this.log(this.floor)
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "up";
      this.floor++
    }
  }

  floorDown() {
    if (this.floor > 0) {
      this.direction = "down";
      this.floor--
    }
  }

  move(destinationFloor){
    let path = destinationFloor - this.floor;
    if (path > 0) {
      for (let p = this.floor; p < this.MAXFLOOR; p++ ) {
        this.floorUp();
        this.log();
      }
      this.logDestination();
    }
    else if (path < 0) {
      for (let p = this.floor; p > 0; p--) {
        this.floorDown();
        this.log();
      }
      this.logDestination();
    }
    else {
      console.log(`the elevator is already on floor ${this.floor}`)
    }  
  }


  _passengersEnter() { 
    
      }
    
  _passengersLeave() { 

  }

  call(person) {
    this.request.push(person);
  }

  log() {
    console.log(`Moving Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  logDestination() {
    console.log(`The elevator has reached the destination floor. Floor: ${this.floor}`);
  }
  
}

module.exports = Elevator;
