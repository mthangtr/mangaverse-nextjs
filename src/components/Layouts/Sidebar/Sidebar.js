import SidebarItem from './SidebarItem';

const data = [
    {
        id: 1,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 2,
        image: 'https://st.nettruyentt.com/data/comics/82/shy.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!dfjkghdfjkbgjhfgbgjkfgjkfdfjdhjgjkfd',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 3,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 4,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 5,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 6,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 7,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
    {
        id: 8,
        image: 'https://st.nettruyentt.com/data/comics/200/cong-tu-biet-tu-1352.jpg',
        title: 'CÔNG TỬ BIỆT TÚ!',
        Category: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Historical", "Horror", "Mystery", "Romance", "Shoujo", "Shounen", "Supernatural", "Tragedy"],
        chapters: [
            { id: 1, name: 'Chapter 1', date: 'Date 1' },
            { id: 2, name: 'Chapter 2', date: 'Date 2' },
            { id: 3, name: 'Chapter 3', date: 'Date 3' },
        ],
    },
];

function Sidebar() {
    return (
        <div>
            <h1 className="text-lg font-bold px-4 pt-4">Most Viewed Manga</h1>
            {data.map((item) => (
                <SidebarItem key={item.id} data={item} />
            ))}
        </div>
    );
}

export default Sidebar;