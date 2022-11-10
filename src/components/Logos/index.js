import JsIcon from "./JsIcon"
import NextIcon from "./NextIcon"
import ReactIcon from "./ReactIcon"
import TsIcon from "./TsIcon"

const getLogoImg = (props) => {
  const params = { ...props }
  delete params.lang
  const logos = {
    "JavaScript": () => <JsIcon {...params} />,
    "TypeScript": () => <TsIcon {...params} />,
    "React": () => <ReactIcon {...params} />,
    "NextJS": () => <NextIcon {...params} />,
  }

  return logos[props.lang]
}

export default function Logos(props) {
  const Logo = getLogoImg({ ...props })
  return <Logo />
}