import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className='flex h-screen '>
      <div className='m-auto text-center flex flex-col gap-3'>
        <h1 className='text-4xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>{' '}
        <p className='text-gray-400'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
