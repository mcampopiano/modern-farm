let field = []

export const addPlant = (seedObj) => {
    // Corn is an array, so this extra conditional is necearray to make it iterate through that array.
    if (Array.isArray(seedObj)) {
        for (const seed of seedObj) {
            field.push(seed)
        }
    } else {
        field.push(seedObj)
    }
}

export const usePlant = () => {
    return field.slice()
}