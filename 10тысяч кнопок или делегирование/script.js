// const btn = document.body.querySelectorAll('button');

const all = document.createElement('div');

for(let i = 1; i <= 10; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add('btn');
    all.append(btn);
}

document.body.append(all);

all.addEventListener('click', (event) => {          // делегирование
    console.log(event.target.textContent);
})
    
//   btn.forEach(element => {                                          // без делегирования
//     element.addEventListener('click', () => {
//     console.log(element.textContent);
//     })
// });