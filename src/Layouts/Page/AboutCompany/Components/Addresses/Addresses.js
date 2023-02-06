import { Container } from "react-bootstrap";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return ( 
<div className='d-inline-flex flex-column gap-2 mt-4 py-4 px-4 col cont'> 
  <div class="dop_cont _cl4 justify-content-between">
  <div className='title1'>Адреса заведений</div>
    <div class="box _cl1">
      <div class="box-cont">
      <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
      </div>
      <div class="box-cont">
      <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
      </div>
    </div>
    <div class="box-cont">
    <SecondaryButton>Добавить филиал</SecondaryButton>
     </div>
    </div>
  </div>
        
    );
}


export default Addresses;