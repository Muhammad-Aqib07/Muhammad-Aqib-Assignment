// problem no :5 is starting form here:
var advice = [
    {
        Author: "THe excess of everthing is bad",
        quote: "Eric ",
    },
    {
        quote: "all work and no play makes a jack dull boy",
        Author: "Muhammad Aqib khan",
    },
    {
        quote: "Carpe Diem.",
        Author: "Horace",
    },
    {
        quote: "Hakuna Matata",
        Author: " Timon and Pumbaa"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        Author: "Oscar Wilde",
    }
];
const famous_person = "Muhammad Aqib khan";
const favQuote = advice.find(advice => advice.Author === famous_person);
let Aqib = "";
if (favQuote) {
    Aqib = `"${favQuote.quote}" by :${favQuote.Author} `;
}
else {
    Aqib = `Sorry, there is no quote by ${famous_person} in the list.`;
}
console.log(Aqib);
// Muhammad Aqib khan //
// <---------------------------------------------------------------------------------------------------------->//
// Name: Muhammad Aqib khan
// problem no 7 is starting from here
/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/
console.log("answer", 4 + 4);
console.log("answer", 12 - 4);
console.log("answer", 16 / 2);
console.log("answer", 2 * 4);
export {};
// Muhammad Aqib khan //
// <--------------------------------------------------------------------------------------------------------?>//
