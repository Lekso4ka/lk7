/*
    REST API
    RestFull API


    CRUD (БД)   RESTfull        REST
    Create -    POST            POST
    Read -      GET             GET
    Update -    PUT / PATCH     POST
    Ddelete -   DELETE          GET

    http://mysite.ru/api/goods/2/delete

    API - application programm interface

    GET
    POST
    PUT (PATCH)
    DELETE
*/

// Котики

let cat = {
    id: 3,
    name: "Матрица",
    img_link: "https://mindset-potential.com/wp-content/uploads/2022/05/0pexels-photo-1870376.jpeg.jpg",
    age: 1,
    rate: 10,
    description: "Просто потому что =)",
    favourite: true
}

fetch("https://sb-cats.herokuapp.com/api/2/lekso4ka/show")
    .then(res => res.json())
    .then(ans => {
        console.log(ans.data);
    })

fetch("https://sb-cats.herokuapp.com/api/2/lekso4ka/add", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(cat)
})
    .then(res => res.json())
    .then(ans => {
        if (ans.message === "ok") {
            console.log("Cat added")
        } else {
            console.log(ans);
        }
    })