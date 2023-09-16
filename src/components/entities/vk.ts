import { ExternalUser } from '@vkontakte/superappkit';

export interface VKSilentData {
  auth: number;
  token: string;
  ttl: number;
  type: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    phone: string;
  };
  uuid: string;
  oauthProvider?: string;
  external_user?: ExternalUser;
}

export interface VKUserData {
  access_token: string;
  access_token_id: string;
  user_id: number;
  phone: string;
  phone_validated: number;
  is_service: boolean;
  email: string;
  source: number;
  source_description: string;
}
