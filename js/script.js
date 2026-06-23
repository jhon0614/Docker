document.addEventListener("DOMContentLoaded", () => {
    console.log("Landing cargada correctamente");

    const button = document.querySelector("#btn");

    if (button) {
        button.addEventListener("click", () => {
            alert("Hola desde GitHub Actions v3 🚀");
        });
    }
});
