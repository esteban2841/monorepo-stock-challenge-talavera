/* eslint-disable react/display-name */
import { User } from '@/context/stocks/StockContext'
import React, { useEffect, useState } from 'react'

interface ProfileProps{
    user: User
}
const ProfileIcon = React.memo(({user}: ProfileProps) => {

    const [words, setWords] = useState<string[]>([])

    useEffect(()=>{
        const name = user['name']
        const nameByWords = name?.split(' ')
        setWords(nameByWords)
    }, [setWords])

    return (
        <div className='profile-logo w-[50px] h-[50px] flex flex-row justify-center items-center'>
            <span className=' flex flex-row justify-center items-center w-[50px] h-[50px] bg-blue rounded-full text-white'>
                {
                    words?.map(word=> {
                        const letter = word[0]
                        return <p key={word}>
                            {letter}
                        </p>
                        
                    })
                }
            </span>
        </div>
    )
}
)
export default ProfileIcon
