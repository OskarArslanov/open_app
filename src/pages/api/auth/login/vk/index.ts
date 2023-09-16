import {
  VKSilentData,
  VKAccessTokenData,
  VKProfile,
} from '@/components/entities/vk';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data: VKSilentData = req.body;
  if (!data.token) {
    const resp = { message: 'bad auth', data };
    return res.status(401).send(resp);
  }
  try {
    const paramsToken = {
      v: 5.131,
      token: data.token,
      access_token: process.env.NEXT_PUBLIC_VK_SERVICE,
      uuid: data.uuid,
    };
    const urlToken = 'https://api.vk.com/method/auth.exchangeSilentAuthToken';
    const tokenData = (
      await axios.get<VKAccessTokenData>(urlToken, { params: paramsToken })
    ).data;

    const paramsTProfile = {
      v: 5.131,
      access_token: tokenData.access_token,
    };
    const urlProfile = 'https://api.vk.com/method/account.getProfileInfo';
    const profile = await axios.get<VKProfile>(urlProfile, {
      params: paramsTProfile,
    });
    return res.status(200).send(profile);
  } catch (err) {
    return res.status(404).send(err);
  }
}
