import { Schema, model, models } from 'mongoose';

const CustomerSchema = new Schema({
  
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, 'Customer Name is required.'],
  },
  phone: {
    type: String,
    required: [true, 'Customer Name is required.'],
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  dateofbirth:
  {
    type: String,
  },
  status: {
    type: String,
  },
});

const Customer = models.Customer || model('Customer', CustomerSchema);

export default Customer;