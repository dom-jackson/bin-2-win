import { useQuery } from '@apollo/client';
import { HELLO_QUERY } from '../utils/queries';

export const Dashboard = () => {
  const { data } = useQuery(HELLO_QUERY);

  return (
    <div>
      <h2>Hello World</h2>
      <div>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    </div>
  );
};
