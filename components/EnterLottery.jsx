import { useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants/index"
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useNotification } from "@web3uikit/core";

export default function EnterLottery() {
    const { chainId: chainIdHex, isWeb3Enabled, enableWeb3 } = useMoralis(); // gets it from header // HEX Value
    const chainID = parseInt(chainIdHex)
    console.log(`chainid: ${chainID}`)

    const lotteryAddress = chainID in contractAddresses ? (contractAddresses[chainID][0]) : null;

    const [entranceFee, setEntranceFee] = useState("0");
    const [numPlayers, setNumPlayers] = useState("0");
    const [winner, setWinner] = useState("0");


    const dispatch = useNotification()


    //functions in contract 

    const {  runContractFunction: enterLottery, isLoading, isFetching } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, // specify chainID
        functionName: "enterLottery",
        params: {},
        msgValue: entranceFee,
    });

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, // specify chainID
        functionName: "getEntranceFee",
        params: {}
    });

    const { runContractFunction: getPlayerCount } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, // specify chainID
        functionName: "getPlayerCount",
        params: {}
    });

    const { runContractFunction: getWinner } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress, // specify chainID
        functionName: "getWinner",
        params: {}
    });


    async function updateUI() {
        const fee = (await getEntranceFee()).toString()
        const num = (await getPlayerCount()).toString()
        const win = (await getWinner()).toString()

        setEntranceFee(fee)
        setNumPlayers(num)
        setWinner(win)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])


    const handleSuccess = async (tx) => {
        await tx.wait(1)
        handleNewNotification(tx) // override function
        updateUI()
    }

    const handleNewNotification = () => {
        dispatch({
            type: "success",
            message: 'Transaction Complete',
            title: 'New TX Notification',
            // icon: "bell",
            position: 'topR',
        })
    }


    return (
        <div style={{ margin:"1% 6%"}}>
        { lotteryAddress ? (
            <>
                <button onClick = { async function () {
                    await enterLottery({
                        onSuccess: handleSuccess, 
                        onError: (err)=> console.log(err)
                })}}
                style={{ cursor:"pointer", borderColor:"#1799a9", backgroundColor:"#baeff6", color:'#1799a9', fontSize:"16px", padding: '10px', margin: '20px 0', borderRadius: '5px'}}
                disabled={isFetching || isLoading}
                >
                        Enter Lottery
                    </button>
                <div style={{ padding: "10px" }}> Entrance Fee: { ethers.utils.formatUnits(entranceFee, 'ether') } ETH </div >
                <div style={{ padding: "10px" }}> Number of Players: { numPlayers } </div >
                <div style={{ padding: "10px" }}> Winner: { winner } </div >

            </>
            ): (
                <div> No Address detected. </div>
            )
        }
        </div>
    )
}