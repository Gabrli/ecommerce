import { useState } from "react"
import { ICategory } from "../../types/ICategory"

export default function CategoryList(){
    const [categories, setCategories] = useState<ICategory[]>([
        
    ])
    return (
        <div className="w-4/5 bg-secondary1 rounded-lg flex justify-evenly items-center ml-auto mr-auto"></div>
    )
}