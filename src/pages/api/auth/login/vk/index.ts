import {
  VKSilentData,
  VKAccessTokenData,
  VKProfile,
} from '@/components/entities/vk';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data: VKSilentData = req.body;
  let tokenData;
  try {
    const paramsToken = {
      v: 5.131,
      token: data.token,
      access_token: process.env.NEXT_PUBLIC_VK_SERVICE,
      uuid: data.uuid,
    };
    const urlToken = 'https://api.vk.com/method/auth.exchangeSilentAuthToken';
    tokenData = (
      await axios.get<{ response: VKAccessTokenData }>(urlToken, {
        params: paramsToken,
      })
    ).data.response;
  } catch (err: any) {
    return res.status(404).send({ ...err, stage: 'getting_access_token' });
  }

  try {
    const paramsProfile = {
      v: 5.131,
      access_token: tokenData.access_token,
    };
    const urlProfile = 'https://api.vk.com/method/account.getProfileInfo';
    const profile = (
      await axios.get<{ response: VKProfile }>(urlProfile, {
        params: paramsProfile,
      })
    ).data.response;
    return res.status(200).send(profile);
  } catch (err: any) {
    return res.status(404).send({ ...err, stage: 'getting_rofile', tokenData });
  }
}
