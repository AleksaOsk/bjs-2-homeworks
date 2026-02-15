function parseCount(number) {
    let num = Number.parseFloat(number);
    if (isNaN(num)) {
        throw new Error("Невалидное значение");
    }
    return num;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.validateValues(a, b, c);
        this.a = a;
        this.b = b;
        this.c = c;
        this._perimeter = this.perimeterCalculation(a,b,c);
        this._area = this.areaCalculation(a,b,c);
    }

    validateValues(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    perimeterCalculation(a, b, c) {
        return a + b + c;
    }

    areaCalculation(a, b, c) {
        let p = (a + b + c) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return Number(area.toFixed(3));
    }

    get perimeter(){
        return this._perimeter;
    }

    get area(){
        return this._area;
    }
}

function getTriangle(a, b, c){
    return new Triangle(a, b, c);
}