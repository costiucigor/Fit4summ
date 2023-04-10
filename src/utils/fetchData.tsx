export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY//process.env.REACT_APP_RAPID_API_KEY
    }
};

export const fetchData = async (url: string, options: RequestInit): Promise<any> => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
