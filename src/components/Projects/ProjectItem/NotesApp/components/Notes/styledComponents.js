import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  font-weight: 600;
  color: #4c63b6;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`
export const InputNotBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 80%;
  box-shadow: 0px 0px 16px 5px #d8d8d8;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 8px;
  }
`
export const TitleInputContainer = styled.input`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  outline: none;
  width: 70%;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #475569;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`
export const InputNote = styled.textarea`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  outline: none;
  width: 90%;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  width: 76px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 8px;
  border: none;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`
export const NoteListContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const EmptyImage = styled.img`
  width: 180px;
`
export const EmptyHead = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #334155;
`
export const EmptySubHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #475569;
`