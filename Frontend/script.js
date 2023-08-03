let isRunning = false;
const ports = ['3000', '3001', '3002', '3003', '3004']

function configure() {

    const pendulums = document.querySelectorAll('.pendulum');

    ['3000', '3001', '3002', '3003', '3004'].forEach((port, index)=> {

        // Input starting angle and length
        const theta0 = prompt(`Enter initial angle in radians for pendulum ${index + 1}:`, 0.1);
        const length = prompt(`Enter length in meters for pendulum ${index + 1}:`, 1);

        // Set custom length
        pendulums[index].setAttribute("style", `height: ${(length*100)}px`)

        const configs = {
            theta0: parseFloat(theta0),
            length: parseFloat(length)
        };

        fetch(`http://localhost:${port}/configure`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(configs)
        });
    });
}

function update() {
    if (!isRunning) return;

    const pendulums = document.querySelectorAll('.pendulum');
    ['3000', '3001', '3002', '3003', '3004'].forEach((port, index) => {
        fetch(`http://localhost:${port}/coordinates`)
            .then(response => response.json())
            .then(data => {
                pendulums[index].style.transform = `rotate(${data}rad)`;
            });
    });
    
    setTimeout(update, 200);  // 5 times per second
}

function start() {
    isRunning = true;
    update();
}

function pause() {
    isRunning = false;
}

function stop() {
    isRunning = false;
    // Resetting the pendulum positions (for simplicity, not fetching the reset state)
    const pendulums = document.querySelectorAll('.pendulum');
    pendulums.forEach(p => p.style.transform = 'rotate(0rad)');
}
