import React from "react";

interface ButtonProps {
    title: string;
    classes: string;
    type: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<ButtonProps> = ({ title, classes, type }) => {
    return (
        <button
            type={type}
            className={`transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase ${classes}`}>
            {title}
        </button>
    );
};

export default Button;
