import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

const LoginComponent = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    identifier: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/login', { ...userData });
      router.push('/Admin');
    } catch (err) {
      console.log(err.response.data);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({...userData, [name]: value })
  }

  return (
    <div className={styles.container}>
    <Formik>
        <Form onSubmit={handleSubmit}>
          <label  label="true" htmlFor="identifier">Email:</label>
            <Field type="text" name="identifier" onChange={e => handleChange(e)} />
          <br />
          <label label="true" htmlFor="password">Password:</label>
            <Field type="password" name="password" onChange={e => handleChange(e)} />
          <br />
          <button><Link href="/adminDashboard">Login</Link></button>
        </Form>
      </Formik>
    </div>
    
    
  )
  
  
}


export default LoginComponent;



export const getServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx)
  let user = null;

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get('http://localhost:1337/users/me', {
        headers: {
          Authorization:
            `Bearer ${cookies.jwt}`,
          },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }
  
  return {
    props: {
      user
    }
  }
}