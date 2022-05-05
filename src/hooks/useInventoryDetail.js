import { useEffect, useState } from "react"

const useInventoryDetail = (inventoryId) => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        const url = `http://localhost:3000/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return [inventory, setInventory];
}
export default useInventoryDetail;