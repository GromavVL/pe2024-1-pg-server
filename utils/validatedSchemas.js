const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must starts with capital letter')
    .required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/)
    .required(),
});

module.exports.PAGE_VALIDATION_SCHEMA = yup.number().min(1).integer();
module.exports.RESULTS_VALIDATION_SCHEMA = yup
  .number()
  .min(5)
  .max(50)
  .integer();

module.exports.CREATE_PHONE_VALIDATION_SHEMA = yup.object({
  brand: yup
    .string()
    .trim()
    .min(2, 'Brand must be at least 2 characters')
    .max(64, 'Brand is too long')
    .required('Brand is required'),

  model: yup
    .string()
    .min(1, 'Model is required')
    .max(64, 'Model is too long')
    .required('Model is required'),

  price: yup.string().min(2).max(64).required(),

  color: yup
    .string()
    .min(3, 'Color must be at least 3 characters')
    .max(20, 'Color is too long')
    .required('Color is required'),

  manufactured_year: yup.string().min(2).max(64).required(),
});
