import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Flex,
  Button
} from "@once-ui-system/core";
import { baseURL } from "@/resources"; // Mantendo seu import base
// Se não tiver um TOC específico para termos, pode remover este import ou adaptar
import TableOfContents from "@/components/about/TableOfContents"; 
import styles from "@/components/about/about.module.scss"; // Usando seus estilos existentes
import React from "react";

// --- DADOS DO DOCUMENTO ---
const legalContent = {
  title: "Termos de Uso e Política de Privacidade",
  description: "Termos legais e política de privacidade do Cibus.",
  lastUpdated: "29 de Janeiro de 2026",
  path: "/termos",
  admin: "Cibus App",
  contactEmail: "suporte@cibus.app", // Substitua pelo seu real
  sections: [
    {
      title: "Parte I: Termos de Uso",
      id: "termos-de-uso",
      content: [
        {
          subtitle: "1. O Serviço",
          text: [
            "1.1. O Cibus é um assistente virtual baseado em Inteligência Artificial (IA) que opera via WhatsApp, projetado para analisar fotos de refeições e estimar informações nutricionais (calorias e macronutrientes).",
            "1.2. O serviço é oferecido em modalidade \"Freemium\", com funcionalidades gratuitas limitadas e funcionalidades exclusivas para assinantes (\"Premium\")."
          ]
        },
        {
          subtitle: "2. Isenção de Responsabilidade Médica",
          text: [
            "2.1. O Cibus NÃO é um profissional de saúde. As informações fornecidas pela nossa IA são apenas para fins informativos e educacionais.",
            "2.2. Margem de Erro da IA: A tecnologia de visão computacional (IA) pode cometer erros na identificação de alimentos ou no cálculo de porções. As estimativas nutricionais não devem ser utilizadas para tratamentos médicos, controle rigoroso de doenças (como diabetes) ou substituição de orientação profissional.",
            "2.3. Você concorda que o uso das informações fornecidas pelo Cibus é de sua inteira responsabilidade. Recomendamos consultar um médico ou nutricionista antes de iniciar qualquer dieta."
          ]
        },
        {
          subtitle: "3. Planos e Pagamentos",
          text: [
            "3.1. Plano Gratuito: Permite um número limitado de análises por dia.",
            "3.2. Plano Premium: Oferece análises ilimitadas, relatórios detalhados e histórico, mediante assinatura mensal de R$ 8,99.",
            "3.3. Pagamento: Os pagamentos são processados de forma segura pela plataforma Stripe. O Cibus não armazena dados completos do seu cartão de crédito.",
            "3.4. Renovação: A assinatura é renovada automaticamente a cada 30 dias, a menos que seja cancelada.",
            "3.5. Cancelamento: Você pode cancelar a renovação a qualquer momento enviando a palavra \"Menu\" no WhatsApp e selecionando a opção de assinatura. Não oferecemos reembolso por períodos parcialmente utilizados, salvo exigência legal."
          ]
        },
        {
          subtitle: "4. Uso Aceitável",
          text: [
            "4.1. Você concorda em não utilizar o Cibus para enviar conteúdo ilegal, ofensivo, pornográfico ou que viole direitos de terceiros.",
            "4.2. É proibido tentar engenharia reversa, ataques de sobrecarga ou uso automatizado (bots) contra nossa infraestrutura."
          ]
        },
        {
          subtitle: "5. Propriedade Intelectual",
          text: [
            "Todo o software, marca, logotipos e códigos do Cibus são de propriedade exclusiva dos desenvolvedores. Você recebe uma licença limitada, não exclusiva e revogável para uso pessoal do serviço."
          ]
        }
      ]
    },
    {
      title: "Parte II: Política de Privacidade",
      id: "politica-privacidade",
      content: [
        {
          subtitle: "1. Dados Coletados",
          text: [
            "Para fornecer o serviço, coletamos e processamos os seguintes dados:",
            "• Dados de Identificação: Seu número de telefone (WhatsApp) e nome de perfil público.",
            "• Dados de Saúde (Sensíveis): Suas metas calóricas, fotos das suas refeições e o histórico nutricional gerado.",
            "• Dados Financeiros: Histórico de pagamentos e status da assinatura (processados via Stripe).",
            "• Logs Técnicos: Registros de interação com o sistema para fins de segurança e correção de bugs."
          ]
        },
        {
          subtitle: "2. Finalidade do Tratamento",
          text: [
            "Utilizamos seus dados para processar as imagens e fornecer a análise nutricional (via Google Gemini AI), gerenciar sua conta, gerar relatórios e enviar comunicações importantes."
          ]
        },
        {
          subtitle: "3. Compartilhamento de Dados",
          text: [
            "Não vendemos seus dados. Compartilhamos informações apenas com parceiros essenciais: Google Cloud & AI (processamento), Stripe (pagamentos), Meta/WhatsApp (mensageria) e obrigações legais."
          ]
        },
        {
          subtitle: "4. Armazenamento e Segurança",
          text: [
            "Seus dados são armazenados em servidores seguros na nuvem (Google Cloud Platform) com criptografia. Manteremos seus dados enquanto você for usuário ativo ou até solicitação de exclusão."
          ]
        },
        {
          subtitle: "5. Seus Direitos (LGPD)",
          text: [
            "Você tem direito a confirmar, acessar, corrigir e excluir seus dados, bem como revogar o consentimento. Para exercer esses direitos, entre em contato através do suporte."
          ]
        }
      ]
    }
  ]
};

export async function generateMetadata() {
  return Meta.generate({
    title: legalContent.title,
    description: legalContent.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(legalContent.title)}`,
    path: legalContent.path,
  });
}

export default function Termos() {
  // Estrutura para o TableOfContents (TOC)
  const structure = legalContent.sections.map(section => ({
    title: section.title,
    display: true,
    items: section.content.map(c => c.subtitle)
  }));

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={legalContent.title}
        description={legalContent.description}
        path={legalContent.path}
        image={`/api/og/generate?title=${encodeURIComponent(legalContent.title)}`}
        author={{
          name: legalContent.admin,
          url: baseURL,
        }}
      />
      
      {/* Table of Contents Lateral */}
      <Column
        left="0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        position="fixed"
        paddingLeft="24"
        gap="32"
        s={{ hide: true }}
      >
        <TableOfContents structure={structure} about={{ title: "Legal" }} />
      </Column>

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {/* Espaço reservado para manter alinhamento central se não tiver avatar */}
        <Column flex={3} s={{ hide: true }} />

        <Column className={styles.blockAlign} flex={9} maxWidth={60}>
          
          {/* Cabeçalho */}
          <Column
            id="header"
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {legalContent.title}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              Última atualização: {legalContent.lastUpdated}
            </Text>
          </Column>

          {/* Conteúdo Legal */}
          <Column textVariant="body-default-l" fillWidth gap="xl" marginBottom="xl">
            
            {legalContent.sections.map((section, sectionIndex) => (
              <Column key={sectionIndex} fillWidth gap="l" id={section.title}>
                 {/* Título da Seção (Parte I / Parte II) */}
                <Heading 
                  as="h2" 
                  variant="display-strong-s" 
                  marginBottom="m" 
                  className={styles.textAlign}
                  style={{ borderBottom: '1px solid var(--neutral-border-medium)', paddingBottom: '16px' }}
                >
                  {section.title}
                </Heading>

                {/* Sub-itens (1. O Serviço, etc) */}
                {section.content.map((item, itemIndex) => (
                   <Column key={itemIndex} fillWidth gap="s" marginBottom="m">
                      <Text 
                        id={item.subtitle} 
                        variant="heading-strong-l"
                        className={styles.textAlign}
                      >
                        {item.subtitle}
                      </Text>
                      
                      <Column gap="8">
                        {item.text.map((paragraph, pIndex) => (
                          <Text 
                            key={pIndex} 
                            variant="body-default-m" 
                            onBackground="neutral-weak"
                            className={styles.textAlign}
                          >
                            {paragraph}
                          </Text>
                        ))}
                      </Column>
                   </Column>
                ))}
              </Column>
            ))}

            {/* Rodapé de Contato */}
            <Column 
                fillWidth 
                paddingTop="xl" 
                marginTop="xl" 
                borderTop="neutral-medium" 
                gap="m"
                horizontal="center"
            >
                <Text variant="heading-strong-s">Dúvidas?</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Entre em contato através do e-mail:
                </Text>
                <Button
                    href={`mailto:${legalContent.contactEmail}`}
                    label={legalContent.contactEmail}
                    variant="secondary"
                    size="s"
                />
            </Column>

          </Column>
        </Column>
      </Row>
    </Column>
  );
}