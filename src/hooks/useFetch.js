import  { useState, useEffect } from "react";
import Axios from "axios";

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const doFetch = () => {
        setIsLoading(true);
    };

    useEffect(() => {
        if (!isLoading) return;

        Axios.get(url)
            .then((res) => {
                setResponse(res.data);
            })
            .catch(({message}) => {
                setError(message);
            }).finally(() => {
                setIsLoading(false)
            })
    }, [isLoading, url, error]);

    return [{ isLoading, response, error }, doFetch];
};

export default useFetch;
