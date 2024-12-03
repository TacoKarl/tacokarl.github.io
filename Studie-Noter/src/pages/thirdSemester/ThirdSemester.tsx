import { useEffect, useState } from "react";

const ThirdSemester: React.FC = () => {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        fetch("./third.html")
            .then((response) => response.text())
            .then((data) => setHtmlContent(data));
    }, []);

    return (
        <div>
            <div
                dangerouslySetInnerHTML={{
                    __html: htmlContent,
                }}
            />
        </div>
    );
};

export default ThirdSemester;
