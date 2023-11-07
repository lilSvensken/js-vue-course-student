const userData = confirm();
const promise = new Promise((resolve,reject) => {
        if (userData == "red") {
            resolve("red");
        } else {
            reject("green");
        }
})
promise
.then((text) => console.log(text))
.catch((err) => console.error(err))