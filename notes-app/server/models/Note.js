import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
	title: { type: String },
	text: { type: String, required: true },
	color: { type: String },
	createData: { type: Date }
});

const Note = mongoose.model('Note', NoteSchema);