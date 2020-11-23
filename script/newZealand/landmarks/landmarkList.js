import { useLandmarks } from "/script/newZealand/landmarks/landmarkDataProvider.js"

import { Landmarks } from "/script/newZealand/landmarks/landmark.js"

export const landmarkList = () => {
    const contentElement = document.querySelector(".landmarks_list");
    const allTheLandmarks = useLandmarks();

    for (const landmarkObject of allTheLandmarks) {
        const landmarksHTML = Landmarks(landmarkObject)
        contentElement.innerHTML += landmarksHTML
    };
}
