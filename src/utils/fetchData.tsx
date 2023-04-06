export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': "4bd84654e9msh9034b208b00864bp139d91jsn643044d2afbd"
    }
};

export const fetchData = async (url: string, options: RequestInit): Promise<any> => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
