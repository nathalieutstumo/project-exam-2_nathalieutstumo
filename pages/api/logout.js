/* eslint-disable import/no-anonymous-default-export */
import nookies from 'nookies';
import { destroyCookie } from 'nookies'

export default async (req, res) => {
  destroyCookie({ res }, 'jwt', {
    path: '/',
  });

  res.status(200).end();
  
  const router = useRouter();
  const { user: { email, username } } = props;

} 