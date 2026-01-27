function getArrayParams(...arr) {
    let min = Infinity
    let max = -Infinity
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }

    return {
        min: min,
        max: max,
        avg: +(sum / arr.length).toFixed(2)
    }
}

function summElementsWorker(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

function differenceMaxMinWorker(...args) {
    if (args.length === 0) return 0;

    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
        if (args[i] < min) {
            min = args[i];
        }
    }
    return max - min;
}

function differenceEvenOddWorker(...args) {
    if (args.length === 0) return 0;

    let sumEvenElement = 0;
    let sumOddElement = 0;

    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            sumEvenElement += args[i];
        } else {
            sumOddElement += args[i];
        }
    }
    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...args) {
    if (args.length === 0) return 0;

    let sumEvenElement = 0;
    let countEvenElement = 0;

    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            sumEvenElement += args[i];
            countEvenElement++;
        }
    }
    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}
