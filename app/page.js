'use client'

import Image from "next/image";
import styles from "./page.module.css";
import UIKit_Header from "@/components/UIKit_Header";
import EnterLottery from "@/components/EnterLottery";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <div style={{ height: '100vh', top: '0px' }}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <h1 style={{ margin: '20px', color: '#1799a9', paddingLeft: '5%'}}>Web 3.0 Lottery</h1>
            <UIKit_Header />
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <EnterLottery />
        </div>
      </NotificationProvider>
    </MoralisProvider>
  );
}
