import React from "react";

import { TestType } from "../type/test";

function TestCard({ category, name, featured_image: testThumbnail, description_short, difficulty }: TestType) {
    const splitName = (name: string) => {
        if (name.includes(":")) {
            return name.split(":");
        }

        return [name];
    }

    return (
        <div className="test-card">
            <div className="test-thumbnail-container">
                <img className="test-thumbnail" src={testThumbnail} alt={`${category} thumbnail`} />
            </div>
            <div className="test-info-container">
                <div className="test-name-box">
                    {splitName(name).map((item, index) => <span className={`test-name ${index === 0 ? "category" : "name"}`} key={index}>{item}</span>)}
                </div>

                <p className="test-description">{description_short}</p>
                <div className="test-infomation-box">
                    <span className="test-difficulty-name">DIFFICULTY</span>
                    <span className={`test-difficulty ${difficulty.toUpperCase()}`}>{difficulty.toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default TestCard