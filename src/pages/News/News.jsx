import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
        const news = useLoaderData();
        const { _id, title, details, image_url, category_id } = news;
    return (
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to="">
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    );
};

export default News;