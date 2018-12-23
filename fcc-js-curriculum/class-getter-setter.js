class Thermostat{
    contructor(tempF){
      this.tempC = 5/9 * (tempF - 32)
    }
  
    set temperature(newTemp){
      this.tempC = newTemp;
    }
  
    get temperature(){
      return this.tempC;
    }
  }
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C