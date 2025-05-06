import React from "react";
import styled from "styled-components";
import { Phone, Clock, MapPin, Truck } from "lucide-react";

// Styled Components
const DeliverySection = styled.section`
  position: relative;
  min-height: 100vh;
//   background: linear-gradient(to bottom, #0a0a0a, #121212);
  padding: 120px 0;
  color: white;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.08) 0%,
    rgba(245, 158, 11, 0) 70%
  );
  z-index: 0;
`;

const TopCircle = styled(DecorativeCircle)`
  width: 600px;
  height: 600px;
  top: -50px;
  left: -150px;
`;

const BottomCircle = styled(DecorativeCircle)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 10;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const DecorationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const Decoration = styled.div`
  height: 3px;
  width: 120px;
  background: linear-gradient(
    90deg,
    rgba(245, 158, 11, 0.3),
    #f59e0b,
    rgba(245, 158, 11, 0.3)
  );
  border-radius: 3px;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #a3a3a3;
  max-width: 600px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const IconContainer = styled.div`
  margin: 0 auto 60px;
  display: flex;
  justify-content: center;
`;

const IconCircle = styled.div`
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.15);
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const DeliveryIcon = styled(Truck)`
  width: 80px;
  height: 80px;
  color: #f59e0b;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(18, 18, 18, 0.7);
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #222;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(245, 158, 11, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (min-width: 768px) {
    flex: 1 1 calc(50% - 15px);
    min-width: 250px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InfoIconContainer = styled.div`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`;

const InfoIcon = styled.div`
  color: #000;
  width: 28px;
  height: 28px;
  
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const InfoContent = styled.div`
  text-align: left;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #f59e0b;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const NotesContainer = styled.div`
  background-color: rgba(18, 18, 18, 0.5);
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  border: 1px solid #222;
`;

const Note = styled.p`
  color: #a3a3a3;
  margin-bottom: 12px;
  font-size: 1.05rem;
  line-height: 1.6;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 40px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #000;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(245, 158, 11, 0.5);
  }
`;

export default function DeliveryPage() {
    return (
        <DeliverySection>
            <TopCircle />
            <BottomCircle />

            <Container>
                <ContentWrapper>
                    <Title>Delivery Service</Title>
                    <DecorationWrapper>
                        <Decoration />
                    </DecorationWrapper>
                    <Subtitle>
                        Enjoy our exquisite cuisine in the comfort of your home or office
                    </Subtitle>

                    <IconContainer>
                        <IconCircle>
                            <DeliveryIcon />
                        </IconCircle>
                    </IconContainer>

                    <InfoContainer>
                        <InfoItem>
                            <InfoIconContainer>
                                <InfoIcon as={Phone} />
                            </InfoIconContainer>
                            <InfoContent>
                                <InfoTitle>Call to Order</InfoTitle>
                                <InfoValue>09167714748</InfoValue>
                            </InfoContent>
                        </InfoItem>

                        <InfoItem>
                            <InfoIconContainer>
                                <InfoIcon as={Clock} />
                            </InfoIconContainer>
                            <InfoContent>
                                <InfoTitle>Delivery Hours</InfoTitle>
                                <InfoValue>10:00 AM - 8:00 PM</InfoValue>
                            </InfoContent>
                        </InfoItem>

                        {/* <InfoItem>
                            <InfoIconContainer>
                                <InfoIcon as={MapPin} />
                            </InfoIconContainer>
                            <InfoContent>
                                <InfoTitle>Delivery Area</InfoTitle>
                                <InfoValue>Within 10 km radius</InfoValue>
                            </InfoContent>
                        </InfoItem> */}
                    </InfoContainer>

                    <NotesContainer>
                        <Note>• Minimum order value may apply</Note>
                        <Note>• Please allow 45-60 minutes for delivery</Note>
                        <Note>• Special requests can be accommodated</Note>
                        <Note>• Contact us for catering and large orders</Note>
                    </NotesContainer>

                    <ContactButton href="tel:09167714748">
                        Call Now
                    </ContactButton>
                </ContentWrapper>
            </Container>
        </DeliverySection>
    );
}
