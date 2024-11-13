import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, FazerLogin, Row, Wrapper, TermoUso } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
       alert('Conta criada!!')
       navigate('/login')
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="name" control={control} />
                        {errors.name && <span>Nome é obrigatório</span>}
                        <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <TermoUso>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermoUso>
                    </Row>
                    <Row>
                        <FazerLogin><span>Já tenho conta.</span> Fazer Login</FazerLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }