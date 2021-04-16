import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 80%;
  background: #fff;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 30px 20px 20px 30px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    align-items: flex-start;
    padding: 0;
    justify-content: space-between;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 330px;
  & > * {
    margin: 10px 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 22px;
    padding-right: 22px;
    margin-bottom: 3rem;
  }
`;

export const ModalInformation = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PhotoContainer = styled.div`
  width: 60%;
  min-width: 330px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

export const PhotoLoad = styled(Photo)`
  background: #1d1ff4;
  height: 256px;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  overflow-y: scroll;
  padding-left: 14px;
  padding-top: 5px;
  @media screen and (max-width: 768px) {
    padding-left: 22px;
    padding-top: 25px;
  }
  ::-webkit-scrollbar{
    width: 0;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CommentTypography = styled.span`
  font-size: 0.81rem;
  line-height: 0.83rem;
  color: ${(props) => props.color || "#000000"};
  &:nth-child(1) {
    margin-bottom: 5px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;



