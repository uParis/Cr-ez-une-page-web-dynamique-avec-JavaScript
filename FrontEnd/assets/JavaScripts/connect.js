// Variable à afficher pour le mode éditeur
const modeEdition = document.querySelector(".mode-edition")
const editBtn = document.querySelector(".modifier")
const logout = document.querySelector('[href="login.html"]')

// Si nous avons récupéré le token
if (isConnected()){
    modeEdition.style.display = "flex"

    const t = document.querySelector("header")
    t.style.padding = "15px 0"
    editBtn.style.display = "flex"



    // Changer login en logout
    logout.textContent = "logout"

    // Lorque l'on clic sur logout cela déconnecte l'utilisateur
    logout.addEventListener("click", (event) => {
        event.preventDefault()

        localStorage.removeItem("auth")
        window.location.reload()
    })
}