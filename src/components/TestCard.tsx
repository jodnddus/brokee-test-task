import React from "react";

import { TestType } from "../type/test";

function TestCard({ category, name, featured_image: testThumbnail }: TestType) {
    return (
        <div className="test-card">
            <div className="test-thumbnail-container">
                <img className="test-thumbnail" src={testThumbnail} alt={`${category} image`} />
            </div>
            {name}
        </div>
    )
}

export default TestCard