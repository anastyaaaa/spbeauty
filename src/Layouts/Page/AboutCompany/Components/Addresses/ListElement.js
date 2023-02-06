import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`

`;

function ListElement(props) {
    return (
        <div className='d-flex justify-content-between align-items-center'>
         <Option >{props.children}</Option>
         <div className='d-inline-flex gap-2'>
         <IconOnlyButton icon={<EditIcon/>}/>
         <IconOnlyButton icon={<RemoveIcon/>}/>
         </div>
</div>
        
    );
}

export default ListElement;