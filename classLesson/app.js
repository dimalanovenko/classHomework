// function Clock({ template }) {
//     let timer;
//     function render() {
//         let date = new Date();
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);
//     }
//     this.stop = function () {
//         clearInterval(timer);
//     };
//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };
// }
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// class Clock {

//     constructor({ template }) {
//         this.template = template;
//     }

//     render() {
//         let date = new Date();
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//         console.log(output);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
//     stop() {
//         this.render();
//         clearInterval(this.timer);
//     }

// }
// let clock = new Clock({ template: 'h:m:s' });
// clock.start();
// clock.end();


// post example

// async function postData(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data) // body data type must match "Content-Type" header
//         });

//         // Check if the response is not ok
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const jsonResponse = await response.json(); // parses JSON response into native JavaScript objects
//         return jsonResponse;
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//         // Handle the error, e.g., show an alert to the user
//         alert('Error: ' + error.message);
//     }
// }


class Requests {

    constructor(baseURL = '', data = {}) {
        this.baseURL = baseURL;
        this.data = data;
    }

    async get() {
        try {
            const response = await fetch(this.baseURL, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUzNWViMjc2ZDA4N2RkMzE3Y2YwMzkiLCJ1c2VybmFtZSI6ImRpbWFsYW5vdmVua28wIiwiaWF0IjoxNzMzNTE3MTEwLCJleHAiOjE3MzM1MjQzMTB9.wHu5EKCb4W_9x-x0-K4yUDul26AI-eh8MtCy-hWBmbM"
                },
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            return result;

        } catch (e) {
            console.error('GET Error:', e);
        }
    }

    async post() {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.data)
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            return result;

        } catch (e) {
            console.error('POST Error:', e);
        }
    }

    async put() {
        try {
            const response = await fetch(this.baseURL, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUzNWViMjc2ZDA4N2RkMzE3Y2YwMzkiLCJ1c2VybmFtZSI6ImRpbWFsYW5vdmVua28wIiwiaWF0IjoxNzMzNTE3MTEwLCJleHAiOjE3MzM1MjQzMTB9.wHu5EKCb4W_9x-x0-K4yUDul26AI-eh8MtCy-hWBmbM"
                },
                body: JSON.stringify(this.data)
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            return result;

        } catch (e) {
            console.error('PUT Error:', e);
        }
    }

    async delete() {
        try {
            const response = await fetch(this.baseURL, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            return result;

        } catch (e) {
            console.error('DELETE Error:', e);
        }
    }
}

let getRequest = new Requests('http://49.13.31.246:9191/me');
getRequest.get();

let postRequest = new Requests('http://49.13.31.246:9191/signin', {
    "username": "dimalanovenko0",
    "password": "12345678a!",
});
postRequest.post();

//token	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUzNWViMjc2ZDA4N2RkMzE3Y2YwMzkiLCJ1c2VybmFtZSI6ImRpbWFsYW5vdmVua28wIiwiaWF0IjoxNzMzNTE3MTEwLCJleHAiOjE3MzM1MjQzMTB9.wHu5EKCb4W_9x-x0-K4yUDul26AI-eh8MtCy-hWBmbM"

let putRequest = new Requests('http://49.13.31.246:9191/me', {
    "username": "dimalanovenko0",
    "avatar": "any",
    "age": "19",
    "bio": "the best developer ever",
    "fullName": "Dmytro Lanovenko",
    "balance": "1000000000"
});
putRequest.put();

let deleteRequest = new Requests('http://49.13.31.246:9191/me');
// deleteRequest.delete();


