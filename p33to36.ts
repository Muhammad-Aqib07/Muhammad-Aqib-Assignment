// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

 var current_users:string[]=["JOHN","AQIB","DUDE","USMAN","Umer"];
 var new_users:string[]=["AQIB","Umer","Imam","Baber","warnor"];
 function UserNameAvail(Username:string,):boolean {
    const upercaseUser=Username.toUpperCase();
    const Upercase=current_users.map(users=>users.toUpperCase());
    return !Upercase.includes(upercaseUser);
    }
    for (const newUsername of new_users) {
        if (UserNameAvail(newUsername)) {
            console.log(`Username '${newUsername}' is available.`);
        } else {
            console.log(`Username '${newUsername}' is already taken. Please choose a different one.`);
        }
    }
    


    //  Muhammad AQib khan 
    // <------------------------------------------------------------------------------------------------------->
//     Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    
      var ordinalNum:number[]=[1,2,3,4,5,6,7,8,9]
            for(const num of ordinalNum){
            let ordinal:string="";

         if (num === 1){
           ordinal="st";
      }
        else if(num==2){
          ordinal="2nd";
    }
    else if(num==3){
        ordinal="rd";
    }else{
        ordinal="th";
    }
    console.log(`${num}${ordinal}`)
}

// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];


for (const pizza of favoritePizzas) {
    console.log(pizza);
}

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the for loop to express your love for pizza
console.log("I had never ate pizza");
