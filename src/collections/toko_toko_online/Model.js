const mongoose = require('mongoose')
// const Joi = require('@hapi/joi')
// const User = require('../user/Model')

const schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  slug: {
    type: String,
    unique: true
  },
  website: {
    type: String
  },
  province: {
    type: String
  },
  city: {
    type: String
  },
  subcity: {
    type: String
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },
  youtube: {
    type: String
  },
  plink_merchant_id: {
    type: String
  },
  plink_merchant_key_id: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  created_at: {
    type: Number,
    default: new Date().now
  },
  updated_at: {
    type: Number,
    default: new Date().now
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    default: null
  },
  created_by: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    default: null
  },
  updated_by: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    default: null
  }
}
)
// schema.statics.validation = (args) => Joi.object({
//   // user_id: Joi.string(),
//   // amount: Joi.number().required().greater(0)
// }).validate(args)

module.exports = mongoose.model('toko_toko_online', schema)
