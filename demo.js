//check the number is even or odd
// var input=prompt('Enter the number');
// var num=Number(input);
// if(num%2==0)
//   alert("Number is even");
// else 
//   alert("Number is odd");
  
//Count the number of digit
// var input=prompt('Enter the number');
//  var num=Number(input);
//  var count=0;
//  while(num>1)
//  {
//      num=num/10;
//     //  console.log(num);
//      count++;
//  }
//  document.write("Number of digits:",count);

//Simple calculator
var input1=promt('Enter the number 1st:');
  var n1=Number(input1);
var input2=promt('Enter the number 2nd:');
  var n2=Number(input2);
var choice=prompt('Enter the choice:');
  switch(choice)
  {
     case 1: prompt("Addition of two numbers is:",n1+n2);
             break;
     case 2: prompt("Subtraction of two numbers is:",n1-n2);
             break;
     case 3: prompt("Multiply of two numbers is:",n1*n2);
             break;
     case 4:  if(n2==0)
             {
                 prompt("Division not possible");
             }
             prompt("Divsion of two numbers is:",n1/n2);
             break;
  }


  //Count the number which are present in the digit 