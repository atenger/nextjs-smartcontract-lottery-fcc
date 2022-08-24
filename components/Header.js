import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-bold">Web3 Lottery</h1>
            <h3 className="py-4 px-4 ">A simple raffle, built using decentralized technology.</h3>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}></ConnectButton>
            </div>
        </div>
    )
}
