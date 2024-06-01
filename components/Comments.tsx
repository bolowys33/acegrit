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
    function formatTime(timeString: string): string {
        const dateObj = new Date(timeString);

        const month = dateObj.toLocaleString("default", { month: "long" });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const hours = dateObj.getHours();
        const minutes = dateObj.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const formattedTime = `${month} ${day}, ${year} at ${formattedHours}:${formattedMinutes} ${ampm}`;

        return formattedTime;
    }

    return (
        <div className="border-t border-gray my-12 py-5">
            <h3 className="text-navy text-2xl font-extrabold mb-7">Comments</h3>
            {comments?.length === 0 ? (
                <div>No comments added</div>
            ) : (
                comments?.map((comment) => (
                    <div>
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
                                <span className="text-lg mt-6">
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
