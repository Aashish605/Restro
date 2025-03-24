import axios from 'axios';
// import { title } from 'process';
import React from 'react';
import { useForm } from "react-hook-form";

const Upload = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('section', data.section);
        formData.append('photo', data.photo[0]); // Append the image file

        sendData(formData,data.section);
    };

    const sendData = async (formData,section) => {
        try {
            const res = await axios.post(`http://localhost:3000/${section}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log(res);
        } catch (error) {
            console.log("error:", error);
        }
    };

    return (
        <>
            <div className='bg-black h-[100vh] text-white p-5 '>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-2 border-white my-2' placeholder='Name of food'  {...register("title", { required: true })} />
                    <br />
                    <input className='border-2 border-white my-2' placeholder='route'  {...register("section", { required: true })} />
                    <br />
                    <input className='border-2 border-white mb-2 ' placeholder='price' {...register("price", { pattern: /^\d+$/, required: true })} />
                    {errors?.price?.type === "required" && <p>This field is required</p>}
                    {errors?.price?.type === "pattern" && (
                        <p>Numbers only</p>
                    )}
                    <br />
                    <input className='border-2 border-white mb-2 ' type="file" {...register("photo", { required: true })} />
                    {errors?.photo?.type === "required" && <p>This field is required</p>}
                    <br />

                    <input type="submit" className='bg-white my-2 text-black p-4 rounded-2xl cursor-pointer' />
                </form>
            </div>
        </>
    );
};

export default Upload;
