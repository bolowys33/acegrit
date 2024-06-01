import { Alert, TextField, TextareaAutosize } from "@mui/material";
import Button from "./Button";
import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { API_LINK } from "@/constants/links";

const CommentForm = ({ id }: { id: string }) => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [inputData, setInputData] = useState({
        name: "",
        body: "",
        email: "",
    });
    const [saveInfo, setSaveInfo] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem("savedEmail");
        const savedName = localStorage.getItem("savedName");
        if (savedEmail && savedName) {
            setInputData((prevData) => ({
                ...prevData,
                email: savedEmail,
                name: savedName,
            }));
        }
    }, []);

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
            const response = await axios.post(
                `${API_LINK}/api/comments`,
                formData
            );

            if (response.status === 201) {
                setSuccess(true);
                setInputData({
                    name: "",
                    body: "",
                    email: "",
                });
                if (saveInfo) {
                    localStorage.setItem("savedEmail", inputData.email);
                    localStorage.setItem("savedName", inputData.name);
                }
                setTimeout(() => setSuccess(false), 10000);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(
                    error.response?.data.message ||
                        "Error adding comment, try again"
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
        <form onSubmit={handleSubmit} className="flex flex-col md:w-4/5">
            <h3 className="text-navy text-2xl font-extrabold mt-10">
                Leave a comment
            </h3>
            <div className="text-center w-max mx-auto mt-8">
                {error && <Alert severity="error">{error}</Alert>}
                {success && (
                    <Alert severity="success">
                        Your comment has been added and awaiting moderation,you
                        will see it once it has been moderated.
                    </Alert>
                )}
            </div>
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
            <div className="flex items-center mb-4">
                <input
                    type="checkbox"
                    id="saveInfo"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="mr-2"
                />
                <label htmlFor="saveInfo">Save my info for next time</label>
            </div>
            <TextareaAutosize
                minRows={7}
                maxRows={9}
                required
                value={inputData.body}
                name="body"
                onChange={(e) =>
                    setInputData({ ...inputData, body: e.target.value })
                }
                id="outlined-basic"
                placeholder="Your comment *"
                className="w-full p-3 outline-blue-600 mb-6 border border-zinc-300 rounded hover:border-black placeholder:text-zinc-500"
            />
            <Button
                type="submit"
                title={isloading ? "loading..." : "submit now"}
                classes="w-1/3 self-center h-14 rounded"
            />
        </form>
    );
};

export default CommentForm;
