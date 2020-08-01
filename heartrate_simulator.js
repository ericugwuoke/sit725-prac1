//This class simulates a human heart rate in beat per minute
class Biosensor{
  constructor(name){
    //we want to initialise with an owner and keep track of the heart rate
    this.owner=name;
    this.heartRate=0;
    this.live();
  }
  random(min, max){
    //return random output as integers
    return parseInt(Math.random() * (max - min) + min);
  }

  //normal human adult heart rate ranges between 60 and 100 bpm
  //generate heart rate in beat per minute within the range of 60 and 100
  bpm(){
    let heart_rate=this.random(60, 100);
    this.heartRate=heart_rate;
    console.log(this.owner+' heartbeat = '+this.heartRate);
  }
  live(){
    setInterval(()=>{this.bpm()},1000);
  }
}

//taking sample from three adults Andrea, James and Eric
let andrea=new Biosensor('Andrea');
let james=new Biosensor('James');
let Eric=new Biosensor('Eric');
