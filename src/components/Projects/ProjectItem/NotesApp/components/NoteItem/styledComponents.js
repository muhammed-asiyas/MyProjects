import styles from 'styled-components'

export const ListItem = styles.li`
  display: flex;
  flex-direction: column;
  border: 2px solid #aab8c8;
  border-radius: 8px;
  width: 300px;
  margin: 12px;
  padding: 12px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const TitleItem = styles.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #1e293b;
`
export const NotesItem = styles.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #334155;`
