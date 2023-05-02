import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { _id,total_view, title, details, image_url, author, rating } = news;
    return (
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center">
          <Image style={{ height: "40px" }} src={author.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>{moment().format("yyyy, MM, D")}</p>
          </div>
          <div>
            <FaRegBookmark /> <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url}></Card.Img>
          <Card.Text>
            {
            details.length < 250 ? <>{details}</>
            :
            <>{details.slice(0,250)}...<Link to={`/news/${_id}`}>Read More</Link> </>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex text-muted">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={rating?.number}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={
                <FaStar/>
              }
              fullSymbol={<FaStar />}
            />
            <span className='ms-2'>{rating?.number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;