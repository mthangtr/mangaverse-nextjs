import React from 'react';
import Link from 'next/link';
import { Visibility, ThumbUp, Comment } from '@mui/icons-material';

function MangaCard({ data }) {
    return (
        <div className="border max-w-64 rounded-md">
            <div className="flex flex-col">
                <div className="relative">
                    <Link href={`/detail/${data.id}`}>
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-64 h-64 object-cover rounded-t-md"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-xs p-1 flex justify-between"> {/* Overlay div */}
                            <span><Visibility className='text-xs mr-1' /> 7.156k</span>
                            <span><Comment className='text-xs mr-1' /> 715</span>
                            <span><ThumbUp className='text-xs mr-1' />44k</span>
                        </div>
                    </Link>
                </div>
                <div className="p-2">
                    <h2
                        className="text-md font-bold truncate hover:text-blue-500">{data.title}</h2>
                    <div className="flex flex-col">
                        {data.chapters.map((chapter) => (
                            <div key={chapter.id} className="flex justify-between">
                                <div className="text-xs font-medium">{chapter.name}</div>
                                <span className="text-xs font-medium text-gray-600">7 hours ago</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MangaCard;
