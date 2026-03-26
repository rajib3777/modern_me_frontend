import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
});

export const portfolioService = {
    getSettings: () => api.get('/settings/').then(res => res.data[0]),
    getHero: () => api.get('/hero/').then(res => res.data[0]),
    getAbout: () => api.get('/about/').then(res => res.data[0]),
    getSkills: () => api.get('/skills/').then(res => res.data),
    getExperience: () => api.get('/experience/').then(res => res.data),
    getProjects: () => api.get('/projects/').then(res => res.data),
    getEducation: () => api.get('/education/').then(res => res.data),
    sendMessage: (data: any) => api.post('/messages/', data),
};

export default api;
