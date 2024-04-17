import React from 'react';

interface RecentSearchesProps {
    recentSearches: string[];
}

const RecentSearches: React.FC<RecentSearchesProps> = ({ recentSearches }) => {
    return (
        <div>
            <h3>Recent Searches</h3>
            <ul>
                {recentSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentSearches;
