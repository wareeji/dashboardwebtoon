'use client'
export default function AddComicPage() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            "comic_name": event.target.comic_name.value,
            "story_by": event.target.story_by.value,
            "pictures_by": event.target.pictures_by.value,
            "original_by": event.target.original_by.value,
            "share_by": event.target.share_by.value,
            "synopsis": event.target.synopsis.value,
            "comic_status": event.target.comic_status.value,
            "update_date": event.target.update_date.value,
            "view": event.target.view.value,
            "comic_like": event.target.comic_like.value,
            "bg_color": event.target.bg_color.value,
            "bg_img": event.target.bg_img.value,
            "character_img": event.target.character_img.value,
            "comic_name_img": event.target.comic_name_img.value,
            "blur_bottom_color0": event.target.blur_bottom_color0.value,
            "blur_bottom_color1": event.target.blur_bottom_color1.value,
            "blur_bottom_color2": event.target.blur_bottom_color2.value,
            "blur_bottom_color3": event.target.blur_bottom_color3.value,
            "genre_id": event.target.genre_id.value
        }
        console.log(data)
        console.log(JSON.stringify(data))
        fetch('https://backend-api-crud.vercel.app/comics/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                console.log('Response status:', res.status);
                if (res.ok) {
                    return res.json().then(data => {
                        alert('เพิ่มการ์ตูนสำเร็จ!');
                        console.log('Response data:', data);
                        window.location.href = '/'
                    }).catch(err => {
                        // Handle JSON parsing error
                        console.error('Error parsing JSON:', err);
                        alert('added, but no data returned!');
                    });
                } else {
                    return res.text().then(text => {
                        throw new Error('Server responded with error: ' +
                            text);
                    });
                }
            })
    }


    return (
        <div className="bg-[#222121] p-[20px] rounded-[10px]">
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 ">
                <div className="grid grid-cols-2 w-full justify-between gap-6 ">
                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ชื่อการ์ตูน :</label>
                        <input type="text" placeholder="ex. ฉันขอเกรด A" id="comic_name" name="comic_name" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เรื่องจาก :</label>
                        <input type="text" placeholder="ex. abc studio" id="story_by" name="story_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">รูปภาพจาก :</label>
                        <input type="text" placeholder="ex. abc studio" id="pictures_by" name="pictures_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ต้นฉบับจาก :</label>
                        <input type="text" placeholder="ex. abc studio" id="original_by" name="original_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เผยแพร่จาก :</label>
                        <input type="text" placeholder="ex. abc studio" id="share_by" name="share_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกหมวดหมู่ :</label>
                        <select name="genre_id" id="genre_id " className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
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
                        <select name="comic_status" id="comistatus" className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general" >เลือกสถานะ</option>
                            <option value="จบ"      >จบ</option>
                            <option value="ยังไม่จบ"  >ยังไม่จบ</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกวันที่อัพเดต :</label>
                        <select name="update_date" id="update_date" className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
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
                        <input type="text" placeholder="ex. 1.2M" id="view" name="view" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">จำนวนไลก์ :</label>
                        <input type="text" placeholder="ex. 1.2M" id="comic_like" name="comic_like" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีพื้นหลัง :</label>
                        <input type="text" placeholder="ex. #ffff" id="bg_color" name="bg_color" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพพื้นหลัง :</label>
                        <input type="text" placeholder="ex. https://th-a.kakaopagecdn.com/.." id="bg_img" name="bg_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพตัวละคร :</label>
                        <input type="text" placeholder="ex. https://th-a.kakaopagecdn.com/.." id="character_img" name="character_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพชื่อเรื่อง :</label>
                        <input type="text" placeholder="ex. https://th-a.kakaopagecdn.com/.." id="comic_name_img" name="comic_name_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ0 :</label>
                        <input type="text" placeholder="ex. #ffff" id="blur_bottom_color0" name="blur_bottom_color0" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ1 :</label>
                        <input type="text" placeholder="ex. #ffff" id="blur_bottom_color1" name="blur_bottom_color1" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ2 :</label>
                        <input type="text" placeholder="ex. #ffff" id="blur_bottom_color2" name="blur_bottom_color2" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ3 :</label>
                        <input type="text" placeholder="ex. #ffff" id="blur_bottom_color3" name="blur_bottom_color3" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                </div>

                <div className="flex flex-col mb-[12px] ">
                    <label className="ml-1 mb-[12px] text-[18px]">เรื่องย่อ :</label>
                    <textarea
                        required
                        name="synopsis"
                        id="synopsis"
                        rows="16"
                        placeholder="วันนึงฉันเดินเข้าป่า ...."
                        className="p-[20px] bg-zinc-950 rounded-md text-[16px] w-full"
                    ></textarea>
                </div>

                <button type="submit" className="w-full p-[20px] bg-green-700  rounded-md text-[20px]" >Submit</button>
            </form>
        </div>
    )
}

