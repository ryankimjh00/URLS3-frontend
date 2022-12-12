import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { useCallback, useEffect, useState } from 'react';
import { LogOut } from '../features/Logout';
import { AccessToken } from '../variable/token';
import ProfileComponent from './ProfileComponent';
import { getMyUser } from '../features/getMyUser';
export const NavComponent = () => {
  const [loginStatus, setloginStatus] = useState(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  useEffect(() => {
    if (AccessToken !== undefined) setloginStatus(true);
    else { setloginStatus(false); }
  }, [AccessToken]);

  if (AccessToken !== undefined) {
    void getMyUser();
  }
  return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/">URLS3</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Information">Information</Nav.Link>
                    </Nav>
                    <Nav>
                        {loginStatus &&
                            <Nav.Link href="/analytics">Analytics</Nav.Link>
                        }
                        {loginStatus &&
                            // <Nav.Link onClick={onClickToggleModal}>
                            //     Profile
                            // </Nav.Link>
                            <Nav.Link href="/profile" onClick={onClickToggleModal}>
                                Profile
                            </Nav.Link>
                        }
                        {loginStatus &&
                            <Nav.Link onClick={LogOut}>
                                LogOut
                            </Nav.Link>
                        }
                        {!loginStatus &&
                            <Nav.Link href="/signup">
                                SignIN
                            </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
                {isOpenModal && (
                    <ProfileComponent onClickToggleModal={onClickToggleModal} />
                )}
            </Container>
        </Navbar>

  );
};
