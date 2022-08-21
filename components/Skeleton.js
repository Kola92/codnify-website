import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Blog.module.css";

const { Collapse, Brand } = Navbar;

export default function Skeleton() {
  return (
    <div className='skeleton-container'>
      <div>
        <div className='blogAboveFold skeletonAboveFold'>
          <header className='services-header skeleton-header'>
            <Navbar expand='lg'>
              <Container>
                <Brand>
                  <div className='skeleton-navbar-brand'>
                    <img className='skeleton' width={60} height={60} alt='' />
                    <span className='navbar-brand-text skeleton skeleton-text skeleton-navbar-brand-text'></span>
                  </div>
                </Brand>
                <Collapse className='justify-content-end'>
                  <Nav className='navbar-nav-white skeleton skeleton-text skeleton-navbar-nav'></Nav>
                </Collapse>
              </Container>
            </Navbar>
          </header>
        </div>

        <main className={styles.main}>
          <Container
            as='section'
            className='section-blog-details skeleton-blog-details'
          >
            <Row className='section-blog-details__inner skeleton-blog-details__inner'>
              <Col
                lg={8}
                className='section-blog-details__left skeleton-left-section'
              >
                <div className='section-blog-details__left__inner skeleton-left-section-inner'>
                  <div className='section-blog-details__left__inner__featured-image skeleton-left-section-inner-featured-image'>
                    <img className='skeleton' alt='' width={800} height={500} />
                  </div>

                  <div className='skeleton-left-section-wrapper-content'>
                    <div className='skeleton skeleton-left-section-heading skeleton-text'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                  </div>

                  <div className='skeleton-left-section-wrapper-content'>
                    <div className='skeleton skeleton-left-section-heading skeleton-text'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                  </div>

                  <div className='skeleton-left-section-wrapper-content'>
                    <div className='skeleton skeleton-left-section-heading skeleton-text'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                  </div>

                  <div className='skeleton-left-section-wrapper-content'>
                    <div className='skeleton skeleton-left-section-heading skeleton-text'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                    <div className='section-blog-details__left__inner__content skeleton skeleton-text skeleton-left-section-content'></div>
                  </div>
                </div>
              </Col>

              <Col
                lg={3}
                className='section-blog-details__right skeleton-right-section'
              >
                <div className='section-blog-details__right__inner skeleton-blog-details__right__inner'>
                  <div className='section-blog-details__right__inner__content'>
                    <div className='section-blog-details__right__inner__content__author skeleton-author'>
                      <div className='section-blog-details__right__inner__content__author__image skeleton-author-image'>
                        <img
                          className='skeleton'
                          alt=''
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className='section-blog-details__right__inner__content__author__info skeleton-author-info'>
                        <div className='skeleton-author-name skeleton skeleton-text'></div>
                        <div className='skeleton-author-title skeleton skeleton-text'></div>
                      </div>
                    </div>

                    <div className='section-blog-details__right__inner__content__tags skeleton-blog-details__right__inner__content__tags'>
                      <div className='skeleton-blog-details__right__inner__content__tags__button skeleton'></div>
                    </div>

                    <div className='section-blog-details__right__inner__content__table-of-contents skeleton-blog-details__right__inner__content__table-of-contents'>
                      <h4>
                        <div className='skeleton-table-of-contents-heading skeleton skeleton-text'></div>
                      </h4>

                      <div className='skeleton-table-of-contents-item skeleton skeleton-text'></div>
                      <div className='skeleton-table-of-contents-item skeleton skeleton-text'></div>
                      <div className='skeleton-table-of-contents-item skeleton skeleton-text'></div>
                      <div className='skeleton-table-of-contents-item skeleton skeleton-text'></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </main>

        <div className='footer-container skeleton-footer'>
          <Container>
            <footer>
              <Row>
                <Col xs={12} md={4}>
                  <div className='footer-logo skeleton-footer-logo'>
                    <span className='skeleton-footer-logo-image'>
                      <img className='skeleton' width={60} height={60} alt='' />
                    </span>
                    <span className='skeleton-footer-logo-text skeleton skeleton-text'></span>
                  </div>
                  <div className='address skeleton-footer-address'>
                    <div className='skeleton-footer-address-text skeleton skeleton-text'></div>
                    <div className='skeleton-footer-address-text skeleton skeleton-text'></div>
                  </div>
                  <div className='social-media skeleton-footer-social-media'>
                    <div className='skeleton-footer-social-media-icons skeleton skeleton-text'></div>
                    <div className='skeleton-footer-social-media-icons skeleton skeleton-text'></div>
                    <div className='skeleton-footer-social-media-icons skeleton skeleton-text'></div>
                  </div>
                </Col>
                <Col xs={12} md={2}>
                  <div className='company-info skeleton-footer-company-info'>
                    <div className='skeleton-footer-company-info-heading skeleton skeleton-text'></div>

                    <div className='company-info-links skeleton-footer-company-info-links'>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} md={2}>
                  <div className='services-footer skeleton-services-footer'>
                    <div className='skeleton-services-footer-heading skeleton skeleton-text'></div>

                    <div className='services-footer-links skeleton-services-footer-links'>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} md={2}>
                  <div className='contact-footer skeleton-contact-footer'>
                    <div className='skeleton-contact-footer-heading skeleton skeleton-text'></div>

                    <div className='contact-footer-links skeleton-contact-footer-links'>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                      <div className='skeleton-footer-links-item skeleton skeleton-text'></div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className='skeleton-footer-second-row'>
                <div className='copyright skeleton-copyright skeleton skeleton-text'></div>
              </Row>
            </footer>
          </Container>
        </div>
      </div>
    </div>
  );
}
