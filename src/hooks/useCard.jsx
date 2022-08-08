import { useState } from "react";

export const useCard = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return {
        handleExpandClick,
        expanded
    }
}

export default useCard