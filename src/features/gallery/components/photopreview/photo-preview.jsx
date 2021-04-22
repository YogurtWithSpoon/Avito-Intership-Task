import React, { useState, useEffect } from "react";
import { ReactComponent as CloseIcon } from "./assets/Close.svg";
import {
  ModalContainer,
  CommentForm,
  PhotoInformation,
  PhotoContainer,
  Photo,
  CommentsContainer,
  CommentTypography,
  Comment,
  CloseButton,
  PhotoLoad,
} from "./photo-preview.styled";
import { useHistory, useParams } from "react-router-dom";
import { Input, Button } from "components";
import { loadDetails } from "./helpers/loadDetails";
import { dateParse } from "./helpers/dateParse";
import { AddComment } from "api/requests";

function Photopreview() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const closeModal = () => history.push("/");

  async function fetch() {
    setData(await loadDetails(id));
  }

  useEffect(() => {
    fetch();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const comment = e.target[1].value;
    try {
      const send = await AddComment(id, { name, comment });
      console.log(send.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalContainer>
      <PhotoInformation>
        <PhotoContainer>
          {data.url ? <Photo src={data.url} /> : <PhotoLoad />}
        </PhotoContainer>
        <CommentsContainer>
          {data.comments && data.comments.length > 0 ? (
            data.comments.map((comment) => (
              <Comment key={comment.id}>
                <CommentTypography color="#999999">
                  {dateParse(comment.date)}
                </CommentTypography>
                <CommentTypography>{comment.text}</CommentTypography>
              </Comment>
            ))
          ) : (
            <CommentTypography>Нет комментариев</CommentTypography>
          )}
        </CommentsContainer>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
      </PhotoInformation>
      <CommentForm onSubmit={submitHandler}>
        <Input placeholder="Ваше Имя" required />
        <Input placeholder="Ваше Комментарий" required />
        <Button type="submit">Оставить комментарий</Button>
      </CommentForm>
    </ModalContainer>
  );
}

export default Photopreview;
