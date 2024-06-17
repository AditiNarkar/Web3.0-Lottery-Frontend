import { ConnectButton } from "@web3uikit/web3";

export default function UIKit_Header() {
    return(
        <div style={{ paddingLeft: '20%'}}>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}