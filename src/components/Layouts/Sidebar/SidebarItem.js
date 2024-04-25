import { Visibility } from '@mui/icons-material';

function SidebarItem({ data }) {
    return (
        <div className="flex space-x-3 p-2 m-2 border">
            <img
                src={data.image}
                alt={data.title}
                className="w-16 h-20 object-cover rounded-md" // Thumbnail with fixed width and height
            />
            <div className="flex flex-col justify-center w-full">
                <h2 className="text-sm font-semibold truncate max-w-44">{data.title}</h2>
                <a className='text-xs '><Visibility className='text-xs mr-1' /> 7.156k</a>
                <ul className="text-xs">
                    {data.chapters.slice(0, 3).map((chapter) => (
                        <div key={chapter.id} className="flex justify-between">
                            <li >{chapter.name}</li>
                            <span>7 hours ago</span>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default SidebarItem;
