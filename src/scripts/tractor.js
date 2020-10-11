import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// Iterates through the annaul plan's children arrays (the rows) and for each item plants that seed in the field

export const plantSeeds = (annualPlan) => {
    for (const row of annualPlan) {
        for (const plant of row ) {
            if (plant === "Wheat") {
                // const wheatSeed = createWheat()
                addPlant(createWheat())
            } else if (plant === "Asparagus") {
                // const asparagusSeed = createAsparagus()
                addPlant(createAsparagus())
            } else if (plant === "Corn") {
                // const cornSeed = createCorn()
                addPlant(createCorn())
            } else if (plant === "Potato") {
                // const potatoSeed = createPotato()
                addPlant(createPotato())
            } else if (plant === "Soybean") {
                // const soybeanSeed = createSoybean()
                addPlant(createSoybean())
            } else if (plant === "Sunflower") {
                // const sunflowerSeed = createSunflower()
                addPlant(createSunflower())
            }
        }
    }

}