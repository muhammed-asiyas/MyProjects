import {ListItem, TitleItem, NotesItem} from './styledComponents'

const NoteItem = props => {
  const {noteList} = props
  const {title, note} = noteList
  return (
    <ListItem>
      <TitleItem>{title}</TitleItem>
      <NotesItem>{note}</NotesItem>
    </ListItem>
  )
}

export default NoteItem
