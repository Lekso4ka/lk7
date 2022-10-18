const container = document.querySelector(".container");

fetch("https://sb-cats.herokuapp.com/api/2/lekso4ka/show")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "ok") {
            data.data.forEach(cat => {
                createCard(cat, container);
            });
        } else {
            alert(data.message);
        }
    });

