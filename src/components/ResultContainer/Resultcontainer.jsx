import React from 'react';
import NameCard from '../NameCard/Namecard';
import './Resultcontainer.css';

const ResultContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestNameJsx}</div>;
};

export default ResultContainer;