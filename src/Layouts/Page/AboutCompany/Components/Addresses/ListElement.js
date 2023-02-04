import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`

`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-2'>
            <Option >{props.children}</Option>
            <EditIcon className='p-2'>  
            </EditIcon>
            <RemoveIcon className='p-2'>  
            </RemoveIcon>

        </div>
    );
}

export default ListElement;