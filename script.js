const fs = require('fs');
const axios = require('axios');

const readFileAsync = (file, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const getDataFromDisk = async () => {
    const data = await readFileAsync('./data.json', 'utf8');
    console.log('Data loaded from disk:', data);
    return data;
};

const getDataFromURL = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    const data = response.data;
    console.log('Data downloaded from URL:', data);
    return data;
};

const fetchData = async () => {
    const diskData = await getDataFromDisk();
    const urlData = await getDataFromURL();
};

fetchData();