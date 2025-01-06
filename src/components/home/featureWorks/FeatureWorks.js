import React from 'react';
import images from '../../imagesData';
import './FeatureWorks.css';

class FeatureWorks extends React.Component {
    componentDidMount() {
        // Sau khi component render xong, thực hiện thay đổi nội dung thẻ <h2>
        let h2Element = document.querySelector(".animated-image h2");
        let str = h2Element.textContent;
        let arrStr = str.split(" ");
        arrStr[0] = `<span style="font-weight: 300;">${arrStr[0]}</span>`;
        h2Element.innerHTML = arrStr.join(" ");
    }

    render() {
        const selectedImages = images.slice(0, 8);

        // Chia thành các nhóm 2 ảnh
        const groupedImages = Array(Math.ceil(selectedImages.length / 2))
            .fill()
            .map((_, index) => selectedImages.slice(index * 2, index * 2 + 2));

        return (
            <div className='animated-image'>
                <h2>FEATURE WORKS</h2>
                <div className="list-img">
                    {groupedImages.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className={`img-item-${groupIndex + 1}`}
                            style={{
                                flex: '1 1 25%',
                                maxWidth: '25%',
                                padding: '0 4px',
                            }}
                        >
                            {group.map((img) => (
                                <img
                                    key={img.id}
                                    src={img.src}
                                    alt={`anh${img.id}`}
                                    style={{
                                        marginTop: '8px',
                                        verticalAlign: 'middle',
                                        width: '100%',
                                        borderRadius: '4%',
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div >
        );
    }
}

export default FeatureWorks;