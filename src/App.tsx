import { Header } from './componentes/Header.tsx';
import { Post, PostType } from './componentes/Post.tsx';
import { Sidebar } from './componentes/Sidebar.tsx';

import styles from './App.module.css';
import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/88122547?v=4',
      name: 'Ana Luiza',
      role: 'Jsx developer'
    },
    content :  [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content:'jane.design/doctorcare' } 
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'UI/UX Designer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      {type: 'link', content:'jane.design/doctorcare' } 
    ],
    publishedAt: new Date('2025-01-01 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

        <div className={styles.wrapper}>
            <Sidebar/>
              
            <main>
              {posts.map(post => {
                return( 
                  <Post 
                    key={post.id}
                    post={post}

                  />
                )
              })}
            </main>

        </div>
    </div>
  )
}


