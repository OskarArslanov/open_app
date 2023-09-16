import { VKSilentData, VKUserData } from '@/components/entities/vk';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data: VKSilentData = req.body;
  if (!data.token) {
    const resp = { message: 'bad auth', data };
    return res.status(401).send(resp);
  }
  const params = {
    v: 5.131,
    token: data.token,
    access_token: process.env.NEXT_PUBLIC_VK_SERVICE,
    uuid: data.uuid,
  };
  const url = 'https://api.vk.com/method/auth.exchangeSilentAuthToken';
  const user = (await axios.get<VKUserData>(url, { params })).data;
  return res.status(200).send(user);
}
