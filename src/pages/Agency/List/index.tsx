import { useQuery } from '@tanstack/react-query';
import { getAgencies } from '../../../api';
import { useAuth } from '../../../hooks/auth';
import { AgencyContainer } from './styled-components';

const AgenciesList = () => {
  const { token } = useAuth();

  const { isLoading, data: agencies } = useQuery(
    ['getAllAgencies', token],
    () => getAgencies(token)
  );

  return (
    <div>
      {isLoading && <p>Carregando...</p>}

      {agencies?.map(agency => (
        <AgencyContainer key={agency.id}>
          <p>{agency.name}</p>
          <p>{agency.location}</p>
          <p>{agency.subtitle}</p>
          <p>{agency.contact}</p>
        </AgencyContainer>
      ))}
    </div>
  );
};

export default AgenciesList;
