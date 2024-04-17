import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaSistrix } from 'react-icons/fa';

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
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter City Name"
                value={searchQuery}
                onChange={handleChange}
            />
            <button type="submit"><FaSistrix /></button>
        </form>
    );
};

export default SearchForm;
