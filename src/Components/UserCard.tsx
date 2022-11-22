import { UserCardType } from '../Types/UserCardType';
import { useNavigate } from 'react-router-dom';
const UserCard = ({ id, username, name, email, phone, lat, lng }: UserCardType) => {
  const navigate = useNavigate();
  const gotoMap = ({ lat, lng }: { lat: string; lng: string }) =>
    `https://maps.google.com/?q=${lat},${lng}`;

  return (
    <button
      onClick={() => navigate(`/posts/${id}`)}
      className='flex justify-between p-5 shadow-md bg-slate-300 w-full rounded-xl hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-75 mb-5'
    >
      <div className='flex flex-col items-center'>
        <img
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/${id}.jpg`}
          alt=''
          className='w-24 rounded-full h-24'
        />
        <div className='font-bold mt-3'>@{username}</div>
      </div>
      <div className='flex flex-col items-center text-center'>
        <div className='text-xl font-bold'>{name}</div>
        <div className='text-base'>{email}</div>
        <div className='text-base'>{phone}</div>
        <a
          href={`${gotoMap({ lat, lng })}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-base hover:pointer-events-auto hover:text-cyan-50 mt-5'
        >
          Go To Address
        </a>
      </div>
    </button>
  );
};
export default UserCard;
