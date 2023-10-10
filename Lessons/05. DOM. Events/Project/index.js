

const  userData = confirm();

console.log(userData)

const promise = new Promise((resolve, reject) => {
    if (userData === true) {
        resolve("OK");
    } else {
        reject("Error пользователь не подтвердил")
    }
})

promise
    .then((text) => console.log(text))
    .catch((err) => console.log(err))