const recoverButton = document.getElementById("recover-btn")

recoverButton.addEventListener("click", async () => {
    redirect(url_for("confirmation.html"))
})