const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
  name:{
    type:String,
    requiere: [true, "ERROR!: Ingrese nombre y apellido."],
    trim:true,
    maxlength:[20, 'max de cracteres 20']
  },
  username: {
    type:String,
    requiere: [true, "ERROR!: es requerido un nombre de usuario."],
    unique:true,
    trim:true,
    maxlength:[20, 'deben ser maximo 40 caracteres'],
    minlength:[3, 'deben ser minimo 3 caracteres']
  },
  email:{
    type:String,
    requiere: [true, "ERROR!: es requerido un email."],
    unique:true,
    trim:true,
    maxlength:[20, 'deben ser maximo 40 caracteres'],
    minlength:[12, 'deben ser minimo 12 caracteres']
  },
  password:{
    type:String,
    requiere: [true, "ERROR!: Ingrese una clave."],
    trim:true,
    maxlength:[25, 'max de cracteres 25 caracteres'],
    minlength:[8, 'min de cracteres 8 caracteres']
  }

}, {
  timestamps: true,
  versionKey: false
})


export default mongoose.models.Users || mongoose.model('Users', UsersSchema)