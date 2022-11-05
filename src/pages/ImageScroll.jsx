import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ImageScroll.css';

function ImageScroll() {
    // let exampleData = [{ yvalue: 100 }, { yvalue: 200 }]
    // const [testData, setTestData] = useState([]);
    const [numberOfColumns, setNumberOfColumns] = useState(0)
    window.onresize = () => setNumberOfColumns(3);
    const imageArray = new Array(5).fill(0);
    useEffect(() => {
        setNumberOfColumns(4);
    }, [])

    // useEffect(() => {
    //     startTimer();
    //     setTestData([{ yvalue: 100 }, { yvalue: 200 }]);
    // }, [])

    // function startTimer() {

    //     setTimeout(() => {
            
    //         exampleData.forEach((x) => {
    //             if (x.yvalue <= 210) {
    //                 x.yvalue += 1;
    //             } else {
    //                 x.yvalue = 100;
    //             }
    //             // console.log(x)
    //         })
    //         startTimer();
    //     }, 1000);
    // }
        
  return (
    <div className="imageScroll">
        <div className="gradient topGradient"></div>
        <div className="gradient bottomGradient"></div>
        <div className="imageSlides__container">
            {/* <div className="imageSlides__column" data-index="0" data-status="active"></div> */}
            {/* <div className="image">{exampleData.map((x, index) => (<p key={index}>{  testData[index].yvalue || 1 }</p>))}</div> */}
            { new Array(4).fill(0).map((_, index) => (
                <div key={index} className={`imageSlides__column ${index === 2 && " imageColumn--active"}`}>
                    <div className="image"></div>
                    { new Array(numberOfColumns).fill(0).map((_, index) => (
                        <div key={index} className="image"></div>
                    ))}
                </div>
            ))}
            
        </div>
    </div>
  );
}

export default ImageScroll;