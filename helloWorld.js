// Once you are on the issue-1 branch, change the helloWorld.js file. Modify
// your program to accept input from the user and then print out whatever
// was input.

//To output the details entered by the user, we need a page so I created HTML file called helloWorld.html and 
//linked it to this javascript file
function getInputUser(){
    var course = window.prompt('Enter course you are doing?: ');
    alert('Course registered is: '+ course);
    console.log('Course registered is: '+ course);
}
