export const sidebarMenu = [
  {
    category: "Home",
    subMenu: [
      {
        name: "Dashboard",
        icon: "/icons/Square.svg",
        link: "/",
      },
    ],
  },
  {
    category: "Data Master",
    subMenu: [
      {
        name: "Data Kepengurusan",
        icon: "/icons/Home.svg",
        link: "/data/kepengurusan",
      },
      {
        name: "Data Warga",
        icon: "/icons/Users.svg",
        link: "/data/warga",
      },
      {
        name: "Data Surat",
        icon: "/icons/DocumentList.svg",
        link: "/data/surat",
      },
    ],
  },
  {
    category: "Surat",
    subMenu: [
      {
        name: "Validasi Permohonan Surat",
        icon: "icons/DocumentCheck.svg",
        link: "/surat/validasi",
      },
      {
        name: "Riwayat Permohonan Surat",
        icon: "icons/Clock.svg",
        link: "/surat/riwayat",
      },
    ],
  },
  {
    category: "Pembayaran",
    subMenu: [
      {
        name: "Daftar Iuran",
        icon: "/icons/CircleStack.svg",
        link: "/pembayaran/iuran",
      },
    ],
  },
  {
    category: "Laporan Keuangan",
    subMenu: [
      {
        name: "Rekapitulasi Keuangan",
        icon: "/icons/ChartBar.svg",
        link: "/keuangan/rekapitulasi",
      },
      {
        name: "Pengeluaran",
        icon: "/icons/RectangleLeft.svg",
        link: "/keuangan/laporan",
      },
    ],
  },
  {
    category: "Inventaris",
    subMenu: [
      {
        name: "Data Inventaris",
        icon: "/icons/ArchiveBox.svg",
        link: "/inventaris/data",
      },
    ],
  },
];
