import React, { useState, useRef } from 'react';
import './SliderAbout.css';

const SliderAbout = () => {
    const [transformStyle, setTransformStyle] = useState('rotateX(0deg) rotateY(0deg)');
    const requestRef = useRef(null);

    // Xử lý sự kiện di chuột
    const handleMouseMove = (event) => {
        // Lấy phần tử cần tính toán
        const element = event.target;

        // Lấy thông tin về vị trí của phần tử trong trang
        const rect = element.getBoundingClientRect();

        // Tính toán vị trí chuột trong phần tử
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        // Lấy kích thước phần tử
        const { width, height } = rect;

        // Tính toán trung tâm của phần tử
        const centerX = width / 2;
        const centerY = height / 2;

        // Kiểm tra nếu các giá trị trung tâm không phải NaN
        if (isNaN(centerX) || isNaN(centerY)) {
            console.error("CenterX or CenterY is NaN");
            return;
        }

        // Tính toán độ lệch từ trung tâm
        const deltaX = offsetX - centerX;
        const deltaY = offsetY - centerY;

        // Tính toán góc quay (rotateX, rotateY)
        const rotateX = (deltaY / centerY) * 30;
        const rotateY = (deltaX / centerX) * 30;

        // Sử dụng requestAnimationFrame để giảm độ trễ khi cập nhật transform
        cancelAnimationFrame(requestRef.current);
        requestRef.current = requestAnimationFrame(() => {
            setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        });
    };

    // Khi chuột rời khỏi ảnh, quay lại góc 0 độ cho cả hai chiều
    const handleMouseLeave = () => {
        cancelAnimationFrame(requestRef.current);
        setTransformStyle('rotateX(0deg) rotateY(0deg)');
    };

    return (
        <div className='slider-about'>
            <h2>HELLO! WE ARE</h2>
            <h2>86CREATIVE</h2>
            <div
                className='slider-about-img'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src="https://86creative.vn/wp-content/uploads/2024/09/86CREATIVE_Banner_01-1.svg"
                    alt='123'
                    style={{ transform: transformStyle }}
                />
            </div>
        </div>
    );
};

export default SliderAbout;
