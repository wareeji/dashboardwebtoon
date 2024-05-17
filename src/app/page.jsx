'use client'
import Search from "@/app/components/DashboardAdmin/Search/Search"
import Link from "next/link"
import { useState, useEffect } from "react"


export default function Page() {
  const [getComics, setGetComics] = useState([])
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch('https://backend-api-crud.vercel.app/comics')
      .then(res => res.json())
      .then((data) => {
        setGetComics(data)
        console.log(data)
      })
  }, [isDeleted])

  const handleDelete = async (comic_id) => {
    try {
      const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบการ์ตูนนี้ ( id : '+ comic_id +' ) ?');
  
      if (confirmDelete) {
        const response = await fetch(`https://backend-api-crud.vercel.app/comics/delete/${comic_id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (response.ok) {
          console.error('ลบการ์ตูนสำเร็จ!!!');
          setIsDeleted(true);
        } else {
          console.error('ล้มเหลวในการลบการ์ตูน');
        }
      }
    } catch (error) {
      console.error('Error deleting comic:', error);
    }
  }
  

  return (
    <section className="bg-[#222121] p-[20px] rounded-[10px]">
      <article className="flex justify-between items-center mb-[25px]">
        <Search placeholder="Search for comic..." />

        <Link href="/add">
          <button className="bg-green-700 p-[10px] rounded-[5px] cursor-pointer">Add New</button>
        </Link>
      </article>

      <table className="w-full">
        <thead>
          <tr className="font-bold text-gray-350 text-[18px]">
            <td className="p-[10px]">ID</td>
            <td className="p-[10px]">comic name</td>
            <td className="p-[10px]">story by</td>
            <td className="p-[10px]">pictures by</td>
            <td className="p-[10px]">original by</td>
            <td className="p-[10px]">share_by</td>
            <td className="p-[10px]">status</td>
            <td className="p-[10px] text-nowrap">update date</td>
            <td className="p-[10px]"> genre</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>

        <tbody>
          {getComics.map((comic) => (
            <tr key={comic.comic_id}>
              <td className="p-[10px]">{comic.comic_id}</td>
              <td className="p-[10px]">{comic.comic_name}</td>
              <td className="p-[10px]">{comic.story_by}</td>
              <td className="p-[10px]">{comic.pictures_by}</td>
              <td className="p-[10px]">{comic.original_by}</td>
              <td className="p-[10px]">{comic.share_by}</td>
              <td className="p-[10px]">{comic.comic_status}</td>
              <td className="p-[10px]">{comic.update_date}</td>
              <td className="p-[10px]">{comic.genres_name}</td>
              <td className="p-[10px]">

                <div className="flex gap-3">
                  <Link href={`/view/${comic.comic_id}`}>
                    <button className="py-[5px] px-[10px] rounded-[5px] cursor-pointer bg-blue-600">
                      View
                    </button>
                  </Link>

                  <button className="py-[5px] px-[10px] rounded-[5px] cursor-pointer bg-red-600" onClick={() => handleDelete(comic.comic_id)}>
                    Delete
                  </button>

                </div>
              </td>
            </tr>))}

        </tbody>
      </table>
    </section>
  )
}
