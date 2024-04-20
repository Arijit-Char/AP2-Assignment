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
  padding: 0 60px;

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
  height: 84px;
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

const HeaderCircleSmall = styled(CircleShape)`
  width: 184px;
  height: 76px;
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
          <HeaderTitle>
            Find expert Doctors for an In-clinic session here
          </HeaderTitle>
          <HeaderCircleSmall />
        </HeaderSection>
        <SearchSection>
          <SearchRow>
            <SearchColumn>
              <SearchCircle height="108px" margin="9px auto 0" />
            </SearchColumn>
            <SearchColumn marginLeft="20px">
              <SearchInputContainer>
                <SearchLocationInput>
                  <IconImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da8668c54eb05419b48ac1e94f9660ba601c255ba13422c25c4513c93072621?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                    aspectRatio="1"
                    width="24px"
                  />
                  <InputLabel>Select Location</InputLabel>
                  <IconImage
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4be86c52b7bfef8b200fa7241d630813d523d6671524dbf1d3f5761dd408a5a?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
                    aspectRatio="0.85"
                    width="17px"
                    margin="auto 0"
                  />
                </SearchLocationInput>
                <SearchInput>
                  <InputPlaceholder>
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
            <SearchColumn marginLeft="20px">
              <SearchCircle height="117px" margin="0 auto" />
            </SearchColumn>
          </SearchRow>
        </SearchSection>
      </ContentWrapper>
    </PageContainer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
