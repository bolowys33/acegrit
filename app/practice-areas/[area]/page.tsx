import PageBanner from "@/components/PageBanner";
import { practiceAreas } from "@/constants/links";

interface Areas {
    area: string;
}

const Area = ({ params }: { params: Areas }) => {
    const { area } = params;
 
    const link = practiceAreas.find(item => item.path === `/${area}`)

    return (
        <div>
            <PageBanner title={link?.name} classes={`${area}-image`} />
        </div>
    );
};

export default Area;
