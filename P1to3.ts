
/*Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”*/
// Name :Muhammad Aqib khan
import inquirer from "inquirer";
let userData= await inquirer.prompt(
    {
        type:"input",
        name:"UserName",
        message:"what is user Name ?"

    }
)

console.log(`${userData.UserName}: would you like to learn some phyton today`);
console.log(`${userData.UserName}`.toLowerCase());
console.log(`${userData.UserName}`.toUpperCase());


                    // Muhammad Aqib khan //
// <--------------------------------------------------------------------------------------->//


// / problem two is starting from here so focus on it
// name :Muhammad Aqib khan
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
  
    var names:string[]=["Sir Naveed","siR ZiA"];
// In lowercase :
                let lowerName:string[]=names.map(val =>val.toLowerCase());
            console.log(lowerName)
//  In uppercase
                let upperName:string[]=names.map(val =>val.toUpperCase());
            console.log(upperName)



//                                 // Muhammad Aqib khan //
// // <----------------------------------------------------------------------------------->///

// // problem no 4 four is starting form here 

// // Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks;

    type Quote={
        quote:string;
       Author:string;
        
    }
    var advice:Quote[]=[
    {          
        Author:"THe excess of everthing is bad",
        quote:"Eric ",
        
    },
    {
        quote:"all work and no play makes a jack dull boy",
        Author:"Muhammad Aqib khan",
    },
    {
        quote:"Carpe Diem.",
        Author:"Horace",
    },
    {
        quote:"Hakuna Matata",
        Author:" Timon and Pumbaa"
    },
    {
        quote:"Be yourself; everyone else is already taken." ,
        Author:"Oscar Wilde",
    }
]
let famAuthor=advice.find(auth => auth.Author==='Muhammad Aqib khan' )
console.log(famAuthor);


//                     // Muhammad Aqib khan //
// <----------------------------------------------------------------------------------------->//