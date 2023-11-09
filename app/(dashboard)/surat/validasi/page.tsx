import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Page = () => {
  return (
    <div className="bg-white rounded-xl pt-[33px] px-[38px] pb-[184px] flex flex-col space-y-[37px]">
      <h1 className="text-3xl font-medium">Daftar Permohonan Surat</h1>
      <div>
        <Button className="bg-primary-main hover:bg-primary-hover active:bg-primary-pressed text-white">Tambah</Button>
      </div>
      <div className="w-full items-center flex justify-between">
        <div className="flex gap-1 items-center">
          <h3>Show</h3>
          <Select>
            <SelectTrigger className="w-[180px] border-black">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem
                  className="focus:bg-primary-focus focus:text-white"
                  value="apple">
                  Apple
                </SelectItem>
                <SelectItem
                  className="focus:bg-primary-focus focus:text-white"
                  value="banana">
                  Banana
                </SelectItem>
                <SelectItem
                  className="focus:bg-primary-focus focus:text-white"
                  value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem
                  className="focus:bg-primary-focus focus:text-white"
                  value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem
                  className="focus:bg-primary-focus focus:text-white"
                  value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <h3>entries</h3>
        </div>
        <div className="flex items-center gap-1">
          <h3>Search:</h3>
          <Input
            type="text"
            className="border-black"
          />
        </div>
      </div>
      <div>
        <Table>
          <TableHeader className="bg-primary-surface text-neutral-80">
            <TableRow className="hover:bg-primary-surface">
              <TableHead className="w-[58px]">No</TableHead>
              <TableHead>Tanggal Pengajuan</TableHead>
              <TableHead>Tanggal Perlu</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Jenis Surat</TableHead>
              <TableHead className="w-[80px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-white">
              <TableCell>1</TableCell>
              <TableCell>06 September 2023</TableCell>
              <TableCell>10 September 2023</TableCell>
              <TableCell>Amanda Riska</TableCell>
              <TableCell>Surat Pengantar Domisili</TableCell>
              <TableCell>
                <Image
                  src="/icons/Edit.svg"
                  alt="Edit"
                  width={23}
                  height={23}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between w-full items-center">
        <div>
          <p className="text-base">Show 1 to 3 of 3 entries</p>
        </div>
        <div className="flex gap-1 items-center">
          <p>Previous</p>
          <Input
            type="number"
            className="w-12 h-10 border-black"
            value={1}
          />
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
