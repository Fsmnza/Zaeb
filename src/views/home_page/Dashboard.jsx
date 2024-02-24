import React from 'react'
import ChatContainer from '../message/ChatContainer'
import { useState } from 'react'
const Dashboard = () => {
  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://avatars.mds.yandex.net/i?id=6b5c41f61a5f1e2b4435575f35e026efc2011798-7011667-images-thumbs&n=13'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://assets.equifax.com/wfs/workforce/images/wfs_Man_Hallway_Navy_Shirt_1920x1280.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://avatars.mds.yandex.net/i?id=e00daa3812d74a9b23efd0389d157150dbeec31a-8184297-images-thumbs&n=13'
    },
    {
      name: 'Jared Dunn',
      url: 'https://avatars.mds.yandex.net/i?id=aa1f10bcc1c785d016511955e8e09996_l-4365707-images-thumbs&ref=rim&n=13&w=512&h=640'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://pbs.twimg.com/media/DH7e26cUMAA5b3n.jpg'
    }
  ]
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
        <div className="swipe-info">
          {lastDirection ? <p>U swiped {lastDirection}</p> : <p/>}
        </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
