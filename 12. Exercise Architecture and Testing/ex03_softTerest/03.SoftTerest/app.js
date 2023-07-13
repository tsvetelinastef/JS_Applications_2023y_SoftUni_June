// console.log('hello world);

// MVC Model
// app.js => controller
// views => login, register, dashboard/catalog, detail, homepage
// router => paths towards all the views defined
// api => methods, async functions 

const host = "http://localhost:3030/";

async function requester(method, url, data) {
    const user = sessionStorage.getItem("user");
    const options = {
        method: method,
        headers: {},
    };
    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }
    if(user){
        const token = user.accessToken;
        options.headers["X-Authorization"] = token;
    }

    try {
        const res = await fetch(`${host}${url}`, options);
        if (!res.ok) {
            if (res.status === 403) {
                sessionStorage.removeItem("user");
                throw new Error("Access denied");
            }
            const err = await res.json();
            throw new Error(err.message);
        }
        if (res.status === 204) {
            return res;
        } else {
            return res.json();
        }
    } catch (error) {

    }
}