// Arrow function to return the product of two numbers
const multiply = (num1, num2) => num1 * num2;

// Create a student object
const createStudent = (name, age, grade) => {
  return {
    name: name,
    age: age,
    grade: grade,
    // You can add more properties as needed
  };
};

// Example usage:
const product = multiply(5, 8);
console.log("Product of 5 and 8:", product);

const student = createStudent("John Doe", 20, "A");
console.log("Student Object:", student);