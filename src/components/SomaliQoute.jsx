import { useState } from "react"

function SomaliQoute(){
    const [index, setIndex] = useState(0)
    const nextBtn = () =>{
        if(index <maahmaah.length-1){
            setIndex(index +1)
        }
       
    }
    const previousBtn = () =>{
        if(index >0){
            setIndex(index -1)
        }
        
    }
    const maahmaah = [
        "1. hubsiimo hal baa la siistaa",
        "2. hal booliya nirig xalal eh ma dhasho",
         "3. Caano yar iyo ciidan yarba marka la waayo ayaa la tebaa",
         "4. Canjeero siday u kala koreysaa loo cunaa",
         "5. Daacadi ma hungowdo.",
         "6. Habaar waalid ma hadho.",
         "7. Hadal badani haan ma buuxsho.",
         "8. Hadal lama wadaagee caanaa la wadaagaa.",
         "9. Hadal waa dheh iyo dhagayso.",
         "10. Hadal yar iyo hawl badan.",
        
]
    return <div className="text-center mt-20">
        <p  className={`text-4xl font-bold text-center pb-10 text-green-600 ${index === maahmaah.length-1 ? "block" : "hidden"}`}>Dhamaad</p>
        <p className={`font-bold text-3xl ${index ===2 ? "text-red-500" : "" }`}> {maahmaah[index]} </p>
        <button onClick={previousBtn} className="bg-blue-500 mt-10 px-8 py-3 rounded text-white">Previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-10 ml-10 py-3 rounded text-white">Next</button>
    </div>
}
export default SomaliQoute