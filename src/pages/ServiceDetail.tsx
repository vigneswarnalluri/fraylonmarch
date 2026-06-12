import { useParams } from 'react-router-dom';
import ServiceLayout from '../components/ServiceLayout';
import { servicesData } from '../data/servicesData';
import NotFound from './NotFound';
import ServicesOverview from './ServicesOverview';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();

    // If id is provided but is invalid, render NotFound component (prevents soft 404/crashes)
    if (id && !servicesData[id]) {
        return <NotFound />;
    }

    // If id is not provided, render the ServicesOverview page (/services)
    if (!id) {
        return <ServicesOverview />;
    }

    const data = servicesData[id];
    return <ServiceLayout data={data} />;
};

export default ServiceDetail;
