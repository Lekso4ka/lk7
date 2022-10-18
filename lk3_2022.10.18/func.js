const createCard = (data, parent) => {
    const card = document.createElement("div");
    card.className = "card";
    // card.setAttribute("data-id", data.id);
    card.dataset.id = data.id;

    const age = document.createElement("div");
    age.className = "age";
    age.innerText = data.age || "no";

    const rate = document.createElement("div");
    rate.className = "rate";
    rate.innerHTML = "<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";

    const pic = document.createElement("div");
    pic.className = "pic";
    pic.style.backgroundImage = `url(${data.img_link || "images/с1.png"})`;

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = data.name;

    card.append(pic, age, rate, name);

    parent.append(card);
}