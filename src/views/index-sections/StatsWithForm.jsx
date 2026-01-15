import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import EnquiryForm from "./EnquiryForm";

/* ===================== STYLED COMPONENTS ===================== */
const Wrapper = styled.div`
  background: linear-gradient(135deg, #f8faff 0%, #f0f4ff 100%);
  border-radius: 24px;
  padding: 60px 0;

  @media (max-width: 992px) {
    padding: 40px 20px;
  }

  @media (max-width: 576px) {
    padding: 30px 15px;
  }
`;

const Subtitle = styled.div`
  font-family: "Outfit", sans-serif;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 40px;
  line-height: 1.2;

  @media (max-width: 992px) {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const StatBox = styled.div`
  text-align: left;
  padding: 25px;
  background: transparent;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 28px;
  color: #007bff;

  @media (max-width: 576px) {
    font-size: 22px;
    top: 10px;
    right: 10px;
  }
`;

const StatNumber = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: 52px;
  font-weight: 400;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  letter-spacing: -1px;
  line-height: 1.1;

  @media (max-width: 992px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 34px;
  }
`;

const StatTitle = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* ===================== COMPONENT ===================== */
const StatsWithForm = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT – STATS */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div style={{ paddingRight: "30px" }}>
              <Subtitle>Trusted Globally for Excellence</Subtitle>
              <StatsGrid>
                <StatBox>
                  <StatIcon>✓</StatIcon>
                  <StatNumber>
                    <CountUp start={0} end={4000} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce={true} />
                  </StatNumber>
                  <StatTitle>Completed Projects</StatTitle>
                </StatBox>

                <StatBox>
                  <StatIcon>⭐</StatIcon>
                  <StatNumber>
                    <CountUp start={0} end={100} duration={2.5} suffix="%" enableScrollSpy scrollSpyOnce={true} />
                  </StatNumber>
                  <StatTitle>Success Rate</StatTitle>
                </StatBox>

                <StatBox>
                  <StatIcon>🌍</StatIcon>
                  <StatNumber>
                    <CountUp start={0} end={35} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce={true} />
                  </StatNumber>
                  <StatTitle>International Standards</StatTitle>
                </StatBox>

                <StatBox>
                  <StatIcon>👥</StatIcon>
                  <StatNumber>
                    <CountUp start={0} end={450} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce={true} />
                  </StatNumber>
                  <StatTitle>Happy Clients</StatTitle>
                </StatBox>
              </StatsGrid>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="col-lg-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StatsWithForm;
