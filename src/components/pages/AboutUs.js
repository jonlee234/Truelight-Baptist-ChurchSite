import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import WhatWeBelieve from "./WhatWeBelieve";
import "../AboutUs.css";

function AboutUs() {
  return (
    <>
    <div className= 'page-container'>
      <Header as="h1" icon textAlign="center" color="grey" size='huge'>
        
        <Header.Content>Welcome to our church website!</Header.Content>
      </Header>
      <Container text>
        <p className="about-us-text">
          Our mission is to serve Christ through training, equipping,
          evangelizing, educating and developing his people. We accomplish this
          by being an example of the Believer in: Word, Conversation, Charity,
          Spirit, Faith, Purity, (I Timothy 4:12 KJV).</p><p className="about-us-text"> Our prayer is that you
          are strengthened by the power of Jesus, and you are blessed with a
          life of abundance, fellowship, joy and liberty. True Light Baptist
          Church is not just a Church. it is a fellowship of Believers coming
          together in love to declare the glory of the Lord. </p><p className="about-us-text">We study the Bible
          and believe it is the authority and the road map to eternal salvation.
          If you are looking for a church home where the Bible is taught and the
          Word is preached, consider True Light. We are here to serve you and
          your family! May God richly bless you and keep you! We hope to see you
          soon!
        </p>
        
        <Segment raised compact>
        <Header as="h2" >
          Service Times
        </Header>
          <Header as="h4">MORNING SERVICE </Header>
          Sundays at 11am
          <Header as="h4">SUNDAY SCHOOL, MEMBERSHIP &amp; DISCIPLESHIP</Header>
          Sundays at 9:30 am
          <Header as="h4">
            WEDNESDAY MORNING PRAYER MEETING &amp; BIBLE STUDY
          </Header>
          Wednesdays at 11 am
          <Header as="h4">
            WEDNESDAY EVENING PRAYER MEETING &amp; BIBLE STUDY
          </Header>
          Wednesdays @ 6:00 pm
          <Header as="h4">THURSDAY PRAYER CALL</Header>
          Thursdays @ 6:30 am
        </Segment>
        
      </Container>
      </div>
      <WhatWeBelieve />
      
    </>
  );
}

export default AboutUs;
