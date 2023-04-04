export const fetchData = async (url: string, options: RequestInit): Promise<any> => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}