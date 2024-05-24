import { TextField, TextareaAutosize } from "@mui/material";
import Button from "./Button";

const CommentForm = () => {
    return ( 
        <div>
            <form action="">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Full Name"
                                type="text"
                                autoFocus={false}
                                className="mb-4 text-gray-700 rounded bg-white"
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
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Subject"
                                type="text"
                                autoFocus={false}
                                className="mb-8 text-gray-700 rounded bg-white"
                            />
                            <TextareaAutosize
                                minRows={7}
                                maxRows={9}
                                required
                                id="outlined-basic"
                                placeholder="Your message *"
                                className="w-full p-3 outline-blue-600 mb-6 border border-zinc-300 rounded hover:border-black placeholder:text-zinc-500"
                            />
                            <Button type="submit" title="submit now" classes="w-full h-14 rounded" />
                        </form>
        </div>
     );
}
 
export default CommentForm;