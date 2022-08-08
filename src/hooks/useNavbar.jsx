import { useState } from "react"

export const useNavbar = () => {
    const [show, setShow] = useState(false)
    const [swith, setSwith] = useState(false)
    const showMenu = (ref) => {
        setShow(!show);
        console.log(show)
    }

    return {
        showMenu,
        show
    }
}

export default useNavbar