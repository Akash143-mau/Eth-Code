// public/scripts.js

async function fetchSongs() {
    try {
        const response = await fetch('http://localhost:3000/songs');
        const songs = await response.json();
        const songList = document.getElementById('song-list');
        songList.innerHTML = '';
        songs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} by ${song.artist}`;
            li.dataset.id = song.id;
            li.addEventListener('click', () => playSong(song.id));
            songList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

function playSong(id) {
    console.log('Play song with ID:', id);
    const player = document.getElementById('player');
    // Placeholder for actual song URL
    // Assuming you have a way to get the song URL
    player.src = `http://localhost:3000/songs/${id}`; 
}

// Initialize the app
document.addEventListener('DOMContentLoaded', fetchSongs);
