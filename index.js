function keijo() {
    window.location.href = "keijo.html";
}

function oshino() {
    window.location.href = "oshi-no-ko.html";
}

function changervideo() {
    const selector = document.getElementById("videoselector");
    const videoId = selector.value; // Récupère l'ID vidéo sélectionné
    const iframe = document.getElementById("video");

    // Génère l'URL de l'API avec l'ID vidéo
    const apiUrl = `https://video.sibnet.ru/shell.php?videoid=${videoId}`;

    // Met à jour la source de l'iframe
    iframe.src = apiUrl;
}
