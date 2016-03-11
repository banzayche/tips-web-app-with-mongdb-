import React from 'react';

import NoteEditor from './NotesEditor.jsx';
import NoteGrid from './NotesGrid.jsx';

const App = React.createClass({
	handleNoteAdd(data) {
		console.log('hey');
	},
	render() {
		return (
			<div className="App">
				<h2 className="App_header"> Notes Note </h2>
				<NoteEditor onNotesAdd={this.handleNoteAdd}/>
				<NoteGrid />
			</div>
		);
	}
});

export default App;