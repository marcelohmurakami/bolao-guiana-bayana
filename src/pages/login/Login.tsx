import { useState, type FormEvent } from "react";
import { useNavigate, useLocation } from "react-router";

import {
  LoginPageWrapper,
  LoginContainer,
  BrandingSection,
  BrandingOverlay,
  BrandingContent,
  BrandingBadge,
  BrandingTitle,
  BrandingText,
  BrandingFooter,
  FormSection,
  FormCard,
  FormHeader,
  FormTitle,
  FormSubtitle,
  Form,
  InputGroup,
  Label,
  Input,
  ForgotPassword,
  LoginButton,
  Divider,
  SmallText,
  HighlightText,
  ErrorMessage,
} from "./LoginStyled";
import { useAuth } from "../../contexts/useAuth";

export function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Login ou senha incorreto, seu burro!")
    } 

    setIsPending(true);

    try {
      await signIn({ email, password });
      navigate(from, { replace: true });
    } catch (error) {
      const message =
        error instanceof Error ? "Login ou senha incorreto, seu burro!" : "Não foi possível entrar.";
      setErrorMessage(message);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <LoginPageWrapper>
      <LoginContainer>
        <BrandingSection>
          <BrandingOverlay />
          <BrandingContent>
            <BrandingBadge>⚽ Copa 2026</BrandingBadge>
            <BrandingTitle>
              Entre no bolão e acompanhe cada rodada com estilo.
            </BrandingTitle>
            <BrandingText>
              Faça seus palpites, acompanhe o ranking entre os amigos e veja
              quem realmente entende de futebol.
            </BrandingText>
            <BrandingFooter>
              Ranking em tempo real • Palpites rápidos • Interface moderna
            </BrandingFooter>
          </BrandingContent>
        </BrandingSection>

        <FormSection>
          <FormCard>
            <FormHeader>
              <FormTitle>Entrar</FormTitle>
              <FormSubtitle>
                Acesse sua conta para ver seus palpites e sua posição no ranking.
              </FormSubtitle>
            </FormHeader>

            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isPending}
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isPending}
                />
              </InputGroup>

              <ForgotPassword href="#">Esqueci minha senha</ForgotPassword>

              {errorMessage && (
                <ErrorMessage>
                  {errorMessage}
                </ErrorMessage>
              )}

              <LoginButton type="submit" disabled={isPending}>
                {isPending ? "Entrando..." : "Entrar no bolão"}
              </LoginButton>
            </Form>

            <Divider />

            <SmallText>
              Acesso exclusivo para participantes convidados do{" "}
              <HighlightText>Bolão da Copa 2026</HighlightText>.
            </SmallText>
          </FormCard>
        </FormSection>
      </LoginContainer>
    </LoginPageWrapper>
  );
}