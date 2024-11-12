function foText(text,lines) {
    document.write(`<ul>`);
    for (let i = 0; i < lines; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

foText('Hello',18);