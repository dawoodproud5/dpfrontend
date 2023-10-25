import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} className="w-full h-full  px-5 py-3">
       Login
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="flex justify-center items-center"
      >
        <p>Sorry, You are Not Registered as Customer in our Database</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
