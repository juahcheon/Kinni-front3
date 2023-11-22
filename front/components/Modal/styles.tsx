import styled from '@emotion/styled';

export const CreateModal = styled.div`
  text-align: center;
  z-index: 100;
  width: 390px;
  height: 844px;
  position: absolute;
  left: 0;
  top: 0;

  & > div {
    width: 390px;
    height: 844px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    user-select: none;
    z-index: 101;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background-color: #eee;
  padding: 15px;
`;

export const AddButton = styled.button`
  width: 55px;
  height: 30px;
  background-color: #F1B4BB;
  border-radius: 20px;
`;

export const CloseModalButton = styled.button`
  width: 55px;
  height: 30px;
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const ModalContents = styled.div`
  width: 100%;
  height: 744px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;