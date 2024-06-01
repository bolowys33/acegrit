import { API_LINK } from "@/constants/links";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

export interface Comment {
    _id: string;
    author: string;
    body: string;
    date_created: string;
}

interface PrePost {
    title: string;
    url: string;
}

interface Post {
    _id: string;
    title: string;
    content: string;
    author: {
        firstname: string;
        lastname: string;
    };
    post_url: string;
    date_created: string;
    comments: Comment[];
    previousPost: PrePost;
    nextPost: PrePost;
}

interface PostResponse {
    success: boolean;
    data: Post;
    message: string | null;
}

const useSinglePost = (url: string) => {
    const [post, setPost] = useState<Post | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getPost = async (): Promise<void> => {
        setIsFetching(true);
        setError(null);

        try {
            const response: AxiosResponse<PostResponse> = await axios.get(
                `${API_LINK}/api/posts/${url}`
            );
            if (response.data.success) {
                setPost(response.data.data);
            } else {
                setError(response?.data?.message);
            }
        } catch (error) {
            setError("An error occurred while fetching post.");
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
        if (url) {
            getPost();
        } else {
            setIsFetching(false);
        }
    }, [url]);

    return { post, isFetching, error };
};

export default useSinglePost;
