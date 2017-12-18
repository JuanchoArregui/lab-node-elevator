const Person = require('./person.js');

class Elevator {

  constructor(){
    this.floor      = 0;
    this.MINFLOOR   = 0;
    this.MAXFLOOR   = 10;
    this.waitingList   = [];
    this.passengers   = [];
    this.requests   = [];
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
    if ( destinationFloor > this.MAXFLOOR ){
      console.log(`Destination floor is out of range!!!
    The elevator will stop on the last floor allowed: ${this.MAXFLOOR}`);
    destinationFloor = this.MAXFLOOR;
    }
    else if ( destinationFloor < this.MINFLOOR ){
      console.log(`Destination floor is out of range!!!
    The elevator will stop on the last floor allowed: ${this.MINFLOOR}`);
    destinationFloor = this.MINFLOOR;
    }
    
    let path = destinationFloor - this.floor;
    if (path > 0) {
      for (let p = this.floor; p < destinationFloor; p++ ) {
        this.floorUp();
        this.log();
      }
      this.logDestination();
    }
    else if (path < 0) {
      for (let p = this.floor; p > destinationFloor; p--) {
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
    let PersonsWaitingAtThatFloor =  this.waitingList.filter( p => p.originFloor = this.floor);
    this.waitingList.forEach(function(p, i) {
      if (p.originFloor === this.floor ) { 
        console.log(`${p.name} has enter the elevator`);
        this.waitingList.splice(i, 1);
        this.passengers.push(p);
        this.requests.push(p.destinationFloor);
      }
    });
  
  }  
    
  _passengersLeave() { 
    this.passengers.forEach(function(p, i) {
      if (p.destinationFloor === this.floor ) { 
        console.log(`${p.name} has left the elevator`);
        this.passengers.splice(i, 1);
      }
    });

  }

  call(person) {
    this.waitingList.push(person);
  }

  log() {
    console.log(`Moving Direction: ${this.direction} | Floor: ${this.floor}`);
  }

  logDestination() {
    console.log(`The elevator has reached the destination floor. Floor: ${this.floor}`);
  }
  
}

module.exports = Elevator;
