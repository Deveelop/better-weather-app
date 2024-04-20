import React, { useState, ChangeEvent, FormEvent } from 'react';


type SearchFormProps = {
    onSubmit: (searchQuery: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(searchQuery);
        setSearchQuery('')
    };

    return (
        <div className="hero bg-[url('/images/banner.png')]">
				<div className="container">
					<form action="#" className="find-location" onSubmit={handleSubmit}>
						<input type="text" placeholder="Search your city now..." value={searchQuery}
                onChange={handleChange}/>
						<input type="submit" value="Search"/>
					</form>

				</div>
    </div>
    );
};

export default SearchForm;
