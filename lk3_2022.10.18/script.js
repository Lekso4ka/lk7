const container = document.querySelector(".container");
const btn = document.querySelector(".dashboard").firstElementChild;
const popupList = document.querySelectorAll(".popup");
const popBox = document.querySelector(".popup-wrapper");

fetch("https://sb-cats.herokuapp.com/api/2/lekso4ka/show")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.message === "ok") {
            data.data.forEach(cat => {
                createCard(cat, container, Array.from(popupList));
            });
        } else {
            showPopup(Array.from(popupList), "info", data.message);
        }
        // showPopup(Array.from(popupList), "info", data.message);
    });



popupList.forEach(p => {
    p.firstElementChild.addEventListener("click", e => {
        p.classList.remove("active");
        popBox.classList.remove("active");
    });
});

btn.addEventListener("click", e => {
    showPopup(Array.from(popupList), "add");
});

popBox.addEventListener("click", function(e) {
    if (e.target === this) {
        popBox.classList.remove("active");
        popupList.forEach(p => {
            if (p.classList.contains("active")) {
                p.classList.remove("active");
            }
        })
    }
});
