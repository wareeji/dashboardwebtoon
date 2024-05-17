'use client'

import { useEffect, useState } from 'react'
import Image from "next/image";
import noavatar from '/public/noavatar.png'; 

function isValidURL(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
}

export default function Page({ params }) {

    const [comic, setComic] = useState({
        "comic_id": 0,
        "comic_name": "",
        "story_by": "",
        "pictures_by": "",
        "original_by": "",
        "share_by": "",
        "synopsis": "",
        "comic_status": "",
        "update_date": "",
        "view": "",
        "comic_like": "",
        "bg_color": "",
        "bg_img": "",
        "character_img": "",
        "comic_name_img": "",
        "blur_bottom_color0": "",
        "blur_bottom_color1": "",
        "blur_bottom_color2": "",
        "blur_bottom_color3": "",
        "genre_id": ""

    });

    useEffect(() => {
        fetch('https://backend-api-crud.vercel.app/comics/' + params.id)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setComic(result[0]);
            })
    }, [params.id]);


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(comic)

        try {
            fetch('https://backend-api-crud.vercel.app/comics/update/' + params.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(comic)
            })
                .then(res => res.json())
                .then(result => {
                    alert("แก้ไขข้อมูลการ์ตูนเรียบร้อยแล้ว");
                    window.location.href = '/';
                })

        } catch (error) {
            console.error("ผิดพลาดในการแก้ไขการ์ตูน:", error);
        }
    }

    return (
        <section className="flex flex-col ">

            <article className="flex flex-col items-center mb-10">
                <div className="text-[26px] mb-5">{comic.comic_name}</div>

                <div className="h-[350px] w-[350px] rounded-[20px] overflow-hidden">
                    <Image src={isValidURL(comic.character_img) ? comic.character_img : noavatar} 
                     alt="comicpicture" width={500} height={500} className="w-full h-full object-cover" />
                </div>
            </article>

            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
                <div className="grid grid-cols-2 w-full justify-between gap-6 ">
                    <input type="hidden" id="comic_id" name="comic_id" value={comic.comic_id} />
                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ชื่อการ์ตูน :</label>
                        <input type="text" value={comic.comic_name} onChange={(e) => setComic({ ...comic, comic_name: e.target.value })} id="comic_name" name="comic_name" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เรื่องจาก :</label>
                        <input type="text" value={comic.story_by} onChange={(e) => setComic({ ...comic, story_by: e.target.value })} id="story_by" name="story_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">รูปภาพจาก :</label>
                        <input type="text" value={comic.pictures_by} onChange={(e) => setComic({ ...comic, pictures_by: e.target.value })} id="pictures_by" name="pictures_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ต้นฉบับจาก :</label>
                        <input type="text" value={comic.original_by} onChange={(e) => setComic({ ...comic, original_by: e.target.value })} id="original_by" name="original_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เผยแพร่จาก :</label>
                        <input type="text" value={comic.share_by} onChange={(e) => setComic({ ...comic, share_by: e.target.value })} id="share_by" name="share_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกหมวดหมู่ :</label>
                        <select name="genre_id" id="genre_id" value={comic.genre_id} onChange={(e) => setComic({ ...comic, genre_id: e.target.value })} className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general">เลือกหมวดหมู่</option>
                            <option value="1">โรแมนซ์แฟนตาซี</option>
                            <option value="2">โรแมนซ์</option>
                            <option value="3">ดราม่า</option>
                            <option value="4">สยองขวัญ</option>
                            <option value="5">วาย</option>
                            <option value="6">แอ็กชัน</option>
                        </select>

                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกสถานะ :</label>
                        <select name="comic_status" id="comic_status" value={comic.comic_status} onChange={(e) => setComic({ ...comic, comic_status: e.target.value })} className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general" >เลือกสถานะ</option>
                            <option value="จบ"      >จบ</option>
                            <option value="ยังไม่จบ"  >ยังไม่จบ</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกวันที่อัพเดต :</label>
                        <select name="update_date" id="update_date" value={comic.update_date} onChange={(e) => setComic({ ...comic, update_date: e.target.value })} className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general">เลือกวันที่อัพเดต</option>
                            <option value="จ.">จันทร์</option>
                            <option value="อ.">อังคาร</option>
                            <option value="พ.">พุธ</option>
                            <option value="พฤ.">พฤหัสบดี</option>
                            <option value="ศ.">ศุกร์</option>
                            <option value="ส.">เสาร์</option>
                            <option value="อา.">อาทิตย์</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ยอดเข้ารับชม :</label>
                        <input type="text" value={comic.view} onChange={(e) => setComic({ ...comic, view: e.target.value })} id="view" name="view" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">จำนวนไลก์ :</label>
                        <input type="text" value={comic.comic_like} onChange={(e) => setComic({ ...comic, comic_like: e.target.value })} id="comic_like" name="comic_like" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีพื้นหลัง :</label>
                        <input type="text" value={comic.bg_color} onChange={(e) => setComic({ ...comic, bg_color: e.target.value })} id="bg_color" name="bg_color" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพพื้นหลัง :</label>
                        <input type="text" value={comic.bg_img} onChange={(e) => setComic({ ...comic, bg_img: e.target.value })}  id="bg_img" name="bg_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพตัวละคร :</label>
                        <input type="text" value={comic.character_img} onChange={(e) => setComic({ ...comic, character_img: e.target.value })} id="character_img" name="character_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพชื่อเรื่อง :</label>
                        <input type="text" value={comic.comic_name_img} onChange={(e) => setComic({ ...comic, comic_name_img: e.target.value })} id="comic_name_img" name="comic_name_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ0 :</label>
                        <input type="text" value={comic.blur_bottom_color0} onChange={(e) => setComic({ ...comic, blur_bottom_color0: e.target.value })} id="blur_bottom_color0" name="blur_bottom_color0" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ1 :</label>
                        <input type="text" value={comic.blur_bottom_color1} onChange={(e) => setComic({ ...comic, blur_bottom_color1: e.target.value })} id="blur_bottom_color1" name="blur_bottom_color1" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ2 :</label>
                        <input type="text" value={comic.blur_bottom_color2} onChange={(e) => setComic({ ...comic, blur_bottom_color2: e.target.value })} id="blur_bottom_color2" name="blur_bottom_color2" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ3 :</label>
                        <input type="text" value={comic.blur_bottom_color3} onChange={(e) => setComic({ ...comic, blur_bottom_color3: e.target.value })} id="blur_bottom_color3" name="blur_bottom_color3" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                </div>

                <div className="flex flex-col mb-[12px] ">
                    <label className="ml-1 mb-[12px] text-[18px]">เรื่องย่อ :</label>
                    <textarea
                        required
                        name="synopsis"
                        id="synopsis"
                        rows="16"
                        value={comic.synopsis} onChange={(e) => setComic({ ...comic, synopsis: e.target.value })}
                       className="p-[20px] bg-zinc-950 rounded-md text-[16px] w-full"
                    ></textarea>
                </div>

                <button type="submit" className="w-full p-[20px] bg-green-700  rounded-md text-[20px]" >Update</button>
            </form>
        </section>
    )
}
