import React, { useState, useEffect, ChangeEvent } from "react";
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
import { PhotoPreviewType } from "types";

interface ParamsProps {
  id: string;
}

function Photopreview() {
  const [data, setData] = useState({} as PhotoPreviewType)
  const { id } = useParams<ParamsProps>();
  const history = useHistory();
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const closeModal = (): void => history.push("/");

  async function fetch(): Promise<void> {
    setData(await loadDetails(id));
  }

  useEffect(() => {
    fetch();
  }, []);

  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const send = await AddComment(id, { name, comment });
      console.log(send.status);
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    e.target.name === 'name' ? setName(value) : setComment(value);
  }

  return (
    <ModalContainer>
      <PhotoInformation>
        <PhotoContainer>
          {data.url ? <Photo src={data.url} /> : <PhotoLoad />}
        </PhotoContainer>
        <CommentsContainer>
          {data.comments && data.comments.length > 0 ? (
            data.comments.map((comment:any):any => (
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
        <Input onChange={changeHandler} name="name" placeholder="Ваше Имя" required />
        <Input onChange={changeHandler} name="comment" placeholder="Ваше Комментарий" required />
        <Button type="submit">Оставить комментарий</Button>
      </CommentForm>
    </ModalContainer>
  );
}

export default Photopreview;
