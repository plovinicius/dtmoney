import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transacao
        </button>
      </Content>
    </Container>
  );
}
