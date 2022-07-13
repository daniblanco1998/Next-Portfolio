const mongoose = require("mongoose")

const TasksSchema = new mongoose.Schema({
  title: {
    type:String,
    requiere: [true, "ERROR!: Se requiere un titulo de tarea."],
    unique:true,
    trim:true,
    maxlength:[40, 'deben ser maximo 40 caracteres']
  },
  plot:{
    type:String,
    requiere: [true, "ERROR!: no ha especificado la tarea."],
    trim:true,
    maxlength:[200, 'max de cracteres 200']
  }
}, {
  timestamps: true,
  versionKey: false
})


export default mongoose.models.Tasks || mongoose.model('Tasks', TasksSchema)