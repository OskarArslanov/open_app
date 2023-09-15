import OAButton from '@/features/OAButton';
import OAForm from '@/features/OAForm';
import OAInput from '@/features/OAInput';
import { useQuery, gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import styled from '@emotion/styled';
import { OAAnimateContainer } from '@/widgets/OAAnimateContainer';
import { OACircleLoader } from '@/widgets/OACircleLoader';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        description
        url
      }
    }
  }
`;

const LinkList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});
const GraphQL = () => {
  const feedsResponse = useQuery(FEED_QUERY);
  const [mutate, mutateResponse] = useMutation(CREATE_LINK_MUTATION);
  const handleSubmit = async (e: any) => {
    await mutate({ variables: e });
    feedsResponse.refetch();
  };

  const feed = feedsResponse.data?.feed;
  const links = feed?.links;
  const isLoading = mutateResponse.loading || feedsResponse.loading;
  return (
    <OAAnimateContainer style={{ alignItems: 'center' }}>
      <OACircleLoader visible={isLoading} />
      <OAForm
        onSubmit={handleSubmit}
        style={{ maxWidth: '400px', width: '100%' }}
      >
        <OAInput
          name="url"
          type="string"
          placeholder="url"
          rules={{ required: true }}
          fullWidth
        />
        <OAInput
          name="description"
          type="string"
          rules={{ required: true }}
          placeholder="description"
          fullWidth
        />
        <OAButton type="submit">Create Link</OAButton>
      </OAForm>
      {!isLoading && links && (
        <LinkList>
          {links.map((item: any) => (
            <Link key={item.id} href={item.url}>
              {item.description}
            </Link>
          ))}
        </LinkList>
      )}
    </OAAnimateContainer>
  );
};

export default GraphQL;
