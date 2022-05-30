import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  fulltNavn: Yup.string().required('Required').min(8, 'Too Short!'),
  epost: Yup.string().email().required('Required'),
  melding: Yup.string().required('Required').min(10, 'Too Short!'),
})

