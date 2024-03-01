import React, { useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINT } from '../../constants';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        dob_date: "",
        show_gender: false,
        gender_identity: "man",
        gender_interest: "woman",
        url: "",
        job: "",
        country: "",
        city: "",
        hobbies: [''],
        zodiac_sign: "cancer",
        education: "",
        personality_type: "INTJ",
        about: "",
        matches: []
    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put(`${API_ENDPOINT}/user`, {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeHobbies = (e, index) => {
        const { value } = e.target;
        const newHobbies = [...formData.hobbies];
        newHobbies[index] = value;
        setFormData((prevState) => ({
            ...prevState,
            hobbies: newHobbies
        }));
    };

    const handleAddHobby = () => {
        setFormData((prevState) => ({
            ...prevState,
            hobbies: [...prevState.hobbies, '']
        }));
    };

    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    const handleFile = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBack = () => {
        window.history.back(); // Go back to the previous location
    };

    return (
        <>
            <div className="px-4 py-2">
                <div className=''>
                    <ChevronLeftIcon className='w-8 h-8 absolute cursor-pointer' onClick={handleBack} />
                    <h2 className='text-center text-3xl mb-6 mt-4'>Profile</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label className='text-lg' htmlFor="url">Profile Photo</label>
                        <div
                            className="border border-dashed border-gray-300 h-32 rounded-xl mb-3 flex items-center justify-center"
                            onDrop={handleDrop}
                            onDragOver={(e) => e.preventDefault()}
                            onDragEnter={(e) => e.preventDefault()}
                            onDragLeave={(e) => e.preventDefault()}
                        >
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                            />
                            
                            <p>
                                Drop file here or <a onClick={handleButtonClick} className="text-blue-700 underline cursor-pointer hover:text-blue-400">choose file</a>
                            </p>
                        </div>
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className='w-[150px] h-[180px] mt-[10px] mx-auto'
                            />
                        )}

                        <label className='text-lg' htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            className='mb-2'
                            onChange={handleChange}
                        />

                        <label className='text-lg'>Birthday</label>
                        <div>
                            <input 
                            type="date" 
                            name="dob_date" 
                            id="dob_date"
                            value={formData.dob_date}
                            onChange={handleChange}
                            className='mb-2'
                            required />
                        </div>

                        <label className='text-lg'>Gender</label>
                        <div className='flex mb-4 flex-wrap'>
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === "man"}
                            />
                            <label htmlFor="man-gender-identity">Man</label>
                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === "woman"}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>
                        </div>

                        <label className='text-lg'>Show Me</label>
                        <div className="flex mb-4 flex-wrap">
                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === "man"}
                            />
                            <label htmlFor="man-gender-interest">Man</label>
                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === "woman"}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>
                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === "everyone"}
                            />
                            <label htmlFor="everyone-gender-interest">Everyone</label>
                        </div>

                        <label className='text-lg' htmlFor='height'>Height (cm)</label>
                        <div>
                            <input 
                            type="number" 
                            name="height" 
                            id="height" 
                            max="300" 
                            min="0" 
                            placeholder='Height(cm)'
                            value={formData.height}
                            onChange={handleChange}
                            className='mb-2'
                            required />
                        </div>

                        <label className='text-lg' htmlFor="job">Job</label>
                        <input
                            id="job"
                            type='text'
                            name="job"
                            placeholder="Job"
                            required={true}
                            value={formData.job}
                            onChange={handleChange}
                            className='mb-2'
                        />

                        <label className='text-lg' htmlFor="country">Country</label>
                        <input
                            id="country"
                            type='text'
                            name="country"
                            placeholder="Country"
                            required={true}
                            value={formData.country}
                            onChange={handleChange}
                            className='mb-2'
                        />

                        <label className='text-lg' htmlFor="city">City</label>
                        <input
                            id="city"
                            type='text'
                            name="city"
                            placeholder="City"
                            required={true}
                            value={formData.city}
                            onChange={handleChange}
                            className='mb-2'
                        />

                        <label className='text-lg' htmlFor="hobbies">Hobbies</label>
                        
                            {formData.hobbies.map((hobby, index) => (
                                <div key={index}>
                                    <input
                                        id={`hobby_${index}`}
                                        type='text'
                                        name="hobbies"
                                        placeholder="Hobbies"
                                        required={true}
                                        value={hobby}
                                        onChange={(e) => handleChangeHobbies(e, index)}
                                        className="w-full rounded-xl text-black px-4 py-2 outline-none mb-2"
                                    />
                                </div>
                            ))}
                        <div className='w-full flex justify-center items-center'>
                            <button type="button" onClick={handleAddHobby} className="mx-auto mt-2 px-4 py-2 bg-[#8076C2] text-white rounded hover:bg-[#8070B9]">Add Hobby</button>
                        </div>

                        <label className='text-lg' htmlFor="zodiac_sign">Zodiac sign</label>
                        <div className='mb-4 flex flex-wrap'>
                                <input
                                    id="cancer"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="cancer"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "cancer"}
                                />
                                <label htmlFor="cancer">Cancer</label>
                                <input
                                    id="gemini"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="gemini"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "gemini"}
                                />
                                <label htmlFor="gemini">Gemini</label>
                                <input
                                    id="taurus"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="taurus"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "taurus"}
                                />
                                <label htmlFor="taurus">Taurus</label>
                                <input
                                    id="aquarius"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="aquarius"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "aquarius"}
                                />
                                <label htmlFor="aquarius">Aquarius</label>
                                <input
                                    id="aries"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="aries"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "aries"}
                                />
                                <label htmlFor="aries">Aries</label>
                                <input
                                    id="libra"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="libra"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "libra"}
                                />
                                <label htmlFor="libra">Libra</label>
                                <input
                                id="pisces"
                                type="radio"
                                name="zodiac_sign"
                                value="pisces"
                                onChange={handleChange}
                                checked={formData.zodiac_sign === "pisces"}
                                />
                                <label htmlFor="pisces">Pisces</label>
                                <input
                                    id="sagittarius"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="sagittarius"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "sagittarius"}
                                />
                                <label htmlFor="sagittarius">Sagittarius</label>
                                <input
                                    id="capricorn"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="capricorn"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "capricorn"}
                                />
                                <label htmlFor="capricorn">Capricorn</label>
                                <input
                                    id="leo"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="leo"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "leo"}
                                />
                                <label htmlFor="leo">Leo</label>
                                <input
                                    id="scorpio"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="scorpio"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "scorpio"}
                                />
                                <label htmlFor="scorpio">Scorpio</label>
                                <input
                                    id="virgo"
                                    type="radio"
                                    name="zodiac_sign"
                                    value="virgo"
                                    onChange={handleChange}
                                    checked={formData.zodiac_sign === "virgo"}
                                />
                                <label htmlFor="virgo">Virgo</label>
                        </div>

                        <label className='text-lg' htmlFor="education">Education</label>
                        <input
                            id="education"
                            type='text'
                            name="education"
                            placeholder="Education"
                            required={true}
                            value={formData.education}
                            onChange={handleChange}
                            className='mb-2'
                        />

                        <label className='text-lg'>Personality type</label>
                        <div className='flex flex-wrap mb-4'>
                            <input
                                id="INTJ"
                                type="radio"
                                name="personality_type"
                                value="INTJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "INTJ"}
                            />
                            <label htmlFor="INTJ">INTJ</label>
                            <input
                                id="INTP"
                                type="radio"
                                name="personality_type"
                                value="INTP"
                                onChange={handleChange}
                                checked={formData.personality_type === "INTP"}
                            />
                            <label htmlFor="INTP">INTP</label>
                            <input
                                id="ENTJ"
                                type="radio"
                                name="personality_type"
                                value="ENTJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ENTJ"}
                            />
                            <label htmlFor="ENTJ">ENTJ</label>
                            <input
                                id="ENTP"
                                type="radio"
                                name="personality_type"
                                value="ENTP"
                                onChange={handleChange}
                                checked={formData.personality_type === "ENTP"}
                            />
                            <label htmlFor="ENTP">ENTP</label>
                            <input
                                id="INFJ"
                                type="radio"
                                name="personality_type"
                                value="INFJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "INFJ"}
                            />
                            <label htmlFor="INFJ">INFJ</label>
                            <input
                                id="INFP"
                                type="radio"
                                name="personality_type"
                                value="INFP"
                                onChange={handleChange}
                                checked={formData.personality_type === "INFP"}
                            />
                            <label htmlFor="INFP">INFP</label>
                            <input
                                id="ENFJ"
                                type="radio"
                                name="personality_type"
                                value="ENFJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ENFJ"}
                            />
                            <label htmlFor="ENFJ">ENFJ</label>
                            <input
                                id="ENFP"
                                type="radio"
                                name="personality_type"
                                value="ENFP"
                                onChange={handleChange}
                                checked={formData.personality_type === "ENFP"}
                            />
                            <label htmlFor="ENFP">ENFP</label>
                            <input
                                id="ISTJ"
                                type="radio"
                                name="personality_type"
                                value="ISTJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ISTJ"}
                            />
                            <label htmlFor="ISTJ">ISTJ</label>
                            <input
                                id="ISFJ"
                                type="radio"
                                name="personality_type"
                                value="ISFJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ISFJ"}
                            />
                            <label htmlFor="ISFJ">ISFJ</label>
                            <input
                                id="ESTJ"
                                type="radio"
                                name="personality_type"
                                value="ESTJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ESTJ"}
                            />
                            <label htmlFor="ESTJ">ESTJ</label>
                            <input
                                id="ESFJ"
                                type="radio"
                                name="personality_type"
                                value="ESFJ"
                                onChange={handleChange}
                                checked={formData.personality_type === "ESFJ"}
                            />
                            <label htmlFor="ESFJ">ESFJ</label>
                            <input
                                id="ISTP"
                                type="radio"
                                name="personality_type"
                                value="ISTP"
                                onChange={handleChange}
                                checked={formData.personality_type === "ISTP"}
                            />
                            <label htmlFor="ISTP">ISTP</label>
                            <input
                                id="ISFP"
                                type="radio"
                                name="personality_type"
                                value="ISFP"
                                onChange={handleChange}
                                checked={formData.personality_type === "ISFP"}
                            />
                            <label htmlFor="ISFP">ISFP</label>
                            <input
                                id="ESTP"
                                type="radio"
                                name="personality_type"
                                value="ESTP"
                                onChange={handleChange}
                                checked={formData.personality_type === "ESTP"}
                            />
                            <label htmlFor="ESTP">ESTP</label>
                        </div>

                        <label className='text-lg' htmlFor="about">About me</label>
                        <textarea name="about" id="about" className='w-full mt-2 rounded-xl text-black px-4 py-2 outline-none' rows="10"></textarea>
                        <input className="mt-3 bn632-hover bn25 w-full" type="submit" value="Submit" />
                    </section>
                </form>
            </div>
        </>
    )
}

export default OnBoarding;
