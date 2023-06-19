import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const MOCK_USERLIST = [
  {
    email: 'example@gmail.com',
    password: '123456',
    user: { shortName: 'Антон А', name: 'Антон Антонов' },
  },
  {
    email: 'example1@gmail.com',
    password: '1234567',
    user: { shortName: 'Антон Б', name: 'Антон Бнтонов' },
  },
  {
    email: 'example2@gmail.com',
    password: '12345678',
    user: { shortName: 'Антон В', name: 'Антон Внтонов' },
  },
  {
    email: 'example3@gmail.com',
    password: '123456789',
    user: { shortName: 'Антон З', name: 'Антон Знтонов' },
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  if (req.method === 'POST') {
    const { login, password } = req.body;
    const user = MOCK_USERLIST.find((item) => item.email === login);
    const isPasswordCorrect = user?.password === password;
    if (isPasswordCorrect) {
      const generatedJwt = jwt.sign(
        { email: user?.email },
        process.env.NEXT_PUBLIC_SECRET,
      );
      return res.status(200).send({ jwt: generatedJwt, user: user?.user });
    } else {
      return res.status(404).send('Email или пароль не верный');
    }
  }

  return res.status(200).end();
}
