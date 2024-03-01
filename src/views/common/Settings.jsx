import React, {useState} from 'react';
import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';
import {Box, Slider} from '@mui/material';
import {Switch} from '@headlessui/react';


const Settings = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save settings (e.g., API call)
        console.log('Settings submitted:', settings);
    };

    const [isExpandedPhone, setIsExpandedPhone] = useState(false);

    const toggleExpansionPhone = () => {
        setIsExpandedPhone(!isExpandedPhone);
    };

    const [isExpandedEmail, setIsExpandedEmail] = useState(false);

    const toggleExpansionEmail = () => {
        setIsExpandedEmail(!isExpandedEmail);
    };

    const [isExpandedPlace, setIsExpandedPlace] = useState(false);

    const toggleExpansionPlace = () => {
        setIsExpandedPlace(!isExpandedPlace);
    };

    const [distanceEnabled, setdistanceEnabled] = useState(false)

    const [ageEnabled, setAgeEnabled] = useState(false)

    const [spotifyEnabled, setSpotifyEnabled] = useState(false)

    const [notificationsEnabled, setNotificationsEnabled] = useState(false)

    const [distance, setDistance] = useState(50);

    const handleSliderChange = (event, newValue) => {
        setDistance(newValue);
    };

    const [age, setAge] = useState([18, 37]);

    const handleAgeChange = (event, newValue) => {
        setAge(newValue);
    };

    const handleBack = () => {
        window.history.back(); // Go back to the previous location
    };

    return (
        <div className="py-2">
            <div>
                <ChevronLeftIcon className='w-8 h-8 absolute cursor-pointer' onClick={handleBack}/>
                <h2 className='text-center text-3xl mb-6 mt-4'>Settings</h2>
            </div>
            <h2 className='px-4 text-lg mb-2 mt-4'>Account settings</h2>
            <form onSubmit={handleSubmit}>
                <div className='bg-gray-700'>
                    <div className='pl-4 pr-2 py-2 flex cursor-pointer' onClick={toggleExpansionPhone}>
                        <p>Phone number</p>
                        <div className='ml-auto flex items-center'>
                            <p>+7 777 777 77 77</p>
                            <ChevronRightIcon
                                className={`w-4 h-4 ml-2 transition-transform ${isExpandedPhone ? 'rotate-90' : ''}`}/>
                        </div>
                    </div>
                    <div className={`flex items-center mb-2 px-4 ${isExpandedPhone ? '' : 'hidden'}`}>
                        <input type="text" className='w-[40%] small_text'/>
                        <input className="bn632-hover-mini bn25-mini text-sm small_submit ml-auto" type="submit"
                               value="Submit"/>
                    </div>

                    <div className='border border-black w-full h-[1px]'/>

                    <div className='pl-4 pr-2 py-2 flex cursor-pointer' onClick={toggleExpansionEmail}>
                        <p>Email</p>
                        <div className='ml-auto flex items-center'>
                            <p>abcde@ads.ru</p>
                            <ChevronRightIcon
                                className={`w-4 h-4 ml-2 transition-transform ${isExpandedEmail ? 'rotate-90' : ''}`}/>
                        </div>
                    </div>
                    <div className={`flex items-center mb-2 px-4 ${isExpandedEmail ? '' : 'hidden'}`}>
                        <input type="text" className='w-[40%] small_text'/>
                        <input className="bn632-hover-mini bn25-mini text-sm small_submit ml-auto" type="submit"
                               value="Submit"/>
                    </div>
                    <div className='border border-black w-full h-[1px]'/>

                    <div className='pl-4 pr-2 py-2'>
                        <div className='flex items-center'>
                            <p>Enable Notifications</p>
                            <div className='ml-auto flex items-center'>
                                <Switch
                                    checked={notificationsEnabled}
                                    onChange={setNotificationsEnabled}
                                    className={`${notificationsEnabled ? 'bg-fuchsia-700' : 'bg-gray-300'}
                                    relative ml-auto mr-2 inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                                >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                        aria-hidden="true"
                                        className={`${notificationsEnabled ? 'translate-x-[16px]' : 'translate-x-0'}
                                        pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className='border border-black w-full h-[1px]'/>

                    <Link to="/boarding" className="pl-4 pr-2 py-2 flex cursor-pointer">
                        <p>Edit profile</p>
                        <div className="ml-auto flex items-center">
                            <ChevronRightIcon className="w-4 h-4 ml-2"/>
                        </div>
                    </Link>
                </div>

                <h2 className='px-4 text-lg mb-2 mt-2'>Findings</h2>
                <div className='bg-gray-700'>
                    <div className='pl-4 pr-2 py-2 flex cursor-pointer' onClick={toggleExpansionPlace}>
                        <p>Place</p>
                        <div className='ml-auto flex items-center'>
                            <p>Astana, Celinograd</p>
                            <ChevronRightIcon
                                className={`w-4 h-4 ml-2 transition-transform ${isExpandedPlace ? 'rotate-90' : ''}`}/>
                        </div>
                    </div>
                    <div className={`flex items-center mb-2 px-4 ${isExpandedPlace ? '' : 'hidden'}`}>
                        <input type="text" className='w-[40%] small_text'/>
                        <input className="bn632-hover-mini bn25-mini text-sm small_submit ml-auto" type="submit"
                               value="Submit"/>
                    </div>

                    <div className='border border-black w-full h-[1px]'/>

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
                            onChange={handleSliderChange}/>

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

                    <div className='border border-black w-full h-[1px]'/>

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
        </div>
{/*<h2 className='px-4 text-lg mb-2 mt-2'>Additional settings</h2>*/
}
{/*<div className='bg-gray-700'>*/
}
{/*    <div className='pl-4 pr-2 py-2'>*/
}
{/*        <div className='flex items-center'>*/
}
{/*            <p>Enable Spotify Music</p>*/
}
{/*            <div className='ml-auto flex items-center'>*/
}
{/*                <Switch*/
}
{/*                    checked={spotifyEnabled}*/
}
{/*                    onChange={setSpotifyEnabled}*/
}
{/*                    className={`${spotifyEnabled ? 'bg-fuchsia-700' : 'bg-gray-300'}*/
}
{/*                    relative ml-auto mr-2 inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}*/
}
{/*                >*/
}
{/*                    <span className="sr-only">Use setting</span>*/
}
{/*                    <span*/
}
{/*                    aria-hidden="true"*/
}
{/*                    className={`${spotifyEnabled ? 'translate-x-[16px]' : 'translate-x-0'}*/
}
{/*                        pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}*/
}
{/*                    />*/
}
{/*                </Switch>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </div>*/
}

{/*    <div className='border border-black w-full h-[1px]' />*/
}

{/*    <div className='pl-4 pr-2 py-2'>*/
}
{/*        <div className='flex items-center'>*/
}
{/*            <p>Enable Notifications</p>*/
}
{/*            <div className='ml-auto flex items-center'>*/
}
{/*                <Switch*/
}
{/*                    checked={notificationsEnabled}*/
}
{/*                    onChange={setNotificationsEnabled}*/
}
{/*                    className={`${notificationsEnabled ? 'bg-fuchsia-700' : 'bg-gray-300'}*/
}
{/*                    relative ml-auto mr-2 inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}*/
}
{/*                >*/
}
{/*                    <span className="sr-only">Use setting</span>*/
}
{/*                    <span*/
}
{/*                    aria-hidden="true"*/
}
{/*                    className={`${notificationsEnabled ? 'translate-x-[16px]' : 'translate-x-0'}*/
}
{/*                        pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}*/
}
{/*                    />*/
}
{/*                </Switch>*/
}
{/*            </div>*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}

    <input className="mt-8 bn632-hover bn25 w-full" type="submit" value="Submit"/>
</form>
</div>
)
    ;
};

export default Settings;
