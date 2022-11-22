import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { userId } = useParams<string>();

  return <div>PostPage {userId}</div>;
}
