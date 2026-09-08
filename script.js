const playground = document.getElementById('playground');

if (playground) {
    const laptopComputer = document.createElement('div');
    laptopComputer.textContent = "💻";
    laptopComputer.style.fontSize = `50px`;
    laptopComputer.style.transition = `all 2s`;
    playground.append(laptopComputer);

    setInterval(() => {
        laptopComputer.style.transform = `rotate(${Math.random() * 360}deg)`;
        laptopComputer.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }, 2000);
}

const playground2 = document.getElementById('playground2');

if (playground2) {
    const oneHundred = document.createElement('div');
    oneHundred.textContent = "💯";
    oneHundred.style.fontSize = '35px';
    oneHundred.style.transition = 'ease-in-out 1s';
    playground2.append(oneHundred);
}
