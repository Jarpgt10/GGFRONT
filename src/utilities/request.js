import axios from 'axios';


// const dev = 'http://localhost:8080/GuateGrafick/back/';
const dev = 'https://grey-bat-794981.hostingersite.com/back/';


export const request = async (path, options = {}, isBlob = false, fileNameDefault) => {
  try {
    const PATH = dev + path;
    const axiosConfig = isBlob ? { responseType: 'blob' } : {};

    if (Object.keys(options).length === 0) {
      const response = await axios.get(PATH, axiosConfig);
      if (isBlob) {
        handleBlobResponse(response, fileNameDefault);
      } else {
        return response.data;
      }
    } else {
      const { method = 'GET', body } = options;
      if (method.toUpperCase() === 'POST') {
        if (body) {
          const transformedData = DataTransform(body);
          const response = await axios.post(PATH, transformedData, axiosConfig);
          if (isBlob) {
            handleBlobResponse(response, fileNameDefault);
          } else {
            return response.data;
          }
        } else {
          throw new Error('Se debe proporcionar un cuerpo (body) para las peticiones POST.');
        }
      } else {
        throw new Error(`Método HTTP no compatible: ${method}`);
      }
    }
  } catch (error) {
    console.error('Error en la petición:', error.message);
    throw error;
  }
};

function DataTransform(obj) {
  const formData = new FormData();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        formData.append(key, obj[key]);
      }
    }
  }
  return formData;
}

function handleBlobResponse(response, defaultName) {
  const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const filename = response.headers['content-disposition']
    ? response.headers['content-disposition'].split('filename=')[1]
    : defaultName;
  saveAs(blob, filename);
}
