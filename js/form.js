document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const api = "https://formspree.io/jvc22102003@gmail.com";
    const info = {
        name,
        email,
    };
    const req= {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(info)
    };

    fetch(api, req)
        .then(res => res.json())
        .then(data => {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "/index.html";
        })
        .catch(error => {
            alert("Houve um erro. Por favor, tente novamente mais tarde.");
        });
});