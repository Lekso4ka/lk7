
setTimeout(function() {
    console.log(new Date().toLocaleTimeString());
}, 100);
setTimeout(function() {
    console.log(new Date().toLocaleDateString());
}, 0);


const a = () => {
    console.log("a");
}
const b = () => {
    a();
    console.log("b");
}
const c = () => {
    b();
    console.log("c")
}

// a();
// b();
c();

// LIFO
//

console.log("Сегодня прекрасный день!");


const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let result = Math.round(Math.random());
        if (result) {
            resolve("All correct!");
        } else {
            reject("Something wrong!");
        }
    }, 2000)
});

promise
    .then(function(data) {
        console.log("Успешность - 100%", data)
    })
    .catch(function(err) {
        console.log("Ошибочка", err);
    })

/*
    Брат => Купить хлеб
        => Пошел играть с братанами
    Cестра =>
        Мыть посуду
        Порезать хлеб
*/