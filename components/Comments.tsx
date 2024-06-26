import { formatTime } from "@/utils/formatDate";

const Comments = ({
    comments,
}: {
    comments?: {
        _id: string;
        date_created: string;
        author: string;
        body: string;
    }[];
}) => {
    return (
        <div className="border-t border-gray my-12 py-5">
            <h3 className="text-navy text-2xl font-extrabold mb-7">Comments</h3>
            {comments?.length === 0 ? (
                <div>No comments added</div>
            ) : (
                comments?.map((comment) => (
                    <div key={comment._id}>
                        <article className="flex gap-5 ml-5 py-6 border-b border-gray ">
                            <div className="grid place-items-center h-12 w-12 bg-slate-400 rounded-full text-xl uppercase">
                                {comment.author[0]}
                            </div>
                            <div className="flex flex-col gap">
                                <span className="font-bold text-lg">
                                    {comment.author}
                                </span>
                                <span className="text-sm text-slate-400">
                                    {formatTime(comment.date_created)}
                                </span>
                                <span className="lg:text-lg mt-6">
                                    {comment.body}
                                </span>
                            </div>
                        </article>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comments;
