import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Upload = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setSubmissionStatus(null);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('section', data.section);
        formData.append('photo', data.photo[0]); // Append the image file

        try {
            const res = await axios.post(`http://localhost:3000/${data.section}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(res);
            setSubmissionStatus('success');
        } catch (error) {
            console.log("error:", error);
            setSubmissionStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    return (
        <>
            <div className='bg-gray-600 h-[100vh] text-white p-5 flex justify-center items-center'>
                <form className='bg-gray-800 p-6 rounded-lg shadow-lg' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-2xl mb-4'>Upload Food Item</h2>
                    <input className='border-2 border-white my-2 p-2 w-full' placeholder='Name of food'  {...register("title", { required: true })} />
                    <br />
                    <select className='border-2 border-white my-2 p-2 w-full' {...register("section",{required:true})}>
                        <option className='text-black' value="Nveg">Non-veg</option>
                        <option className='text-black' value="sd">Soft Drinks</option>
                        <option className='text-black' value="hd">Hard Drinks</option>
                        <option className='text-black' value="veg">Veg</option>
                    </select>
                    <br />
                    <input className='border-2 border-white mb-2 p-2 w-full' placeholder='Price' {...register("price", { pattern: /^\d+$/, required: true })} />
                    {errors?.price?.type === "required" && <p className='text-red-500'>This field is required</p>}
                    {errors?.price?.type === "pattern" && (
                        <p className='text-red-500'>Numbers only</p>
                    )}
                    <br />
                    <input className='border-2 border-white mb-2 p-2 w-full' type="file" {...register("photo", { required: true })} onChange={handleImageChange} />
                    {errors?.photo?.type === "required" && <p className='text-red-500'>This field is required</p>}
                    <br />
                    {imagePreview && <img src={imagePreview} alt="Preview" className='mb-2 max-h-48' />}
                    <br />
                    <input type="submit" className='bg-white my-2 text-black p-4 rounded-2xl cursor-pointer w-full' disabled={isLoading} />
                </form>
                {isLoading && <p className='text-white mt-4'>Loading...</p>}
                {submissionStatus === 'success' && <p className='text-green-500 mt-4'>Form submitted successfully!</p>}
                {submissionStatus === 'error' && <p className='text-red-500 mt-4'>There was an error submitting the form.</p>}
            </div>
        </>
    );
};

export default Upload;
