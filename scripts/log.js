async function log() {
    try {
        let url = "https://form-responses-api.vercel.app/log";
        await fetch(url, {
            method: 'POST',
            headers: {
                'context-type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

log()