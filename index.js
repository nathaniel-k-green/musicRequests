async function addSong() {
    const song = document.getElementById("song").value;
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('token')){
        const token = searchParams.get('token');  // Replace with dynamic token in real implementation
        console.log(token);
    } else {
        alert("invalid url");
    }

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