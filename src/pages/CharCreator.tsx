import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Page from '../components/Page'
import Logo from '../assets/logo-black.png'
import './CharCreator.css'
const useCharacterName = () => useSelector((state: RootState) => state.character.name);

export default function CharCreator() {
  const characterName = useCharacterName();

  return (
    <Page>
      CharCreator {characterName}
      <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
        <div className='grid grid-cols-2 grid-rows-8 gap-4 col-span-1 sm:col-span-2'>
          <img src={Logo} className='col-span-2' alt="" />

          <div className='border-3 border-black p-2'>
            <label className='text-lg' htmlFor="">For</label>
            <div className='grid grid-cols-3 text-center'>
              <input type="text" value="10" />
              <p>/</p>
              <input type="text" disabled value="10" />
            </div>
          </div>
          <div className='border-3 border-black p-2'>
            <label className='text-lg' htmlFor="">Int</label>
            <div className='grid grid-cols-3 text-center'>
              <input type="text" value="10" />
              <p>/</p>
              <input type="text" disabled value="10" />
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
