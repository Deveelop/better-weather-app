import React from 'react';

interface RecentSearchesProps {
    recentSearches: string[];
}

const RecentSearches: React.FC<RecentSearchesProps> = ({ recentSearches }) => {
    return (
        <>
<main className="main-content">
				<div className="fullwidth-block">
					<div className="container">
						<h2 className="section-title">Recent search</h2>
						<div className="row">
							
                        {recentSearches.map((search, index) => (
                    <div key={index} className="col-md-3 col-sm-6">
                    <div className="live-camera">
                        <h3 className="location">{search}</h3>
                    </div>
                </div>
                ))}
               
							
							
						</div>
					</div>
				</div>

				
				
			</main>

        {/*<div>
            <h3>Recent Searches</h3>
            <ul>
                {recentSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                ))}
            </ul>
            </div>*/}
            </>
    );
};

export default RecentSearches;
