import React from 'react';

import NotesActions from '../actions/NotesActions';
import NotesStore from '../stores/NotesStore';

import NoteEditor from './NotesEditor.jsx';
import NoteGrid from './NotesGrid.jsx';

import './App.less';

function getStateFromFlux() {
	return {
		isLoading: NotesStore.isLoading(),
		notes: NotesStore.getNotes()
	};
}

const App = React.createClass({
	getInitialState() {
		return getStateFromFlux();
	}, 

	componentWillUnmount() {
		NotesActions.loadNotes();
	},

	componentDidMount() {
		NotesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		NotesStore.removeListener(this._onChange);
	},

	handleNoteAdd(data) {
		NotesActions.createNote(data);
	},

	handleNoteDelete(note) {
		NotesActions.deleteNote(note.id);
	},

	render() {
		return (
			<div className="App">
				<h2 className="App_header"> Notes Note </h2>
				<NoteEditor onNotesAdd={this.handleNoteAdd}/>
				<NoteGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete} />
			</div>
		);
	},

	_onChange() {
		this.setState(getStateFromFlux());
	}
});

export default App;