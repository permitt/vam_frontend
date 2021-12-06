import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import Nav from 'react-bootstrap/Nav';

import { MENU, ORDER, ORDER_STATUS } from "../../routes";
import Employee from "./Employee";

const OrderStatusPage = () => {
    const navigate = useNavigate();

    const showOrderPage = () => {
        navigate(ORDER, { state: { 
            readOnly : true, 
            backRoute: ORDER_STATUS
        }})
    }

    return (
        <div>
            <Nav.Link href={MENU} >Menu</Nav.Link>
            <Employee />
            <Button onClick={showOrderPage}>
                Pregledaj racun
            </Button>
        </div>
    )


}


export default OrderStatusPage;