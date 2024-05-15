import './avatarAnimation.css';
import Image from 'next/image';
import AvatarPhoto from '/public/avatar/AboutPhoto.webp';

export const AvatarAnimation = () => {
  return (
    <div className="gradient-border" id="box">
      <Image src={AvatarPhoto} alt="Alexey_photo" height={0} width={0} priority={true}/>
    </div>
  );
};
