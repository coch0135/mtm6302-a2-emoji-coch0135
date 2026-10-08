// Each card must display:
// The emoji character, generated from its code.
// Its decimal code.
// Keep an empty gallery container in your HTML. Create the individual cards using JavaScript and a loop.

const emojiCodes = [128513, 129315, 128521, 128526, 128525, 128536, 129300, 128580, 128527, 128558, 128564, 129299, 128557]
const $gallery = document.getElementById("gallery")

function showEmojis(count = emojiCodes.length) {
    // resets the gallery
    $gallery.innerHTML = ""
    let $emojiCards = []
    for(let i=0; i<count; i++){
        $emojiCards.push(`<section class="card">
        <p>&#${emojiCodes[i]};</p>
        <p>${emojiCodes[i]}</p> 
        </section>`)
    }
    $gallery.innerHTML = 
}