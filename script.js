// //1)
// class Button {
//   constructor (width, height, text) {
//     this.width = width;
//     this.height = height;
//     this.text = text;
//   }
//   showBtn () {
//     document.write(`<button style="width: ${this.width}; height: ${this.height};">${this.text}</button>`)
//   }
// }
//
// class ChildButton extends Button{
//   constructor (width, height, text, color) {
//     super(width, height, text);
//     this.color = color;
//   }
//   showBtn () {
//     document.write(`<button style="width: ${this.width}; height: ${this.height}; color: ${this.color}">${this.text}</button>`)
//   }
// }
//
// let button = new ChildButton("100px","100px", 'click', '#ed5565');
// button.showBtn();


//2)
class Figure {
  constructor (name) {
    this.name = name;
  }
  get figureName() {
    return this.name;
  }
  figureInformation() {
    return (`Sides: ${this.sides}, Sides length: ${this.length1}, ${this.length2}`);
  }
  figureSquare() {
    return (`Square is: ${this.length1 * this.length2}`);
  }
  figurePerimeter() {
    return (`Perimeter is: ${(this.length1 + this.length2) * 2}`);
  }
}

class Rectangle extends Figure {
  constructor (name, length1, length2) {
    super(name, length1, length2);
    this.name = name;
    this.sides = 4;
    this.length1 = length1;
    this.length2 = length2;
  }
  get figureName () {
    return super.figureName
  }
}

class Square extends Figure {
  constructor (name, length1) {
    super(name, length1);
    this.name = name;
    this.sides = 4;
    this.length1 = length1;
    this.length2 = 'У квадрата одно значение стороны';
  }
  get figureName () {
    return super.figureName
  }
  figureInformation () {
    return super.figureInformation(this.sides, this.length1)
  }
  figureSquare () {
    return (`Square is: ${this.length1**2}`)
  }
  figurePerimeter () {
    return (`Perimeter is: ${this.length1 * 4}`)
  }
}

class Triangle extends Figure {
  constructor (name, length1, length2, length3) {
    super(name, length1, length2, length3);
    this.name = name;
    this.sides = 3;
    this.length1 = length1;
    this.length2 = length2;
    this.length3 = length3;
  }
  get figureName () {
    return super.figureName
  }
  figureInformation () {
    return (`Sides: ${this.sides}, Sides length: ${this.length1}, ${this.length2}, ${this.length3}`);
  }
  figureSquare () {
    let p = (this.length1 + this.length2 + this.length3) / 2;
    return (`Square is: ${Math.sqrt(p*(p-this.length1)*(p-this.length2)*(p-this.length3))}`);
  }
  figurePerimeter () {
    return (`Perimeter is: ${this.length1 + this.length2 + this.length3}`);
  }
}

let figureSquare = new Square('Квадрат',  10);
let figureRectangle = new Rectangle('Прямоугольник', 10, 5);
let figureTriangle = new Triangle('Треугольник', 10, 10, 10);

figureTriangle.figureSquare();

let figureArr = [
  {
    name: figureSquare.figureName,
    info: figureSquare.figureInformation(),
    square: figureSquare.figureSquare(),
    perimeter: figureSquare.figurePerimeter()
  },
  {
    name: figureRectangle.figureName,
    info: figureRectangle.figureInformation(),
    square: figureRectangle.figureSquare(),
    perimeter: figureRectangle.figurePerimeter()
  },
  {
    name: figureTriangle.figureName,
    info: figureTriangle.figureInformation(),
    square: figureTriangle.figureSquare(),
    perimeter: figureTriangle.figurePerimeter()
  }
]

console.log(figureArr);