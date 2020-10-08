import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"
import {usePlant} from "./field.js"

const potatoSeed = createPotato()
const yearlyPlan = createPlan();
const soybean = createSoybean()
const corn = createCorn()

addPlant(potatoSeed);
addPlant(soybean)
addPlant(corn)
const currentField = usePlant()

const testing = Array.isArray(corn);
console.log(currentField)
console.log(testing)
