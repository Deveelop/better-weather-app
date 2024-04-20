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
                    <div key={index} className="col-md-3 col-sm-6 p-2">
                    <div className=" bg-[#323544] px-2 rounded-sm cursor-pointer">
                        <h3 className="">{search}</h3>
                    </div>
                </div>
                ))}
               
							
							
						</div>
					</div>
				</div>

				
				
			</main>

     
            </>
    );
};

export default RecentSearches;
