import {createPlan} from "./plan.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"

const potatoSeed = createPotato()
const yearlyPlan = createPlan();

console.log(potatoSeed)