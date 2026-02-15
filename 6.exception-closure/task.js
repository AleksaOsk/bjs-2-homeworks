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
    }

    validateValues(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        return this.areaCalculation(this.a, this.b, this.c);
    }

    areaCalculation(a, b, c) {
        let p = (a + b + c) / 2;
        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}