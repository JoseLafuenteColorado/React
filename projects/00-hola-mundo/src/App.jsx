import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    { userName: 'j_lafuente', name: 'José Lafuente', isFollowing: true },
    { userName: 'j_alesco', name: 'Juan Alesco', isFollowing: false },
    { userName: 'pvera', name: 'Pedro Vera', isFollowing: false },
];

export function App(){
    return(
        <section className='App'>
           {
                users.map(user => {
                    const { userName, name, isFollowing } = user;
                    return (
                        <TwitterFollowCard 
                        userName={userName} 
                        key={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                        )
                    })
            }   
        </section>
    )
}