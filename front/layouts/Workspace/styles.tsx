import styled from '@emotion/styled';

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
  position: relative;
  border: 1px solid #eee;
  box-sizing: border-box;
`;

export const LeftMenu = styled.div`
  float: left;
  
  & p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: bold;
    color: #FFF6F6;
  }
`;

export const Header = styled.header`
  height: 60px;
  background: #CE5A67;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  padding: 5px;
  text-align: center;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 50%;
  display: block;
`;

export const ProfileImgKinni = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 5px;
`;

export const LogOutButton = styled.button`
  border: none;
  background: transparent;
  display: block;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translatey(-50%);
  letter-spacing: -1px;
  color: #FF8E9E;
  font-weight: bold;
`;

export const WorkspaceWrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Workspaces = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`;

export const Channels = styled.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;

  & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;

    &.selected {
      color: white;
    }
  }

  & .bold {
    color: white;
    font-weight: bold;
  }

  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  }

  & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
  }
`;

export const WorkspaceName = styled.button`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 390px;
  text-align: left;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 24px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`;

export const MenuScroll = styled.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`;

export const WorkspaceModal = styled.div`
  padding: 10px 0 0;

  & h2 {
    padding-left: 20px;
  }

  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;

    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`;

export const Chats = styled.div`
  flex: 1;
`;

export const AddButton = styled.button`
  color: white;
  font-size: 24px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const WorkspaceButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 3px solid #3f0e40;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 350px;
  height: 100%;
  display: flex;
`;

export const Textarea = styled.textarea`
  font-size: 22px;
  width: 310px;
  height: 500px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const BottomNav = styled.nav`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  z-index: 9;
  background-color: #fff;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  padding: 10px;

  & a, button {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #CE5A67;

    &:hover {
      color: #F1B4BB;
    }
  }
`;

export const KinniBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 100px;
  z-index: 10;
  border: 1px solid #FF8E9E;
  font-size: 0;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #CE5A67;
  }

  & p {
    width: 100%;
    height: 100%;
    font-size: 24px;
    margin: 0;
    color: #FF8E9E;

    &:hover {
      color: #CE5A67;
    }

  }
`;