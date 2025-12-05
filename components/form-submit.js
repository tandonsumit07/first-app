'use client';
import { useFormStatus } from "react-dom";

export default function FormSubmit(){

    const status = useFormStatus();

    if(status.pending){
        <p>Creating Post </p>
    }

    return (
        <>
        <button type="reset">Reset</button>
        <button type="submit">Create Post</button>
        </>
    )
}