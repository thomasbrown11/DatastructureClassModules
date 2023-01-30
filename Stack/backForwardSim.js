"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_js_1 = __importDefault(require("./Stack.js"));
//prompt not working as function, not testable (Codecademy tutorial);
const backPages = new Stack_js_1.default();
const nextPages = new Stack_js_1.default();
let currentPage = 'https://www.google.com/?safe=active&ssui=on';
// ------------------------------
// Helper Functions
// ------------------------------
//checker funtion to display where you are
function showCurrentPage(action) {
    console.log(action);
    console.log(`Current page: ${currentPage}`);
    console.log(`Back page: ${backPages.peek()}`);
    console.log(`Next page: ${nextPages.peek()}`);
}
//when visiting new page add previous page to top of backPages stack and clear nextPages stack
//Display currentPage
function newPage(page) {
    backPages.push(currentPage);
    currentPage = page;
    while (!nextPages.isEmpty()) {
        nextPages.pop();
    }
    showCurrentPage("NEW: ");
}
//when navigating backwards save current page to nextPages stack before moving
//pop returns the removed page, so remove head of backPages stack and set it to current page (that way if you hit back again you'll go to the next back page rather than loop)
function backPage() {
    nextPages.push(currentPage);
    currentPage = backPages.pop();
    showCurrentPage("Back: ");
}
//when hitting forward push the current page to backPages stack before moving (so it's accessible by back button)
//move currentPage to what's on top of the nextPages stack, and remove that from that stack (to hitting next again will go to the next top of the stack rather than loop)
function nextPage() {
    backPages.push(currentPage);
    currentPage = nextPages.pop();
    showCurrentPage("Next: ");
}
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? ';
let finish = false;
let showBack = false;
let showNext = false;
showCurrentPage('Default: ');
//while loop constitutes runtime of bash program, only finishes upon quit (user entry q)
//run node backForwardSim.js to test
while (!finish) {
    let instructions = baseInfo;
    //handle if backpages available 
    if (backPages.peek() != null) {
        instructions = `${instructions}, ${backInfo}`;
        showBack = true;
    }
    else {
        //grey out back if no back pages 
        showBack = false;
    }
    //handle if forward page exists 
    if (nextPages.peek() != null) {
        instructions = `${instructions}, ${nextInfo}`;
        showNext = true;
    }
    else {
        //grey out next buton if no next page
        showNext = false;
    }
    instructions = `${instructions}, ${quitInfo}.`;
    console.log(instructions);
    //prompt to get info from user
    //basically bash input prompt for url or quit,next,forward
    const answer = prompt(question);
    //handler for answer convert to lowercase
    let lowerCaseAnswer = answer.toLowerCase();
    //if user inputs something other than a next,back, or quit command then process as url. 
    if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
        //doesn't lowercase as it is a url
        newPage(answer);
    }
    else if ((showBack) && (lowerCaseAnswer === 'b')) {
        //if there's a back page and user enters b go back
        backPage();
    }
    else if ((showNext) && (lowerCaseAnswer === 'n')) {
        //if there's a next page and user enters n go to next
        nextPage();
        //no checks in example?
    }
    else if ((!showBack) && (lowerCaseAnswer === 'b')) {
        console.log('There is no page to go back to');
        //no checks in example?
    }
    else if ((!showNext) && (lowerCaseAnswer === 'n')) {
        console.log('There is no page to move forward to');
    }
    else if (lowerCaseAnswer === 'q') {
        //quit program
        finish = true;
    }
}
