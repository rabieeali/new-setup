import { useEffect, useState } from "react"
import { http } from "../api/httpService";

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await http.get(url, { signal: controller.signal });
                setData(response?.data);
                setLoading(false);
            } catch (err) {

                setLoading(false);
                setError(err?.message !== "canceled" && err?.message)
            }
        }
        fetchData();

        return () => {
            controller.abort()
        }
    }, [url])
    return { data, loading, error }

}