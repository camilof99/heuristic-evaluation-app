import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const RangeValoration = ({ rating, setRating }) => {
    const SadFace = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5zm9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5zM16 19a8 8 0 0 0-6.85 3.89l1.71 1a6 6 0 0 1 10.28 0l1.71-1A8 8 0 0 0 16 19z" />
        </svg>
    );

    const ConfuseFace = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5zm9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5z" />
        </svg>
    );

    const NeutralFace = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5zm9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5zM10 20h12v2H10z" />
        </svg>
    );

    const SmilingFace = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5zm9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5zM16 24a8 8 0 0 0 6.85-3.89l-1.71-1a6 6 0 0 1-10.28 0l-1.71 1A8 8 0 0 0 16 24z" />
        </svg>
    );

    const SmilingFaceFull = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z" />
            <path d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5zm9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5zM9 20a8.13 8.13 0 0 0 14 0z" />
        </svg>
    );

    const myStyles = {
        itemShapes: [
            SadFace,
            ConfuseFace,
            NeutralFace,
            SmilingFace,
            SmilingFaceFull,
        ],
        activeFillColor: [
            "#da1600",
            "#db711a",
            "#dcb000",
            "#61bb00",
            "#009664",
        ],
        inactiveFillColor: "#a8a8a8",
    };

    return (
        <Rating
            style={{ maxWidth: 500 }}
            value={rating}
            onChange={setRating}
            itemStyles={myStyles}
        />
    );
};

export default RangeValoration;
