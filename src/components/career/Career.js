import React, { useState, useEffect } from "react";
import Career1 from './career1.webp'
import Career2 from './career2.jpg'
import Career3 from './career3.jpg'
import './Career.css';

const Career = () => {

    // State để lưu ngày tháng
    const [date, setDate] = useState('');
    const [careerData, setCareerData] = useState([]);
    const [isCareerLoaded, setIsCareerLoaded] = useState(false);

    // Cập nhật ngày tháng khi component render
    useEffect(() => {
        const currentDate = new Date().toLocaleDateString(); // Lấy ngày hiện tại theo định dạng chuỗi
        setDate(currentDate); // Cập nhật state

        // Sau khi có ngày, cập nhật careerData
        setCareerData([
            { image: Career1, title: 'Graphic Designer', description: 'Develops software and applications.', date: currentDate },
            { image: Career2, title: 'Quisque Iddiam Velquam Elementum Pulvinar', description: 'Designs user interfaces and experiences.', date: currentDate },
            { image: Career3, title: 'Quam Vulputate Dignissim Suspendisse Intellus', description: 'Manages teams and projects.', date: currentDate },
        ]);

        // Set trạng thái sau khi Career được render hoàn chỉnh

        setIsCareerLoaded(true);

    }, []);

    return (
        <div className="container-career">
            <h2>Category CAREER</h2>
            <div className={`career-list ${isCareerLoaded ? 'loaded' : ''}`}>
                {careerData.map((item, index) => (
                    <div key={index} className={`career-item ${isCareerLoaded ? 'visible' : ''}`}>
                        <img src={item.image} alt={item.title} className="career-image" />
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p className="date">Posted on: {date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Career;