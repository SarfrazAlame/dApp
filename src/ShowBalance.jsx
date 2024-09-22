import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const ShowBalance = () => {
    const wallet = useWallet()
    const { connection } = useConnection()

    async function getMeuserBalance() {
        const balance = await connection.getBalance(wallet.publicKey)
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL
    }

    getMeuserBalance()


    return (
        <div>
            Balance: <span id='balance'></span> SOL
        </div>
    )
}

export default ShowBalance