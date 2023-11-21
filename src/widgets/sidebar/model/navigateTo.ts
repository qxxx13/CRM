import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

export const goToTasksPage = () => navigate('/tasks');
export const goToHome = () => navigate('/home');
