import { Container } from "@mui/material";

const BlogContent = () => {
    return (
        <div>
            <div className={`bg-cover bg-center text-center mb-10 blog-image`}>
                <div className="bg-black bg-opacity-45 py-[100px] md:py-[180px]">
                    <h1 className="text-white font-main font-bold text-2xl md:text-[50px] mx-6">
                        Immovable Assets as Securities; The New Era
                    </h1>
                </div>
            </div>
            <Container maxWidth="md" className="space-y-4 font-poppins text-justify font-medium text-zinc-600">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nisi exercitationem aperiam vel ea corrupti quidem eum ad
                    numquam vero fuga, itaque corporis officia expedita quos?
                    Enim doloremque tempora sed ducimus! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Maxime accusamus ullam
                    quis perferendis deleniti ut officiis, fuga inventore? Eius
                    amet molestiae architecto, adipisci nisi debitis fuga iusto
                    sapiente provident eveniet?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur itaque ab, asperiores repudiandae aliquam
                    accusamus. Explicabo similique cum ipsa delectus qui tenetur
                    deleniti laborum recusandae repellendus. Iusto maiores
                    voluptates iste!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia repellat eum dolorum nostrum neque vitae nisi quasi
                    mollitia nihil recusandae temporibus autem delectus cum
                    modi, blanditiis, officiis maiores alias ipsa?
                </p>
            </Container>
        </div>
    );
};

export default BlogContent;
