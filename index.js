async function addSong() {
    const song = document.getElementById("song").value;
    const token = "abc123xyz";  // Replace with dynamic token in real implementation

    if (song) {
        const response = await fetch(`https://e5jhnqnkm6.execute-api.us-east-2.amazonaws.com/prod/musicRequests/add-song`, {
            method: 'POST',
            headers: {
                'x-api-key': '${{ secrets.ADD_SONG_API_KEY }}',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ song: song })
        });

        const data = await response.json();
        alert(data.message);
    }
}