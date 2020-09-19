/**
 * 
 * Coded with love
 * File: index.js
 * File Created: Wednesday, 16th 2020 10:01 AM
 * @author Wisdom Tochi Kalu
 * @version 1.0
 * Modified By: Wisdom Tochi Kalu
 * Last Modified: Saturday, 29 September 2020 10:59 AM
 * Copyright @2020 Wisdom Tochi Kalu
 * 
 */
 



/* string validation variable*/
let testString = /^[a-zA-Z]+$/i;

/* email validation variable */
let testEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

/* address validation*/
let testAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;

first = document.myForm.firstname;
middle = document.myForm.mname;

/* CHECKS WHETHER INPUT IS FILLED, IF NOT, IT BRINGS THE CURSOR BACK TO THE MISSING FIELD*/
function validate() {

    if(first.value == "" ) { // checks whether firstname is empty
            alert( "Opps! firstname is required!" ); 
            first.focus();
            return (false) ;
    }  

    if(!testString.test(first.value)) { // validates that first name is a string, i.e, does not contain numbers or dots, or spaces
            alert( "Oops! Invalid Firstname! Only letters are accepted! Numbers, spaces and punctuations are not accepted!" ); 
            first.focus() ;
            return false;
    } 

    if(middle.value == "") { // checks whether middle name is empty
            window.alert( "Oops! Please provide your middle name!" );
            middle.focus() ;
            return false;

    } 

    if( !testString.test(middle.value)) { // // validates that middle name is a string, i.e, does not contain numbers or dots, or spaces
            alert("Oops! Invalid Middle name! Only letters are accepted! Numbers, spaces, punctuations etc are not accepted!"); 
            middle.focus() ;
            return false;
    } 

    if( document.myForm.lastname.value == "") { // checks whether last name is empty
            alert("Please provide your lastname!" );
            document.myForm.lastname.focus() ;
            return false;
    } 

    if( !testString.test(document.myForm.lastname.value)) { // validates that last name is a string, i.e, does not contain numbers or dots, or spaces
            alert("Oops! Invalid last name! Only letters are accepted! Numbers, spaces, punctuations etc are not accepted!"); 
            document.myForm.lastname.focus() ;
            return false;
    } 

    if( document.myForm.gender.value == "-1" ) { // checks whether gender is empty
            alert("Please provide your gender!" );
            document.myForm.gender.focus() ;
            return false;
     }

    if( document.myForm.phone.value == "" || isNaN(document.myForm.phone.value)) { // validates that the input is both a number and is not empty
            alert("Invalid or missing phone number! Only numbers are accepted and you cannot leave your phone number blank!" );
            document.myForm.phone.focus() ;
            return false;
    } 

    if(document.myForm.address.value == "" || !testAddress.test(document.myForm.address.value)) { // checks whether address is empty or invalid
            alert("Opps! Invalid or missing address!" ); 
            document.myForm.address.focus() ;
            return false;
    } 

    if(document.myForm.email.value == "" || !testEmail.test(document.myForm.email.value)) { // checks whether email is empty or invalid
            alert("Oops! missing or invalid email!" );
            document.myForm.email.focus() ;
            return false;
            braek;
    } 
    
    else {

        alert("Your form has been submitted successfully!");
    } 
}

/* RETRIEVING AND STORING INFORMATION IN THE LOCAL STORAGE */

const form = document.getElementById('form-items');

function sendForm() {
    let firstname = form.elements['firstname'].value;
    let middlename = form.elements['middlename'].value;
    let lastname = form.elements['lastname'].value;
    var gender = form.elements['gender'].value;
    var phone = form.elements['phone'].value;
    var email = form.elements['email'].value;
    var address = form.elements['address'].value;

    //saving into the local storage 
    window.localStorage.setItem("formval1", firstname);
    window.localStorage.setItem("formval2", middlename);
    window.localStorage.setItem("formval3", lastname);
    window.localStorage.setItem("formval4", gender)
    window.localStorage.setItem("formval5", phone);
    window.localStorage.setItem("formval6", email);
    window.localStorage.setItem("formval7", address);
   
}
