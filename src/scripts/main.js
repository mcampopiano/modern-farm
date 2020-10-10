import {createPlan} from "./plan.js"
import {usePlant} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan)
const field = usePlant()
console.log(field)

const harvestedCrops = harvestPlants(field)

console.log(harvestedCrops)
