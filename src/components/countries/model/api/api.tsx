import { useEffect, useState } from "react"

export interface Country {
    name: {
        common: string;
        official: string;
    };
    flags: {
        svg: string
    }
    population: number;
    region: string;
}
export const useGetCountries = () => {
    const [data, setData] = useState<Country[]>([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all', {
                    method: 'GET'
                });
                if (!response.ok) {
                    setError('Error, fetching data')
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('error', error);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        error
    }
}