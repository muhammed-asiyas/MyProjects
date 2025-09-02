import {useState, useEffect} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  FormContainer,
  Heading,
  InputNotBoxContainer,
  TitleInputContainer,
  InputNote,
  AddButton,
  NoteListContainer,
  EmptyListContainer,
  EmptyImage,
  EmptyHead,
  EmptySubHead,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const storedNotes = JSON.parse(localStorage.getItem('notesList'))

  const [title, setTitle] = useState('')

  const [note, setNote] = useState('')

  const [notesList, setNotesList] = useState(storedNotes || [])

  //  Save notesList to localStorage whenever it changes

  useEffect(() => {
    console.log(notesList)
    localStorage.setItem('notesList', JSON.stringify(notesList))
  }, [notesList])

  const onChangeTitleInput = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()
    const newList = {
      id: v4(),
      title,
      note,
    }
    setNotesList(prevNoteList => [...prevNoteList, newList])
    setTitle('')
    setNote('')
  }

  const renderEmptyList = () => (
    <EmptyListContainer>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptySubHead>Notes you add will appear here</EmptySubHead>
    </EmptyListContainer>
  )

  const isEmptyList = notesList.length === 0

  return (
    <AppContainer>
      <FormContainer onSubmit={onAddNotes}>
        <Heading>Notes</Heading>
        <InputNotBoxContainer>
          <TitleInputContainer
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitleInput}
          />
          <InputNote
            placeholder="Take a Note..."
            rows="5"
            value={note}
            onChange={onChangeNote}
          />
          <AddButton type="submit">Add</AddButton>
        </InputNotBoxContainer>
      </FormContainer>
      {isEmptyList ? (
        renderEmptyList()
      ) : (
        <NoteListContainer>
          {notesList.map(eachNotes => (
            <NoteItem key={eachNotes.id} noteList={eachNotes} />
          ))}
        </NoteListContainer>
      )}
    </AppContainer>
  )
}

export default Notes
