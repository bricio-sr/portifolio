import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Accordion,
  Flex,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

const SectionSeparator = () => (
  <Row fillWidth horizontal="center" vertical="center" marginY="32">
    <Line fillWidth height="1" background="neutral-weak" />
    <Flex paddingX="16">
      <Icon name="sparkle" size="s" onBackground="neutral-medium" />
    </Flex>
    <Line fillWidth height="1" background="neutral-weak" />
  </Row>
);

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.certs.title,
      display: about.certs.display,
      items: about.certs.categories.map((institution) => institution.title),
    },
    {
      title: about.projects.title,
      display: about.projects.display,
      items: about.projects.items.map((project) => project.title),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {/* COLUNA ESQUERDA - AVATAR */}
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Flex radius="full" overflow="hidden">
              <img
                src={person.avatar}
                alt={person.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Flex>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}

            <a 
              href={`mailto:${person.email}`}
              style={{ textDecoration: 'none', cursor: 'pointer', display: 'block' }}
            >
              <Row gap="8" vertical="center">
                <Icon name="email" onBackground="accent-weak" />
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {person.email}
                </Text>
              </Row>
            </a>

            <Button
              href="/curriculo.pdf" 
              label="Download CV"
              prefixIcon="download"
              variant="secondary"
              size="m"
            />
            
            <Row 
              padding="8" 
              radius="m" 
              background="surface" 
              border="neutral-medium"
              vertical="center"
              gap="8"
            >
              <div 
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#92b610',
                  boxShadow: '0 0 8px rgba(209, 250, 26, 0.69)' 
                }} 
              />
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Focado em Projetos 
              </Text>
            </Row>
          </Column>
        )}

        {/* COLUNA DIREITA - CONTEÚDO */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          
          {/* HEADER (NOME + SOCIAL) - Centralizado no Mobile */}
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
            className={styles.mobileCenteredHeader}
          >
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>

            {social.length > 0 && (
              <Row
                className={styles.socialCentered}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center" // Centraliza no desktop por padrão se tiver fitWidth
                fitWidth
                data-border="rounded"
              >
                {social
                  .filter((item) => item.essential)
                  .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
              </Row>
            )}
          </Column>

          {/* INTRO + TERMINAL */}
          {about.intro.display && (
            <Column fillWidth gap="m" marginBottom="m" className={styles.textAlign}>
              
              {/* Terminal Mode Corrigido */}
              <Row 
                className={styles.terminalBox}
                padding="16" 
                radius="m" 
                marginBottom="m"
                vertical="center"
              >
                {/* Usando div e Text variant para melhor controle do CSS */}
                <div className={styles.terminalTextContent}>
                  <Text variant="code-default-m" onBackground="neutral-medium">
                    <span style={{color: '#22c55e', marginRight: '8px'}}>➜</span>
                    <span style={{color: '#3b82f6', marginRight: '12px'}}>~</span> 
                    
                    <span className={styles.typewriterContainer}>
                      <span className={styles.typewriterText}>
                        fabricio 
                        <span style={{color: '#a3a3a3'}}> --role</span> sre 
                        <span style={{color: '#a3a3a3'}}> --status</span> <span style={{color: '#facc15'}}>"building what is up"</span>
                      </span>
                    </span>
                  </Text>
                </div>
              </Row>

              <Text variant="body-default-l">
                {about.intro.description}
              </Text>
            </Column>
          )}

          {/* SEÇÕES DE CONTEÚDO */}
          {about.work.display && <SectionSeparator />}
          
          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="s" className={styles.textAlign}>
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="m">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row horizontal="between" vertical="center" marginY="l">
                      <Column horizontal="start" vertical="start">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="body-default-l" onBackground="brand-weak" marginBottom="m">
                          {experience.role}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                          style={{ marginTop: -10 }}
                        >
                          {experience.timeframe}
                        </Text>
                      </Column>
                    </Row>
                    <Column gap="16">
                      {experience.achievements.map((achievement: any, index: number) => (
                        <Text key={index} variant="body-default-m" className={styles.textAlign}>
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && <SectionSeparator />}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="l" className={styles.textAlign}>
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="m" className={styles.textAlign}>
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.certs?.display && <SectionSeparator />}

          {about.certs?.display && (
            <>
              <Heading as="h2" id={about.certs.title} variant="display-strong-s" marginBottom="m" className={styles.textAlign}>
                {about.certs.title}
              </Heading>
              <Column fillWidth gap="4" marginBottom="m" >
                {about.certs.categories.map((category, index) => (
                  <Accordion key={index} title={category.title} style={{ marginLeft: -15 }}>
                    <Column as="ul" gap="8" paddingBottom="m">
                      {category.items.map((item, i) => (
                        <Text as="li" key={i} variant="body-default-m" onBackground="neutral-weak">
                          {item.name}
                        </Text>
                      ))}
                    </Column>
                  </Accordion>
                ))}
              </Column>
            </>
          )}

          {about.projects.display && <SectionSeparator />}

          {about.projects.display && (
            <>
              <Heading 
                as="h2" 
                id={about.projects.title} 
                variant="display-strong-s" 
                marginBottom="m" 
                className={styles.textAlign}
              >
                {about.projects.title}
              </Heading>

              <Column fillWidth gap="l" marginBottom="m">
                {about.projects.items.map((project: any, index: number) => (
                  <Column 
                    key={`${project.title}-${index}`}
                    className={styles.projectCard}
                    fillWidth 
                    border="neutral-medium" 
                    radius="l" 
                    padding="l"
                    background="neutral-weak" 
                  >
                    <Row horizontal="between" vertical="center" marginBottom="m">
                      <Text id={project.title} variant="heading-strong-xl">
                        {project.title}
                      </Text>

                      {project.link && (
                        <IconButton
                          href={project.link}
                          icon="globe"
                          size="l"
                          variant="secondary"
                          tooltip="Acessar Projeto Oficial"
                        />
                      )}
                    </Row>

                    <Text 
                      variant="body-default-l" 
                      onBackground="neutral-medium" 
                      marginBottom="l"
                      className={styles.textAlign}
                    >
                      {project.description}
                    </Text>

                    {project.comingSoon && (
                      <div className={styles.policeTapeBanner}>
                        <span>EM DESENVOLVIMENTO</span>
                      </div>
                    )}

                    {project.image && (
                      <Row fillWidth marginBottom="l" paddingTop={project.comingSoon ? '0' : 'm'}>
                        <img
                          src={project.image.src}
                          alt={project.image.alt}
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            objectFit: 'cover',
                            border: '2px solid var(--neutral-medium)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }}
                        />
                      </Row>
                    )}

                    {project.techStack && project.techStack.length > 0 && (
                      <Row wrap gap="12" vertical="center">
                        {project.techStack.map((tech: string, techIndex: number) => (
                          <Tag key={`${project.title}-${techIndex}`} size="l" variant="neutral">
                            {tech}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && <SectionSeparator />}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
                className={styles.textAlign}
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" className={styles.textAlign}>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="m">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          <SectionSeparator />

          {/* RODAPÉ CALL TO ACTION */}
          <Column 
            fillWidth 
            paddingY="xl" 
            paddingX="l" 
            marginY="xl"
            radius="l"
            background="surface"
            border="neutral-medium"
            horizontal="center"
            gap="l"
            style={{ textAlign: 'center' }}
          >
            <Column horizontal="center" gap="4">
              <Heading variant="display-strong-s">
                Tem um desafio complexo?
              </Heading>
              <Text 
                variant="body-default-m" 
                onBackground="neutral-medium" 
                align="center" 
                style={{ maxWidth: '32rem' }}
              >
                  Estou sempre em busca de problemas difíceis que exijam arquitetura robusta e observabilidade.
              </Text>
            </Column>
            
            <Button
              href={`mailto:${person.email}`}
              label="Vamos tomar um café virtual"
              prefixIcon="email"
              variant="primary"
              size="l"
            />
          </Column>

        </Column> 
      </Row> 
    </Column>
  );
}