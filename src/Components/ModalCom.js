import { Button, IconButton} from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import ModalList from "./ModalList"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import CancelIcon from '@mui/icons-material/Cancel';

const customStyles = {
  content: {
    top: '52%',
    left: '15%',
    right: 'auto',
    bottom: 'auto',
    width:"450px",
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function ModalCom() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      
      <Button sx={{color:"black",fontWeight:"bold"}}
      onClick={openModal}
              startIcon={<MenuOutlinedIcon />}
              endIcon={<ArrowDropDownOutlinedIcon />}
              
            >
                Categories
                </Button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
        <IconButton style={{color:"red"}} onClick={closeModal}><CancelIcon fontSize="large"/></IconButton>

        <ModalList />        

  
        
      </Modal>
    </div>
  );
}

export default ModalCom