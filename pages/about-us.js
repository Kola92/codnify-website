import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import "antd/dist/antd.css";

import { Container, Row, Col } from "react-bootstrap";
import { Tabs, Card } from "antd";
import Avatar from "@mui/material/Avatar";
import Icon, { UserOutlined } from "@ant-design/icons";

import Footer from "../components/Footer";
import { teamDevelopersCard, teamFoundersCard } from "../TeamMembersData";
import { DesignersSvg, DeveloperSvg, MarketingSvg } from "../CustomSvg";
import NavigationBarWithWhiteLogo from "../components/NavbarWithWhiteLogo";

const { TabPane } = Tabs;

AboutUs.title = " About Us | Codnify";
AboutUs.description = "Codnify About Us";

const DeveloperIcon = (props) => <Icon component={DeveloperSvg} {...props} />;
const DesignersIcon = (props) => <Icon component={DesignersSvg} {...props} />;
const MarketingIcon = (props) => <Icon component={MarketingSvg} {...props} />;

export default function AboutUs() {
  const aboveFoldStyling = {
    backgroundImage:
      "url('/images/wavy-hero.png'), url('/images/about-us/aboutus-abovefold-image.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center, right bottom",
  };

  const worldMapStyling = {
    backgroundImage: "url('/images/about-us/world-map.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={{ height: "100vh" }} className={styles.container}>
      <Head>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='aboutUsAboveFold' style={aboveFoldStyling}>
        <header className='about-header'>
          <NavigationBarWithWhiteLogo />
        </header>
        <Container>
          <Row>
            <Col className='about-copy-text'>
              <h1>About Us</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className={styles.main}>
        <Container>
          <Row as='section' className='about-page-container'>
            <h3>Building An Open Digital Economy</h3>
            <p className='about-copy'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, dis
              nunc sit pretium ornare vitae. Id ipsum sed semper sit nulla
              consequat, purus blandit. Turpis viverra eget aliquet sed non
              massa. Viverra tristique diam viverra risus tellus. Mauris ornare
              mauris, risus, ultricies lacus non nisl proin. Dapibus lorem quis
              proin sodales pellentesque. Urna aliquet consectetur elit dui amet
              suscipit arcu. Vitae quis vestibulum arcu, aliquam elementum.
              Nulla quis a, rhoncus nunc consequat egestas. Aliquet id amet, et
              suscipit. Praesent platea nullam nullam tellus vitae maecenas
              pulvinar dictumst facilisi. Amet aliquet amet, turpis consectetur
              sed sem. Habitasse neque etiam in lacus nisl. Tortor velit
              condimentum consequat bibendum ipsum eget eu. Dui pharetra tempor
              fringilla scelerisque faucibus. Viverra sodales amet eget faucibus
              facilisis faucibus sed nunc adipiscing. Pulvinar massa varius
              donec ipsum nunc. Ultrices mauris, morbi porta quam congue
              aliquam. Etiam id nibh consectetur facilisi tincidunt. Nibh quam
              pellentesque in dui nisl, ac. Blandit in. Mauris ornare mauris,
              risus, ultricies lacus non nisl proin. Dapibus lorem quis proin
              sodales pellentesque. Urna aliquet consectetur elit dui amet
              suscipit arcu.
            </p>
          </Row>

          <Row as='section' className='about-team-section'>
            <h3>Team Members</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              interdum pharetra etiam dictum feugiat fringilla leo. Massa
              placerat in ac sapien, cursus id mattis facilisis. Velit volutpat
              in volutpat nisl est, nunc, nunc arcu dignissim. Eu, sed
              sollicitudin lorem ante purus in.
            </p>
            <Row>
              <Tabs
                defaultActiveKey='1'
                tabPosition='left'
                className='team-members-tabs'
              >
                <TabPane
                  tab={
                    <span>
                      <UserOutlined />
                      Founders
                    </span>
                  }
                  key='1'
                >
                  <div className='row'>
                    {teamFoundersCard.map((card) => (
                      <Card key={card.id} className='card-column'>
                        <Avatar
                          style={{ width: 140, height: 140 }}
                          src={card.img}
                        />
                        <div className='founder-details'>
                          <h4>{card.memberRole}</h4>
                          <h5>{card.memberName}</h5>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabPane>

                <TabPane
                  tab={
                    <span>
                      <DeveloperIcon />
                      Developers
                    </span>
                  }
                  key='2'
                >
                  <div className='row'>
                    {teamDevelopersCard.map((card) => (
                      <Card key={card.id} className='card-column'>
                        <Avatar
                          style={{ width: 140, height: 140 }}
                          src={card.img}
                        />
                        <div className='founder-details'>
                          <h4>{card.memberRole}</h4>
                          <h5>{card.memberName}</h5>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabPane>

                <TabPane
                  tab={
                    <span>
                      <DesignersIcon />
                      Designers
                    </span>
                  }
                  key='3'
                >
                  Designers
                </TabPane>

                <TabPane
                  tab={
                    <span>
                      <MarketingIcon />
                      Marketers
                    </span>
                  }
                  key='4'
                >
                  Marketers
                </TabPane>
              </Tabs>
            </Row>
          </Row>

          <Row as='section' className='about-location-section'>
            <h3>Our Locations</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              interdum pharetra etiam dictum feugiat fringilla leo. Massa
              placerat in ac sapien, cursus id mattis facilisis. Velit volutpat
              in volutpat nisl est, nunc, nunc arcu dignissim. Eu, sed
              sollicitudin lorem ante purus in.
            </p>
            <div className='world-map-section' style={worldMapStyling}>
              <div className='address-card'>
                <Image
                  src='/images/about-us/flag-for-nigeria.svg'
                  width={94}
                  height={94}
                  alt='Nigeria Flag'
                />
                <h4>Nigeria</h4>
                <p>
                  52, Street, Road, City, Federal Capital Territory, Nigeria.
                </p>
              </div>
              <div className='address-card'>
                <Image
                  src='/images/about-us/flag-for-united-states.svg'
                  width={94}
                  height={94}
                  alt='United States Flag'
                />
                <h4>United States</h4>
                <p>69, Street, Road, City, Washington D.C., United States.</p>
              </div>
            </div>
          </Row>
        </Container>
      </main>

      <div className='footer-container'>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
