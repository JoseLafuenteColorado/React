import { useState } from 'react';

export function TwitterFollowCard({ userName, children }) {

    const [isFollowing, setIsFollowing] = useState(false);


    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonCLassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonCLassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}