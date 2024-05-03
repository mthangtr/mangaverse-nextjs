import Link from "next/link";
import { Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ViewChapter() {
  return (
    <div className="mt-4">
      <div className="bg-zinc-100">
        <div className="p-2">
          <header className="flex items-center pt-2">
            <Link href={`/`} className="pr-2 text-sm font-medium">
              Home
            </Link>
            {" / "}
            <Link href={`/`} className="px-2 text-sm font-medium">
              One Punch Man
            </Link>{" "}
            {" / "}
            <Link href={`/`} className="px-2 text-sm font-medium">
              Chapter 321
            </Link>
          </header>
          <div className="flex item-center pt-2">
            <p>One Punch Man - Chapter 321 (Updated at 01:06 02/05/2024)</p>
          </div>
          <div className="pt-2">
            <a className="text-xs flex justify-center">
              Nếu không xem được truyện vui lòng đổi "SERVER HÌNH" bên dưới
            </a>
            <div className="flex justify-center pt-2">
              <Button variant="contained" size="small" color="success">
                Server 1
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 2
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 3
              </Button>
              <Button variant="contained" size="small" color="success">
                Server 4
              </Button>
            </div>
          </div>
          <div className="bg-slate-200 p-2 mt-2 rounded-md flex justify-center">
            <p> Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</p>
          </div>
          <div className="flex justify-between mt-4">
            <FormControl variant="outlined" className="min-w-40">
              <InputLabel id="chapter-select-label">Chapter</InputLabel>
              <Select
                labelId="chapter-select-label"
                id="chapter-select"
                label="Chapter"
                defaultValue="Chapter 321"
              >
                <MenuItem value="Chapter 320">Chapter 320</MenuItem>
                <MenuItem value="Chapter 321">Chapter 321</MenuItem>
                <MenuItem value="Chapter 322">Chapter 322</MenuItem>
                <MenuItem value="Chapter 323">Chapter 323</MenuItem>
                <MenuItem value="Chapter 324">Chapter 324</MenuItem>
              </Select>
            </FormControl>
            <div className="flex justify-center pt-2">
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
              >
                <ArrowBackIos />
              </Button>
              <Button
                variant="outlined"
                className="text-black border-black mx-1 hover:border-black"
              >
                <ArrowForwardIos />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
