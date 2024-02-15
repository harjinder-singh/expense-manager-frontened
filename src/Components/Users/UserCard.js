import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { Link } from "react-router-dom";

function UserCard({user}) {
  return (
    <Card className="text-center">
      <Card.Header>{user.firstName} {user.lastName}</Card.Header>
      <Card.Body>
        <Card.Title>User Id <h4>{user.id}</h4></Card.Title>
        <Card.Text>Email</Card.Text> <h4>{user.email}</h4>
        <div className="col col-sm align-self-center">
          <h6 className="text-center">
            <Button variant="primary" className='form-button' as={Link} to={`${user.id}/accounts`}>Accounts</Button>
          </h6>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Created on: {moment(user.createdAt).format('MMMM Do YYYY')}</Card.Footer>
    </Card>
  );
}

export default UserCard;