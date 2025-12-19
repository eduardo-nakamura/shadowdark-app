import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import Page from '../components/Page'
import Logo from '../assets/logo-black.png'
import './CharCreator.css'
import { setName, updateStatValue } from '../store/characterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons';
// const useCharacterName = () => useSelector((state: RootState) => state.character.name);

export default function CharCreator() {
  // const characterName = useCharacterName();
  const characterName = useSelector((state: RootState) => state.character.name);

  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const currentStrength = useSelector((state: RootState) => state.character.strength);
  const strengthModifier = 10;
  const handleStrengthChange = (newValue: number) => {
    dispatch(
      updateStatValue({
        key: 'strength',
        value: newValue
      })
    );
  };

  const currentIntelligence = useSelector((state: RootState) => state.character.intelligence);
  const intelligenceModifier = 10;
  const handleIntelligenceChange = (newValue: number) => {
    dispatch(
      updateStatValue({
        key: 'intelligence',
        value: newValue
      })
    );
  };



  return (
    <Page>
      {/* CharCreator {characterName} */}
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        <div className='grid grid-cols-2 grid-rows-8 gap-4 col-span-1 sm:col-span-2'>
          <img src={Logo} className='col-span-2' alt="" />
          {/* <FontAwesomeIcon icon={faDice} /> */}
          <div className='border-3 border-black p-2'>
            <div className="flex justify-between">
              <label className='text-lg' htmlFor="">For</label>
              <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded ' onClick={() => alert('teste')}> <FontAwesomeIcon icon={faDice} /></button>
            </div>
            <div className='grid grid-cols-3 text-center items-end'>
              <input
                className='border-0 border-b-2 border-black border-solid w-full bg-transparent focus:outline-none focus:ring-0 focus:border-gray-600 hover:border-b-gray-600'
                onChange={(e) => handleStrengthChange(parseInt(e.target.value))}
                type="text"
                value={currentStrength}
              />
              /
              <input
                className='border-0 border-b-2 text-gray-400 border-gray-400 border-solid w-full bg-transparent focus:outline-none focus:ring-0 focus:border-gray-600 hover:border-b-gray-600'
                type="text"
                disabled
                value={strengthModifier}
              />
            </div>

          </div>
          <div className='border-3 border-black p-2'>
            <div className="flex justify-between">
              <label className='text-lg' htmlFor="">Int</label>
              <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded ' onClick={() => alert('teste')}> <FontAwesomeIcon icon={faDice} /></button>
            </div>
            <div className='grid grid-cols-3 text-center items-end'>
              <input
                className='border-0 border-b-2 border-black border-solid w-full bg-transparent focus:outline-none focus:ring-0 focus:border-gray-600 hover:border-b-gray-600'
                onChange={(e) => handleIntelligenceChange(parseInt(e.target.value))}
                type="text"
                value={currentIntelligence}
              />
              <p>/</p>
              <input
                className='border-0 border-b-2 text-gray-400 border-gray-400 border-solid w-full bg-transparent focus:outline-none focus:ring-0 focus:border-gray-600 hover:border-b-gray-600'
                type="text"
                disabled
                value={intelligenceModifier}
              />
            </div>
          </div>


          {/* <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="For" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="Int" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="Des" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="Sab" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="Cont" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400' placeholder="Car" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400 row-span-2' placeholder="PV" />
          <input type="text" className='w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400 row-span-2' placeholder="CA" />
          <input type="text" className='col-span-2 w-full px-4 py-2 border-3 border-black bg-white text-gray-800 placeholder-gray-400 row-span-2' placeholder="Ataques" /> */}
        </div>
        <div className='grid grid-cols-2 grid-rows-8 col-span-1 sm:col-span-3  gap-4'>
          <div className='border-3 col-span-2 border-black p-2'>
            <label className='text-lg' htmlFor="">Name</label>
            <div className=''>
              <input
                type="text"
                id="charName"
                name="nome"
                value={characterName}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className='border-3 col-span-2 border-black p-2'>
            <label className='text-lg' htmlFor="">Name</label>
            <div className=''>
              <input
                type="text"
                id="charName"
                name="nome"
                value={characterName}
                onChange={handleNameChange}
              />
            </div>
          </div>
        </div>



        <div className='bg-black text-white col-span-1 sm:col-span-3'>
          3
        </div>

        {/* 
        
        <div className='bg-black grid grid-cols-2 gap-4'>
          <input type="text" className='border-3 border-black ' placeholder="Primeiro Campo" />
          <input type="text" className='border-3 border-black ' placeholder="Segundo Campo" />
        </div>
        <div className=' bg-black text-white grid grid-cols-2 gap-4'>02</div>
        <div className='bg-black text-white grid grid-cols-2 gap-4'>03</div> */}
      </div>
    </Page>
  )
}
