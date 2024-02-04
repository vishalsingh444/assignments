import { useContext, useState } from "react"
import { CountContext } from "./context";
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState} from "recoil";
import { countAtom, evenSelector } from './store/atoms/count'

function App2() {
  
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer  />
    <Buttons  />
    <EvenCountRenderer/>
  </div>
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "It is even": null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App2