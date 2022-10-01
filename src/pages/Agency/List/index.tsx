import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getAgencies, removeAgency } from '../../../api';
import { useAuth } from '../../../hooks/auth';
import { AgencyContainer } from './styled-components';

const AgenciesList = () => {
  const { token } = useAuth();
  const queryClient = useQueryClient();

  const { isLoading, data: agencies } = useQuery(
    ['getAllAgencies', token],
    () => getAgencies(token)
  );

  const { isLoading: loadingDelete, mutate } = useMutation(removeAgency, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getAllAgencies']);
    },
  });

  return (
    <div>
      {(isLoading || loadingDelete) && <p>Carregando...</p>}

      {agencies?.map(agency => (
        <AgencyContainer key={agency.id}>
          <p>{agency.name}</p>
          <p>{agency.location}</p>
          <p>{agency.subtitle}</p>
          <p>{agency.contact}</p>

          <button onClick={() => mutate({ id: agency.id, token })}>
            Remover agencia
          </button>
          <Link to={`/agency/${agency.id}`}>Editar agencia</Link>
        </AgencyContainer>
      ))}
    </div>
  );
};

export default AgenciesList;
