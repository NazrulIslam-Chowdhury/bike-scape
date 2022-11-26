import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    // const {isLoading,setIsLoading} = useState(false);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setIsBuyer(data.isBuyer);
                })
        }
    }, [email])
    return [isBuyer]
}

export default useBuyer;