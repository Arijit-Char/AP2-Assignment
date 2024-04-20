import "./App.css";
import * as React from "react";
import styled from "styled-components";

const data = [
  { label: "Home", url: "/" },
  { label: "Find Doctors", url: "/find-doctors", active: true },
  { label: "About Us", url: "/about-us" },
];

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoContainer>
          <Logo
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90be0f447220294bda95799dc50881203c46da486e51f33fb11c9539124252fc?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
            alt="Logo"
            style={{ marginRight: "4rem" }}
          />
          <Navigation>
            {data.map((item) => (
              <NavItem key={item.label} active={item.active}>
                {item.label}
              </NavItem>
            ))}
          </Navigation>
        </LogoContainer>
        <AuthButtons>
          <LoginButton>Login</LoginButton>
          <SignupButton>Sign-up</SignupButton>
        </AuthButtons>
      </HeaderContent>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #fff7e2;
  padding: 19px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1232px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.img`
  width: 259px;
  aspect-ratio: 5.26;
  object-fit: contain;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: #474747;
  text-transform: capitalize;
  line-height: 140%;
`;

const NavItem = styled.a`
  font-family: ${(props) => (props.active ? "DINPro-Bold" : "DINPro")},
    sans-serif;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  color: ${(props) => (props.active ? "#3a643b" : "inherit")};
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 24px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LoginButton = styled.button`
  font-family: DINPro, sans-serif;
  border-radius: 11px;
  border: 1px solid #3a643b;
  background-color: #fff7e2;
  color: #3a643b;
  padding: 11px 29px 16px;
  

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SignupButton = styled.button`
  font-family: DINPro, sans-serif;
  border-radius: 11px;
  background-color: #3a643b;
  color: #fff;
  padding: 16px 39px 20px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const greenBackground = "rgba(207, 235, 207, 0.5)";

const CircleShape = styled.div`
  background-color: ${greenBackground};
  border-radius: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

const PageContainer = styled(FlexContainer)`
  background-color: var(--Primary-Tint-2, #eaf2ea);
  align-items: center;
  justify-content: center;
  padding: 0 0px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled(FlexContainer)`
  max-width: 1218px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderSection = styled(FlexContainer)`
  align-items: start;
  gap: 20px;
  font-size: 32px;
  color: #000;
  font-weight: 350;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.16px;
  line-height: 75%;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const HeaderCircle = styled(CircleShape)`
  width: 184px;
  height: 100px;
`;

const HeaderTitle = styled.h1`
  font-family: Gotham Rounded, sans-serif;
  align-self: end;
  margin-top: 58px;
  flex-grow: 1;
  flex-basis: auto;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const SearchSection = styled(FlexContainer)`
  align-self: center;
  margin-top: 17px;
  max-width: 1021px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchRow = styled(FlexContainer)`
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const SearchColumn = styled(FlexContainer)`
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: ${(props) => props.marginLeft || "0px"};

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SearchCircle = styled(CircleShape)`
  width: 184px;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

const SearchInputContainer = styled(FlexContainer)`
  margin-top: 17px;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const SearchLocationInput = styled.div`
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgba(212, 212, 212, 1);
  background-color: #fff;
  display: flex;
  gap: 8px;
  color: #767676;
  letter-spacing: 0.08px;
  line-height: 150%;
  padding: 4px 12px;
`;

const IconImage = styled.img`
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: auto;
  object-position: center;
  width: ${(props) => props.width};
  ${(props) => props.margin && `margin: ${props.margin};`}
`;

const InputLabel = styled.label`
  font-family: Inter, sans-serif;
`;

const SearchInput = styled.div`
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(205, 205, 205, 1);
  background-color: #fff;
  display: flex;
  gap: 20px;
  color: #7b7b7b;
  letter-spacing: 0.5px;
  padding: 13px 10px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const InputPlaceholder = styled.span`
  font-family: Inter, sans-serif;
  margin: auto 0;
`;

function Hero() {
  return (
    <PageContainer>
      <ContentWrapper>
        <HeaderSection>
          <HeaderCircle />
          <HeaderTitle style={{ fontSize: "33px" }}>
            Find expert Doctors for an In-clinic session here
          </HeaderTitle>
          <HeaderCircle />
        </HeaderSection>
        <SearchSection style={{ marginLeft: "-4.7rem" }}>
          <SearchRow>
            <SearchColumn>
              <SearchCircle height="108px" margin="9px auto 0" />
            </SearchColumn>
            <SearchColumn>
              <SearchInputContainer>
                <SearchLocationInput
                  style={{ width: "22rem !importent", height: "3rem" }}
                >
                  <IconImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da8668c54eb05419b48ac1e94f9660ba601c255ba13422c25c4513c93072621?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                    aspectRatio="1"
                    width="24px"
                  />
                  <InputLabel
                    style={{
                      width: "8rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Select Location
                  </InputLabel>
                  <IconImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4be86c52b7bfef8b200fa7241d630813d523d6671524dbf1d3f5761dd408a5a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                    aspectRatio="0.85"
                    width="17px"
                    margin="auto 0"
                  />
                </SearchLocationInput>
                <SearchInput
                  style={{ width: "22rem !importent", height: "1.8rem" }}
                >
                  <InputPlaceholder style={{ width: "25rem", display: "flex" }}>
                    eg. Doctor, specialisation, clinic name
                  </InputPlaceholder>
                  <IconImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d57e9ec55738277bf87369862eca1c09de80d8ceedeb3c9540a1ab594522803b?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                    aspectRatio="1.16"
                    width="28px"
                  />
                </SearchInput>
              </SearchInputContainer>
            </SearchColumn>
            <SearchColumn marginLeft="20px"></SearchColumn>
            <SearchCircle
              height="117px"
              margin="0 auto"
              style={{ marginRight: "-3.4rem" }}
            />
          </SearchRow>
        </SearchSection>
      </ContentWrapper>
    </PageContainer>
  );
}

function Next() {
  return (
    <Div style={{ padding: "0px", paddingTop: "30px" }}>
      <Div2>
        <Div3>
          <Div4>Expertise</Div4>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fa94278d0b83e3694a4056792e6bfbad30b6a67f86ce151974a38ffc36b1?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          />
        </Div3>
        <Div5>
          <Div6>Gender</Div6>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fa94278d0b83e3694a4056792e6bfbad30b6a67f86ce151974a38ffc36b1?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          />
        </Div5>
        <Div7>
          <Div8>Fees</Div8>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fa94278d0b83e3694a4056792e6bfbad30b6a67f86ce151974a38ffc36b1?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          />
        </Div7>
        <Div9>
          <Div10>Languages</Div10>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fa94278d0b83e3694a4056792e6bfbad30b6a67f86ce151974a38ffc36b1?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          />
        </Div9>
        <Div11>
          <Div12>All filters</Div12>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6634fa94278d0b83e3694a4056792e6bfbad30b6a67f86ce151974a38ffc36b1?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          />
        </Div11>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  border-color: rgba(237, 237, 237, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 16px;
  color: #585858;
  font-weight: 500;
  text-align: center;
  line-height: 140%;
  justify-content: center;
  padding: 16px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  display: flex;
  width: 965px;
  max-width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  border-radius: 7px;
  background-color: #f3f3f3;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  justify-content: space-between;
  flex: 1;
  padding: 6px 13px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div4 = styled.div`
  font-family: DINPro, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 2.38;
  object-fit: auto;
  object-position: center;
  width: 12px;
  stroke-width: 2px;
  stroke: #828282;
  border-color: rgba(130, 130, 130, 1);
  border-style: solid;
  border-width: 2px;
  margin: auto 0;
`;

const Div5 = styled.div`
  border-radius: 7px;
  background-color: #f3f3f3;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  justify-content: space-between;
  flex: 1;
  padding: 6px 13px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  font-family: DINPro, sans-serif;
`;

const Div7 = styled.div`
  border-radius: 7px;
  background-color: #f3f3f3;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  justify-content: space-between;
  flex: 1;
  padding: 6px 15px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div8 = styled.div`
  font-family: DINPro, sans-serif;
`;

const Div9 = styled.div`
  border-radius: 7px;
  background-color: #f3f3f3;
  display: flex;
  gap: 20px;
  white-space: nowrap;
  justify-content: space-between;
  flex: 1;
  padding: 6px 12px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  font-family: DINPro, sans-serif;
`;

const Div11 = styled.div`
  border-radius: 7px;
  background-color: #dceedc;
  display: flex;
  gap: 20px;
  color: #3a643b;
  justify-content: space-between;
  flex: 1;
  padding: 6px 10px 6px 12px;
`;

const Div12 = styled.div`
  font-family: DINPro, sans-serif;
`;

function Cards() {
  return (
    <>
      <div className="div" style={{ width: "356px" }}>
        <div className="div-2">
          <div className="div-3">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c81e943e2e118aab19171ea54f5cd2218ddb8dd42f39865f5db51145648ec14a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
              className="img"
            />
            <div className="div-4">
              <div className="div-5">Dr. Prerna Narang</div>
              <div className="div-6">
                <div className="div-7">
                  <div className="div-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e502a88e3a811cb55987fb48d3a13446949d457a8caf658e4001065ef0e3fe94?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                      className="img-2"
                    />
                    <div className="div-9">Male-Female Infertility</div>
                  </div>
                  <div className="div-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/30fa52070f751b009660d5d7dd14846a14c65973cd004a3cfdfe46bbc9571f02?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                      className="img-3"
                    />
                    <div className="div-11">7 years of Experience</div>
                  </div>
                  <div className="div-12">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aed98486e85d01cd0f6c82b482fd79334e182a8a8ed8126e9a357a0e8bbe6c21?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                      className="img-4"
                    />
                    <div className="div-13">
                      Speaks: English, Hindi, Marathi
                    </div>
                  </div>
                </div>
                <div className="div-14">
                  <div className="div-15">
                    <div className="div-16">Video Consultation</div>
                    <div className="div-17">₹800</div>
                  </div>
                  <div className="div-18">
                    <div className="div-19">Chat Consultation</div>
                    <div className="div-20">Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-21">
            <div className="div-22">View Profile</div>
            <div className="div-23">Book a consultation</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          border-radius: 30px;
          box-shadow: 0px 4px 12.5px 0px rgba(0, 0, 0, 0.07);
          border-color: rgba(227, 227, 227, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff7e2;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          padding: 28px 36px;
        }
        @media (max-width: 991px) {
          .div {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
        }
        .img {
          aspect-ratio: 0.97;
          object-fit: auto;
          object-position: center;
          width: 149px;
          align-self: center;
          max-width: 100%;
        }
        .div-4 {
          display: flex;
          margin-top: 21px;
          flex-direction: column;
        }
        .div-5 {
          color: #2e2f2e;
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -0.32px;
          font: 700 32px/87.5% Nunito, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-6 {
          justify-content: center;
          display: flex;
          margin-top: 16px;
          flex-direction: column;
        }
        .div-7 {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          color: #646665;
          font-weight: 400;
          letter-spacing: -0.16px;
          margin: 0 21px;
        }
        @media (max-width: 991px) {
          .div-7 {
            margin: 0 10px;
          }
        }
        .div-8 {
          display: flex;
          gap: 15px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
          margin: auto 0;
        }
        .div-9 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
        }
        .div-10 {
          display: flex;
          margin-top: 7px;
          gap: 7px;
          font-weight: 600;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-11 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          margin: auto 0;
        }
        .div-12 {
          display: flex;
          margin-top: 7px;
          gap: 12px;
          color: #656565;
        }
        .img-4 {
          aspect-ratio: 1.12;
          object-fit: auto;
          object-position: center;
          width: 18px;
          margin: auto 0;
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
        }
        .div-14 {
          justify-content: center;
          display: flex;
          margin-top: 16px;
          gap: 8px;
          font-size: 14px;
          letter-spacing: -0.14px;
          line-height: 143%;
          padding: 0 8px;
        }
        .div-15 {
          border-radius: 10px;
          border-color: rgba(58, 100, 59, 0.39);
          border-style: solid;
          border-width: 1px;
          background-color: #fff7e2;
          display: flex;
          flex-direction: column;
          padding: 8px 8px 16px;
        }
        .div-16 {
          color: #3c3c3c;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          font-weight: 600;
        }
        .div-17 {
          color: #3a643b;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          font-weight: 700;
          align-self: center;
          margin-top: 4px;
        }
        .div-18 {
          border-radius: 10px;
          border-color: rgba(58, 100, 59, 0.39);
          border-style: solid;
          border-width: 1px;
          background-color: #fff7e2;
          display: flex;
          flex-direction: column;
          padding: 8px 8px 4px;
        }
        .div-19 {
          color: #3c3c3c;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          font-weight: 600;
        }
        .div-20 {
          color: #3a643b;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          font-weight: 700;
          align-self: center;
          margin-top: 4px;
        }
        .div-21 {
          display: flex;
          margin-top: 32px;
          flex-direction: column;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.16px;
        }
        .div-22 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          border-color: rgba(58, 100, 59, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          color: #3a643b;
          padding: 11px 60px;
        }
        @media (max-width: 991px) {
          .div-22 {
            padding: 0 20px;
          }
        }
        .div-23 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Nunito, sans-serif;
          justify-content: center;
          border-radius: 8px;
          background-color: #3a643b;
          margin-top: 9px;
          color: #fff;
          padding: 15px 49px;
        }
        @media (max-width: 991px) {
          .div-23 {
            padding: 0 30px;
          }
        }
      `}</style>
    </>
  );
}

function Op({ data }) {
  return (
    <>
      <div
        className="div"
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#eaf2ea",
          marginTop: "1rem",
        }}
      >
        <div className="div-2">{data} </div>
        <img
          style={{ width: "12px", margin: "auto 0" }}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28aa1ff13891543836a16bf734757e7098b2d21224fa0c93af91e75a4fff549?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          className="img"
        />
      </div>
      <style jsx>{`
        .div {
          justify-content: center;
          border-radius: 31px;
          background-color: #eaf2ea;
          display: flex;
          flex-direction: row;
          gap: 10px;
          padding: 15px 15px !important;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          font-family: Inter, sans-serif;
        }
        .img {
          aspect-ratio: 1.09;
          object-fit: auto;
          object-position: center;
          width: 12px;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Next />
      <div
        style={{
          display: "flex",
          width: "40vw",
          gap: "10px",
          margin: "3rem",
          marginLeft: "50vw",
        }}
      >
        <Op data="Hair Care" />
        <Op data="Female" />
        <Op data="Rs.0-Rs.500" />
        <Op data="Hindi" />
      </div>
      <div
        className="cards"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          width: "76vw",
          marginLeft: "13vw",
        }}
      >
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
