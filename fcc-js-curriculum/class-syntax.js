class Vegetable{
    constructor(prop){
      this.name = prop;
    }
  }
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'