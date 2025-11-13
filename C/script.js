// ========================================
// C Programming Tutorial Content Database
// ========================================

const tutorialContent = {
  introduction: {
    title: "Introduction to C",
    description:
      "Learn the fundamentals of C programming language, one of the most powerful and widely-used languages in the world.",
    sections: [
      {
        title: "What is C?",
        content:
          "C is a general-purpose, procedural programming language created by Dennis Ritchie between 1969 and 1973. It's a high-level language that allows you to write efficient, fast, and portable code.",
        features: [
          "Simple and efficient syntax",
          "Procedural programming paradigm",
          "Compiler-based language",
          "Widely supported across platforms",
          "Suitable for system software development",
        ],
      },
      {
        title: "Why Learn C?",
        content:
          "C is the foundation of modern programming. Understanding C helps you learn other languages faster and teaches fundamental programming concepts.",
        features: [
          "Understand how computers work at a deeper level",
          "Fast execution and low memory usage",
          "Access to low-level features like pointers",
          "Used in operating systems, embedded systems, and databases",
          "Improves problem-solving skills",
        ],
      },
      {
        title: "Hello World Program",
        content: "Let's start with the classic 'Hello World' program to understand the basic structure of a C program.",
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      },
    ],
  },
  history: {
    title: "History and Features",
    description:
      "Explore the rich history of C and understand its powerful features that make it a preferred choice for developers.",
    sections: [
      {
        title: "Brief History",
        content:
          "C was developed in 1973 by Dennis Ritchie at Bell Labs. It was designed to be a high-level language that provided access to low-level memory through pointers, making it perfect for system software development.",
        features: [
          "Created to write UNIX operating system",
          "Influenced by earlier languages like B and ALGOL",
          "Standardized as C89/C90 by ANSI",
          "Updated with C99 standard adding new features",
          "C11 and C18 versions continue to improve the language",
        ],
      },
      {
        title: "Key Features",
        content: "C offers powerful features that have made it the lingua franca of programming languages.",
        features: [
          "Lightweight and efficient",
          "Pointers and dynamic memory management",
          "Modular programming with functions",
          "Pre-processor directives for conditional compilation",
          "Structured programming approach",
          "Bit-level operations and bitwise operators",
          "Portability across different platforms",
        ],
      },
    ],
  },
  installation: {
    title: "Installation and Setup",
    description: "Get started with C programming by setting up your development environment on your computer.",
    sections: [
      {
        title: "Windows Installation",
        content:
          "For Windows, you can use several C compilers. The most popular is MinGW (Minimalist GNU for Windows).",
        code: `Step 1: Download MinGW from www.mingw-w64.org
Step 2: Run the installer and follow the setup wizard
Step 3: Add MinGW to your system PATH
Step 4: Verify installation by opening Command Prompt and typing:
        gcc --version`,
      },
      {
        title: "Linux/Mac Installation",
        content:
          "On Linux and Mac, the GCC compiler is usually pre-installed or can be easily installed through package managers.",
        code: `On Linux (Ubuntu/Debian):
sudo apt-get update
sudo apt-get install gcc

On macOS:
brew install gcc

Verify installation:
gcc --version`,
      },
      {
        title: "Choose an Editor",
        content: "You can write C code in any text editor, but an IDE provides better development experience.",
        features: [
          "Visual Studio Code - lightweight and powerful",
          "Code::Blocks - free, open-source IDE",
          "Dev-C++ - simple IDE for beginners",
          "CLion - professional IDE by JetBrains",
          "Vim or Nano - command-line editors",
        ],
      },
    ],
  },
  structure: {
    title: "Structure of a C Program",
    description: "Understand the basic building blocks and structure of a C program.",
    sections: [
      {
        title: "Basic Structure",
        content: "A typical C program consists of several components that work together to perform a task.",
        code: `#include <stdio.h>        // Preprocessor directive
#include <stdlib.h>

// Function declaration (optional)
void greet();

// Global variables (optional)
int count = 0;

// Main function - entry point of program
int main() {
    printf("Welcome to C Programming!\\n");
    greet();
    return 0;  // Exit successfully
}

// Function definition
void greet() {
    printf("This is a function.\\n");
}`,
      },
      {
        title: "Components Explained",
        content: "Each part of a C program has a specific purpose.",
        features: [
          "Preprocessor directives - includes headers and macros",
          "Libraries - stdio.h for input/output, stdlib.h for utilities",
          "Global variables - accessible throughout the program",
          "Function declarations - prototypes defined before main",
          "main() function - execution starts here",
          "Return statement - indicates successful execution",
        ],
      },
    ],
  },
  datatypes: {
    title: "Data Types and Variables",
    description: "Learn about different data types in C and how to work with variables effectively.",
    sections: [
      {
        title: "Primitive Data Types",
        content: "C provides four fundamental data types to store different kinds of values.",
        features: [
          "int - stores integer values (-2147483648 to 2147483647)",
          "float - stores decimal numbers with single precision",
          "double - stores decimal numbers with double precision",
          "char - stores single character values",
        ],
      },
      {
        title: "Variable Declaration and Usage",
        content: "Variables must be declared before use, specifying their data type.",
        code: `#include <stdio.h>

int main() {
    // Variable declarations
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    double salary = 50000.50;
    
    // Display values
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    printf("Salary: %.2lf\\n", salary);
    
    return 0;
}`,
      },
      {
        title: "Modifiers",
        content: "Data type modifiers change the size and range of data types.",
        features: [
          "signed/unsigned - affects range of integer values",
          "short - reduces storage for integers",
          "long - increases storage for integers",
          "const - creates constants that cannot be modified",
          "static - retains value between function calls",
        ],
      },
    ],
  },
  "input-output": {
    title: "Input and Output",
    description: "Master reading input from users and displaying output to the console.",
    sections: [
      {
        title: "Output Functions",
        content: "The printf() function is used to display output to the console with formatted strings.",
        code: `#include <stdio.h>

int main() {
    // Basic output
    printf("Hello, World!\\n");
    
    // Output with variables
    int number = 42;
    float pi = 3.14159;
    printf("Number: %d, Pi: %.2f\\n", number, pi);
    
    // Different format specifiers
    printf("Integer: %d\\n", 100);
    printf("Float: %f\\n", 3.14);
    printf("Character: %c\\n", 'A');
    printf("String: %s\\n", "Hello");
    
    return 0;
}`,
      },
      {
        title: "Input Functions",
        content: "Use scanf() to read input from the user during program execution.",
        code: `#include <stdio.h>

int main() {
    int age;
    char name[50];
    float salary;
    
    // Read integer
    printf("Enter your age: ");
    scanf("%d", &age);
    
    // Read string
    printf("Enter your name: ");
    scanf("%s", name);
    
    // Read float
    printf("Enter your salary: ");
    scanf("%f", &salary);
    
    // Display input
    printf("\\nAge: %d\\nName: %s\\nSalary: %.2f\\n", age, name, salary);
    
    return 0;
}`,
      },
      {
        title: "Format Specifiers",
        content: "Format specifiers define how data should be displayed or read.",
        features: [
          "%d - integer values",
          "%f - floating-point numbers",
          "%.2f - float with 2 decimal places",
          "%c - single character",
          "%s - string of characters",
          "%x - hexadecimal values",
          "%o - octal values",
        ],
      },
    ],
  },
  operators: {
    title: "Operators",
    description: "Learn about different types of operators in C and how to use them effectively.",
    sections: [
      {
        title: "Arithmetic Operators",
        content: "Used to perform mathematical operations on numeric values.",
        code: `#include <stdio.h>

int main() {
    int a = 20, b = 10;
    
    printf("Addition: %d + %d = %d\\n", a, b, a + b);
    printf("Subtraction: %d - %d = %d\\n", a, b, a - b);
    printf("Multiplication: %d * %d = %d\\n", a, b, a * b);
    printf("Division: %d / %d = %d\\n", a, b, a / b);
    printf("Modulus: %d %% %d = %d\\n", a, b, a % b);
    
    return 0;
}`,
      },
      {
        title: "Comparison Operators",
        content: "Compare two values and return true (1) or false (0).",
        features: [
          "== equal to",
          "!= not equal to",
          "> greater than",
          "< less than",
          ">= greater than or equal to",
          "<= less than or equal to",
        ],
      },
      {
        title: "Logical Operators",
        content: "Combine multiple conditions using logical operators.",
        features: [
          "&& (AND) - true if all conditions are true",
          "|| (OR) - true if at least one condition is true",
          "! (NOT) - reverses the logical state",
        ],
      },
      {
        title: "Assignment and Bitwise",
        content: "Assign values and perform bit-level operations.",
        features: [
          "= basic assignment",
          "+=, -=, *=, /= compound assignments",
          "& bitwise AND",
          "| bitwise OR",
          "^ bitwise XOR",
          "~ bitwise NOT",
          "<<, >> bitwise shift operators",
        ],
      },
    ],
  },
  "control-statements": {
    title: "Control Statements",
    description: "Learn how to control the flow of your program using conditional statements.",
    sections: [
      {
        title: "if Statement",
        content: "Execute code block only if a condition is true.",
        code: `#include <stdio.h>

int main() {
    int age = 18;
    
    if (age >= 18) {
        printf("You are an adult.\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "if-else Statement",
        content: "Execute one block if condition is true, another if false.",
        code: `#include <stdio.h>

int main() {
    int score = 75;
    
    if (score >= 80) {
        printf("Grade: A\\n");
    } else if (score >= 60) {
        printf("Grade: B\\n");
    } else {
        printf("Grade: F\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "switch Statement",
        content: "Select one option from many using switch-case.",
        code: `#include <stdio.h>

int main() {
    int day = 3;
    
    switch(day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        default:
            printf("Invalid day\\n");
    }
    
    return 0;
}`,
      },
    ],
  },
  loops: {
    title: "Loops",
    description: "Master looping constructs to repeat code efficiently.",
    sections: [
      {
        title: "for Loop",
        content: "Repeat a block of code a specific number of times.",
        code: `#include <stdio.h>

int main() {
    // Print numbers 1 to 5
    for (int i = 1; i <= 5; i++) {
        printf("Number: %d\\n", i);
    }
    
    // Nested loops
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%d ", i * j);
        }
        printf("\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "while Loop",
        content: "Repeat code while a condition is true.",
        code: `#include <stdio.h>

int main() {
    int count = 1;
    
    while (count <= 5) {
        printf("Count: %d\\n", count);
        count++;
    }
    
    return 0;
}`,
      },
      {
        title: "do-while Loop",
        content: "Execute code once, then repeat while condition is true.",
        code: `#include <stdio.h>

int main() {
    int number;
    
    do {
        printf("Enter a positive number (0 to exit): ");
        scanf("%d", &number);
        if (number > 0) {
            printf("You entered: %d\\n", number);
        }
    } while (number != 0);
    
    printf("Program ended.\\n");
    return 0;
}`,
      },
      {
        title: "Loop Control",
        content: "Control loop execution with break and continue.",
        features: [
          "break - exits the loop immediately",
          "continue - skips current iteration and goes to next",
          "Useful for handling special conditions",
        ],
      },
    ],
  },
  arrays: {
    title: "Arrays",
    description: "Work with collections of data using arrays.",
    sections: [
      {
        title: "1D Arrays",
        content: "Arrays store multiple values of the same type in a single variable.",
        code: `#include <stdio.h>

int main() {
    // Declaration and initialization
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Access elements
    printf("First element: %d\\n", numbers[0]);
    printf("Third element: %d\\n", numbers[2]);
    
    // Loop through array
    for (int i = 0; i < 5; i++) {
        printf("numbers[%d] = %d\\n", i, numbers[i]);
    }
    
    return 0;
}`,
      },
      {
        title: "2D Arrays",
        content: "Two-dimensional arrays for matrix-like data structures.",
        code: `#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };
    
    // Access elements
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "Array Operations",
        content: "Common operations with arrays.",
        features: [
          "Finding minimum and maximum elements",
          "Calculating sum and average",
          "Searching for elements",
          "Sorting arrays",
          "Reversing arrays",
          "Merging arrays",
        ],
      },
    ],
  },
  strings: {
    title: "Strings",
    description: "Work with text and character sequences in C.",
    sections: [
      {
        title: "String Basics",
        content: "Strings in C are arrays of characters terminated by a null character (\\0).",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    // Method 1: Character array
    char str1[20] = "Hello";
    
    // Method 2: String literal
    char str2[] = "World";
    
    // Print strings
    printf("String 1: %s\\n", str1);
    printf("String 2: %s\\n", str2);
    
    // Get string length
    printf("Length of str1: %d\\n", strlen(str1));
    
    return 0;
}`,
      },
      {
        title: "String Functions",
        content: "C provides built-in functions for string manipulation.",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    
    // String concatenation
    strcat(str1, " ");
    strcat(str1, str2);
    printf("Concatenated: %s\\n", str1);
    
    // String copying
    strcpy(str2, "C Programming");
    printf("Copied: %s\\n", str2);
    
    // String comparison
    if (strcmp("abc", "abc") == 0) {
        printf("Strings are equal\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "Important String Functions",
        content: "Common functions available in string.h library.",
        features: [
          "strlen(str) - get length of string",
          "strcpy(dest, src) - copy string",
          "strcat(dest, src) - concatenate strings",
          "strcmp(str1, str2) - compare strings",
          "strrev(str) - reverse a string",
          "strchr(str, char) - find character",
          "strstr(str1, str2) - find substring",
        ],
      },
    ],
  },
  functions: {
    title: "Functions",
    description: "Create reusable code blocks with functions.",
    sections: [
      {
        title: "Function Definition",
        content: "Functions allow you to organize code into reusable blocks.",
        code: `#include <stdio.h>

// Function declaration (prototype)
int add(int a, int b);

// Main function
int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`,
      },
      {
        title: "Function Parameters",
        content: "Pass data to functions using parameters.",
        code: `#include <stdio.h>

// Function with multiple parameters
void greet(char name[], int age) {
    printf("Hello %s, you are %d years old.\\n", name, age);
}

int main() {
    greet("Alice", 25);
    greet("Bob", 30);
    return 0;
}`,
      },
      {
        title: "Return Values",
        content: "Functions can return values back to the caller.",
        features: [
          "void - function returns nothing",
          "int, float, double, etc. - return specific types",
          "return statement - exits function and returns value",
          "Main function should return 0 for success",
        ],
      },
      {
        title: "Scope and Lifetime",
        content: "Variables have scope and lifetime within functions.",
        features: [
          "Local variables - declared inside functions",
          "Global variables - accessible throughout program",
          "Static variables - retain value between calls",
          "Parameters - function arguments",
        ],
      },
    ],
  },
  pointers: {
    title: "Pointers",
    description: "Understand and master pointer concepts for advanced programming.",
    sections: [
      {
        title: "Pointer Basics",
        content: "Pointers store memory addresses of variables.",
        code: `#include <stdio.h>

int main() {
    int x = 10;
    int *ptr = &x;  // Pointer to x
    
    // Address of x
    printf("Address of x: %p\\n", &x);
    
    // Value of pointer
    printf("Pointer value: %p\\n", ptr);
    
    // Dereference pointer (access value)
    printf("Value at pointer: %d\\n", *ptr);
    
    // Modify value using pointer
    *ptr = 20;
    printf("New value of x: %d\\n", x);
    
    return 0;
}`,
      },
      {
        title: "Pointer to Pointer",
        content: "A pointer can point to another pointer.",
        code: `#include <stdio.h>

int main() {
    int x = 100;
    int *ptr1 = &x;
    int **ptr2 = &ptr1;
    
    printf("Value of x: %d\\n", x);
    printf("Value via ptr1: %d\\n", *ptr1);
    printf("Value via ptr2: %d\\n", **ptr2);
    
    return 0;
}`,
      },
      {
        title: "Pointer Arithmetic",
        content: "Perform arithmetic operations on pointers.",
        features: [
          "Increment/Decrement - move to next/previous address",
          "Pointer addition/subtraction",
          "Comparing pointers",
          "Important for array and string manipulation",
        ],
      },
    ],
  },
  structures: {
    title: "Structures and Unions",
    description: "Create complex data types with structures and unions.",
    sections: [
      {
        title: "Structures",
        content: "Structures allow you to combine multiple data types.",
        code: `#include <stdio.h>

// Define structure
struct Student {
    int id;
    char name[50];
    float gpa;
};

int main() {
    // Create structure variable
    struct Student s1;
    
    // Assign values
    s1.id = 1;
    strcpy(s1.name, "Alice");
    s1.gpa = 3.85;
    
    // Display values
    printf("ID: %d\\n", s1.id);
    printf("Name: %s\\n", s1.name);
    printf("GPA: %.2f\\n", s1.gpa);
    
    return 0;
}`,
      },
      {
        title: "Arrays of Structures",
        content: "Work with multiple structures using arrays.",
        code: `#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person people[3] = {
        {"Alice", 25},
        {"Bob", 30},
        {"Charlie", 28}
    };
    
    for (int i = 0; i < 3; i++) {
        printf("%s is %d years old\\n", people[i].name, people[i].age);
    }
    
    return 0;
}`,
      },
      {
        title: "Unions",
        content: "Unions store multiple members but use shared memory.",
        features: [
          "Similar to structures but save memory",
          "Only one member can hold value at a time",
          "Size equals size of largest member",
          "Useful for memory-constrained systems",
        ],
      },
    ],
  },
  "file-handling": {
    title: "File Handling",
    description: "Read from and write to files in C.",
    sections: [
      {
        title: "File Operations",
        content: "C provides functions to work with files.",
        code: `#include <stdio.h>

int main() {
    // Create/open file
    FILE *file = fopen("example.txt", "w");
    
    if (file == null) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Write to file
    fprintf(file, "Hello, File!\\n");
    fprintf(file, "This is line 2\\n");
    
    // Close file
    fclose(file);
    
    printf("File written successfully.\\n");
    return 0;
}`,
      },
      {
        title: "Reading Files",
        content: "Read content from existing files.",
        code: `#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "r");
    
    if (file == null) {
        printf("File not found!\\n");
        return 1;
    }
    
    char line[100];
    while (fgets(line, sizeof(line), file)) {
        printf("%s", line);
    }
    
    fclose(file);
    return 0;
}`,
      },
      {
        title: "File Modes",
        content: "Different modes for file operations.",
        features: [
          '"r" - read mode (file must exist)',
          '"w" - write mode (creates/overwrites file)',
          '"a" - append mode (add to end of file)',
          '"r+" - read and write',
          '"w+" - create file for reading and writing',
        ],
      },
    ],
  },
  preprocessor: {
    title: "C Preprocessor",
    description: "Understand preprocessor directives in C.",
    sections: [
      {
        title: "Preprocessor Directives",
        content: "Directives are processed before compilation.",
        code: `#include <stdio.h>
#define MAX 100
#define PI 3.14159

int main() {
    printf("Maximum value: %d\\n", MAX);
    printf("Pi value: %.5f\\n", PI);
    return 0;
}`,
      },
      {
        title: "Conditional Compilation",
        content: "Include or exclude code based on conditions.",
        code: `#define DEBUG 1

#ifdef DEBUG
    printf("Debug mode enabled\\n");
#endif

#ifndef PRODUCTION
    printf("Not in production\\n");
#endif`,
      },
      {
        title: "Common Directives",
        content: "Important preprocessor directives.",
        features: [
          "#include - include header files",
          "#define - create constants and macros",
          "#ifdef, #ifndef - conditional compilation",
          "#if, #elif, #else - conditional blocks",
          "#pragma - compiler directives",
          "#error - generate compile error",
        ],
      },
    ],
  },
  practice: {
    title: "Practice Examples",
    description: "Apply your knowledge with practical programming exercises.",
    sections: [
      {
        title: "Calculator Program",
        content: "Build a simple calculator using switch statements.",
        code: `#include <stdio.h>

int main() {
    float num1, num2;
    char op;
    
    printf("Enter first number: ");
    scanf("%f", &num1);
    
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);
    
    printf("Enter second number: ");
    scanf("%f", &num2);
    
    switch(op) {
        case '+':
            printf("Result: %.2f\\n", num1 + num2);
            break;
        case '-':
            printf("Result: %.2f\\n", num1 - num2);
            break;
        case '*':
            printf("Result: %.2f\\n", num1 * num2);
            break;
        case '/':
            if (num2 != 0)
                printf("Result: %.2f\\n", num1 / num2);
            else
                printf("Error: Division by zero!\\n");
            break;
        default:
            printf("Invalid operator!\\n");
    }
    
    return 0;
}`,
      },
      {
        title: "Fibonacci Series",
        content: "Generate Fibonacci series using loops and functions.",
        code: `#include <stdio.h>

void fibonacci(int n) {
    int a = 0, b = 1;
    
    printf("Fibonacci Series (first %d terms):\\n", n);
    
    for (int i = 0; i < n; i++) {
        printf("%d ", a);
        int temp = a + b;
        a = b;
        b = temp;
    }
    printf("\\n");
}

int main() {
    fibonacci(10);
    return 0;
}`,
      },
      {
        title: "Sorting Arrays",
        content: "Sort array elements using bubble sort algorithm.",
        code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    
    bubbleSort(arr, n);
    
    printf("Sorted array:\\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}`,
      },
    ],
  },
}

// ========================================
// DOM Elements and Initialization
// ========================================

const contentContainer = document.getElementById("contentContainer")
const topicButtons = document.querySelectorAll(".topic-btn")
const searchInput = document.getElementById("searchInput")
const themeToggle = document.getElementById("themeToggle")
const sidebarToggle = document.getElementById("sidebarToggle")
const topicsList = document.getElementById("topicsList")

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "light"
document.documentElement.setAttribute("data-theme", savedTheme)

// ========================================
// Render Content Function
// ========================================

function renderTopic(topicKey) {
  const topic = tutorialContent[topicKey]
  if (!topic) return

  let html = `
        <div class="topic-content">
            <h1 class="topic-title">${topic.title}</h1>
            <p class="topic-description">${topic.description}</p>
    `

  topic.sections.forEach((section, index) => {
    html += `
            <div class="section">
                <h2 class="section-title">${section.title}</h2>
                <p class="section-content">${section.content}</p>
        `

    if (section.features) {
      html += '<ul class="feature-list">'
      section.features.forEach((feature) => {
        html += `<li>${feature}</li>`
      })
      html += "</ul>"
    }

    if (section.code) {
      html += `
                <div class="code-example">
                    <div class="code-header">
                        <h4>Example</h4>
                        <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
                    </div>
                    <div class="code-block">
                        <code>${escapeHtml(section.code)}</code>
                    </div>
                </div>
            `
    }

    html += "</div>"
  })

  html += "</div>"
  contentContainer.innerHTML = html
}

// ========================================
// Utility Functions
// ========================================

function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

function copyCode(button) {
  const codeBlock = button.closest(".code-example").querySelector("code")
  const text = codeBlock.textContent

  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent
    button.textContent = "Copied!"
    setTimeout(() => {
      button.textContent = originalText
    }, 2000)
  })
}

// ========================================
// Event Listeners
// ========================================

// Topic button clicks
topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    topicButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")
    renderTopic(button.dataset.topic)

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
      topicsList.classList.remove("open")
    }
  })
})

// Theme toggle
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Sidebar toggle for mobile
sidebarToggle.addEventListener("click", () => {
  topicsList.classList.toggle("open")
})

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()

  topicButtons.forEach((button) => {
    const topicName = button.textContent.toLowerCase()
    if (topicName.includes(searchTerm)) {
      button.parentElement.style.display = ""
    } else {
      button.parentElement.style.display = "none"
    }
  })
})

// Initialize with first topic
renderTopic("introduction")
