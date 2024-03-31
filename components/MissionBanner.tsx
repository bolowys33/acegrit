import { ModeStandby } from "@mui/icons-material";

const MissionBanner = () => {
    return (
        <div className="bg-cover bg-center text-white  text-center mission-image my-10 font-poppings text-[20px]">
            <div className="bg-black px-5 py-8 md:p-[80px] bg-opacity-70 space-y-4">
                <div className="rounded-full bg-white w-[50px] h-[50px] mx-auto">
                    <ModeStandby className="text-[50px] text-[#171727] mx-auto" />
                </div>
                <h1 className="font-extrabold leading-[31px] tracking-[2px]">
                    OUR MISSION
                </h1>
                <p className="tracking-[1px] leading-[34px]">
                    Our mission is to meet the needs of our clients and our goal
                    is to provide quality legal representation on a cost
                    effective basis.
                </p>
            </div>
        </div>
    );
};

export default MissionBanner;
