import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';

const MedicalHistory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className='p-4'>
     <PageHeader
        linkText='Sign in'
        title='Already have an account?'
        url='/login'
      />

      <div className='mt-16'>
        <Card heading='Tell me your medical history'>
          <form onSubmit={formSubmitHandler}>
            <div className='input-group'>
              <label htmlFor='medical_condition'>
                Any underlying medical condition? If Yes, please state or
                describe them.
              </label>
              <textarea
                id='medical_condition'
                placeholder='i.e. I am asthmatic'
              />
            </div>
            {/*  */}
            <div className='input-group'>
              <label htmlFor='allergies'>
                Any allergies? If Yes, please describe and include any drugs or
                food.
              </label>
              <textarea
                id='allergies'
                placeholder='e.g I react to Hydroquinone'
              />
            </div>
            {/*  */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='input-group'>
                <label htmlFor='sickle_cell_status'>
                  Do you have sickle cell?
                </label>
                <select
                  name='sickle_cell_status'
                  id='sickle_cell'
                  defaultValue='no'
                >
                  <option value='no'>NO</option>
                  <option value='yes'>YES</option>
                </select>
              </div>
              {/*  */}
              <div className='input-group'>
                <label htmlFor='blood_pressure'>Blood Pressure</label>
                <input
                  type='text'
                  id='blood_pressure'
                  placeholder='e.g 104/80'
                />
              </div>
              {/*  */}
              <div className='input-group'>
                <label htmlFor='blood_group'>Blood group</label>
                <input
                  type='text'
                  id='blood_group'
                  placeholder='e.g O-positive'
                />
              </div>
              {/*  */}
              <div className='input-group'>
                <label htmlFor='genotype'>Genotype</label>
                <input type='text' id='genotype' placeholder='e.g AA' />
              </div>
              {/*  */}
              <div className='input-group'>
                <label htmlFor='height'>Height</label>
                <input type='number' id='height' placeholder='cm' />
              </div>
              {/*  */}
              <div className='input-group'>
                <label htmlFor='weight'>Weight</label>
                <input type='number' id='weight' placeholder='KG' />
              </div>
            </div>

            <Button title='Continue' isLoading={isLoading} />
          </form>

          <Link
            to='/login'
            className='block text-sm text-center mt-4 text-primary'
          >
            Skip for now
          </Link>

          <div
            className={`mt-8 mx-auto flex items-center justify-center gap-2`}
          >
            <div className='h-4 w-4 bg-gray-200 rounded-full'></div>
            <div className='h-6 w-6 bg-gray-400 rounded-full'></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MedicalHistory;
