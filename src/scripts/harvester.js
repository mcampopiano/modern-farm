// Iterates over the field that the tractor funtion planted, and for each plant it takes the output and pushes that number of seed objects into the harvested seeds array, except for corn, it only returns half, because the other half will be sold to cattle ranchers per the instructions.

export const harvestPlants = (plantArr) => {
    const harvestedSeeds = []
    for (const seed of plantArr) {
        // Corn is an array, so this extra conditional is necearray to make it iterate through that array. It then only takes half the output (refer to comment at top of page)
        if (Array.isArray(seed)) {
            for (const corn of seed) {
                for (let i = 0; i < (corn.output / 2); i++) {
                    harvestedSeeds.push(corn)
                }
            }
        } else {
            for (let i = 0; i < seed.output; i++) {
                harvestedSeeds.push(seed)
            }
        }
    } 
    return harvestedSeeds   
}