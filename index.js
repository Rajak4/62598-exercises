

const run = () => {
    console.log("Factorial:", factorial(5))
    console.log("Greatest Common Denominator:", gcd(100, 12))
    console.log("Simplify:", simplify(10, 100))
    console.log("Power:", power(3, 3))
    console.log("Fibonacci:", fibbonacci(7))
}

// #1 - Factorial
const factorial = num => num > 1 ? num * (factorial(num - 1)) : 1

// #2 - GCD
const gcd = (a, b) => {
    if (a > b) {
        return gcd(a - b, b)
    } else if (a < b) {
        return gcd(a, b - a)
    }
    return a
}

// #3 - Simplify
const simplify = (num, den) => {
    const greatestCommon = gcd(num, den)
    return `${num / greatestCommon}/${den / greatestCommon}`
}

// #4 - Power
const power = (num, exp) => exp > 0 ? power(num, exp-1) * num : 1

// #5 - Fibonacci
const fibbonacci = n => n <= 2 ? 1 : fibbonacci(n - 1) + fibbonacci(n - 2)

run()