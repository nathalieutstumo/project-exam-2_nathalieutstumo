import { useFormik } from 'formik'
import { InputField } from './InputField'
import { FormLabel } from './FormLabel'
import { contactSchema } from './validation/contactSchema'


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fulltNavn: '',
      epost: '',
      melding: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      // Once form submited ex. {Email: 'John@example.com', Password: 'secret'}
      console.log(values)
    },
  })
  return (
    <>
      <form id='loginform' onSubmit={formik.handleSubmit}>
             
        {/* <FormLabel className="form-label" text='Fullt navn: ' /> */}
        <InputField
          id='fulltnavn'
          name='fulltnavn'
          placeholder="Fullt navn"
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.fulltNavn} />
        <br></br>
        {/* <FormLabel className="form-label" text='E-post: ' /> */}
        <InputField
       
          id='epost'
          placeholder="E-post"
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.epost} />
      <br></br>
        {/* <FormLabel className="form-label" text='Melding: ' /> */}
        <textarea
        rows="4"
          id='melding'
          placeholder="Melding"
          compontent="textarea"
          onChange={formik.handleChange}
          style={{ backgroundColor: 'white' }}
        />
        <FormLabel style={{ color: 'red' }} text={formik.errors.melding} />
     
      </form>
      <button className="contact-btn" form='loginform' type='submit'>
        Send melding
      </button>
     
    </>
  )
}

export default ContactForm