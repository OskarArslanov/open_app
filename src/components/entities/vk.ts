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

export interface VKAccessTokenData {
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

export interface VKProfile {
  id: number;
  home_town: string;
  status: string;
  photo_200: string;
  is_service_account: boolean;
  is_tinkoff_linked: boolean;
  is_tinkoff_verified: boolean;
  is_sber_verified: boolean;
  oauth_linked: [];
  oauth_verification: [];
  verification_status: string;
  promo_verifications: [];
  first_name: string;
  last_name: string;
  bdate: string;
  bdate_visibility: number;
  phone: string;
  relation: number;
  relation_partner: {
    id: number;
    first_name: string;
    last_name: string;
    can_access_closed: boolean;
    is_closed: boolean;
  };
  relation_requests: [
    {
      id: number;
      first_name: string;
      last_name: string;
      can_access_closed: boolean;
      is_closed: boolean;
    },
  ];
  screen_name: string;
  sex: number;
}
