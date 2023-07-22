import { html } from "../../../node_modules/lit-html/lit-html.js";

export const registerTemplate = (submitHandler) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${submitHandler}>
            <input
             type="text"
                name="email"
                id="register-email"
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
            />
            <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
            />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

//  <section id="login">
//     <div class="form">
//     <h2>Login</h2>
//     <form class="login-form" @submit=${submitHandler}>
//         <input type="text" name="email" id="email" placeholder="email" />
//         <input type="password" name="password" id="password" placeholder="password" />
//         <button type="submit">login</button>
//         <p class="message">
//         Not registered? <a href="/register">Create an account</a>
//         </p>
//     </form>
//     </div>
// </section>; 
