// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const AdPopup = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
     <img src='/images/vpn-advertise.jpg' />
      <button className='close-popup' onClick={closeModal}>X</button>
    </Modal>
  );
};

export default AdPopup;
