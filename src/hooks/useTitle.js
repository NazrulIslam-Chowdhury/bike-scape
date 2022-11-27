import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Bike Scape - ${title}`
    }, [title])
};

export default useTitle;
