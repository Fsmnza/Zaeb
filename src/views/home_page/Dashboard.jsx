import React, { useState } from 'react';
import { BellIcon, AdjustmentsHorizontalIcon, ChevronRightIcon, MapPinIcon, BuildingOffice2Icon, ArrowUpCircleIcon, PencilSquareIcon, UserIcon, ListBulletIcon, BriefcaseIcon, MoonIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import NotificationModal from '../common/NotificationModal';
import FilterModal from '../common/FilterModal';
import { Slider } from '@mui/material';
import { Switch } from '@headlessui/react';
import Sheet from 'react-modal-sheet';
import TinderCard from 'react-tinder-card';


const Dashboard = () => {
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);

  const handleToggleNotificationsModal = () => {
    setShowNotificationsModal(!showNotificationsModal);
  };

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleToggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const [distance, setDistance] = useState(50);

  const handleSliderChange = (event, newValue) => {
      setDistance(newValue);
  };

  const [age, setAge] = useState([18, 37]);

  const handleAgeChange = (event, newValue) => {
      setAge(newValue);
  };

  const [distanceEnabled, setdistanceEnabled] = useState(false)

  const [ageEnabled, setAgeEnabled] = useState(false)
  
  const [isExpandedPlace, setIsExpandedPlace] = useState(false);

  const toggleExpansionPlace = () => {
    setIsExpandedPlace(!isExpandedPlace);
  };

  const [characters, setCharacters] = useState([
    {
      name: 'Richard Hendricks',
      age: '25',
      city: 'Astana',
      url: 'https://avatars.mds.yandex.net/i?id=6b5c41f61a5f1e2b4435575f35e026efc2011798-7011667-images-thumbs&n=13'
    },
    {
      name: 'Erlich Bachman',
      age: '26',
      city: 'Astana',
      url: 'https://assets.equifax.com/wfs/workforce/images/wfs_Man_Hallway_Navy_Shirt_1920x1280.jpg'
    },
    {
      name: 'Monica Hall',
      age: '18',
      city: 'Aktobe',
      url: 'https://avatars.mds.yandex.net/i?id=e00daa3812d74a9b23efd0389d157150dbeec31a-8184297-images-thumbs&n=13'
    },
    {
      name: 'Jared Dunn',
      age: '29',
      city: 'Kokshetau',
      url: 'https://avatars.mds.yandex.net/i?id=aa1f10bcc1c785d016511955e8e09996_l-4365707-images-thumbs&ref=rim&n=13&w=512&h=640'
    },
    {
      name: 'Dinesh Chugtai',
      age: '35',
      city: 'Almaty',
      url: 'https://pbs.twimg.com/media/DH7e26cUMAA5b3n.jpg'
    }
  ]);

  const [lastDirection, setLastDirection] = useState(null);
  const [swipedToRight, setSwipedToRight] = useState([]);
  const [swipedToLeft, setSwipedToLeft] = useState([]);

  const swiped = (direction, character) => {
    console.log('removing: ' + character.name);
    setLastDirection(direction);

    if (direction === 'right') {
      setSwipedToRight((prev) => [...prev, character.name, character.age]);
    } else if (direction === 'left') {
      setSwipedToLeft((prev) => [...prev, character.name, character.age]);
    }

    // Remove the swiped card from the characters array
    setCharacters((prevCharacters) =>
      prevCharacters.filter((char) => char.name !== character.name)
    );
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  const [isOpenProfile, setOpenProfile] = useState(false);
  const [currentCardName, setCurrentCardName] = useState('');

  const handleOpenProfile = (characterName) => {
    setOpenProfile(true);
    setCurrentCardName(characterName);
  };

  
  return (
    <div>
      <div className='py-4 flex w-full items-center'>
        <h1 className='text-lg pl-2'>Dating app</h1>

        <div className='flex ml-auto items-center'>
          <BellIcon className='w-6 h-6 mr-2 cursor-pointer' onClick={handleToggleNotificationsModal} />
          <AdjustmentsHorizontalIcon className='w-6 h-6 mr-2 cursor-pointer' onClick={handleToggleFilterModal} />
        </div>
        
        {showNotificationsModal && (
          <NotificationModal onClose={handleToggleNotificationsModal}>
            <h2 className='px-4 text-lg mb-2 mt-2 text-center'>Notifications</h2>
            <div>
              <div className='flex py-4'>
                <div className='w-[30%]'>
                  <div className="relative w-20 h-20">
                    <img
                        className="absolute inset-0 object-cover rounded-full w-20 h-20"
                        src="user.jpg"
                        alt="Your Image"
                      />
                  </div>
                </div>
                <div className='break-words w-[70%]'>
                  <p className='text-sm'>Alina send you message</p>
                  <p className=''>"Hello!"</p>
                  <button className='border-2 border-white rounded-full px-3 mt-2 py-1'>Answer</button>
                </div>
              </div>
              <div className='border border-white w-full h-[1px]' />
            </div>

            <div>
              <div className='flex py-4'>
                <div className='w-[30%]'>
                  <div className="relative w-20 h-20">
                    <img
                        className="absolute inset-0 object-cover rounded-full w-20 h-20"
                        src="user.jpg"
                        alt="Your Image"
                      />
                  </div>
                </div>
                <div className='break-words w-[70%]'>
                  <p className='text-sm'>Alina send you message</p>
                  <p className=''>"Hello!"</p>
                  <button className='border-2 border-white rounded-full px-3 mt-2 py-1'>Answer</button>
                </div>
              </div>
              <div className='border border-white w-full h-[1px]' />
            </div>

          </NotificationModal>
        )}

        {showFilterModal && (
          <FilterModal onClose={handleToggleFilterModal}>
            <h2 className='px-4 text-xl mb-5 mt-3 text-center'>Filters</h2>
            <form action="">
              <div className='bg-gray-700 rounded-lg my-2'>
                <div className='pl-4 pr-2 py-2 flex cursor-pointer items-center' onClick={toggleExpansionPlace}>
                  <p>Place</p>
                  <div className='ml-auto flex items-center'>
                    <p>Astana, Celinograd</p>
                    <ChevronRightIcon className={`w-4 h-4 ml-2 transition-transform ${isExpandedPlace ? 'rotate-90' : ''}`} />
                  </div>
                </div>
                <div className={`flex items-center px-4 mb-2 ${isExpandedPlace ? '' : 'hidden'}`}>
                  <input type="text" className='w-[40%] small_text' />
                  <input className="bn632-hover-mini bn25-mini text-sm small_submit ml-auto" type="submit" value="Submit" />
                </div>

                <div className='border-2 border-black w-full h-[1px]' />

                <div className='pl-4 pr-2 py-2'>
                  <div className='flex'>
                    <p>Distance</p>
                    <div className='ml-auto flex items-center'>
                      <p>{distance} km</p>
                    </div>
                  </div>

                  <Slider 
                  defaultValue={50} 
                  aria-label="Default" 
                  valueLabelDisplay="auto" 
                  color="secondary" 
                  onChange={handleSliderChange} />
                  
                  <div className='flex items-center'>
                    <p>Show people only in this distance</p>
                    <div className='ml-auto flex items-center'>
                      <Switch
                        checked={distanceEnabled}
                        onChange={setdistanceEnabled}
                        className={`${distanceEnabled ? 'bg-fuchsia-700' : 'bg-gray-300'}
                        relative ml-auto mr-2 inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                        aria-hidden="true"
                        className={`${distanceEnabled ? 'translate-x-[16px]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>

                <div className='border-2 border-black w-full h-[1px]' />

                <div className='pl-4 pr-2 py-2'>
                  <div className='flex'>
                    <p>Age</p>
                    <div className='ml-auto flex items-center'>
                      <p>{age[0]} - {age[1]}</p>
                    </div>
                  </div>

                  <Slider
                      getAriaLabel={() => 'Age range'}
                      value={age}
                      onChange={handleAgeChange}
                      valueLabelDisplay="auto"
                      min={18}
                      max={100}
                      color="secondary"
                  />
                  
                  <div className='flex items-center'>
                    <p>Show people only in this distance</p>
                    <div className='ml-auto flex items-center'>
                      <Switch
                        checked={ageEnabled}
                        onChange={setAgeEnabled}
                        className={`${ageEnabled ? 'bg-fuchsia-700' : 'bg-gray-300'}
                        relative ml-auto mr-2 inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                        aria-hidden="true"
                        className={`${ageEnabled ? 'translate-x-[16px]' : 'translate-x-0'}
                            pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
              <input className='bn632-hover bn25 w-full mt-2' type="submit" value="Apply" />
            </form>
          </FilterModal>
        )}
      </div>
      <div className=''>
        <section className='h-[75vh]'>
          <div>
            <div className="w-full">
              <div className="card-container w-full">
                {characters.map((character) => (
                  <TinderCard
                  className='swipe w-full max-w-sm mx-auto'
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character)}
                  onCardLeftScreen={() => outOfFrame(character.name)}
                  preventSwipe={['down', 'up']}
                >
                
                    <div
                      style={{ backgroundImage: `url(${character.url})` }}
                      className='card rounded-xl'
                    >
                      <div className='absolute bottom-0 text-md pl-2 w-full flex' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #111419 100%)' }}>
                        <div>
                          <h3 className='text-xl'>{character.name} {character.age}</h3>
                          <p className='flex'><BuildingOffice2Icon className='w-5 h-5 mr-1' /> Live in {character.city}</p>
                          <p className='flex items-center'><MapPinIcon className='w-5 h-5 mr-1' />4km from you</p>
                        </div>
                        <ArrowUpCircleIcon className='w-8 h-8 ml-auto mr-4 my-auto cursor-pointer' onClick={() => handleOpenProfile(character.name)} />
                      </div>
                    </div>
                  </TinderCard>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Sheet isOpen={isOpenProfile} onClose={() => setOpenProfile(false)} snapPoints={[1]} className="max-w-sm mx-auto ">
          <Sheet.Container>
            <Sheet.Header className='relative items-center justify-center bg-[#111419]'>
              <div className='text-center font-kot text-xl flex items-center justify-center mt-5'>
                <p>{currentCardName}</p>
              </div>
              <button onClick={() => setOpenProfile(false)} class="absolute rounded-full hover:bg-gray-800 right-2 top-2 font-semibold py-1 px-1 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </Sheet.Header>
            <Sheet.Content className='bg-[#111419]'>
              <div className="mt-2 break-words text-sm">
                <div className='bg-gray-700 rounded-lg my-1 py-1'>
                  <h3 className='px-4 text-lg pb-1 flex items-center'><PencilSquareIcon className='w-4 h-4 mr-1' />About me</h3>
                  <p className='px-4'>I'm aquaman</p>
                </div>
                
                <div className='bg-gray-700 rounded-lg my-1 py-1'>
                  <h3 className='px-4 text-lg pb-1 flex items-center'><ListBulletIcon className='w-4 h-4 mr-1' />Main information</h3>
                  <p className='px-4 flex items-center mb-1'><MapPinIcon className='w-4 h-4 mr-1' />6 km from you</p>
                  <p className='px-4 flex items-center mb-1'><UserIcon className='w-4 h-4 mr-1' />161 cm</p>
                  <p className='px-4 flex items-center mb-1'><BriefcaseIcon className='w-4 h-4 mr-1' />Programmer</p>
                  <p className='px-4 flex items-center mb-1'><BuildingOffice2Icon className='w-4 h-4 mr-1' />6 km from you</p>
                </div>
                
                <div className='bg-gray-700 rounded-lg my-1 py-1'>
                  <h3 className='px-4 text-lg pb-1 flex items-center'><InformationCircleIcon className='w-4 h-4 mr-1' />Main</h3>
                  <p className='px-4'>Zodiac sign</p>
                  <p className='px-4 flex items-center'><MoonIcon className='w-4 h-4 mr-1' /> Lev</p>
                </div>
                
                <button className='bn632-hover bn25 w-full mt-2'>Share with profile of {currentCardName}</button>
              </div>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </Sheet>
      </div>
      
      {/* <div>
        <h4>Swiped to right:</h4>
        <ul>
          {swipedToRight.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Swiped to left:</h4>
        <ul>
          {swipedToLeft.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div> */}
    </div>
  )
}

export default Dashboard
