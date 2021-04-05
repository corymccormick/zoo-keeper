class Bear {
  constructor(
    name = '',
    color = '',
    gender = '',
    weight = 0
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
}

export default Bear;




