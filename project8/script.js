const getJoke =   async() => {
    const result = await fetch(`https://icanhazdadjoke.com/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    })
    const data = await result.json();
    document.getElementById("joke").innerHTML = data.joke;
}
document.getElementById("get-joke").addEventListener("click", getJoke);
