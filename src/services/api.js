import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

// Cliente endpoints
export const clienteService = {
  getAll: () => api.get('/clientes'),
  getById: (id) => api.get(`/clientes/${id}`),
  create: (data) => api.post('/clientes', data),
  update: (id, data) => api.put(`/clientes/${id}`, data),
  delete: (id) => api.delete(`/clientes/${id}`),
};

// Ambiente endpoints
export const ambienteService = {
  getAll: () => api.get('/ambientes'),
  getById: (id) => api.get(`/ambientes/${id}`),
  create: (data) => api.post('/ambientes', data),
  update: (id, data) => api.put(`/ambientes/${id}`, data),
  delete: (id) => api.delete(`/ambientes/${id}`),
};

// Dispositivo endpoints
export const dispositivoService = {
  getAll: () => api.get('/dispositivos'),
  getById: (id) => api.get(`/dispositivos/${id}`),
  create: (data) => api.post('/dispositivos', data),
  update: (id, data) => api.put(`/dispositivos/${id}`, data),
  delete: (id) => api.delete(`/dispositivos/${id}`),
};

export default api; 