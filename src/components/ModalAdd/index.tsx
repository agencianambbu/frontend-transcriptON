import React, { useContext } from "react";
import Modal from "react-modal";
import { AppContext } from "../../contexts/AppContext";
import {
  ButtonArea,
  FromToContainer,
  ModalContent,
  Table,
  Title,
} from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { FaSave } from "react-icons/fa";

import ArrowRight from "../../assets/arrow-right.svg";
import { SecondaryButton } from "../SecondaryButton";
import { theme } from "../../theme";

export const ModalAdd = () => {
  const { isModalAddActive, changeModalAddState } = useContext(AppContext);

  const closeModalAdd = () => {
    changeModalAddState(false);
  };


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      borderRadius: "1rem 1rem 0 0 ",
      width: '45vw'
    },
  };

  return (
    <Modal
      isOpen={isModalAddActive}
      onRequestClose={closeModalAdd}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <h3>
          <button onClick={closeModalAdd} className="arrow-back">
          <IoIosArrowBack /></button> Adicionar nova palavra
        </h3>

        <FromToContainer>
          <Title>
            <h3>De</h3>

            <h3>Para</h3>
          </Title>

          <Table>
            <div>
              <input type="text" />
              <img src={ArrowRight} />
              <input type="text" />
            </div>
          </Table>
        </FromToContainer>

        <ButtonArea>
          <SecondaryButton
            icon={<FaSave size={23} color={theme.colors.tertiary} />}
            onClick={() => {}}
          >
            Salvar
          </SecondaryButton>
        </ButtonArea>
      </ModalContent>
    </Modal>
  );
};