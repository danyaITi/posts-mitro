import { useState } from 'react';

import burger from '../assets/img/burger.png';
import Nav from './Nav';

import Offcanvas from 'react-bootstrap/Offcanvas';

export const Burger = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <img src={burger} alt="menu" height={50} onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="border-bottom">
                    <Offcanvas.Title className="d-flex align-items-center">
                        <img
                            src="https://www.pinclipart.com/picdir/big/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png"
                            height={50}
                        />
                        <span className="ms-2">
                            <div>Danil</div>
                            <small className="burger-email">
                                danil.grz@mail.ru
                            </small>
                        </span>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};
