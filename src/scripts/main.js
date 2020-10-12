import {createPlan} from "./plan.js"
import {usePlants} from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan)
plantSeeds(yearlyPlan)
const field = usePlants()
console.log(field)

const harvestedCrops = harvestPlants(field)

console.log(harvestedCrops)

Catalog(harvestedCrops)
