import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Java100QuestionInner from "../java100/Java100QuestionInner";
import Java100Question from "../java100/Java100Question";

const Articles = () => {
  const codeString = [
    {
      id: 1,
      language: "java",
      question: "Simple java program?",
      codeString: `package thita.java;

      public class HelloWorld {
          public static void main(String[] args) {
              System.out.println("Welcome to the thitainfo");
          }
      }
      `,
      output: "Welcome to the thitainfo",
    },
    {
      id: 2,
      language: "java",
      question: "Print integer in java?",
      codeString: `package thita.java;

      public class Integers {
          public static void main(String[] args) {
              int c; // declaring a variable
              /*Using for loop to repeat instruction execution*/
              for (c = 1; c <= 10; c++){
                  System.out.println(c);
              }
          }
      }
      `,
      output: `1
        2
        3
        4
        5
        6
        7
        8
        9
        10`,
    },
    {
      id: 3,
      language: "java",
      question: " Command Line Argument in java?",
      codeString: `package thita.java;

      public class Arguments {
          public static void main(String[] args) {
              for (String t: args) {
                  System.out.println(t);
              }
          }
      }
      `,
      output: "Try Your Self",
    },
    {
      id: 4,
      language: "java",
      question: "How to get Using input using Scanner in java?",
      codeString: `package thita.java;

      import java.util.Scanner;
      
      public class GetInputFromUser {
          public static void main(String[] args) {
              int a;
              float b;
              String s;
              Scanner scanner  = new Scanner(System.in);
              System.out.println("Enter a string");
              s = scanner.nextLine();
              System.out.println("You entered string: " + s);
      
              System.out.println("Enter an integer");
              a = scanner.nextInt();
              System.out.println("You entered integer: "+ a);
      
              System.out.println("Enter a float");
              b = scanner.nextFloat();
              System.out.println("You entered float: " + b);
          }
      }
      `,
      output: `Enter a string
        thitainfo
        You entered string: thitainfo
        Enter an integer
        100
        You entered integer: 100
        Enter a float
        111.11
        You entered float: 111.11`,
    },
    {
      id: 5,
      language: "java",
      question: "How to convert Fahrenheit to Celsius Program in java?",
      codeString: `package thita.java;
      import java.util.Scanner;
      
      public class FahrenheitToCelsius {
          public static void main(String[] args) {
              float temperature;
              Scanner in = new Scanner(System.in);
      
              System.out.println("Enter temperature in Fahrenheit");
              temperature = in.nextFloat();
              temperature = ((temperature - 32) * 5) / 9;
      
              System.out.println("Temperatue in Celsius = " + temperature);
          }
      }
      `,
      output: `Enter temperature in Fahrenheit
        302
        Temperatue in Celsius = 150.0`,
    },
    {
      id: 6,
      language: "java",
      question: "How to swap 2 no using 3rd variable Program in java?",
      codeString: `package thita.java;
      import java.util.Scanner;
      
      public class SwapNumbers {
          public static void main(String[] args) {
              int x, y, temp;
              System.out.println("Enter x and y");
              Scanner scanner = new Scanner(System.in);
      
              x = scanner.nextInt();
              y = scanner.nextInt();
      
              System.out.println("Before Swapping\nx = " + x +"\ny = " + y);
              temp = x;
              x = y;
              y = temp;
      
              System.out.println("Before Swapping\nx = " + x +"\ny = " + y);
          }
      }
      `,
      output: `Enter x and y
        10
        20
        Before Swapping
        x = 10
        y = 20
        Before Swapping
        x = 20
        y = 10`,
    },
    {
      id: 7,
      language: "java",
      question: "How to swap 2 no without using 3rd variable Program in java?",
      codeString: `package thita.java;
      import java.util.Scanner;
      
      public class SwapNumbers {
          public static void main(String[] args) {
              int x, y;
              System.out.println("Enter x and y");
              Scanner scanner = new Scanner(System.in);
      
              x = scanner.nextInt();
              y = scanner.nextInt();
      
              System.out.println("Before Swapping\nx = " + x +"\ny = " + y);
              x = x + y;
              y = x - y;
              x = x - y;
      
              System.out.println("Before Swapping\nx = " + x +"\ny = " + y);
          }
      }
      `,
      output: `Enter x and y
        10
        20
        Before Swapping
        x = 10
        y = 20
        Before Swapping
        x = 20
        y = 10`,
    },
    {
      id: 8,
      language: "java",
      question: "How to add two number Program in java?",
      codeString: `package thita.java;
      import java.util.Scanner;
      
      public class AddNumbers {
          public static void main(String[] args) {
              int x, y, z;
              System.out.println("Enter two integers to calculate their sum ");
              Scanner sc = new Scanner(System.in);
              x = sc.nextInt();
              y = sc.nextInt();
              z = x + y;
              System.out.println("Sum of entered integers = "+z);
          }
      }
      `,
      output: `Enter two integers to calculate their sum 
        10
        20
        Sum of entered integers = 30`,
    },
    {
      id: 9,
      language: "java",
      question: "Find Largest no in java?",
      codeString: `package thita.java;
      import java.util.Scanner;
      
      public class LargestOfThreeNumbers {
          public static void main(String[] args) {
              int x, y, z;
              System.out.println("Enter three integers ");
              Scanner in = new Scanner(System.in);
              x = in.nextInt();
              y = in.nextInt();
              z = in.nextInt();
              if ( x > y && x > z )
                  System.out.println("First number is largest.");
              else if ( y > x && y > z )
                  System.out.println("Second number is largest.");
              else if ( z > x && z > y )
                  System.out.println("Third number is largest.");
              else
                  System.out.println("Entered numbers are not distinct.");
          }
      }
      `,
      output: `Enter three integers 
        10
        20
        30
        Third number is largest.`,
    },
    {
      id: 10,
      language: "java",
      question: "If Else clause in java?",
      codeString: `package thita.java;

      public class Condition {
          public static void main(String[] args) {
              boolean learning = true;
              if (learning){
                  System.out.println("Java programmer");
              }else{
                  System.out.println("What are you doing here?");
              }
          }
      }
      `,
      output: "Java programmer",
    },
    {
      id: 11,
      language: "java",
      question: "If Else clause in java?",
      codeString: "Full Stack Developer",
      output:
        " Highly qualified and creative software engineer with experience in the industry. I would excel in the collaborative environment with cutting edge technology and modern cloud environment",
    },
  ];

  const [code] = useState(codeString);
  return (
    <Container>
      <Row>
        <Col sm={9}>
          {code.map((obj) => (
            <Java100Question code={obj} />
          ))}
        </Col>
        <Col sm={3}>
          <ListGroup className="text-center font-monospace fw-bolder">
            {code.map((obj) => (
              <Java100QuestionInner code={obj} />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Articles;
