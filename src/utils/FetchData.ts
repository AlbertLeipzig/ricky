const url = 'https://rickandmortyapi.com/api/';

export const fetchData = async (endpoint: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${url}/${endpoint}`);
      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
