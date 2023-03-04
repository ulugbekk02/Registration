"user strict";
let $form = document.getElementById("form");
let $maleBox = document.getElementById(".male-box");
let $femaleBox = document.getElementById(".female-box");

$form.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    let {firstName, lastName, email, phone, country, city, gender, password, confirmpassword} = evt.target.elements
    
    
    if (password.value !== confirmpassword.value) {
        alert ("Sizning kiritgan kodingiz tasdiqlanmadi!. Iltimos qayta urinib ko'ring...!");
        password.value = null;
        confirmpassword.value = null;
    };
    
    if (gender.value == "male") {
        $maleBox.innerHTML += `
        <li style="width: 400px; background-color: rgb(0, 140, 255); margin: 10px; list-style-type: none; display: inline-block;">
        <p>First name: ${firstName.value}</p>
        <p>Last name: ${lastName.value}</p>
        <p>Email: ${email.value}</p>
        <p>Phone: ${phone.value}</p>
        <p>Country: ${country.value}</p>
        <p>City: ${city.value}</p>
        <p>Gender: ${gender.value}</p>
        <p>Password: ${password.value}</p>
        </li>
        `;
    }else if (gender.value == "female") {
        $femaleBox.innerHTML += `
        <li style="width: 400px; background-color: red; margin: 10px; list-style-type: none; display: inline-block;">
        <p>First name: ${firstName.value}</p>
        <p>Last name: ${lastName.value}</p>
        <p>Email: ${email.value}</p>
        <p>Phone: ${phone.value}</p>
        <p>Country: ${country.value}</p>
        <p>City: ${city.value}</p>
        <p>Gender: ${gender.value}</p>
        <p>Password: ${password.value}</p>
        </li>
        `;
    }else{
        alert("Genderni tanlang...");
    }
    
    firstName.value = null;
    lastName.value = null;
    email.value = null;
    phone.value = null;
    country.value = null;
    city.value = null;
    gender.value = null;
    password.value = null;
    confirmpassword.value = null;
    
});