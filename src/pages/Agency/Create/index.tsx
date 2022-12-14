import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAgency } from '../../../api';
import { useAuth } from '../../../hooks/auth';
import { CreateAgencyDto } from '../../../types/agency';

const CreateAgency = () => {
  const [newAgency, setNewAgency] = useState<CreateAgencyDto>({
    name: '',
    contact: '',
    detailsBackgroundImage: '',
    highlight: false,
    highlightPhoto: '',
    icon: '',
    location: '',
    subtitle: '',
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { token } = useAuth();

  const { isLoading, mutate } = useMutation(createAgency, {
    onSuccess: () => {
      queryClient.invalidateQueries(['getAllAgencies']);
      navigate('/agency');
    },
  });

  const submitNewAgency = () => {
    mutate({ ...newAgency, token });
  };

  return (
    <div>
      {isLoading && <h2>Criando...</h2>}
      <div>
        <label>Name</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({ ...agency, name: event.target.value }))
          }
        />
      </div>
      <div>
        <label>location</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({
              ...agency,
              location: event.target.value,
            }))
          }
        />
      </div>
      <div>
        <label>subtitle</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({
              ...agency,
              subtitle: event.target.value,
            }))
          }
        />
      </div>

      <div>
        <label>highlight</label>
        <input
          type='checkbox'
          onChange={event =>
            setNewAgency(agency => ({
              ...agency,
              highlight: !agency.highlight,
            }))
          }
        />
      </div>

      <div>
        <label>contact</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({ ...agency, contact: event.target.value }))
          }
        />
      </div>
      <div>
        <label>icon</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({ ...agency, icon: event.target.value }))
          }
        />
      </div>
      <div>
        <label>highlightPhoto</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({
              ...agency,
              highlightPhoto: event.target.value,
            }))
          }
        />
      </div>
      <div>
        <label>detailsBackgroundImage</label>
        <input
          type='text'
          onChange={event =>
            setNewAgency(agency => ({
              ...agency,
              detailsBackgroundImage: event.target.value,
            }))
          }
        />
      </div>

      <button onClick={submitNewAgency}>Criar</button>
    </div>
  );
};

export default CreateAgency;
