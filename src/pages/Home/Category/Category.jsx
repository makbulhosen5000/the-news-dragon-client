import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            Category {id}
            {
                categoryNews.map(news=><NewsCard key={news._id}  news={news} />)
            }
        </div>
    );
};

export default Category;