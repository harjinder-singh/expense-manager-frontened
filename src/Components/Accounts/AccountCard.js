import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

function AccountCard({account}) {
  return (
    <Card className="text-center">
      <Card.Header>{account.accountType}</Card.Header>
      <Card.Body>
        <Card.Title>Account Number <h4>{account.id}</h4></Card.Title>
        <Card.Text>Current Balance</Card.Text> <h4>{account.balance.toFixed(2)}</h4>
        <div className="col col-sm align-self-center">
          <h6 className="text-center">
            <Button variant="primary" className='form-button' href={`/accounts/${account.id}/transactions`}>Transactions</Button>
          </h6>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">Opened on: {moment(account.createdAt).format('MMMM Do YYYY')}</Card.Footer>
    </Card>
  );
}

export default AccountCard;