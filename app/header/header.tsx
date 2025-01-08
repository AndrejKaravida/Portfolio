import { Menu, MenuProps } from "antd";
import { useState } from "react";
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const [current, setCurrent] = useState<string>("");

  const items: MenuProps["items"] = [
    {
      label: "Home",
      key: "",
    },
    // {
    //   label: "Skills",
    //   key: "skills",
    // },
    // {
    //   label: "Projects",
    //   key: "projects",
    // },
    // {
    //   label: "Contact",
    //   key: "contact",
    // },
  ];

  const menuItemClickHandler = (e: any) => {
    setCurrent(e.key);
    void router.push(e.key);
  };

  return (
    <Menu
      className={styles.header}
      onClick={menuItemClickHandler}
      mode="horizontal"
      items={items}
      selectedKeys={[current]}
    ></Menu>
  );
}
