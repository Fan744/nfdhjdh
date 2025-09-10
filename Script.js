function showContent(tabId) {
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function filterContent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let lists = document.querySelectorAll(".video-list a, .pdf-list a, .other-list a");
    let found = false;

    lists.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "block";
            found = true;
        } else {
            item.style.display = "none";
        }
    });

    document.getElementById("noResults").style.display = found ? "none" : "block";
}

function playVideo(url) {
    let playerDiv = document.getElementById("video-player");
    let youtubeDiv = document.getElementById("youtube-player");
    let video = document.getElementById("engineer-babu-player");
    let downloadLink = document.getElementById("download-link");

    playerDiv.style.display = "block";
    youtubeDiv.style.display = "none";
    video.src = url;
    downloadLink.href = url;
}

// Date & Time Update
function updateDateTime() {
    let now = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let time = now.toLocaleTimeString();
    let date = now.toLocaleDateString(undefined, options);

    document.getElementById("datetime").textContent = `📅 ${date} | ⏰ ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();
