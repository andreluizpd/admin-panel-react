import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAgency } from '../../../api';
import { useAuth } from '../../../hooks/auth';
import { UpdateAgencyDto } from '../../../types/agency';

const EditAgency = () => {
  const [updateAgency, setUpdateAgency] = useState<UpdateAgencyDto>({
    id: '',
    name: '',
    contact: '',
    detailsBackgroundImage: '',
    highlight: false,
    highlightPhoto: '',
    icon: '',
    location: '',
    subtitle: '',
  });

  const { agencyId } = useParams();
  const { token } = useAuth();
  const { isLoading } = useQuery(
    ['getAllAgencies', token, agencyId],
    () => getAgency(agencyId as string, token),
    { onSuccess: data => setUpdateAgency(data) }
  );

  return isLoading ? (
    <h2>Carregando...</h2>
  ) : (
    <div>
      <div>
        <label>Name</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({ ...agency, name: event.target.value }))
          }
          value={updateAgency.name}
        />
      </div>
      <div>
        <label>location</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({
              ...agency,
              location: event.target.value,
            }))
          }
          value={updateAgency.location}
        />
      </div>
      <div>
        <label>subtitle</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({
              ...agency,
              subtitle: event.target.value,
            }))
          }
          value={updateAgency.subtitle}
        />
      </div>

      <div>
        <label>highlight</label>
        <input
          type='checkbox'
          onChange={() =>
            setUpdateAgency(agency => ({
              ...agency,
              highlight: !agency.highlight,
            }))
          }
          value={updateAgency.highlight ? 1 : 0}
        />
      </div>

      <div>
        <label>contact</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({
              ...agency,
              contact: event.target.value,
            }))
          }
          value={updateAgency.contact}
        />
      </div>
      <div>
        <label>icon</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({ ...agency, icon: event.target.value }))
          }
          value={updateAgency.icon}
        />
      </div>
      <div>
        <label>highlightPhoto</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({
              ...agency,
              highlightPhoto: event.target.value,
            }))
          }
          value={updateAgency.highlightPhoto}
        />
      </div>
      <div>
        <label>detailsBackgroundImage</label>
        <input
          type='text'
          onChange={event =>
            setUpdateAgency(agency => ({
              ...agency,
              detailsBackgroundImage: event.target.value,
            }))
          }
          value={updateAgency.detailsBackgroundImage}
        />
      </div>

      <button
        onClick={() => {
          console.log(updateAgency);
        }}
      >
        Criar
      </button>
    </div>
  );
};

export default EditAgency;
