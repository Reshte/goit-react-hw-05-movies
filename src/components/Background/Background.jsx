import ParticlesBg from 'particles-bg';
import {Wrapper} from "./Background.styled"

export function Background() {
  return (
    <Wrapper>
      <ParticlesBg type="circle" bg={true} />
    </Wrapper>
  );
}