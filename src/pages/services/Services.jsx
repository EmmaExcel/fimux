import React from "react";
import styled from "styled-components";
import { Utensils, Wine, Music, Users, Star, Coffee } from "lucide-react";

// Styled Components
const ServicesSection = styled.section`
  position: relative;
  min-height: 100vh;
//   background: linear-gradient(to bottom, #0a0a0a, #121212);
  padding: 120px 0;
  color: white;
  overflow: hidden;
  z-index: 10;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  border-radius: 10%;
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.08) 0%,
    rgba(245, 158, 11, 0) 70%
  );
  z-index: 0;
`;

const Circle1 = styled(DecorativeCircle)`
  width: 600px;
  height: 600px;
  top: -80px;
  left: -150px;
`;

const Circle2 = styled(DecorativeCircle)`
  width: 500px;
  height: 500px;
  bottom: -30px;
  right: -150px;
`;

const Circle3 = styled(DecorativeCircle)`
  width: 350px;
  height: 350px;
  top: 40%;
  right: 20%;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 10;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const MainTitle = styled.h2`
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
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: rgba(18, 18, 18, 0.7);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #222;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  transform: perspective(1000px);

  &:hover {
    transform: perspective(1000px) translateZ(15px);
    border-color: rgba(245, 158, 11, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const IconContainer = styled.div`
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
  transition: all 0.4s ease;
  position: relative;
  z-index: 10;

  ${Card}:hover & {
    box-shadow: 0 12px 25px rgba(245, 158, 11, 0.5);
    transform: translateY(-10px) scale(1.05);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 24px;
  }
`;

const CardContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

const CardDescription = styled.p`
  color: #a3a3a3;
  line-height: 1.6;
  font-size: 1.05rem;
`;

const StyledIcon = styled.div`
  color: #000;
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const BottomText = styled.div`
  text-align: center;
  margin-top: 80px;
  color: #a3a3a3;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HighlightText = styled.span`
  color: #f59e0b;
  font-weight: 600;
`;

const ContactButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #000;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(245, 158, 11, 0.5);
  }
`;

export default function Services() {
    const services = [
        {
            icon: <Utensils size={36} />,
            title: "Fine Dining",
            description:
                "Experience culinary excellence with our chef's signature dishes, crafted from the finest seasonal ingredients.",
        },
        {
            icon: <Wine size={36} />,
            title: "Premium Lounge",
            description:
                "Unwind in our sophisticated lounge with handcrafted cocktails and an extensive selection of fine wines and spirits.",
        },
        {
            icon: <Music size={36} />,
            title: "Live Entertainment",
            description:
                "Enjoy captivating performances from talented musicians and artists in an intimate and elegant atmosphere.",
        },
        {
            icon: <Users size={36} />,
            title: "Private Events",
            description:
                "Host unforgettable celebrations in our exclusive private dining spaces, with personalized menus and impeccable service.",
        },
        {
            icon: <Star size={36} />,
            title: "Chef's Experience",
            description:
                "Embark on a culinary journey with our exclusive chef's table experience, featuring bespoke tasting menus and wine pairings.",
        },
        {
            icon: <Coffee size={36} />,
            title: "Artisanal Beverages",
            description:
                "Discover our selection of specialty coffees, teas, and non-alcoholic creations, prepared with the same dedication as our cuisine.",
        },
    ];

    return (
        <ServicesSection>
            <Circle1 />
            <Circle2 />
            <Circle3 />

            <Container>
                <HeadingWrapper>
                    <MainTitle>Exquisite Experiences</MainTitle>
                    <DecorationWrapper>
                        <Decoration />
                    </DecorationWrapper>
                    <Subtitle>
                        Indulge in the finest offerings at Fimux Place, where every moment is crafted for your pleasure and satisfaction.
                    </Subtitle>
                </HeadingWrapper>

                <CardsGrid>
                    {services.map((service, index) => (
                        <Card key={index}>
                            <IconContainer>
                                <StyledIcon as="div">{service.icon}</StyledIcon>
                            </IconContainer>
                            <CardContent>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </CardsGrid>

                <BottomText>
                    Each of our services can be customized to meet your specific preferences. For special requests or to learn more about our <HighlightText>exclusive membership benefits</HighlightText>, please contact our concierge team.
                    <div>
                        <ContactButton id="#contact" href="tel:">Contact Us</ContactButton>
                    </div>
                </BottomText>
            </Container>
        </ServicesSection>
    );
}
