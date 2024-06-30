import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineVpnLock } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { GrGateway } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { MdFormatListBulletedAdd } from "react-icons/md";

const sellersidebardata = [
  {
    link: "/seller/dashboard",

    label: "Dashboard",
    icon: <MdSpaceDashboard />,
  },

  {
    link: "/seller/categories",

    label: "Categories",
    icon: <MdOutlineVpnLock />,
  },
  {
    link: "/seller/products",

    label: "Products",
    icon: <MdProductionQuantityLimits />,
  },
  {
    link: "/seller/sales",

    label: "Sales",
    icon: <VscGraph />,
  },
  {
    link: "/seller/gateway",

    label: "Gateway",
    icon: <GrGateway />,
  },
  {
    link: "/seller/profile",

    label: "Profile",
    icon: <CgProfile />,
  },
  {
    link: "/seller/addproduct",

    label: "Add Product",
    icon: <MdFormatListBulletedAdd />,
  },
];

export default sellersidebardata;
