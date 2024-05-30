import { TextField, TextareaAutosize } from "@mui/material";
import Button from "./Button";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const CommentForm = ({id}: {id: string}) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState({
        name: "",
        body: "",
        email: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess(false);

        const formData = new FormData();
        formData.append("author", inputData.name);
        formData.append("body", inputData.body);
        formData.append("email", inputData.email);
        formData.append("postId", id);

        try {
            
            const response = await axios.post("/api/comments", formData);

            if (response.status === 201) {
                setSuccess(true);
                setInputData({
                    name: "",
                    body: "",
                    email: ""
                });
                setTimeout(() => setSuccess(false), 10000);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(
                    error.response?.data.message || "Error adding comment, try again"
                );
            } else {
                setError("An unknown error occurred");
            }
            setTimeout(() => setError(""), 10000);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-4/5">
            <h3 className="text-navy text-2xl font-extrabold mt-10 mb-8">
                Leave a comment
            </h3>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="outlined-basic"
                label="Name"
                type="text"
                autoFocus={false}
                className="mb-4 text-gray-700 rounded bg-white"
                value={inputData.name}
                name="name"
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="outlined-basic"
                label="Email Address"
                type="email"
                autoFocus={false}
                className="mb-4 text-gray-700 rounded bg-white"
                value={inputData.email}
                name="email"
                onChange={handleChange}
    
            />
            <TextareaAutosize
                minRows={7}
                maxRows={9}
                required
                value={inputData.body}
                name="body"
                onChange={e => setInputData({...inputData, body: e.target.value})}
                id="outlined-basic"
                placeholder="Your message *"
                className="w-full p-3 outline-blue-600 mb-6 border border-zinc-300 rounded hover:border-black placeholder:text-zinc-500"
            />
            <Button
                type="submit"
                title="submit now"
                classes="w-full h-14 rounded"
            />
        </form>
    );
};

export default CommentForm;
