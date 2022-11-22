import { UserCardType } from '../Types/UserCardType';

const UserCard = ({ image, username, name, email, phone, lat, lng }: UserCardType) => {
  const gotoMap = ({ lat, lng }: { lat: string; lng: string }) =>
    `https://maps.google.com/?q=${lat},${lng}`;

  return (
    <button className='flex justify-between p-5 shadow-md bg-slate-300 w-full rounded-xl hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-75 mb-5'>
      <div className='flex flex-col items-center'>
        <img src={image} alt='' className='w-24 rounded-full h-24' />
        <div className='font-bold mt-3'>@{username}</div>
      </div>
      <div className='flex flex-col'>
        <div className='text-2xl'>{name}</div>
        <div className='text-lg'>{email}</div>
        <div className='text-lg'>{phone}</div>
        <a
          href={`${gotoMap({ lat, lng })}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg hover:pointer-events-auto hover:text-cyan-50 mt-5'
        >
          Go To Address
        </a>
      </div>
    </button>
  );
};
export default UserCard;
