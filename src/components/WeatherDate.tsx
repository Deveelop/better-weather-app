import { useState, useEffect } from 'react';

const WeatherDate = () => {
    const [day, setDay] = useState<string>('');
    const [date, setDate] = useState<number>(0);
    const [month, setMonth] = useState<string>('');
    const [year, setYear] = useState<number>(0);

    useEffect(() => {
        const currentDate = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        setDay(days[currentDate.getDay()]);
        setDate(currentDate.getDate());
        setMonth(months[currentDate.getMonth()]);
        setYear(currentDate.getFullYear());
    }, []);

    return{
        
            day: day,
            date: date,
            month: month,
            year :year
        
    };
};

export default WeatherDate;
