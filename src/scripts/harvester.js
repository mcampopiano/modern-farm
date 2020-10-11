// Iterates over the field that the tractor funtion planted, and for each plant it takes the output and pushes that number of seed objects into the harvested seeds array, except for corn, it only returns half, because the other half will be sold to cattle ranchers per the instructions.

export const harvestPlants = (plantArr) => {
    const harvestedSeeds = []
    for (const seed of plantArr) {
        if (seed.type === "Corn") { 
                for (let i = 0; i < (seed.output / 2); i++) {
                    harvestedSeeds.push(seed)
                }
        } else {
            for (let i = 0; i < seed.output; i++) {
                harvestedSeeds.push(seed)
            }
        }
    } 
    return harvestedSeeds   
}