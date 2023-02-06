import { Container } from "react-bootstrap";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return ( 
<div className='d-inline-flex flex-column me-5 col borderAdress px-4 py-4 justify-content-between'>
            <div>
              <div className='title'>Адреса заведений</div>
              <div className='d-flex flex-column gap-5 py-5'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
            </div>
                    <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>

        
    );
}


export default Addresses;