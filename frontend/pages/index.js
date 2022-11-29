import { useWallet } from '@solana/wallet-adapter-react'
import MainView from '../components/mainview'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function Home() {
  const { connected } = useWallet()

  return (
    <div className='app'>
      {connected ? (
        <MainView />
      ) : (
        <div className='loginContainer'>
          <div className='loginTitle'>Log in to Social</div>
          <div className='loginSubTitle'>
            Hello your account, check notifications, comment on videos, and
            more
          </div>
          <WalletMultiButton />
        </div>
      )}
    </div>
  )
}
raise spider vault slight enemy drip field core catalog hungry horror state