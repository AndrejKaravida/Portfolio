"use client";

import "./globals.scss";
import Header from "@/app/header/header";
import Footer from "@/app/footer/footer";
import { Layout } from "antd";
import MyParticles from "@/app/particles/particles";
import styles from "./layout.module.css";
const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head title={"Andrej Karavida"} />
      <body>
        <div className={styles.container}>
          <Layout className={styles.layout}>
            <MyParticles />
            <Header />
            <Content className={styles.content}>{children}</Content>
            <Footer />
          </Layout>
        </div>
      </body>
    </html>
  );
}
