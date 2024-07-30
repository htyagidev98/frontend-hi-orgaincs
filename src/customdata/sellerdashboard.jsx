import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineVpnLock } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import { FaJediOrder } from "react-icons/fa6";

const sellersidebardata = [
  {
    link: "/seller/dashboard",

    label: "Dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    link: "/seller/orders",

    label: "Orders",
    icon: <FaJediOrder />,
  },
  {
    link: "/seller/products",

    label: "Products",
    icon: <MdProductionQuantityLimits />,
  },

  {
    link: "/seller/add/products",

    label: "Add Products",
    icon: <MdProductionQuantityLimits />,
  },

  {
    link: "/seller/categories",

    label: "Categories",
    icon: <MdOutlineVpnLock />,
  },
  {
    link: "/seller/earnings",

    label: "Earnings",
    icon: <IoBarChartSharp />,
  },

  {
    link: "/seller/sales",

    label: "Sales",
    icon: <VscGraph />,
  },

  {
    link: "/seller/account",

    label: "My Account",
    icon: <CgProfile />,
  },
  {
    link: "/seller/helpcenter",
    label: "Help Center",
    icon: <MdFormatListBulletedAdd />,
  },
];

export default sellersidebardata;
