import axios from 'axios';

const API_URL = 'http://localhost:8000/api/app1/';

const Servicio = {
  getProductos: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
      throw error;
    }
  }
};

export default Servicio;
