/* If Else IF Condition */
var per = prompt("Enter your Percentage : ");

if (per >= 80 && per <= 100) {
    document.write("You are in Merit.");
}else  if (per >= 60 && per < 80) {
    document.write("You are in Ist Division.");
}else if (per >= 45 && per < 60) {
    document.write("You are in IIst Division.");
}else if (per >= 33 && per < 45) {
    document.write("You are in IIIst Division.");
}else if (per < 33) {
    document.write("You are Fail.");
}else {
    document.write("Please Enter Valid Percentage.");  
}