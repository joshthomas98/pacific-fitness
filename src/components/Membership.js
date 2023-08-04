import Card from "react-bootstrap/Card";

function MembershipCard() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="text-light pb-3">Membership</h2>

        <Card style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title className="text-light">Membership</Card.Title>
            <Card.Subtitle className="mb-2 text-light">
              £49.99 per month
            </Card.Subtitle>
            <Card.Text className="pt-2 text-light">
              Your membership will be billed monthly from your bank account.
            </Card.Text>
            <Card.Link href="#">Find out more</Card.Link>
            <Card.Link href="#">Get in touch</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MembershipCard;
