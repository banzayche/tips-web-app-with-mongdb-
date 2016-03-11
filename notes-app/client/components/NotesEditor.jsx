import React from 'react';

import './NotesEditor.less'

const NotesEditor = React.createClass({
	getInitialState() {
		return {
			title: '',
			text: '',
			color: '#ffffff'
		};
	},

	handleTextChange(event) {
		this.setState({ text: event.target.value })
	},

	handleTitleChange(event) {
		this.setState({ text: event.target.value })
	},

	handleAddNotes() {
		const newNote = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color
		};

		this.props.onNotesAdd(newNote);
		this.setState({ text: '', title: '', color: '#FFFFFF' });
	},

	render() {
		return (
			<div className="NoteEditor">
				<input
					type='text'
					className='NoteEditor__title'
					placeholder='Enter title'
					value={this.state.title}
					onChange={this.handleTitleChange}
				/>
				<textarea
					placeholder='Enter note text'
					rows={5}
					className='NoteEditor__text'
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<div className='NoteEditor__footer'>
					<button
						className='NoteEditor__button'
						disabled={!this.state.text}
						onClick={this.handleAddNotes}
					>
						Add
					</button>
				</div>
			</div>
		);
	}
});

export default NotesEditor;