const images = document.querySelectorAll("img[data-page]");

images.forEach(image => {
    image.addEventListener("click", function() {
        const pageUrl = this.getAttribute("data-page");
        window.location.href = pageUrl;
    });
});

function changervideo() {
    const selector = document.getElementById("videoselector");
    const videoId = selector.value; // Récupère l'ID vidéo sélectionné
    const iframe = document.getElementById("video");

    // Génère l'URL de l'API avec l'ID vidéo
    const apiUrl = `https://video.sibnet.ru/shell.php?videoid=${videoId}`;

    // Met à jour la source de l'iframe
    iframe.src = apiUrl;
}
