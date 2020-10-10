// Iterates over the harvested crops array and renders the plant name to the DOM

export const Catalog = (harvest) => {
    let contentContainer = document.querySelector(".container")
    for (const plant of harvest) {
        contentContainer.innerHTML += `<section class="plant">${plant.type}</section>`
    }
}