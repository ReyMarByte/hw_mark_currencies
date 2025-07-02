// async function init(){
//     const response = await getCatFact()
//     console.log(response)
// }


const init = async () => {
    const response = await getCatFact()
    console.log(response)
}
init()

(async () =>{
    const response = await getCatFact()
    console.log(response)
})()