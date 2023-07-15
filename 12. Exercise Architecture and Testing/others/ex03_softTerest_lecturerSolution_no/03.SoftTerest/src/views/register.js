import { register } from "../api/user.js";

const section = document.getElementById("registerView");
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;
export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();
    //const errors = [];
    const formData = new FormData(form);
    const { email, password, repeatPassword } = Object.fromEntries(formData);
  
    // console.log(email, password, repeatPassword);
   //  if (!email || !password || !repeatPassword) {
   //      alert("Please fill all fields");
   //      errors.push("all fields are required");
   //  } 
   //  if (email.length < 3) {
   //      alert('Email is too short');
   //      errors.push('email');
   //  } 
   //  if (password.length < 3) {
   //      alert('Password is too short');
   //      errors.push('password');
   //  }
   
     if (password !== repeatPassword) {
         alert("Passwords do not match"); 
    } else  {
        await register(email, password);
       // alert("Registration successful");
        // form.reset();
        ctx.updateNav();
        ctx.goTo("/catalog");
    }
}