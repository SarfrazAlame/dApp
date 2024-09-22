import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import React from 'react'

const RequestAirdropButton = () => {
  const wallet = useWallet()
  const { connection } = useConnection()

  function requestAirDrop() {
    const publicKey = wallet.publicKey?.toBase58()
    const amount = document.getElementById('amount').value
    connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL)
  }
  return (
    <div>
      <input id='amount' type="text" placeholder="Amount in SOL" />
      <button onClick={requestAirDrop}>Request Airdrop</button>
      {wallet.publicKey && <div>Public Key: {wallet.publicKey.toBase58()}</div>}
    </div>
  )
}

export default RequestAirdropButton
