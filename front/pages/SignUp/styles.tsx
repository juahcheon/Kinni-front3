import styled from '@emotion/styled';

export const Container = styled.div`
  width: 390px;
  height: 844px;
  margin: auto;
`;

export const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -1px;
  margin-top: 50px;
  margin-bottom: 70px;
  color: #CE5A67;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 310px;
  max-width: 310px;
`;

export const Label = styled.label`
  margin-bottom: 16px;

  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  border: 0;
  border-bottom: 1px solid #000;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;

  &:focus {
    // --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    border-bottom: 1px solid #CE5A67;
    outline: none;
  }
`;

export const Button = styled.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #CE5A67;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #FF8E9E;
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 5px #FFDFDF;
  }
`;

export const Error = styled.div`
  color: #CE5A67;
  margin: 8px 0 16px;
  font-weight: bold;
  font-size: 12px;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 310px;
  max-width: 310px;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;