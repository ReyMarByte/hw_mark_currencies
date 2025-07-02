async function getCatFact() {
    const response = await fetch('http://catfact.ninja/fact');
    await delay(5000)
    const data = await response.json();
    return data;
}

function delay(timeInMillis) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeInMillis);
    });
}
