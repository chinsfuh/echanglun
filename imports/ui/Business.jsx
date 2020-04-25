import React from 'react';
import { Container, Row, Col, CardColumns } from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

const Business = props =>  {
    return (

    <CardDeck>
    <Card>
      {/* <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" /> */}
      <CardText>Image: {props.service.Image} </CardText>
      
      <CardBody>
        <CardColumns>
        <CardTitle>ID: {props.service.ID}</CardTitle>
        <CardSubtitle>Service: {props.service.Service}</CardSubtitle>
        <CardText>Service Name: {props.service.ServiceName}</CardText>
        <CardText>Address: {props.service.Address}</CardText>
        <CardText>City: {props.service.City}</CardText>
        <CardText>ZIP Postal: {props.service.ZIPPostal}</CardText>
        <CardText>{/* Business Phone: {props.service.BusinessPhone}  */}</CardText>
        <CardText>Mobile Phone: {props.service.MobilePhone}</CardText>
        <CardText>Link: {props.service.Link}</CardText>
        <CardText>Operation Hour: {props.service.OperationHour}</CardText>
        <Button>Read more</Button>
        </CardColumns>
      </CardBody>
    </Card>
  </CardDeck>
);
};

export default Business;