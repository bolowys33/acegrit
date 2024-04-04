interface Areas {
    area: string;
}

const Area = ({ params }: { params: Areas }) => {
    const { area } = params;
    return (
        <div>
            <h1>area: {area}</h1>
        </div>
    );
};

export default Area;
