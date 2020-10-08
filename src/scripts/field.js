let field = []
 
export const addPlant = (seedObj) => {
    field.push(seedObj)
}

export const usePlant = () => {
    return field.slice()
}