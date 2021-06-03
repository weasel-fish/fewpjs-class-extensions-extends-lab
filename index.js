// Your code here

class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        this.sides.forEach(side => sum += side)
        return sum
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        if(side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}